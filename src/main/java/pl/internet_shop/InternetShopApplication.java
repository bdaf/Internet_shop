package pl.internet_shop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pl.internet_shop.delivery.Deliverer;
import pl.internet_shop.delivery.DelivererRepository;

@SpringBootApplication
public class InternetShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(InternetShopApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner (DelivererRepository aDelivererRepository) {
		return args -> {
			aDelivererRepository.save(new Deliverer("Rafał", "Zarowski", 997));
		};
	}
}
