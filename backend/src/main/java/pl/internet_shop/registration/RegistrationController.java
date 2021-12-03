package pl.internet_shop.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping("/registration")
    public void register(@RequestBody RegistrationRequest request) {
        registrationService.register(request);
    }

    @PostMapping("/worker/registration")
    public void registerWorker(@RequestBody RegistrationRequest request) {registrationService.register(request);}
}