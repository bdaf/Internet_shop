package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.internet_shop.entity.Order;
import pl.internet_shop.service.OrderService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/api/orders")
    public List<Order> fetchAllOrders(){
        return orderService.getAllOrder();
    }

    @GetMapping("/api/orders/{id}")
    public Order fetchOrderById(@PathVariable("id") Long aOrderId){
        return orderService.fetchOrderById(aOrderId);
    }

    @PostMapping("/api/orders/save")
    public Order saveOrder(@RequestBody Order aOrder){
        return orderService.addOrder(aOrder);
    }

    @DeleteMapping("/api/orders/{id}")
    public String deleteOrder(@PathVariable("id") Long aOrderId){
        orderService.deleteOrderById(aOrderId);
        return "Order with ID "+aOrderId+" has been deleted successfully!";
    }

    @PutMapping("/api/orders/{id}")
    public Order updateOrder(@PathVariable("id") Long aOrderId, @RequestBody Order aOrder){
        return orderService.updateStatusInOrderById(aOrder,aOrderId);
    }
}
