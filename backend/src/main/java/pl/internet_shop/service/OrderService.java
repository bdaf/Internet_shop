package pl.internet_shop.service;

import pl.internet_shop.entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrder();

    Order addOrder(Order aOrder);

    void deleteOrderById(Long aOrderId);

    Order fetchOrderById(Long aOrderId);

    Order updateStatusInOrderById(Order aOrder, Long aOrderId);
}
