package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Deliverer;
import pl.internet_shop.entity.Order;
import pl.internet_shop.entity.Product;
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
    public List<Order> getAllOrder() {
        List<Order> orders = orderRepository.findAllOrdersWithProductsWithGalleriesInIt();
        return orders;
    }


    @Override
    public Order addOrder(Order aOrder) {

        // check if products in order are not in other orders (if are for sale), if they are in database and if amount of it is big enough
        for (Product p : aOrder.getProducts()) {
            if(!p.isForSale()) throw new IllegalStateException("Product "+p.getName()+" with Id "+p.getProductId()+" is not for sale - maybe already assigned to another order.");
            Product productFromDatabase = productService.fetchProductForSaleById(p.getProductId());
            if(productFromDatabase == null)
                throw new IllegalStateException("Product is null in database");
            if(productFromDatabase.getAmount() < p.getAmount() || p.getAmount() < 1)
                throw new IllegalStateException("Product "+p.getName()+" with Id "+p.getProductId()+" too large amount of product, you want "+p.getAmount()+" and we have only "+productFromDatabase.getAmount());
        }

        // decrease amount of product and save new to database
        for (Product p : aOrder.getProducts()) {
            // decreasing amount of product
            Product productFromDatabase = productService.fetchProductForSaleById(p.getProductId());
            productFromDatabase.setAmount(productFromDatabase.getAmount() - p.getAmount());
            productService.saveProduct(productFromDatabase);
            // creating new product
            p.setProductId(null);
            p.setForSale(false);
            productFromDatabase = productService.addProductAndSave(p);
            p.setProductId(productFromDatabase.getProductId());
        }

        // take deliverer in that way in order to create new one if with the same phone number already exists in DB
        Deliverer delivererToAddToOrder = delivererService.saveDelivererIfNotExistsByPhoneNumber(aOrder.getDelivery().getDeliverer());

        // adding maybe existing deliverer to order
        aOrder.getDelivery().setDeliverer(delivererToAddToOrder);

        // it's in that way because of lazy initialization of gallery in product
        Order orderWithId = orderRepository.save(aOrder);
        Order resultOrderWithProductsWithGalleries = orderRepository.findOrderWithProductsAndGalleriesInIt(orderWithId.getOrderId());

        //

        // set order name and delivery name
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
        Order orderToUpdate = orderRepository.findOrderWithProductsAndGalleriesInIt(aOrderId);

        if (Objects.nonNull(aOrder.getStatus()) && !aOrder.getStatus().equalsIgnoreCase("")) {
            orderToUpdate.setStatus(aOrder.getStatus());
        }

        return orderRepository.save(orderToUpdate);
    }
}
