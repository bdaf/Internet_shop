package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.City;
import pl.internet_shop.repository.CityRepository;

@Service
public class CityServiceImpl implements CityService{
    @Autowired
    CityRepository cityRepository;

    @Override
    public City saveCity(String name, String postCode, String country){
        City city = City.builder()
                .name(name)
                .country(country)
                .postcode(postCode)
                .build();
        return cityRepository.save(city);
    }
}
