package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pl.internet_shop.entity.Product;
import pl.internet_shop.entity.User;
import pl.internet_shop.service.MyUserDetailsService;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private MyUserDetailsService userDetailsService;

    @DeleteMapping("/api/workers/{id}")
    public String deleteUser(@PathVariable("id") Long aUserId){
        userDetailsService.deleteUserById(aUserId);
        return "User with ID "+aUserId+" has been deleted successfully!";
    }

    @GetMapping("/api/workers")
    public List<User> fetchAllWorkers(){
        return userDetailsService.fetchAllWorkers();
    }

    @GetMapping("/api/users")
    public List<User> fetchAllClients(){
        return userDetailsService.fetchAllClients();
    }

    @GetMapping("/api/users/{id}")
    public String blockadeUser(@PathVariable("id") Long aUserId){
        userDetailsService.blockadeUserById(aUserId);
        return "User with ID "+aUserId+" has been blocked successfully!";
    }
}
