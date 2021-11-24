package pl.internet_shop.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/")
    public String Hello(@RequestParam(value = "name", defaultValue = "Patryk") String name) {
        return "Hello world "+name+"!";
    }
}