package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.internet_shop.entity.Producer;
import pl.internet_shop.service.ProducerService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProducerController {

    @Autowired
    private ProducerService producerService;

    @GetMapping("/api/producers")
    public List<Producer> fetchAllProducers(){
        return producerService.fetchAllProducers();
    }
}
