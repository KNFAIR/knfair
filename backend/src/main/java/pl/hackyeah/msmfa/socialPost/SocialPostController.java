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

    @GetMapping("/find/all")
    public ResponseEntity<List<SocialPostEntity>> getAllSocialPosts() {
        List<SocialPostEntity> socialPosts = socialPostService.findAllSocialPosts();
        return new ResponseEntity<>(socialPosts, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public SocialPostEntity getSocialPostById(@PathVariable("id") Long id) {
        return socialPostService.findById(id);
    }
}
