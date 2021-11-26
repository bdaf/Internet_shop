package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {

    Order findByName(String aName);

    static Order getInstanceForTests() {
        return Order.builder()
                .user(UserRepository.getInstanceForTests())
                .delivery(DeliveryRepository.getInstanceForTests())
                .name("TestOrderName")
                .build();
    }
}
