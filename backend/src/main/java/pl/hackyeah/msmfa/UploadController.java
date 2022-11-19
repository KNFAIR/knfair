package pl.hackyeah.msmfa;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Set;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.google.rpc.context.AttributeContext.Response;

import lombok.extern.slf4j.Slf4j;
import pl.hackyeah.msmfa.service.LogoService;

@Controller
@Slf4j
public class UploadController {

	
	@Autowired
	private LogoService logoService;
	
	@PostMapping("/upload")
	public Response handleFileUpload(@RequestParam("file") MultipartFile file,
			RedirectAttributes redirectAttributes) throws IOException {

		byte[] buf = new byte[1000000];
		IOUtils.readFully(file.getInputStream(), buf );
		Set<String> logos = logoService.detectLogo( new ByteArrayInputStream(buf) );
		String text = logoService.ocr(new ByteArrayInputStream(buf));

		
		System.err.println("LOGOS: " + logos);
		System.err.println("OCR: " + text); 
		
		return Response.newBuilder().setCode(200).build();
	}
}
