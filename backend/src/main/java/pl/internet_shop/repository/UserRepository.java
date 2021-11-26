package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.internet_shop.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
    static User getInstanceForTests() {
        return User.builder()
                .name("testCustomerName")
                .surname("testCustomerSurname")
                .company(CompanyRepository.getInstanceForTests())
                .email("testEmail@gmail.com")
                .phoneNumber("testNumber")
                .address(AddressRepository.getInstanceForTests())
                .build();
    }

    User findByLogin (String login);
}