package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import pl.internet_shop.entity.City;

@DataJpaTest
class CityRepositoryTest {

    @Autowired
    private CityRepository cityRepository;

    @Test
    public void saveCity(){
        City city = City.builder()
                .postcode("16-424")
                .country("Poland")
                .name("Filipóww")
                .build();

        cityRepository.save(city);
        cityRepository.findAll().stream().findAny().equals(city);
    }
}