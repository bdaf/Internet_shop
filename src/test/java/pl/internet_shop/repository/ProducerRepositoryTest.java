package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Producer;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ProducerRepositoryTest {

    @Autowired
    ProducerRepository producerRepository;

    @Test
    void saveProducerThenPrintAllThenDeleteIt(){
        Long amountOfProducers = producerRepository.count();

        Producer producer = ProducerRepository.getInstanceForTests();

        producerRepository.save(producer);
        assertEquals(amountOfProducers+1, producerRepository.count());

        List<Producer> producers = producerRepository.findAll();
        System.out.println("producers = " + producers);

        producerRepository.delete(producer);
        assertEquals(amountOfProducers, producerRepository.count());
    }
}