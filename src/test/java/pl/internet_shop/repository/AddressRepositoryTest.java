package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Address;
import pl.internet_shop.entity.City;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class AddressRepositoryTest {
    public static final String TEST_HOUSE_NUMBER = "5TEST_";
    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private  CityRepository cityRepository;

    @Test
    void saveAddressAndPrintAllAndDelete(){
        Long amountOfAddressRecords = addressRepository.count();
        Long amountOfCityRecords = cityRepository.count();

        City city = CityRepository.getInstanceForTests();
        Address address = AddressRepository.getInstanceForTests();
        address.setCity(city);
        address.setHouseNumber(TEST_HOUSE_NUMBER);

        addressRepository.save(address);
        assertEquals(amountOfAddressRecords+1,addressRepository.count());
        assertEquals(amountOfCityRecords+1,cityRepository.count());

        List<Address> addresses = addressRepository.findAll();
        List<City> cities = cityRepository.findAll();
        System.out.println("addresses = " + addresses);
        System.out.println("cities = " + cities);

        addressRepository.deleteByHouseNumber(TEST_HOUSE_NUMBER);
        assertEquals(amountOfAddressRecords,addressRepository.count());

        assertEquals(amountOfCityRecords+1,cityRepository.count());
        cityRepository.delete(city);
        assertEquals(amountOfCityRecords,cityRepository.count());
    }
}