package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.internet_shop.entity.Company;
import pl.internet_shop.entity.User;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company,Long> {
    static Company getInstanceForTests(){
        return Company.builder()
                .name("TestCompany")
                .nip("testNipNumber")
                .build();
    }
    @Query("SELECT p FROM Company p where p.nip = (:nip)")
    Company findByNip(@Param("nip") String aNip);
}
