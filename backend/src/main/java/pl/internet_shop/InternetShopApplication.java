package pl.internet_shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import pl.internet_shop.repository.UserRepository;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class InternetShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(InternetShopApplication.class, args);
	}
}
