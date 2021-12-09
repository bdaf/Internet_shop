package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Deliverer;
import pl.internet_shop.repository.DelivererRepository;

import java.util.List;

@Service
public class DelivererServiceImpl implements DelivererService {

    @Autowired
    private DelivererRepository delivererRepository;

    @Override
    public List<Deliverer> getAllDeliverers() {
        return delivererRepository.findAll();
    }

    @Override
    public Deliverer saveDeliverer(Deliverer aDeliverer) {
        return delivererRepository.save(aDeliverer);
    }
}
