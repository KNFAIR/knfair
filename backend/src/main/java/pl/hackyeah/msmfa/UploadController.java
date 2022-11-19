package pl.hackyeah.msmfa;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;
import pl.hackyeah.msmfa.dto.TestDTO;
import pl.hackyeah.msmfa.service.LogoService;

@RestController
@Slf4j
public class UploadController {

	
	@Autowired
	private LogoService logoService;
	
	@PostMapping("/upload")
	public TestDTO handleFileUpload(@RequestParam("file") MultipartFile file,
			RedirectAttributes redirectAttributes) throws IOException {

		Set<String> logos = logoService.detectLogo( new ByteArrayInputStream(file.getBytes()) );
		String text = logoService.ocr(new ByteArrayInputStream(file.getBytes()));

		
		System.err.println("LOGOS: " + logos);
		System.err.println("OCR: " + text); 
		
		TestDTO dto = new TestDTO(1l, logos, text);
		ObjectMapper mapper = new ObjectMapper();
		String s = mapper.writeValueAsString(dto);
		redirectAttributes.addAttribute("found", s);
		
		return dto;  
	}
	
	
	
}
