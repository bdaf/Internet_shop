package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery,Long> {
}
