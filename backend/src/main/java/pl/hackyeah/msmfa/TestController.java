package pl.hackyeah.msmfa;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.hackyeah.msmfa.entity.TestEntity;
import pl.hackyeah.msmfa.repository.TestRepository;

@RestController
public class TestController {

	@Autowired
	private TestRepository repository;
	
	@GetMapping("/t")
	public TestEntity test() {

		Optional<TestEntity> e = repository.findById(1l);
		return e.get();
	}
}
