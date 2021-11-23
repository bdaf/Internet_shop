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
        Long amountOfCompanies = companyRepository.count();
        Long amountOfAddressRecords = addressRepository.count();
        Long amountOfCityRecords = cityRepository.count();
        City city = City.builder()
                .name("addressTest")
                .country("addressCountryTest")
                .postcode("adPCTest")
                .build();
        Address address = Address.builder()
                .city(city)
                .houseNumber("5TEST")
                .street("addressTestStreet")
                .build();
        Company company = Company.builder()
                .name("TestCompany")
                .nip("testNipNumber")
                .build();
        Customer customer = Customer.builder()
                .name("testCustomerName")
                .surname("testCustomerSurname")
                .company(company)
                .email("testEmail@gmail.com")
                .phoneNumber("testNumber")
                .address(address)
                .build();

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
    }
}