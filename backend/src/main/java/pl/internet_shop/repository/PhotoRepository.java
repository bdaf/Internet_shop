package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Photo;

public interface PhotoRepository extends JpaRepository<Photo,Long> {
    static Photo getInstanceForTests() {
        return Photo.builder()
                .url("https://www.laczynasmuzyka.pl/wp-content/uploads/2018/10/owca3.jpg")
                .build();
    }
}
