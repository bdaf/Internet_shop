package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.City;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CityRepositoryTest {

    @Autowired
    private CityRepository cityRepository;

    @Test
    public void saveAndDeleteCity(){
        long amountOfCities = cityRepository.count();
        City city = CityRepository.getInstanceForTests();

        cityRepository.save(city);
        assertEquals(amountOfCities+1,cityRepository.count());

        cityRepository.delete(city);
        assertEquals(amountOfCities,cityRepository.count());
    }

    @Test
    public void printAllCities(){
        List<City> cities = cityRepository.findAll();
        System.out.println(cities.size());
        System.out.println("cities = " + cities);
    }

    @Test
    public void findAndDeleteCityByPostcode(){
        long amountOfCityRecords = cityRepository.count();
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
        assertEquals(amountOfCityRecords, cityRepository.count());
    }
}