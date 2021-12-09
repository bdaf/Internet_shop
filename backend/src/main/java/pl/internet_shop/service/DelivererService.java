package pl.internet_shop.service;

import pl.internet_shop.entity.Deliverer;

import java.util.List;

public interface DelivererService {
    List<Deliverer> getAllDeliverers();

    Deliverer saveDelivererIfNotExistsByPhoneNumber(Deliverer aDeliverer);
}
