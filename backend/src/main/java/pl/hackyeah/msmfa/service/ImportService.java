package pl.hackyeah.msmfa.service;

import java.io.File;
import java.io.FileInputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import pl.hackyeah.msmfa.financialEntity.FinancialEntity;
import pl.hackyeah.msmfa.financialEntity.FinancialEntityRepository;
import pl.hackyeah.msmfa.socialPost.FlagReason;
import pl.hackyeah.msmfa.socialPost.SocialPostEntity;
import pl.hackyeah.msmfa.socialPost.SocialPostRepository;

@Service
public class ImportService {

	@Value("${import.dir}")
	private String importDir;
	
	
	@Autowired
	private FileService fileService;
	
	@Autowired
	private SocialPostRepository socialPostRepository;

	@Autowired
	private FinancialEntityRepository financialEntityRepository;

	@Autowired
	private LogoService logoService;
	
	@Autowired
	private TextClassificationService textClassificationService;
	
	private final String[] randomEntities = new String [] {
			"Powszechny Zakład Ubezpieczeń",
			"PKO Bank Polski",
			"mbank",
			"Santander",
			"Citi Handlowy",
			"Millennium"
	};
	
	@PostConstruct
	@Transactional
	public void importFiles() {
		
		File dir = new File(importDir);
		dir.mkdir();

		Random random = new Random();
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");

		for(File f : dir.listFiles()) {
			if (!f.getName().toLowerCase().endsWith(".png"))
				continue;
			
			try
			{
				String s = randomEntities[random.nextInt(randomEntities.length)];
				Optional<FinancialEntity> entity = findByName(s);
				if (entity.isEmpty()) {
					System.err.println("Entity not found: " + s);
				}
				FileInputStream is = new FileInputStream(f);
				Set<String> logos = logoService.detectLogo(is);
				is.close();
				
				FileInputStream is2 = new FileInputStream(f);
				String ocr = logoService.ocr(is2);
				is2.close();
			
				SocialPostEntity post = new SocialPostEntity();
				post.setFinancialEntity(entity.get());
				post.setAutoVerification(false);
				
				Set<FinancialEntity> logoEntities = new HashSet<>();
				for(String logo : logos) {
					
					Optional<FinancialEntity> e = findByName(logo); 
							
					if (e.isPresent()) {
						logoEntities.add(e.get());
					}
					else {
						System.err.println(logo);
					}
				}
				logoEntities.remove(entity.get());
				post.setLogos(logoEntities);
				Calendar cal = Calendar.getInstance();
				cal.add(Calendar.DAY_OF_MONTH, -1 * random.nextInt(30) );
				post.setPostCreatedDate(df.format(cal.getTime()));
				post.setOcr(ocr);
				Set<FlagReason> reasons = new HashSet<>();
				if (! logos.isEmpty());
					reasons.add(FlagReason.LOGOS);
				post.setReasons(reasons );
				if (textClassificationService.isScam(ocr))
					reasons.add(FlagReason.KEYWORDS);
				
				SocialPostEntity saved = socialPostRepository.save(post);
			
				FileInputStream is3 = new FileInputStream(f);
				fileService.saveImage(saved.getId(), is3);
				is3.close();
			
				File newFile = new File(f.getAbsolutePath()+".bak"); 
				f.renameTo(newFile);
			}
			catch (Exception e) {
				e.printStackTrace();
				f.renameTo(new File(f.getAbsolutePath()+".err"));
			}
		}
	}

	private Optional<FinancialEntity> findByName(String logo) {
		String[] words = logo.split("\\s+");
		Map<Long, Long> map = new HashMap<>();
		for(String s : words) {
			List<FinancialEntity> l = financialEntityRepository.findAllByFinancialEntityNameLike("%"+s+"%");
			for(FinancialEntity fe : l) {
				if (map.get(fe.getId()) == null) {
					map.put(fe.getId(), 1l);
				}
				else {
					map.put(fe.getId(), map.get(fe.getId()) + 1);
				}
			}
			
		}
		
		long max = -1l;
		Long maxEntityId = null;
		for(Long feId : map.keySet()) {
			if (map.get(feId) > max) {
				max = map.get(feId);
				maxEntityId = feId;
			}
		}
		
		return (maxEntityId != null) ? financialEntityRepository.findById(maxEntityId) : Optional.empty();
	}
}
