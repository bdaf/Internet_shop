package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Deliverer;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DelivererRepositoryTest {

    @Autowired
    private DelivererRepository delivererRepository;

    @Test
    void addAndThenPrintAndThenDeleteDeliverer() {
        Deliverer deliverer = Deliverer.builder()
                .name("DelivererNTEST")
                .surname("DelivererSNTEST")
                .phoneNumber("DNumTEST").build();
        Long amount = delivererRepository.count();

        delivererRepository.save(deliverer);
        assertEquals(amount+1, delivererRepository.count());

        List<Deliverer> deliverers = delivererRepository.findAll();
        System.out.println("deliverers = " + deliverers);

        delivererRepository.delete(deliverer);
        assertEquals(amount, delivererRepository.count());
    }
}