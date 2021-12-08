package pl.internet_shop.service;

import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Address;
import pl.internet_shop.entity.Company;
import pl.internet_shop.entity.Product;
import pl.internet_shop.entity.User;
import pl.internet_shop.repository.UserRepository;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public MyUserDetailsService(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(userName);
        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + userName));
        return user.map(MyUserDetails::new).get();
    }
    public void checkUserData(String userName, String email) throws MessagingException, UnsupportedEncodingException{
        boolean userExists = userRepository
                .findByEmail(email)
                .isPresent();
        if (userExists) {

            throw new IllegalStateException("email already taken");
        }
        userExists = userRepository.findByUserName(userName).isPresent();
        if(userExists) {
            throw new IllegalStateException("username already taken");
        }
    }
    public User signUpUser(String userName, String surname, String name, String email, String password, String phoneNumber, Address address, Company company, String role ,String siteURL) throws MessagingException, UnsupportedEncodingException {
        String encodedPassword = bCryptPasswordEncoder.encode(password);

       User user = User.builder()
               .userName(userName)
               .name(name)
               .surname(surname)
               .email(email)
               .password(encodedPassword)
               .company(company)
               .phoneNumber(phoneNumber)
               .address(address)
               .role(role)
               .blocked(false)
               .build();

        String randomCode = RandomString.make(64);
        user.setVerificationCode(randomCode);
        user.setEnabled(false);
        sendVerificationEmail(user, siteURL);
        return userRepository.save(user);

    }


    public void deleteUserById(Long aUserId) {
        userRepository.deleteById(aUserId);
    }

    public void blockadeUserById(Long aUserId) {
        User user = userRepository.findByUserId(aUserId);
    user.setBlocked(true);
    userRepository.save(user);}

    public List<User> fetchAllWorkers() {
        return userRepository.findAllWorkers();
    }
    public List<User> fetchAllClients() {
        return userRepository.findAllClients();
    }

    private void sendVerificationEmail(User user, String siteURL)
            throws MessagingException, UnsupportedEncodingException {
        String toAddress = user.getEmail();
        String fromAddress = "bazydanych647@gmail.com";
        String senderName = "NUIT";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "NUIT.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getName());
        String verifyURL = siteURL + "/verify?code=" + user.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);

        mailSender.send(message);

    }

    public boolean verify(String verificationCode) {
        User user = userRepository.findByVerificationCode(verificationCode);

        if (user == null || user.isEnabled()) {
            return false;
        } else {
            user.setVerificationCode(null);
            user.setEnabled(true);
            userRepository.save(user);

            return true;
        }

    }

}
