package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Producer;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.ProducerRepository;

import java.util.List;
import java.util.Objects;

import static pl.internet_shop.entity.Producer.UNKNOWN;

@Service
public class ProducerServiceImpl implements ProducerService{

    @Autowired
    private ProducerRepository producerRepository;

    @Override
    public Producer saveProducerOfProduct(Product aProduct) {
        String nameOfProducer = UNKNOWN;
        String nipOfProducer = UNKNOWN;

        // checking if producer is added, if not, we add it default "UNKNOWN"
        if(aProduct.getProducer() != null){
            nameOfProducer = aProduct.getProducer().getNameOfCompany();
            nipOfProducer = aProduct.getProducer().getNip();
        }

        // add category to DB if another with the same name isn't there
        Producer producer = producerRepository.findProducerByNip(nipOfProducer);
        if(producer == null){
            producer = Producer.builder()
                    .nameOfCompany(nameOfProducer)
                    .nip(nipOfProducer).build();
        }

        return producerRepository.save(producer);
    }

    @Override
    public List<Producer> fetchAllProducers() {
        return producerRepository.findAll();
    }

    @Override
    public Producer saveProducer(Producer aProducer) {
        Producer producer = producerRepository.findProducerByNip(aProducer.getNip());
        if(producer != null) throwExceptionAboutTheSameNip();
        return producerRepository.save(aProducer);
    }

    // cannot delete if it's linked to some product
    @Override
    public void deleteProducerById(Long aProducerId) {
        Producer producerToDelete = producerRepository.findById(aProducerId).get();
        producerRepository.delete(producerToDelete);
    }
    @Override
    public Producer updateProducerById(Producer aProducer, Long aProducerId) {

        Producer resultProducer = producerRepository.findById(aProducerId).get();

        if(Objects.nonNull(aProducer.getNameOfCompany()) && !aProducer.getNameOfCompany().equalsIgnoreCase("")){
            resultProducer.setNameOfCompany(aProducer.getNameOfCompany());
        }
        if(Objects.nonNull(aProducer.getNip()) && !aProducer.getNip().equalsIgnoreCase("")){
            Producer producerFetchedByNip = producerRepository.findProducerByNip(aProducer.getNip());
            if(producerFetchedByNip != null && producerFetchedByNip.getProducerId() != aProducerId)
                throwExceptionAboutTheSameNip();
            resultProducer.setNip(aProducer.getNip());
        }

        return producerRepository.save(resultProducer);
    }

    private void throwExceptionAboutTheSameNip() {
        throw new IllegalArgumentException("Producer with the same nip already exists in database.");
    }
}
