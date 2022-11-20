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
import pl.hackyeah.msmfa.socialPost.SocialPostEntity;
import pl.hackyeah.msmfa.socialPost.SocialPostRepository;

@Service
public class ImportService {

	@Value("${import.dir}")
	private String importDir;
	
	@Value("${files.dir}")
	private String filesDir;
	
	@Autowired
	private FileService fileService;
	
	@Autowired
	private SocialPostRepository socialPostRepository;

	@Autowired
	private FinancialEntityRepository financialEntityRepository;

	@Autowired
	private LogoService logoService;
	
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
				
				Optional<FinancialEntity> entity = findByName("Powszechny Zakład Ubezpieczeń");
				Set<String> logos = logoService.detectLogo(new FileInputStream(f));
				String ocr = logoService.ocr(new FileInputStream(f));
			
				SocialPostEntity post = new SocialPostEntity();
				post.setFinancialEntity(entity.get());
				
				Set<FinancialEntity> logoEntities = new HashSet<>();
				for(String logo : logos) {
					
					Optional<FinancialEntity> e = findByName(logo); 
							
					if (e.isPresent()) {
						logoEntities.add(e.get());
					}
				}
				logoEntities.remove(entity.get());
				post.setLogos(logoEntities);
				Calendar cal = Calendar.getInstance();
				cal.add(Calendar.DAY_OF_MONTH, -1 * random.nextInt(30) );
				post.setPostCreatedDate(df.format(cal.getTime()));
				SocialPostEntity saved = socialPostRepository.save(post);
			
				fileService.saveImage(saved.getId(), new FileInputStream(f));
			
				f.renameTo(new File(f.getAbsolutePath()+".bak"));
			}
			catch (Exception e) {
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
		
		return financialEntityRepository.findById(maxEntityId);
	}
}
