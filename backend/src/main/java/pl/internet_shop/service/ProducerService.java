package pl.internet_shop.service;

import pl.internet_shop.entity.Producer;
import pl.internet_shop.entity.Product;

public interface ProducerService {

    Producer saveProducerOfProduct(Product aProduct);
}
