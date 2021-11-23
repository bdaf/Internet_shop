package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Company;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CompanyRepositoryTest {

    @Autowired
    CompanyRepository companyRepository;

    @Test
    void saveCompanyThenPrintAllThenDeleteIt(){
        Long amountOfCompanies = companyRepository.count();

        Company company = Company.builder()
                .name("TestName")
                .nip("testNip123").build();

        companyRepository.save(company);
        assertEquals(amountOfCompanies+1, companyRepository.count());

        List<Company> companies = companyRepository.findAll();
        System.out.println("producers = " + companies);

        companyRepository.delete(company);
        assertEquals(amountOfCompanies, companyRepository.count());
    }

}