package pl.hackyeah.msmfa.financialEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FinancialEntityController {

    @Autowired
    private final FinancialEntityService financialEntityService;

    public FinancialEntityController(FinancialEntityService financialEntityService) {
        this.financialEntityService = financialEntityService;
    }


    @GetMapping("/financialEntities/find/all")
    public ResponseEntity<List<FinancialEntity>> getAllFinancialEntities() {
        List<FinancialEntity> financialEntities = financialEntityService.findAllFinancialEntities();

        return new ResponseEntity<>(financialEntities, HttpStatus.OK);
    }
}
