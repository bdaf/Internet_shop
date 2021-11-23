package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {

    static Order getInstanceForTests() {
        return Order.builder()
                .customer(CustomerRepository.getInstanceForTests())
                .delivery(DeliveryRepository.getInstanceForTests())
                .build();
    }
}
