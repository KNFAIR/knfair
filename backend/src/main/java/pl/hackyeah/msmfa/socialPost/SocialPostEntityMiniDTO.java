package pl.hackyeah.msmfa.socialPost;

import java.util.Set;

import lombok.Data;

@Data
public class SocialPostEntityMiniDTO {

	 private Long id;
     private String facebookPostUrl;
     private String postCreatedDate;
     private Boolean manualVerification;
     private Boolean autoVerification;
     private Set<FlagReason> reasons;
}
