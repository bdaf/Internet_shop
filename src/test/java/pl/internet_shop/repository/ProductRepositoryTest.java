package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.*;

import java.util.List;

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

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private DelivererRepository delivererRepository;

    @Test
    void saveTwoProductsWithProducerAndCategoryThenPrintAllThenDeleteIt(){
        Long amountOfProducts = productRepository.count();
        Long amountOfProducers = producerRepository.count();
        Long amountOfCategories = categoryRepository.count();
        Long amountOfOrders = orderRepository.count();
        Long amountOfDeliveries = deliveryRepository.count();
        Long amountOfCities = cityRepository.count();
        Long amountOfCustomers = customerRepository.count();
        Long amountOfAddresses = addressRepository.count();
        Long amountOfDeliverers = delivererRepository.count();

        Customer customer = CustomerRepository.getInstanceForTests();
        Address address = customer.getAddress();
        City city = address.getCity();
        Order order = Order.builder()
                .customer(customer)
                .delivery(DeliveryRepository.getInstanceForTests())
                .name(TEST_ORDER_NAME)
                .build();
        Deliverer deliverer = order.getDelivery().getDeliverer();

        customerRepository.save(customer);
        assertEquals(amountOfCities+1, cityRepository.count());

        orderRepository.save(order);
        assertEquals(amountOfDeliveries+1, deliveryRepository.count());

        order = orderRepository.findByName(TEST_ORDER_NAME);

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
        assertEquals(2, orderRepository.findByName(TEST_ORDER_NAME).getProducts().size());


        List<Order> orders = orderRepository.findAll();
        System.out.println("orders = " + orders);

        List<Category> categories = categoryRepository.findAll();
        System.out.println("categories = " + categories);

        List<Producer> producers = producerRepository.findAll();
        System.out.println("producers = " + producers);

        List<Product> products = productRepository.findAll();
        System.out.println("products = " + products);

        orderRepository.delete(order);
        assertEquals(amountOfOrders, orderRepository.count());
        assertEquals(amountOfDeliveries, deliveryRepository.count());

        assertEquals(amountOfDeliverers+1, delivererRepository.count());
        delivererRepository.delete(deliverer);
        assertEquals(amountOfDeliverers, delivererRepository.count());

        assertEquals(amountOfCategories+1, categoryRepository.count());
        assertEquals(amountOfProducers+1, producerRepository.count());
        assertEquals(amountOfProducts, productRepository.count());

        categoryRepository.delete(category);
        producerRepository.delete(producer);

        assertEquals(amountOfCategories, categoryRepository.count());
        assertEquals(amountOfProducers, producerRepository.count());

        assertEquals(amountOfCities+1, cityRepository.count());

        customerRepository.delete(customer);
        assertEquals(amountOfCities+1, cityRepository.count());
        assertEquals(amountOfCustomers, customerRepository.count());
        assertEquals(amountOfAddresses, addressRepository.count());

        cityRepository.delete(city);
        assertEquals(amountOfCities, cityRepository.count());

    }

    @Test
    void saveProductsWithoutOrderAndDeleteIt(){
        Long amountOfProducts = productRepository.count();
        Long amountOfProducers = producerRepository.count();
        Long amountOfCategories = categoryRepository.count();

        Product product1 = ProductRepository.getInstanceForTests();
        Product product2 = ProductRepository.getInstanceForTests();

        Producer producer = ProducerRepository.getInstanceForTests();
        Category category = CategoryRepository.getInstanceForTests();

        product1.setProducer(producer);
        product1.setCategory(category);
        product2.setProducer(producer);
        product2.setCategory(category);

        producerRepository.save(producer);
        categoryRepository.save(category);
        productRepository.save(product1);
        assertEquals(amountOfProducts+1, productRepository.count());
        assertEquals(amountOfProducers+1, producerRepository.count());

        productRepository.save(product2);
        assertEquals(amountOfProducts+2, productRepository.count());

        productRepository.delete(product1);
        productRepository.delete(product2);
        assertEquals(amountOfProducts, productRepository.count());

        producerRepository.delete(producer);
        assertEquals(amountOfProducers, producerRepository.count());

        categoryRepository.delete(category);
        assertEquals(amountOfCategories, categoryRepository.count());
    }
}