package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.*;

import java.util.List;
import java.util.Properties;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
class ProductRepositoryTest {

    String TEST_ORDER_NAME = "TestOrderName";

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProducerRepository producerRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Test
    void saveTwoProductsWithProducerAndCategoryThenPrintAllThenDeleteIt(){
        Long amountOfProducts = productRepository.count();
        Long amountOfProducers = producerRepository.count();
        Long amountOfCategories = categoryRepository.count();
        Long amountOfOrders = orderRepository.count();

        Customer customer = CustomerRepository.getInstanceForTests();
        Order order = Order.builder()
                .customer(customer)
                .delivery(DeliveryRepository.getInstanceForTests())
                .name(TEST_ORDER_NAME)
                .build();

        customerRepository.save(customer);
        orderRepository.save(order);
        order = orderRepository.findByName(TEST_ORDER_NAME).get(0);

        Category category = CategoryRepository.getInstanceForTests();
        Producer producer = ProducerRepository.getInstanceForTests();
        Product product1 = ProductRepository.getInstanceForTests();
        Product product2 = ProductRepository.getInstanceForTests();

        producerRepository.save(producer);
        categoryRepository.save(category);

        product1.setProducer(producer);
        product1.setCategory(category);
        product2.setProducer(producer);
        product2.setCategory(category);

        order.addProduct(product1);
        order.addProduct(product2);

        productRepository.save(product1);
        productRepository.save(product2);

        orderRepository.save(order);

        assertEquals(amountOfCategories+1, categoryRepository.count());
        assertEquals(amountOfProducers+1, producerRepository.count());
        assertEquals(amountOfProducts+2, productRepository.count());
        assertEquals(amountOfOrders+1, orderRepository.count());
        assertEquals(2, orderRepository.findByName(TEST_ORDER_NAME).get(0).getProducts().size());


        List<Order> orders = orderRepository.findAll();
        System.out.println("orders = " + orders);

        List<Category> categories = categoryRepository.findAll();
        System.out.println("categories = " + categories);

        List<Producer> producers = producerRepository.findAll();
        System.out.println("producers = " + producers);

        List<Product> products = productRepository.findAll();
        System.out.println("products = " + products);

        productRepository.delete(product1);

        assertEquals(amountOfCategories+1, categoryRepository.count());
        assertEquals(amountOfProducers+1, producerRepository.count());
        assertEquals(amountOfProducts+1, productRepository.count());

        productRepository.delete(product2);

        assertEquals(amountOfCategories+1, categoryRepository.count());
        assertEquals(amountOfProducers+1, producerRepository.count());
        assertEquals(amountOfProducts, productRepository.count());

        categoryRepository.delete(category);
        producerRepository.delete(producer);

        assertEquals(amountOfCategories, categoryRepository.count());
        assertEquals(amountOfProducers, producerRepository.count());
    }
}