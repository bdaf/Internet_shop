package pl.internet_shop.service;

import pl.internet_shop.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> fetchAllProductsWithGalleries();

    Product addProductAndSave(Product aProduct);

    Product fetchProductById(Long aProductId);

    void deleteProductById(Long aProductId);

    Product updateProductById(Long aProductId, Product aProduct);

    List<Product> fetchAllProducts();

    List<Product> fetchAllProductsWithoutGalleries();

    Product saveProduct(Product aProduct);
}
