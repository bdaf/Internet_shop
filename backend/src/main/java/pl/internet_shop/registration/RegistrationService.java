package pl.internet_shop.registration;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Address;
import pl.internet_shop.entity.City;
import pl.internet_shop.entity.Company;
import pl.internet_shop.entity.User;
import pl.internet_shop.service.AddressService;
import pl.internet_shop.service.CityService;
import pl.internet_shop.service.CompanyService;
import pl.internet_shop.service.MyUserDetailsService;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

import static pl.internet_shop.entity.User.WORKER;
import static pl.internet_shop.entity.User.ADMIN;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final MyUserDetailsService myUserDetailsService;
    private final CityService cityService;
    private final AddressService addressService;
    private final CompanyService companyService;

    public String register(RegistrationRequest request, String siteURL, String role) throws MessagingException, UnsupportedEncodingException {
        myUserDetailsService.checkUserData(request.getUserName(), request.getEmail());
        if( role == WORKER || role == ADMIN) {
            myUserDetailsService.signUpUser(request.getUserName(), request.getSurname(), request.getName(), request.getEmail(), request.getPassword(), request.getPhoneNumber(), null, null, role, siteURL);
        }
        else {
            Company company = null;
            if (request.getCompanyName() != null) {
                company = companyService.saveCompany(request.getCompanyName(), request.getNip());
            }
            City city = cityService.saveCity(request.getTownName(), request.getPostCode(), request.getCountry());
            Address address = addressService.saveAddress(city, request.getStreet(), request.getHouseNumber());
            myUserDetailsService.signUpUser(request.getUserName(), request.getSurname(), request.getName(), request.getEmail(), request.getPassword(), request.getPhoneNumber(), address, company, role, siteURL);
        }
        return "Done";
    }

    public boolean verify(String code) {
          return myUserDetailsService.verify(code);
    }
}