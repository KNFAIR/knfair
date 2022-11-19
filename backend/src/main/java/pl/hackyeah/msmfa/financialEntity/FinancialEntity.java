package pl.hackyeah.msmfa.financialEntity;

import lombok.Data;
import pl.hackyeah.msmfa.socialPost.SocialPostEntity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "financial_entity")
@Data
public class FinancialEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fe_name")
    private String financialEntityName;

    @Column(name = "fe_short_name")
    private String financialEntityShortName;

    @Column(name = "fe_nip")
    private String financialEntityNip;

    @Column(name = "fe_type")
    private String financialEntityType;

    @OneToMany(mappedBy = "financialEntity", fetch = FetchType.LAZY)
    private Set<SocialPostEntity> socialPosts;

}
