package pl.hackyeah.msmfa.socialPost;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import pl.hackyeah.msmfa.financialEntity.FinancialEntity;

@Entity
@Table(name = "social_post")
@Getter 
@Setter 
@RequiredArgsConstructor 
@ToString 
public class SocialPostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Column(name = "social_post_url")
    private String facebookPostUrl;

    @Column(name = "post_created_date")
    private String postCreatedDate;

    @Column(name = "manual_verification")
    private Boolean manualVerification;

    @Column(name = "auto_verification")
    private Boolean autoVerification;

    @Column(name = "reason")
    private String reason;

    @ManyToOne(fetch = FetchType.LAZY)
    private FinancialEntity financialEntity;
    
    @ManyToMany
    private Set<FinancialEntity> logos;
    
    @Column
    private String ocr;

    
    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<FlagReason> reasons;
}
