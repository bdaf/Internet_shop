package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Producer;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.ProducerRepository;

import static pl.internet_shop.entity.Producer.UNKNOWN;

@Service
public class ProducerServiceImpl implements ProducerService{

    @Autowired
    private ProducerRepository producerRepository;

    @Override
    public Producer saveProducerOfProduct(Product aProduct) {
        String surnameOfProducer = UNKNOWN;
        String nameOfProducer = UNKNOWN;
        String nipOfProducer = UNKNOWN;

        // checking if producer is added, if not, we add it default "UNKNOWN"
        if(aProduct.getProducer() != null){
            surnameOfProducer = aProduct.getProducer().getSurname();
            nameOfProducer = aProduct.getProducer().getName();
            nipOfProducer = aProduct.getProducer().getNip();
        }

        // add category to DB if another with the same name isn't there
        Producer producer = producerRepository.findProducerByNip(nipOfProducer);
        if(producer == null){
            producer = Producer.builder()
                    .name(nameOfProducer)
                    .surname(surnameOfProducer)
                    .nip(nipOfProducer).build();
        }

        return producerRepository.save(producer);
    }
}
