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
    public Deliverer saveDelivererIfNotExistsByPhoneNumber(Deliverer aDeliverer) {
        // check if deliverer with the same phone number exists
        Deliverer deliverer = delivererRepository.findByPhoneNumber(aDeliverer.getPhoneNumber());
        //if yes, don't save new, save old (do nothing)
        if(deliverer != null) return delivererRepository.save(deliverer);
        //if no, save new
        return delivererRepository.save(aDeliverer);
    }
}
