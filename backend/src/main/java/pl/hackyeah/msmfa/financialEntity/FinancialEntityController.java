package pl.hackyeah.msmfa.financialEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/financialEntities")
public class FinancialEntityController {

    @Autowired
    private final FinancialEntityService financialEntityService;

    public FinancialEntityController(FinancialEntityService financialEntityService) {
        this.financialEntityService = financialEntityService;
    }


    @GetMapping("/find/all")
    public ResponseEntity<List<FinancialEntity>> getAllFinancialEntities() {
        List<FinancialEntity> financialEntities = financialEntityService.findAllFinancialEntities();

        return new ResponseEntity<>(financialEntities, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public FinancialEntity getFinancialEntityById(@PathVariable("id") Long id) {
        return financialEntityService.findById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<FinancialEntity> addRestaurant(@RequestBody FinancialEntity financialEntity) {
        FinancialEntity newFinancialEntity = financialEntityService.addFinancialEntity(financialEntity);
        return new ResponseEntity<>(newFinancialEntity, HttpStatus.CREATED);
    }

}
