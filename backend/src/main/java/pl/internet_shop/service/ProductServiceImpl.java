package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.ProductRepository;

import java.util.List;

@Service
public class ProductServiceImpl implements  ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> fetchAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product saveProduct(Product aProduct) {
        //if the same Product is in DB, increase amount, otherwise save new in DB
        Product product = productRepository.findProductByNameAndProducerAndPrice(aProduct.getName(), aProduct.getProducer(), aProduct.getPrice());
        if(product == null){
            product = aProduct;
        } else product.setAmount(product.getAmount()+aProduct.getAmount());

        return productRepository.save(product);
    }
}
