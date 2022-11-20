package pl.hackyeah.msmfa.financialEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Comparator;
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

    private final static List<Long> testIds = List.of(2433L, 1058L, 1300L, 752L, 1306L, 1282L);
    
    @CrossOrigin
    @GetMapping("/find/all")
    public ResponseEntity<List<FinancialEntity>> getAllFinancialEntities() {
        List<FinancialEntity> financialEntities = financialEntityService.findAllFinancialEntities();
        Collections.sort(financialEntities, new Comparator<FinancialEntity>() {

			@Override
			public int compare(FinancialEntity o1, FinancialEntity o2) {
				Long id1 = o1.getId();
				Long id2 = o2.getId();
				
				boolean in1 = testIds.contains(id1);
				boolean in2 = testIds.contains(id2);
				
				if (in1 && ! in2)
					return -1;
				if (!in1 && in2)
					return 1;
				
				return (int) (id1 - id2);
				
			}
		});
        return new ResponseEntity<>(financialEntities, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/find/{id}")
    public FinancialEntity getFinancialEntityById(@PathVariable("id") Long id) {
        return financialEntityService.findById(id);
    }

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<FinancialEntity> addFinancialEntity(@RequestBody FinancialEntity financialEntity) {
        FinancialEntity newFinancialEntity = financialEntityService.addFinancialEntity(financialEntity);
        return new ResponseEntity<>(newFinancialEntity, HttpStatus.CREATED);
    }

}
