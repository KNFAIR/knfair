package pl.hackyeah.msmfa.socialPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.hackyeah.msmfa.dto.InfluDto;
import pl.hackyeah.msmfa.financialEntity.FinancialEntityRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@Transactional
public class SocialPostService {

    @Autowired
    private final SocialPostRepository socialPostRepository;
    @Autowired
    private final FinancialEntityRepository financialEntityRepository;

    public SocialPostService(SocialPostRepository socialPostRepository, FinancialEntityRepository financialEntityRepository) {
        this.socialPostRepository = socialPostRepository;
        this.financialEntityRepository = financialEntityRepository;
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
        List<SocialPostEntity> socialPost = socialPostRepository.findAllByFinancialEntityId(financialEntityId);
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
		return socialPostRepository.findAllByFinancialEntityId(id);
	}

    public void update(SocialPostEntity post) {
        SocialPostEntity entity = socialPostRepository.findById(post.getId()).get();
        entity.setManualVerification(post.getManualVerification());
        socialPostRepository.save(entity);
    }

    public List<InfluDto> getInflu() {
        List<InfluDto> list = financialEntityRepository.findAll()
                .stream()
                .map(institution -> {
                    List<SocialPostEntity> posts = socialPostRepository.findAllByFinancialEntityId(institution.getId());
                    InfluDto dto = new InfluDto();
                    dto.setId(institution.getId());
                    dto.setName(institution.getFinancialEntityName());
                    dto.setPositives(posts.stream()
                            .filter(p -> Boolean.TRUE.equals(p.getAutoVerification()))
                            .collect(Collectors.toList())
                            .size());
                    dto.setNegatives(posts.stream()
                            .filter(p -> Boolean.FALSE.equals(p.getAutoVerification()))
                            .collect(Collectors.toList())
                            .size());
                    return dto;
                })
                .sorted(Comparator.comparing(InfluDto::getAll))
                .collect(Collectors.toList());
        Collections.reverse(list);
        return list.subList(0, 10);
    }
}
