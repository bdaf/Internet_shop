package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {

    List<Order> findByName(String aName);

    static Order getInstanceForTests() {
        return Order.builder()
                .customer(CustomerRepository.getInstanceForTests())
                .delivery(DeliveryRepository.getInstanceForTests())
                .name("TestOrderName")
                .build();
    }
}
