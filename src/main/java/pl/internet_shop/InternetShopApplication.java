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

	@Bean
	CommandLineRunner commandLineRunner (DelivererRepository aDelivererRepository,
										 DeliveryRepository aDeliveryRepository,
										 AddressRepository aAddressRepository,
										 CityRepository aCityRepository) {
		return args -> {
			Deliverer maria = new Deliverer("Rafał", "Zarowski", 997);
			Deliverer maria1 = new Deliverer("Rafał", "Zarowski", 998);
			aDelivererRepository.save(maria);
			aDelivererRepository.save(maria1);
			aDeliveryRepository.save(new Delivery("order_123", maria));
			aDeliveryRepository.save(new Delivery("order_122", maria));

			City bialystok_15 = new City("Bialystok", "15-324", "Poland");
			City bialystok_14 = new City("Bialystok", "14-324", "Poland");
			aCityRepository.save(bialystok_15);
			aCityRepository.save(bialystok_14);
			aAddressRepository.save(new Address("Kwiatowa","25a",bialystok_15));
			aAddressRepository.save(new Address("Wesola","13",bialystok_14));
			aAddressRepository.save(new Address("Wesola","15",bialystok_14));
		};
	}
}
