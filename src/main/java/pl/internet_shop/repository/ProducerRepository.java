package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Producer;

public interface ProducerRepository extends JpaRepository<Producer,Long> {
}