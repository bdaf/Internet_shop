package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import pl.internet_shop.entity.Address;

import javax.transaction.Transactional;

public interface AddressRepository extends JpaRepository<Address,Long> {
    @Modifying
    @Transactional
    void deleteByHouseNumber(String aHouseNumber);
}
