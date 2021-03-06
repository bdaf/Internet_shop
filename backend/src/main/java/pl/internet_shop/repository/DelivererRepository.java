package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Deliverer;

public interface DelivererRepository extends JpaRepository<Deliverer,Long> {
    static Deliverer getInstanceForTests() {
        return Deliverer.builder()
                .name("NDeliveryTest")
                .surname("SnDeliveryTest")
                .phoneNumber("PNDeliveryTest").build();
    }

    Deliverer findByPhoneNumber(String aPhoneNumber);
}
