package pl.hackyeah.msmfa.socialPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/socialPosts")
public class SocialPostController {

    @Autowired
    private final SocialPostService socialPostService;

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
    @GetMapping("/find/{id}")
    public SocialPostEntity getSocialPostById(@PathVariable("id") Long id) {
        return socialPostService.findById(id);
    }

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<SocialPostEntity> addSocialPost(@RequestBody SocialPostEntity socialPost) {
        SocialPostEntity newSocialPost = socialPostService.addSocialPost(socialPost);
        return new ResponseEntity<>(newSocialPost, HttpStatus.CREATED);
    }

}
