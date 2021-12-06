package pl.internet_shop.registration;

import lombok.AllArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping("/registration")
    public void register(@RequestBody RegistrationRequest request, HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {
        registrationService.register(request, getSiteURL(servletRequest));
    }
    private String getSiteURL(HttpServletRequest request) {
        String siteURL = request.getRequestURL().toString();
        return siteURL.replace(request.getServletPath(), "");
    }
    @PostMapping("/worker/registration")
    public void registerWorker(@RequestBody RegistrationRequest request, HttpServletRequest servletRequest) throws MessagingException, UnsupportedEncodingException {registrationService.register(request, getSiteURL(servletRequest));}

    @GetMapping("/verify")
    public String verifyUser(@Param("code") String code) {
        if (registrationService.verify(code)) {
            return "verify_success";
        } else {
            return "verify_fail";
        }
    }
}