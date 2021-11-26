package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Producer;

public interface ProducerRepository extends JpaRepository<Producer,Long> {
    static Producer getInstanceForTests() {
        return Producer.builder()
                .name("TestName").surname("TestSurname")
                .nip("testNip123").build();
    }

    Producer findProducerByNip(String aNip);
}
