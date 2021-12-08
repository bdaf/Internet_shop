package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.City;
import pl.internet_shop.entity.Company;
import pl.internet_shop.repository.CityRepository;
import pl.internet_shop.repository.CompanyRepository;

import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    CompanyRepository companyRepository;

    @Override
    public Company saveCompany(String name, String nip) {
        Company companyExists = companyRepository.findByNip(nip);
        if(companyExists == null ) {
            Company company = Company.builder()
                    .name(name)
                    .nip(nip)
                    .build();
            return companyRepository.save(company);
        }
        return companyRepository.save(companyExists);
    }
}
