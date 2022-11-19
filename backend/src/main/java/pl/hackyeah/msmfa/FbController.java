package pl.hackyeah.msmfa;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.Page;
import org.springframework.social.facebook.api.PagedList;
import org.springframework.social.facebook.api.Post;
import org.springframework.social.facebook.api.User;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FbController {

	
	@Value("${facebook.accessToken}")
	private String accessToken;
	
	
	@GetMapping("/fb1")
	public String test(Model model) {

		Facebook facebook = new FacebookTemplate(accessToken);
		
		PagedList<Page> pages = facebook.pageOperations().search("PZU");
		if (pages.isEmpty())
			return "EMPTY";
		
		Page pzuPage = pages.get(0);
		
        return pzuPage.toString();
        

	}
}
