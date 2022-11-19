package pl.hackyeah.msmfa.socialPost;

import lombok.Data;
import pl.hackyeah.msmfa.financialEntity.FinancialEntity;

import javax.persistence.*;

@Entity
@Table(name = "social_post")
@Data
public class SocialPostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "social_post_url")
    private String facebookPostUrl;

    @Column(name = "post_created_date")
    private String postCreatedDate;

    @Column(name = "manual_verification")
    private Boolean manualVerification;

    @Column(name = "auto_verification")
    private Boolean autoVerification;

    @ManyToOne(fetch = FetchType.LAZY)
    private FinancialEntity financialEntity;

}
