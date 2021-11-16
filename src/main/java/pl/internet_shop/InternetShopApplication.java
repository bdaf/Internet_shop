package pl.internet_shop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pl.internet_shop.entity.Address;
import pl.internet_shop.repository.AddressRepository;
import pl.internet_shop.entity.City;
import pl.internet_shop.repository.CityRepository;
import pl.internet_shop.entity.Deliverer;
import pl.internet_shop.repository.DelivererRepository;
import pl.internet_shop.entity.Delivery;
import pl.internet_shop.repository.DeliveryRepository;

@SpringBootApplication
public class InternetShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(InternetShopApplication.class, args);
	}
// spring.datasource.url=jdbc:postgresql://localhost:5432/internet_shop
// spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
}
