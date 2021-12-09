package pl.internet_shop.service;

import pl.internet_shop.entity.Company;

public interface CompanyService {
    Company saveCompany(String name, String nip);
}
