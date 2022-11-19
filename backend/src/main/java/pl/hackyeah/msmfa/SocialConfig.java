package pl.hackyeah.msmfa;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.social.UserIdSource;
import org.springframework.social.config.annotation.ConnectionFactoryConfigurer;
import org.springframework.social.config.annotation.SocialConfigurer;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;

@Configuration
public class SocialConfig implements SocialConfigurer {

	
    @Value("${spring.social.facebook.appId}")
    private String appId;
	
    @Value("${spring.social.facebook.appSecret}")
    private String appSecret;
	

    @Override
    public void addConnectionFactories(ConnectionFactoryConfigurer cfConfig, Environment env) {
        cfConfig.addConnectionFactory(new FacebookConnectionFactory(appId, appSecret));
    }

	@Override
	public UserIdSource getUserIdSource() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator connectionFactoryLocator) {
		// TODO Auto-generated method stub
		return null;
	}

}

