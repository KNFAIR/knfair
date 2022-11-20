package pl.hackyeah.msmfa;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Random;
import java.util.Set;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;
import pl.hackyeah.msmfa.dto.TestDTO;
import pl.hackyeah.msmfa.service.ImportService;
import pl.hackyeah.msmfa.service.LogoService;

@RestController
@Slf4j
public class UploadController {

	
	@Autowired
	private LogoService logoService;
	
	@Autowired
	private ImportService importService;

	@CrossOrigin
	@PostMapping("/upload")
	public TestDTO handleFileUpload(@RequestParam("file") MultipartFile file,
			RedirectAttributes redirectAttributes) throws IOException {

		Set<String> logos = logoService.detectLogo( new ByteArrayInputStream(file.getBytes()) );
		String text = logoService.ocr(new ByteArrayInputStream(file.getBytes()));

		
		System.err.println("LOGOS: " + logos);
		System.err.println("OCR: " + text); 
		
		TestDTO dto = new TestDTO(1l);
		ObjectMapper mapper = new ObjectMapper();
		String s = mapper.writeValueAsString(dto);
		redirectAttributes.addAttribute("found", s);
		
		return dto;  
	}
	
	@CrossOrigin
	@PostMapping("/upload2")
	public TestDTO handleFileUpload2(@RequestParam("file") MultipartFile file,
			RedirectAttributes redirectAttributes) throws IOException {

		Random random = new Random();
		File tmpFile = new File("/tmp/uploaded_"+random.nextInt());
		
		IOUtils.copy(new ByteArrayInputStream(file.getBytes()), new FileOutputStream(tmpFile));
		
		
		Long id = importService.importFile(tmpFile, null);
		
		TestDTO dto = new TestDTO(id);
		
		return dto;  
	}
	

	
}
