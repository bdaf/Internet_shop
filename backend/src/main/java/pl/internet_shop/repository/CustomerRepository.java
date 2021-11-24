package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
    static Customer getInstanceForTests() {
        return Customer.builder()
                .name("testCustomerName")
                .surname("testCustomerSurname")
                .company(CompanyRepository.getInstanceForTests())
                .email("testEmail@gmail.com")
                .phoneNumber("testNumber")
                .address(AddressRepository.getInstanceForTests())
                .build();
    }
}
