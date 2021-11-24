package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Address;
import pl.internet_shop.entity.City;
import pl.internet_shop.entity.Company;
import pl.internet_shop.entity.Customer;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CustomerRepositoryTest {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    CityRepository cityRepository;

    @Test
    void saveCustomerWithCompanyThenPrintAllThenDeleteIt(){
        Long amountOfCustomers = customerRepository.count();
        Long amountOfAddressRecords = addressRepository.count();
        Long amountOfCompanies = companyRepository.count();
        Long amountOfCityRecords = cityRepository.count();

        City city = CityRepository.getInstanceForTests();
        Address address = AddressRepository.getInstanceForTests();
        address.setCity(city);
        Company company = CompanyRepository.getInstanceForTests();
        Customer customer = CustomerRepository.getInstanceForTests();
        customer.setCompany(company);
        customer.setAddress(address);

        customerRepository.save(customer);
        assertEquals(amountOfCustomers+1, customerRepository.count());
        assertEquals(amountOfCompanies+1, companyRepository.count());
        assertEquals(amountOfAddressRecords+1,addressRepository.count());
        assertEquals(amountOfCityRecords+1,cityRepository.count());

        List<Customer> customers = customerRepository.findAll();
        System.out.println("customers = " + customers);

        List<Company> companies = companyRepository.findAll();
        System.out.println("companies = " + companies);

        List<Address> addresses = addressRepository.findAll();
        System.out.println("addresses = " + addresses);

        List<City> cities = cityRepository.findAll();
        System.out.println("cities = " + cities);

        customerRepository.delete(customer);
        assertEquals(amountOfCustomers, customerRepository.count());
        assertEquals(amountOfCompanies, companyRepository.count());
        assertEquals(amountOfAddressRecords,addressRepository.count());
        assertEquals(amountOfCityRecords+1,cityRepository.count());

        cityRepository.delete(city);
        assertEquals(amountOfCityRecords,cityRepository.count());
    }
}