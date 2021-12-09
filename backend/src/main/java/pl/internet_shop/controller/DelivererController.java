package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.internet_shop.entity.Deliverer;
import pl.internet_shop.service.DelivererService;

import java.util.List;

@RequestMapping("/api/deliverers")
@RestController
public class DelivererController {

    @Autowired
    private DelivererService delivererService;

    @GetMapping
    public List<Deliverer> getAllDeliverers(){
        return delivererService.getAllDeliverers();
    }

    @PostMapping("/save")
    public Deliverer saveDeliverer(@RequestBody Deliverer aDeliverer){
        return delivererService.saveDeliverer(aDeliverer);
    }
}
