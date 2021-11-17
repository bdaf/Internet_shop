package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
