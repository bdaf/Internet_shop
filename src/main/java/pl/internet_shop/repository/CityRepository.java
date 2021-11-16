package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import pl.internet_shop.entity.City;

import javax.transaction.Transactional;
import java.util.List;

public interface CityRepository  extends JpaRepository<City,Long> {

    List<City> findByPostcode(String postcode);

    @Modifying
    @Transactional
    void deleteByPostcode(String aPostcode);

    @Modifying
    @Transactional
    void deleteAllByPostcode(String aPostcode);
}
