package pl.internet_shop.service;

import pl.internet_shop.entity.City;

public interface CityService {
    City saveCity(String name, String postCode, String country);
}
