package pl.internet_shop.service;

import pl.internet_shop.entity.Address;
import pl.internet_shop.entity.City;

public interface AddressService {
    public Address saveAddress(City city, String street, String houseNumber);
}
