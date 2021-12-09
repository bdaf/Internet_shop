package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.internet_shop.entity.Producer;
import pl.internet_shop.entity.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {

    static Product getInstanceForTests(){
        return Product.builder()
                .name("TestProductName")
                .description("TestDescription")
                .price(1D).amount(1)
                .category(CategoryRepository.getInstanceForTests())
                .producer(ProducerRepository.getInstanceForTests())
                .build();
    }

    Product findProductByNameAndProducerAndPrice(String aName, Producer aProducer, Double aPrice);

    @Query("SELECT p FROM Product p JOIN FETCH p.gallery WHERE p.productId = (:id)")
    Product findByIdAndFetchGallery(@Param("id") Long aProductId);

    @Query("SELECT p FROM Product p JOIN FETCH p.gallery")
    List<Product> findAllProductsWithGalleryAndFetchGallery();

    @Query("SELECT p FROM Product p where p.gallery is null")
    List<Product> findAllProductsWithoutGallery();

    @Query(value = "SELECT p.order_id FROM Product p where p.product_id = ?1 ",
    nativeQuery = true)
    Long getOrderIdByProductId(Long aProductId);
}
