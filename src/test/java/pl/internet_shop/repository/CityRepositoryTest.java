package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.City;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class CityRepositoryTest {

    @Autowired
    private CityRepository cityRepository;

    @Test
    public void saveAndDeleteCity(){
        City city = City.builder()
                .postcode("16-424")
                .country("Poland")
                .name("Filipów")
                .build();

        Long amountOfRecords = cityRepository.count();
        cityRepository.save(city);
        assertEquals(amountOfRecords+1,cityRepository.count());
        cityRepository.delete(city);
        assertEquals(amountOfRecords,cityRepository.count());
    }

    @Test
    public void printAllCities(){
        List<City> cities = cityRepository.findAll();
        System.out.println(cities.size());
        System.out.println("cities = " + cities);
    }

    @Test
    public void findAndDeleteCityByPostcode(){
        String tmpPostcode = "testCode";
        cityRepository.deleteAllByPostcode(tmpPostcode);
        City city = City.builder()
                .postcode(tmpPostcode)
                .country("Poland")
                .name("Test test test")
                .build();

        cityRepository.save(city);
        assertEquals(1,cityRepository.findByPostcode(tmpPostcode).size());
        assertEquals(city,cityRepository.findByPostcode(tmpPostcode).get(0));

        cityRepository.deleteByPostcode(tmpPostcode);
        assertTrue(cityRepository.findByPostcode(tmpPostcode).isEmpty());
    }
}