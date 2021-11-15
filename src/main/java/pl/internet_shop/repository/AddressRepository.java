package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Address;

public interface AddressRepository extends JpaRepository<Address,Long> {
}
