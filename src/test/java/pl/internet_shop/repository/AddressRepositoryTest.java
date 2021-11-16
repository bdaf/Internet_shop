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
    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private  CityRepository cityRepository;

    @Test
    void saveAddressAndPrintAllAndDelete(){
        Long amountOfAddressRecords = addressRepository.count();
        Long amountOfCityRecords = cityRepository.count();

        City city = City.builder()
                .name("addressTest")
                .country("addressCountryTest")
                .postcode("adPCTest")
                .build();
        Address address = Address.builder()
                .city(city)
                .houseNumber("5TEST")
                .street("addressTestStreet")
                .build();

        addressRepository.save(address);
        assertEquals(amountOfAddressRecords+1,addressRepository.count());
        assertEquals(amountOfCityRecords+1,cityRepository.count());

        List<Address> addresses = addressRepository.findAll();
        List<City> cities = cityRepository.findAll();
        System.out.println("addresses = " + addresses);
        System.out.println("cities = " + cities);

        addressRepository.deleteByHouseNumber("5TEST");
        assertEquals(amountOfAddressRecords,addressRepository.count());
        assertEquals(amountOfCityRecords,cityRepository.count());
    }
}