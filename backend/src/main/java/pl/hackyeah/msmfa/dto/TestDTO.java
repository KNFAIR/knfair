package pl.hackyeah.msmfa.dto;

import java.util.Collection;

public record TestDTO(
		Long id,
		Collection<String> logos,
		String text) {
	
}
