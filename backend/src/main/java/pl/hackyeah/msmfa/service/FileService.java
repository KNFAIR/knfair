package pl.hackyeah.msmfa.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.annotation.PostConstruct;
import javax.servlet.ServletOutputStream;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class FileService {

	@Value("${files.dir}")
	private String fileDir;

	@PostConstruct
	public void init() {
		File dir = new File(fileDir);
		dir.mkdirs();
	}
	
	public void saveImage(Long id, FileInputStream fileInputStream) throws FileNotFoundException, IOException {

		File newFile = new File(fileDir + "/" + id.toString());
		IOUtils.copy(fileInputStream, new FileOutputStream(newFile));
		
	}

	public void copyTo(Long id, ServletOutputStream outputStream) throws IOException {
		File file = new File(fileDir + "/" + id.toString());
		InputStream is = new FileInputStream(file);
		IOUtils.copy(is, outputStream);
		is.close();
	}
	
	
	
}
