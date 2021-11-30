package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Address;
import pl.internet_shop.entity.User;
import pl.internet_shop.repository.UserRepository;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(userName);
        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));
        return user.map(MyUserDetails::new).get();
    }

    public User signUpUser(String userName, String surname, String name, String email, String password, String phoneNumber, Address address, String role) {
        boolean userExists = userRepository
                .findByEmail(email)
                .isPresent();

        if (userExists) {
            // TODO check of attributes are the same and
            // TODO if email not confirmed send confirmation email.

            throw new IllegalStateException("email already taken");
        }

       User user = User.builder()
               .userName(userName)
               .name(name)
               .surname(surname)
               .email(email)
               .password(password)
               .role(role)
               .phoneNumber(phoneNumber)
               .address(address)
               .company(null)
               .build();

        return userRepository.save(user);

    }


}
