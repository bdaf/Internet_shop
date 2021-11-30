package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.internet_shop.entity.User;

import java.util.Optional;

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


    Optional<User> findByUserName(String userName);
    Optional<User> findByEmail(String email);
}