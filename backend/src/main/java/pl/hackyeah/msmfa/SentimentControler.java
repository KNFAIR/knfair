package pl.hackyeah.msmfa;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import reactor.core.publisher.Mono;

@RestController
public class SentimentControler {

	
	public static class SentimentAnalyzeDTO {
		public String inputs;
		public Map<String, Object> parameters;
		public Map<String, Object> options;
	}
	
	@Value("${huggingface.api.token}")
	private String apiToken;
	
	@GetMapping("/sentiment")
	public String findSentiment(@RequestParam("q") String test) throws JsonProcessingException {
		
		WebClient client = WebClient.builder()
				  .baseUrl("https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B")
				  .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
				  .defaultHeader("Authorization", "Bearer " + apiToken)
				  .build();
	
		SentimentAnalyzeDTO dto = new SentimentAnalyzeDTO();
		dto.parameters = Map.of(
				"max_new_tokens",4,
			    "temperature", 0.1,
			    "end_sequence",  "###",
			    "return_full_text", Boolean.FALSE);
		dto.options = Map.of("use_cache", Boolean.FALSE);
		dto.inputs = """
				
Text:Ukazał się nowy raport analityczny dotyczący spółki giełdowej NOP. Zachęcamy do zapoznania się z jego treścią
Result:OK
###
Text:Z przyjemnością informuję, że z dniem dzisiejszym dołączyłem do zespołu zarządzających w Domu Maklerskim Zarządzanie Aktywami ABC
Result:OK
###
Text:Wyniki ostatniego tygodnia: WIG20: +1,21%. Dowiedz się więcej o naszym portfelu 'Blue Chips PL' i jego wynikach
Result:OK
###
Text:Nowy produkt w ofercie. Ubezpieczenie o charakterze Inwestycyjnym 'OI Profit'. Dowiedz się więcej na naszej stronie
Result:OK
###
Text:Proszę zapoznać się z naszą ofertą aabank.com i sposobem kontaktu z nami. Na pewno, któryś z doradców Panu pomoże
Result:OK
###
Text:Rozczarowujące wyniki spółki giełdowej NOP za 1Q i ostatnia konferencja spółki skłoniły nas do zmiany zalecenia z TRZYMAJ na SPRZEDAJ
Result:SCAM
###
Text:Nowe fundusze inwestycyjne staiblnego wzrostu. Z nimi nie stracisz. Gwarancja wzrostu aktywów i ochrony kapitału
Result:SCAM
###
Text:Dotarłem do informacji o poważnych problemach finansowych banku Idea! Lepiej zawczasu wypłacić swoje oszczędności!
Result:SCAM
###
Text:W Banku A A dostałem najlepsze warunki kredytu. Byłem w Banku DEF - najgorsza obsługa, najgorsza oferta
Result:SCAM
###
Text:Dzisiaj wielki dzień! Dołączyłem do najlepszego i najbardziej efektywnego na rynku kapitałowym zespołu zarządzających! #DMZAABC #Najlepsi #Bezkonkurencyjny
Result:SCAM
###
Text:Wyniki ostatniego tygodnia: WIG20: +1,21%. Nasz portfel "BlueChips PL" +2,22% #BlueChipsPL #DMZAABC
Result:SCAM
###
Text:Nowy produkt w ofercie. Ubezpieczenie o charakterze inwestycyjnym 'OI Profit' Gromadzenie oszczędności. Efektywne pomnażanie kapitału.
Result:SCAM
###
Text:""" + test + "\nResult:" ;
		
		ObjectMapper mapper = new ObjectMapper();
		String body = mapper.writeValueAsString(dto);
		System.err.println(body);
		Mono<ClientResponse> response = client.post().bodyValue(dto).exchange();
		ClientResponse r = response.block();
		Mono<String> s = r.bodyToMono(String.class);
		
		
		return s.block();
	}
}
