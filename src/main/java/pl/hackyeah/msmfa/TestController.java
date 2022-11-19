package pl.hackyeah.msmfa;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.hackyeah.msmfa.dto.TestDTO;

@RestController
public class TestController {

	@GetMapping("/t")
	public TestDTO test() {
		TestDTO dto = new TestDTO(1l, this.toString());
		return dto;
	}
}
