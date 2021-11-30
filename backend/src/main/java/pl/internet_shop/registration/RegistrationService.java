package pl.internet_shop.registration;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Address;
import pl.internet_shop.entity.City;
import pl.internet_shop.entity.User;
import pl.internet_shop.service.AddressService;
import pl.internet_shop.service.CityService;
import pl.internet_shop.service.MyUserDetailsService;


@Service
@AllArgsConstructor
public class RegistrationService {

    private final MyUserDetailsService myUserDetailsService;
    private final CityService cityService;
    private final AddressService addressService;

    public String register(RegistrationRequest request) {
        City city = cityService.saveCity(request.getTownName(),request.getPostCode(),request.getCountry());
        Address address = addressService.saveAddress(city, request.getStreet(), request.getHouseNumber());
        User user = myUserDetailsService.signUpUser(request.getUserName(),request.getSurname(),request.getName(),request.getEmail(),request.getPassword(),request.getPhoneNumber(), address, request.getRole());
        return "Done";
    }
}