package pl.hackyeah.msmfa.socialPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Service
public class SocialPostService {

    @Autowired
    private final SocialPostRepository socialPostRepository;

    public SocialPostService(SocialPostRepository socialPostRepository) {
        this.socialPostRepository = socialPostRepository;
    }

    public List<SocialPostEntity> findAllSocialPosts() {
        List<SocialPostEntity> socialPosts = socialPostRepository.findAll();
        return socialPosts;
    }

    public List<SocialPostEntity> findByAutoVerificationTrue() {
        List<SocialPostEntity> socialPosts = socialPostRepository.findByManualVerificationIsNullAndAutoVerificationIsTrue();
        return socialPosts;
    }

    public List<SocialPostEntity> findByAutoVerificationFalse() {
        List<SocialPostEntity> socialPosts = socialPostRepository.findByManualVerificationIsNullAndAutoVerificationIsFalse();
        return socialPosts;
    }

    public SocialPostEntity findById(Long id) {
        return socialPostRepository.findById(id).get();
    }

    public SocialPostEntity addSocialPost(SocialPostEntity socialPost) {
        return socialPostRepository.save(socialPost);
    }
}
