package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.internet_shop.CustomUserDetailsService;
import pl.internet_shop.entity.User;

@RestController
public class LoginController {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @GetMapping("/home")
    public String home() {
        return "This is home Page";
    }

    @GetMapping("/admin")
    public String admin() {
        return "This is admin Page";
    }

    @PostMapping("/adduser")
    public User addUser(@RequestBody User aUser) {
     return customUserDetailsService.saveUser(aUser);
    }
}
