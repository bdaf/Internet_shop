package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.City;

public interface CityRepository  extends JpaRepository<City,Long> {
}
