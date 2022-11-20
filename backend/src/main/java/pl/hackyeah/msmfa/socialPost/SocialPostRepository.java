package pl.hackyeah.msmfa.socialPost;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SocialPostRepository extends JpaRepository<SocialPostEntity, Long> {

    List<SocialPostEntity> findByManualVerificationIsNullAndAutoVerificationIsTrue();

    List<SocialPostEntity> findByManualVerificationIsNullAndAutoVerificationIsFalse();
    List<SocialPostEntity> findByFinancialEntityId(Long financialEntityId);
}
