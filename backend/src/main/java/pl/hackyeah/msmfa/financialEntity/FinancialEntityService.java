package pl.hackyeah.msmfa.financialEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

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

    public Optional<FinancialEntity> findById(Long id) {

        Optional<FinancialEntity> financialEntity = Optional.ofNullable(Optional.ofNullable(financialEntityRepository.getById(id)).orElseThrow(() -> new EntityNotFoundException("nie znaleziono podmiotu finansowego z id: " + id)));
        return financialEntity;
    }
}
