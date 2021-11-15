package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Delivery;

public interface DeliveryRepository extends JpaRepository<Delivery,Long> {
}
