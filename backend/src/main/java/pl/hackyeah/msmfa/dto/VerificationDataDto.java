package pl.hackyeah.msmfa.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerificationDataDto {

    @JsonAlias("content")
    private String content;
}
