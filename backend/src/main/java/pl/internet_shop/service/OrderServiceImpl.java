package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Order;
import pl.internet_shop.repository.OrderRepository;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> fetchAllOrder() {
        return orderRepository.findAll();
    }

    @Override
    public Order saveOrder(Order aOrder) {
        return orderRepository.save(aOrder);
    }

    @Override
    public void deleteOrderById(Long aOrderId) {
        orderRepository.deleteById(aOrderId);
    }

    @Override
    public Order fetchOrderById(Long aOrderId) {
        return orderRepository.findById(aOrderId).get();
    }
}
