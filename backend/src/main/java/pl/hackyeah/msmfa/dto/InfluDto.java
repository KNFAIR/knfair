package pl.hackyeah.msmfa.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InfluDto {
    private Long id;
    private String name;
    private int positives;
    private int negatives;

    public int getAll(){
        return positives + negatives;
    }
}
