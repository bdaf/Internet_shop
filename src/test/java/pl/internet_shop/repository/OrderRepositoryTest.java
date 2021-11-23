package pl.internet_shop.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.*;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
class OrderRepositoryTest {

    @Autowired
    DelivererRepository delivererRepository;

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    CityRepository cityRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProducerRepository producerRepository;

    private City city;
    private Address address;
    private Company company;
    private Deliverer deliverer;
    private Delivery delivery;
    private Order order;
    private Customer customer;
    private long amountOfDeliverers;
    private long amountOfDeliveries;
    private long amountOfCustomers;
    private long amountOfCompanies;
    private long amountOfAddressRecords;
    private long amountOfCities;
    private long amountOfOrders;
    private long amountOfProducts;
    private long amountOfProducers;
    private long amountOfCategories;

    @BeforeEach
    void initialize() {
        amountOfDeliveries = deliveryRepository.count();
        amountOfCategories = categoryRepository.count();
        amountOfProducers = producerRepository.count();
        amountOfCustomers = customerRepository.count();
        amountOfCompanies = companyRepository.count();
        amountOfProducts = productRepository.count();
        amountOfCities = cityRepository.count();
        amountOfOrders = orderRepository.count();
        amountOfDeliverers = delivererRepository.count();
        amountOfAddressRecords = addressRepository.count();

        city = CityRepository.getInstanceForTests();
        address = AddressRepository.getInstanceForTests();
        address.setCity(city);
        company = CompanyRepository.getInstanceForTests();
        deliverer = DelivererRepository.getInstanceForTests();
        delivery = DeliveryRepository.getInstanceForTests();
        delivery.setDeliverer(deliverer);
        order = OrderRepository.getInstanceForTests();
        customer = Customer.builder()
                .company(company)
                .address(address)
                .name("testCustomerName")
                .surname("testCustomerSurname")
                .email("testEmail@gmail.com")
                .phoneNumber("testNumber")
                .build();

        customerRepository.save(customer);

        order.setCustomer(customer);
        order.setDelivery(delivery);
    }

    @Test
    void saveOrderWithDeliveryAndCustomerWithoutProductsThenPrintAllThenDeleteIt() {
        orderRepository.save(order);

        assertEquals(amountOfDeliverers + 1, delivererRepository.count());
        assertEquals(amountOfDeliveries + 1, deliveryRepository.count());
        assertEquals(amountOfCustomers + 1, customerRepository.count());
        assertEquals(amountOfCompanies + 1, companyRepository.count());
        assertEquals(amountOfAddressRecords + 1, addressRepository.count());
        assertEquals(amountOfCities + 1, cityRepository.count());

        List<Deliverer> deliverers = delivererRepository.findAll();
        System.out.println("deliverers = " + deliverers);

        List<Delivery> deliveries = deliveryRepository.findAll();
        System.out.println("deliveries = " + deliveries);

        List<Customer> customers = customerRepository.findAll();
        System.out.println("customers = " + customers);

        List<Company> companies = companyRepository.findAll();
        System.out.println("companies = " + companies);

        List<Address> addresses = addressRepository.findAll();
        System.out.println("addresses = " + addresses);

        List<City> cities = cityRepository.findAll();
        System.out.println("cities = " + cities);

        orderRepository.delete(order);

        assertEquals(amountOfOrders, orderRepository.count());
        assertEquals(amountOfDeliveries, deliveryRepository.count());
        assertEquals(amountOfDeliverers + 1, delivererRepository.count());
        assertEquals(amountOfCustomers + 1, customerRepository.count());
        assertEquals(amountOfCompanies + 1, companyRepository.count());
        assertEquals(amountOfAddressRecords + 1, addressRepository.count());
        assertEquals(amountOfCities + 1, cityRepository.count());

        delivererRepository.delete(deliverer);
        customerRepository.delete(customer);

        assertEquals(amountOfDeliverers, delivererRepository.count());
        assertEquals(amountOfCustomers, customerRepository.count());
        assertEquals(amountOfCompanies, companyRepository.count());
        assertEquals(amountOfAddressRecords, addressRepository.count());
        assertEquals(amountOfCities + 1, cityRepository.count());

        cityRepository.delete(city);
        assertEquals(amountOfCities, cityRepository.count());
    }

    @Test
    void saveOrderWith2ProductsAndThenDeleteIt() {
        Product product1 = ProductRepository.getInstanceForTests();
        Product product2 = ProductRepository.getInstanceForTests();

        Producer producer = ProducerRepository.getInstanceForTests();
        Category category = CategoryRepository.getInstanceForTests();

        product1.setProducer(producer);
        product1.setCategory(category);
        product2.setProducer(producer);
        product2.setCategory(category);

        order.addProduct(product1);
        order.addProduct(product2);

        producerRepository.save(producer);
        assertEquals(amountOfProducers+1, producerRepository.count());

        categoryRepository.save(category);
        assertEquals(amountOfCategories+1, producerRepository.count());

        productRepository.save(product1);
        productRepository.save(product2);
        orderRepository.save(order);
        assertEquals(amountOfOrders + 1, orderRepository.count());
        assertEquals(amountOfProducts + 2, productRepository.count());

        orderRepository.delete(order);

        assertEquals(amountOfOrders, orderRepository.count());
        assertEquals(amountOfProducts, productRepository.count());

        delivererRepository.delete(deliverer);
        customerRepository.delete(customer);

        assertEquals(amountOfDeliverers, delivererRepository.count());
        assertEquals(amountOfCustomers, customerRepository.count());
        assertEquals(amountOfCompanies, companyRepository.count());
        assertEquals(amountOfAddressRecords, addressRepository.count());
        assertEquals(amountOfCities + 1, cityRepository.count());

        cityRepository.delete(city);
        assertEquals(amountOfCities, cityRepository.count());

        producerRepository.delete(producer);
        assertEquals(amountOfProducers, producerRepository.count());

        categoryRepository.delete(category);
        assertEquals(amountOfCategories, producerRepository.count());
    }
}