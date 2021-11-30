package pl.internet_shop.registration;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String userName;
    private final String name;
    private final String surname;
    private final String email;
    private final String password;
    private final String phoneNumber;
    private final String houseNumber;
    private final String street;
    private final String country;
    private final String townName;
    private final String postCode;
}