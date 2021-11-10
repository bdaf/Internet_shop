package pl.internet_shop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pl.internet_shop.delivery.Deliverer;
import pl.internet_shop.delivery.DelivererRepository;
import pl.internet_shop.delivery.Delivery;
import pl.internet_shop.delivery.DeliveryRepository;

@SpringBootApplication
public class InternetShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(InternetShopApplication.class, args);
	}



	@Bean
	CommandLineRunner commandLineRunner (DelivererRepository aDelivererRepository, DeliveryRepository aDeliveryRepository) {
		return args -> {
			Deliverer maria = new Deliverer("Rafał", "Zarowski", 997);
			aDelivererRepository.save(maria);
			aDeliveryRepository.save(new Delivery("order_123", maria));
			aDeliveryRepository.save(new Delivery("order_122", maria));
		};
	}
}
