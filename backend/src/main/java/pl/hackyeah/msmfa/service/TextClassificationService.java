package pl.hackyeah.msmfa.service;

import org.springframework.stereotype.Service;

@Service
public class TextClassificationService {

	private final String[] strong = {"bez ryzyka", "kupuj", "inwestuj", "kryptowaluta", "zysk"};
	
	public boolean isScam(String text) {
		for(String s : strong) {
			return text.contains(s);
		}
		return false;
	}
}
