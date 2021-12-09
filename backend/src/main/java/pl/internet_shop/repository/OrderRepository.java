package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.internet_shop.entity.Order;
import pl.internet_shop.entity.Product;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {

    Order findByName(String aName);

    @Query("SELECT o FROM Order o LEFT JOIN FETCH o.products p LEFT join fetch p.gallery WHERE o.orderId = (:id)")
    Order findOrderWithProductsAndGalleriesInIt(@Param("id") Long aOrderId);

    @Query("SELECT distinct o FROM Order o LEFT JOIN FETCH o.products p LEFT join fetch p.gallery")
    List<Order> findAllOrdersWithProductsWithGalleriesInIt();


    static Order getInstanceForTests() {
        return Order.builder()
                .user(UserRepository.getInstanceForTests())
                .delivery(DeliveryRepository.getInstanceForTests())
                .name("TestOrderName")
                .build();
    }
}
