package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Company;

public interface CompanyRepository extends JpaRepository<Company,Long> {
    static Company getInstanceForTests(){
        return Company.builder()
                .name("TestCompany")
                .nip("testNipNumber")
                .build();
    }
}
