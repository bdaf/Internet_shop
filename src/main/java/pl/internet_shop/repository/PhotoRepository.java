package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Photo;

public interface PhotoRepository extends JpaRepository<Photo,Long> {
}