package pl.hackyeah.msmfa.financialEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FinancialEntityService {

    @Autowired
    private final FinancialEntityRepository financialEntityRepository;

    public FinancialEntityService(FinancialEntityRepository financialEntityRepository) {
        this.financialEntityRepository = financialEntityRepository;
    }

    public List<FinancialEntity> findAllFinancialEntities() {
        List<FinancialEntity> financialEntities = financialEntityRepository.findAll();

        return financialEntities;
    }

    public FinancialEntity findById(Long id) {
        return financialEntityRepository.findById(id).get();
    }

    public FinancialEntity addFinancialEntity(FinancialEntity financialEntity) {
        return financialEntityRepository.save(financialEntity);
    }
}
