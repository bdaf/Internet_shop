package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

    static Product getInstanceForTests(){
        return Product.builder()
                .name("TestProductName")
                .price(1D).amount(1)
                .category(CategoryRepository.getInstanceForTests())
                .producer(ProducerRepository.getInstanceForTests())
                .build();
    }
}
