package pl.hackyeah.msmfa.financialEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FinancialEntityRepository extends JpaRepository<FinancialEntity, Long> {


	@Query("select e from FinancialEntity e where lower(e.financialEntityName) like lower(:nameToFind)")
	List<FinancialEntity> findAllByFinancialEntityNameLike(String nameToFind);
    
}
