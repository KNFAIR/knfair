package pl.hackyeah.msmfa.socialPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
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

    public List<SocialPostEntity> findPostByFinancialEntityId(Long financialEntityId) {
        List<SocialPostEntity> socialPost = socialPostRepository.findByFinancialEntityId(financialEntityId);
        return socialPost;
    }

    public List<List<SocialPostEntity>> getPostsNotManualVericated(Long financialInstId) {
        List<List<SocialPostEntity>> result = new ArrayList<>();
        result.add(socialPostRepository.findByManualVerificationIsNullAndAutoVerificationIsTrueAndFinancialEntityId(financialInstId));
        result.add(socialPostRepository.findByManualVerificationIsNullAndAutoVerificationIsFalseAndFinancialEntityId(financialInstId));
        return result;
    }

    public SocialPostEntity findById(Long id) {
        return socialPostRepository.findById(id).get();
    }

    public SocialPostEntity addSocialPost(SocialPostEntity socialPost) {
        return socialPostRepository.save(socialPost);
    }

	public List<SocialPostEntity> findByFinancialInstitutionId(Long id) {
		return socialPostRepository.findByFinancialEntityId(id);
	}

    public void update(SocialPostEntity post) {
        SocialPostEntity entity = socialPostRepository.findById(post.getId()).get();
        entity.setManualVerification(post.getManualVerification());
        socialPostRepository.save(entity);
    }
}
