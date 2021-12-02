package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/api/producers/save")
    public Producer saveProducer(@RequestBody Producer aProducer){
        return producerService.saveProducer(aProducer);
    }

    @DeleteMapping("/api/producers/{id}")
    public String deleteProducer(@PathVariable("id") Long aProducerId){
        producerService.deleteProducerById(aProducerId);
        return "Producer with ID "+aProducerId+" has been deleted successfully!";
    }

    @PutMapping("/api/producers/{id}")
    public Producer updateProducer(@PathVariable("id") Long aProducerId, @RequestBody Producer aProducer){
        return producerService.updateProducerById(aProducer,aProducerId);
    }

}
