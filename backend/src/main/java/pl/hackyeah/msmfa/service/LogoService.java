package pl.hackyeah.msmfa.service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.google.cloud.vision.v1.AnnotateImageRequest;
import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.BatchAnnotateImagesResponse;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.google.cloud.vision.v1.Feature;
import com.google.cloud.vision.v1.Image;
import com.google.cloud.vision.v1.ImageAnnotatorClient;
import com.google.protobuf.ByteString;

@Service
public class LogoService {

	@PostConstruct
	public void init() {
//		try {
////			ocr(new FileInputStream("/tmp/pzu2.jpg"));
////			detectLogo(new FileInputStream("/tmp/pzu2.jpg"));
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
	}

	
	public Set<String> detectLogo(InputStream imageInputStream) throws IOException {

		List<AnnotateImageRequest> requests = new ArrayList<>();

//		ImageSource imgSource = ImageSource.newBuilder().setImageUri("https://brandingmonitor.pl/wp-content/uploads/2013/08/rebranding-mbank-logo.jpg").build();
		Image img = Image.newBuilder().setContent(ByteString.readFrom(imageInputStream)).build();
		
		Feature feat = Feature.newBuilder().setType(Feature.Type.LOGO_DETECTION).build();
		AnnotateImageRequest request = AnnotateImageRequest.newBuilder().addFeatures(feat).setImage(img).build();
		requests.add(request);

		// Initialize client that will be used to send requests. This client only needs
		// to be created
		// once, and can be reused for multiple requests. After completing all of your
		// requests, call
		// the "close" method on the client to safely clean up any remaining background
		// resources.
		try (ImageAnnotatorClient client = ImageAnnotatorClient.create()) {
			BatchAnnotateImagesResponse response = client.batchAnnotateImages(requests);
			List<AnnotateImageResponse> responses = response.getResponsesList();

			Set<String> result = new HashSet<>();
			for (AnnotateImageResponse res : responses) {
				if (res.hasError()) {
					System.out.format("Error: %s%n", res.getError().getMessage());
					return null;
				}

				// For full list of available annotations, see http://g.co/cloud/vision/docs
				for (EntityAnnotation annotation : res.getLogoAnnotationsList()) {
					System.out.println(annotation.getDescription());
					result.add(annotation.getDescription());
				}
			}

			return result ;
		}
	}

	
	
	public String ocr(InputStream imageInputStream) throws IOException {

		List<AnnotateImageRequest> requests = new ArrayList<>();

//		ImageSource imgSource = ImageSource.newBuilder().setImageUri("https://brandingmonitor.pl/wp-content/uploads/2013/08/rebranding-mbank-logo.jpg").build();
		Image img = Image.newBuilder().setContent(ByteString.readFrom(imageInputStream)).build();
		
		Feature feat = Feature.newBuilder().setType(Feature.Type.TEXT_DETECTION).build();
		AnnotateImageRequest request = AnnotateImageRequest.newBuilder().addFeatures(feat).setImage(img).build();
		requests.add(request);

		// Initialize client that will be used to send requests. This client only needs
		// to be created
		// once, and can be reused for multiple requests. After completing all of your
		// requests, call
		// the "close" method on the client to safely clean up any remaining background
		// resources.
		StringBuffer sb = new StringBuffer();
		try (ImageAnnotatorClient client = ImageAnnotatorClient.create()) {
			BatchAnnotateImagesResponse response = client.batchAnnotateImages(requests);
			List<AnnotateImageResponse> responses = response.getResponsesList();

			for (AnnotateImageResponse res : responses) {
				if (res.hasError()) {
					System.out.format("Error: %s%n", res.getError().getMessage());
					return null;
				}

				System.out.println(res);
				// For full list of available annotations, see http://g.co/cloud/vision/docs
				for (EntityAnnotation annotation : res.getTextAnnotationsList()) {
					System.out.println(annotation.getDescription());
					sb.append(annotation.getDescription());
				}
			}

			return sb.toString();
		}
	}


}
