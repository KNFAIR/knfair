package pl.hackyeah.msmfa.financialEntity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.gson.annotations.JsonAdapter;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import pl.hackyeah.msmfa.socialPost.SocialPostEntity;

@Entity
@Table(name = "financial_entity")
@Getter 
@Setter 
@RequiredArgsConstructor 
@ToString 
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
