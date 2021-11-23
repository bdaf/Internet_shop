package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Deliverer;
import pl.internet_shop.entity.Delivery;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class DeliveryRepositoryTest {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private DelivererRepository delivererRepository;

    @Test
    void addAndThenPrintAndThenDeleteDelivery() {
        Deliverer deliverer = DelivererRepository.getInstanceForTests();

        Delivery delivery = DeliveryRepository.getInstanceForTests();

        Long amountOfDeliverers = delivererRepository.count();
        Long amountOfDeliveries = deliveryRepository.count();

        deliveryRepository.save(delivery);
        assertEquals(amountOfDeliverers+1, delivererRepository.count());
        assertEquals(amountOfDeliveries+1, deliveryRepository.count());

        List<Deliverer> deliverers = delivererRepository.findAll();
        List<Delivery> deliveries = deliveryRepository.findAll();
        System.out.println("deliverers = " + deliverers);
        System.out.println("deliveries = " + deliveries);

        deliveryRepository.delete(delivery);
        delivererRepository.delete(deliverer);
        assertEquals(amountOfDeliverers, delivererRepository.count());
        assertEquals(amountOfDeliveries, deliveryRepository.count());
    }
}