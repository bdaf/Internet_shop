package pl.internet_shop.repository;

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

    @Test
    void saveOrderWithDeliveryAndCustomerThenPrintAllThenDeleteIt() {
        Long amountOfDeliverers = delivererRepository.count();
        Long amountOfDeliveries = deliveryRepository.count();
        Long amountOfCustomers = customerRepository.count();
        Long amountOfCompanies = companyRepository.count();
        Long amountOfAddressRecords = addressRepository.count();
        Long amountOfCityRecords = cityRepository.count();

        City city = CityRepository.getInstanceForTests();
        Address address = AddressRepository.getInstanceForTests();
        address.setCity(city);
        Company company = CompanyRepository.getInstanceForTests();
        Deliverer deliverer = DelivererRepository.getInstanceForTests();
        Delivery delivery = DeliveryRepository.getInstanceForTests();
        delivery.setDeliverer(deliverer);
        Order order = OrderRepository.getInstanceForTests();
        Customer customer = Customer.builder()
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

        orderRepository.save(order);

        assertEquals(amountOfDeliverers + 1, delivererRepository.count());
        assertEquals(amountOfDeliveries + 1, deliveryRepository.count());
        assertEquals(amountOfCustomers + 1, customerRepository.count());
        assertEquals(amountOfCompanies + 1, companyRepository.count());
        assertEquals(amountOfAddressRecords + 1, addressRepository.count());
        assertEquals(amountOfCityRecords + 1, cityRepository.count());

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

        assertEquals(amountOfDeliveries, deliveryRepository.count());
        assertEquals(amountOfDeliverers + 1, delivererRepository.count());
        assertEquals(amountOfCustomers + 1, customerRepository.count());
        assertEquals(amountOfCompanies + 1, companyRepository.count());
        assertEquals(amountOfAddressRecords + 1, addressRepository.count());
        assertEquals(amountOfCityRecords + 1, cityRepository.count());

        delivererRepository.delete(deliverer);
        customerRepository.delete(customer);

        assertEquals(amountOfDeliverers, delivererRepository.count());
        assertEquals(amountOfCustomers, customerRepository.count());
        assertEquals(amountOfCompanies, companyRepository.count());
        assertEquals(amountOfAddressRecords, addressRepository.count());
        assertEquals(amountOfCityRecords + 1, cityRepository.count());

        cityRepository.delete(city);
        assertEquals(amountOfCityRecords, cityRepository.count());
    }
}