package pl.hackyeah.msmfa.financialEntities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "financial_entity")
@Data
public class FinancialEntity {

    @Id
    private Long id;

    @Column(name = "fe_name")
    private String financialEntityName;

    @Column(name = "fe_nip")
    private Long financialEntityNip;

    @Column(name = "fe_type")
    private String financialEntityType;



}
