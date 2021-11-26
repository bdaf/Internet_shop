package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.internet_shop.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company,Long> {
    static Company getInstanceForTests(){
        return Company.builder()
                .name("TestCompany")
                .nip("testNipNumber")
                .build();
    }
}
