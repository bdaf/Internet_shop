package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Address;
import pl.internet_shop.entity.City;
import pl.internet_shop.repository.AddressRepository;


@Service
public class AddressServiceImpl implements AddressService{
    @Autowired
    private AddressRepository addressRepository;

    @Override
    public Address saveAddress(City city, String street, String houseNumber) {
        Address address = Address.builder()
                .houseNumber(houseNumber)
                .street(street)
                .city(city)
                .build();

        return addressRepository.save(address);
    }
}
