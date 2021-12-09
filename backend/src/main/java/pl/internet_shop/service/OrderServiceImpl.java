package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Deliverer;
import pl.internet_shop.entity.Order;
import pl.internet_shop.repository.OrderRepository;

import java.util.List;
import java.util.Objects;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private DelivererService delivererService;

    @Override
    public List<Order> fetchAllOrder() {
        List<Order> orders = orderRepository.findAllOrdersWithProductsWithGalleriesInIt();
        return orders;
    }


    // if order with the same products which previous order had will be saved, products from previous order will be removed and moved to that new order
    @Override
    public Order saveOrder(Order aOrder) {
        // take deliverer in that way in order to noc creating new one if with the same phone number already exists in DB
        Deliverer delivererToAddToOrder = delivererService.saveDelivererIfNotExistsByPhoneNumber(aOrder.getDelivery().getDeliverer());

        // adding maybe existing deliverer to order
        aOrder.getDelivery().setDeliverer(delivererToAddToOrder);

        // it's in that way because of lazy initialization of gallery in product
        Order orderWithId = orderRepository.save(aOrder);
        Order resultOrderWithProductsWithGalleries = orderRepository.findOrderWithProductsAndGalleriesInIt(orderWithId.getOrderId());

        resultOrderWithProductsWithGalleries.setName("Zamówienie " + resultOrderWithProductsWithGalleries.getOrderId());
        resultOrderWithProductsWithGalleries.getDelivery().setName("Przesyłka nr "+ resultOrderWithProductsWithGalleries.getDelivery().getDelivery_id());

        return orderRepository.save(resultOrderWithProductsWithGalleries);
    }

    @Override
    public void deleteOrderById(Long aOrderId) {
        orderRepository.deleteById(aOrderId);
    }

    @Override
    public Order fetchOrderById(Long aOrderId) {
        return orderRepository.findOrderWithProductsAndGalleriesInIt(aOrderId);
    }

    @Override
    public Order updateStatusInOrderById(Order aOrder, Long aOrderId) {
        Order orderToUpdate = orderRepository.findById(aOrderId).get();

        if (Objects.nonNull(aOrder.getStatus()) && !aOrder.getStatus().equalsIgnoreCase("")) {
            orderToUpdate.setStatus(aOrder.getStatus());
        }

        return orderRepository.save(orderToUpdate);
    }
}
