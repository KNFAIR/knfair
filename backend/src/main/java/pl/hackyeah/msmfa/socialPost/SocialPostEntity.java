package pl.hackyeah.msmfa.socialPost;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "facebook_post")
@Data
public class SocialPostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "facebook_post_url")
    private String facebookPostUrl;

}
