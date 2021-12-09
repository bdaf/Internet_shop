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

    Product findProductByNameAndProducerAndPriceAndForSale(String aName, Producer aProducer, Double aPrice, Boolean aForSale);

    @Query("SELECT p FROM Product p LEFT JOIN FETCH p.gallery WHERE p.productId = (:id) AND p.forSale = true")
    Product findByIdForSaleAndFetchGallery(@Param("id") Long aProductId);

    @Query("SELECT p FROM Product p LEFT JOIN FETCH p.gallery WHERE p.forSale = true")
    List<Product> findAllProductsForSaleWithGalleryAndFetchGallery();

    @Query("SELECT p FROM Product p LEFT JOIN FETCH p.gallery LEFT JOIN Order o WHERE o is null")
    List<Product> findAllProductsWithGalleryAndFetchGalleryWhereNotLinkedWithOrder();

//    @Query("SELECT p FROM Product p JOIN FETCH Order o WHERE o.products.size = 0")
//    List<Product> findAllProductsWithoutGallery();

    @Query(value = "SELECT * FROM is_product p left join fetch is_gallery g on p.gallery_id = g.gallery_id where p.order_id is null ",
            nativeQuery = true)
    List<Product> getAllProductsWhichAreNotLinkedWithAnyOrder();

    @Query(value = "SELECT p.order_id FROM is_product p where p.product_id = ?1 ",
    nativeQuery = true)
    Long getOrderIdByProductId(Long aProductId);
}
