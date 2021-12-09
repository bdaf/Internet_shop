package pl.internet_shop.registration;

import lombok.AllArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;

import static pl.internet_shop.entity.User.WORKER;
import static pl.internet_shop.entity.User.USER;
import static pl.internet_shop.entity.User.ADMIN;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping("/registration")
    public void register(@RequestBody RegistrationRequest request, HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {
        registrationService.register(request, getSiteURL(servletRequest), USER);
    }
    private String getSiteURL(HttpServletRequest request) {
        String siteURL = request.getRequestURL().toString();
        return siteURL.replace(request.getServletPath(), "");
    }
    @PostMapping("/worker/registration")
    public void registerWorker(@RequestBody RegistrationRequest request, HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {registrationService.register(request, getSiteURL(servletRequest), WORKER);}


    @PostMapping("/admin/registration")
    public void registerAdmin(@RequestBody RegistrationRequest request, HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {registrationService.register(request, getSiteURL(servletRequest), ADMIN);}

    @GetMapping("/verify")
    public String verifyUser(@Param("code") String code) {
        if (registrationService.verify(code)) {
            return "Weryfikacja zakończona powodzeniem.";
        } else {
            return "Coś poszło nie tak, weryfikacja zakończona niepowodzeniem.";
        }
    }
}