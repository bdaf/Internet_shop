package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.internet_shop.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery,Long> {
    static Gallery getInstanceForTests() {
        return new Gallery();
    }

    //@Query("SELECT p FROM Gallery p JOIN FETCH p.roles WHERE p.id = (:id)")
    //public Gallery findByIdAndFetchRolesEagerly(@Param("id") Long aProductId);
}
