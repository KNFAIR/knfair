package pl.hackyeah.msmfa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.hackyeah.msmfa.entity.TestEntity;

public interface TestRepository extends JpaRepository<TestEntity, Long>{

}
