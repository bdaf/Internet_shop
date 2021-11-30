package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import pl.internet_shop.entity.City;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CityRepository  extends JpaRepository<City,Long> {

    static City getInstanceForTests() {
        return City.builder()
                .name("addressTest")
                .country("addressCountryTest")
                .postcode("adPCTest")
                .build();
    }

    static City getCity(String name, String country, String postcode) {
        return City.builder()
                .name(name)
                .country(country)
                .postcode(postcode)
                .build();
    }

    List<City> findByPostcode(String postcode);

    @Modifying
    @Transactional
    void deleteByPostcode(String aPostcode);

    @Modifying
    @Transactional
    void deleteAllByPostcode(String aPostcode);
}
