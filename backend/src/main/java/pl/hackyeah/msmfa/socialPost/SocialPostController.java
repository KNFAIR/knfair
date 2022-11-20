package pl.hackyeah.msmfa.socialPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.servlet.function.EntityResponse;
import pl.hackyeah.msmfa.dto.InfluDto;
import pl.hackyeah.msmfa.dto.VerificationDataDto;
import pl.hackyeah.msmfa.service.FileService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.hackyeah.msmfa.dto.VerificationDataDto;
import pl.hackyeah.msmfa.financialEntity.FinancialEntity;
import pl.hackyeah.msmfa.service.FileService;
import pl.hackyeah.msmfa.service.TextClassificationService;

@RestController
@RequestMapping("/socialPosts")
public class SocialPostController {

    @Autowired
    private final SocialPostService socialPostService;
    
    @Autowired
    private FileService fileService;

    @Autowired
    private TextClassificationService textClassificationService;

    public SocialPostController(SocialPostService socialPostService) {
        this.socialPostService = socialPostService;
    }

    @CrossOrigin
    @GetMapping("/find/all")
    public ResponseEntity<List<SocialPostEntity>> getAllSocialPosts() {
        List<SocialPostEntity> socialPosts = socialPostService.findAllSocialPosts();
        return new ResponseEntity<>(socialPosts, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/find/trueAutoVerification")
    public ResponseEntity<List<SocialPostEntity>> getPostsByAutoVerificationTrue() {
        List<SocialPostEntity> socialPosts = socialPostService.findByAutoVerificationTrue();
        return new ResponseEntity<>(socialPosts, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/find/falseAutoVerification")
    public ResponseEntity<List<SocialPostEntity>> getPostsByAutoVerificationFalse() {
        List<SocialPostEntity> socialPosts = socialPostService.findByAutoVerificationFalse();
        return new ResponseEntity<>(socialPosts, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping("/find/autoVerification")
    public List<List<SocialPostEntityMiniDTO>> getPostsByAutoVerification() {
        List<SocialPostEntityMiniDTO> listT = new ArrayList<>();
        List<SocialPostEntityMiniDTO> listF = new ArrayList<>();
        
        for(SocialPostEntity e : socialPostService.findByAutoVerificationTrue()) {
        	listT.add(copyToDTO(e));
        }
        for(SocialPostEntity e : socialPostService.findByAutoVerificationFalse()) {
        	listF.add(copyToDTO(e));
        }
        List<List<SocialPostEntityMiniDTO>> list = new ArrayList<>();
        list.add(listT);
        list.add(listF);
        return list;
    }

    @CrossOrigin
    @PutMapping("/update")
    public void updatePost(@RequestBody SocialPostEntity post) {
        socialPostService.update(post);
    }

    @CrossOrigin
    @GetMapping("/find/groupByFinancialEntity/{financialEntityId}")
    @Transactional
    public List<List<SocialPostEntityMiniDTO>> getPostsByFinancialEntityId(@PathVariable("financialEntityId") Long financialEntityId) {

        List<List<SocialPostEntity>> l = socialPostService.getPostsNotManualVericated(financialEntityId);

        List<List<SocialPostEntityMiniDTO>> result = new ArrayList<>();
        result.add(copyListToDTO(l.get(0)));
        result.add(copyListToDTO(l.get(1)));

		return result ;


    }

    @CrossOrigin
    @GetMapping("/find/{id}")
    @Transactional
    public SocialPostEntityMiniDTO getSocialPostById(@PathVariable("id") Long id) {
    	SocialPostEntity e = socialPostService.findById(id);
        return copyToDTO(e);
    }

    @CrossOrigin
    @GetMapping("/find/by/financialEntity/{id}")
    @Transactional
    public List<SocialPostEntityMiniDTO> getSocialPostByFinancialEntityId(@PathVariable("id") Long id) {
    	List<SocialPostEntity> l = socialPostService.findByFinancialInstitutionId(id);
    	return copyListToDTO(l);
    }

    private List<SocialPostEntityMiniDTO> copyListToDTO(List<SocialPostEntity> l) {
        List<SocialPostEntityMiniDTO> list = new ArrayList<>();
		for(SocialPostEntity e : l) {
        	list.add(copyToDTO(e));
        }
		return list;
	}

	private SocialPostEntityMiniDTO copyToDTO(SocialPostEntity e) {
    	SocialPostEntityMiniDTO dto = new SocialPostEntityMiniDTO();
    	
    	dto.setId(e.getId());
    	dto.setAutoVerification(e.getAutoVerification());
    	dto.setFacebookPostUrl(e.getFacebookPostUrl());
    	dto.setManualVerification(e.getManualVerification());
    	dto.setPostCreatedDate(e.getPostCreatedDate());
    	dto.setReasons(e.getReasons());

		dto.setLogos(e.getLogos().stream().map(FinancialEntity::getFinancialEntityName).toList() );
		dto.setOtherLogos(new ArrayList<String>(e.getOtherLogos()));
    	return dto;
    }

	@CrossOrigin
    @GetMapping("/find/{id}/image")
    public void getSocialPostImageById(@PathVariable("id") Long id, HttpServletResponse response) throws IOException {
        response.setContentType("image/png");
        fileService.copyTo(id, response.getOutputStream());
    }

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<SocialPostEntity> addSocialPost(@RequestBody SocialPostEntity socialPost) {
        SocialPostEntity newSocialPost = socialPostService.addSocialPost(socialPost);
        return new ResponseEntity<>(newSocialPost, HttpStatus.CREATED);
    }

    @CrossOrigin
    @PostMapping("/verify")
    public ResponseEntity<Boolean> verifyContent(@RequestBody VerificationDataDto dto) {
        boolean result = textClassificationService.isScam(dto.getContent());
        return ResponseEntity.ok(! result);
    }

    @CrossOrigin
    @GetMapping("/influ")
    private List<InfluDto> getInflu() {
        return socialPostService.getInflu();
    }


}
