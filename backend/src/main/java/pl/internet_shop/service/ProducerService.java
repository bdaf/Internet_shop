package pl.internet_shop.service;

import pl.internet_shop.entity.Producer;
import pl.internet_shop.entity.Product;

import java.util.List;

public interface ProducerService {

    Producer saveProducerOfProduct(Product aProduct);

    List<Producer> fetchAllProducers();

    Producer saveProducer(Producer aProducer);

    void deleteProducerById(Long aProducerId);

    Producer updateProducerById(Producer aProducer, Long aProducerId);
}
