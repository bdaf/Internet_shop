package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import pl.internet_shop.entity.Address;

import javax.transaction.Transactional;

@Repository
public interface AddressRepository extends JpaRepository<Address,Long> {
    @Modifying
    @Transactional
    void deleteByHouseNumber(String aHouseNumber);

    static Address getInstanceForTests(){
        return Address.builder()
                .city(CityRepository.getInstanceForTests())
                .houseNumber("5TEST")
                .street("addressTestStreet")
                .build();
    }
}
