package pl.hackyeah.msmfa.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.annotation.PostConstruct;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class FileService {

	@Value("${file.dir")
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
	
	
	
}
