package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Producer;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.ProductRepository;

import java.util.List;
import java.util.Objects;

@Service
public class ProductServiceImpl implements  ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ProducerService producerService;

    @Override
    public List<Product> fetchAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product fetchProductById(Long aProductId) {
        Product product = productRepository.findById(aProductId).get();
        return product;
    }

    @Override
    public Product saveProduct(Product aProduct) {
        //save category and producer if they are not in database, or they weren't defined
        Category category = categoryService.saveCategoryOfProduct(aProduct);
        aProduct.setCategory(category);

        Producer producer = producerService.saveProducerOfProduct(aProduct);
        aProduct.setProducer(producer);

        //if the same Product is in DB, increase amount, otherwise save new product in DB
        Product product = productRepository.findProductByNameAndProducerAndPrice(aProduct.getName(), aProduct.getProducer(), aProduct.getPrice());
        if(Objects.isNull(product)){
            product = aProduct;
        } else product.setAmount(product.getAmount()+aProduct.getAmount());

        return productRepository.save(product);
    }

    @Override
    public void deleteProductById(Long aProductId) {
        productRepository.deleteById(aProductId);
    }

    @Override
    public Product updateProductById(Long aProductId, Product aProduct) {
        Product resultProduct = productRepository.findById(aProductId).get();

        if(Objects.nonNull(aProduct.getName()) && !aProduct.getName().equalsIgnoreCase(""))
            resultProduct.setName(aProduct.getName());
        if(Objects.nonNull(aProduct.getPrice()) && aProduct.getPrice() != 0)
            resultProduct.setPrice(aProduct.getPrice());
        if(Objects.nonNull(aProduct.getAmount()) && aProduct.getAmount() != 0)
            resultProduct.setAmount(aProduct.getAmount());
        // TODO make category and producer updatable
        // code below doesn't work yet
//        if(Objects.nonNull(aProduct.getProducer()) && !aProduct.getProducer().getNip().equalsIgnoreCase(resultProduct.getProducer().getNip()))
//            resultProduct.setProducer(aProduct.getProducer());
//        if(Objects.nonNull(aProduct.getCategory()) && !aProduct.getCategory().getName().equalsIgnoreCase(resultProduct.getCategory().getName()))
//            resultProduct.setCategory(aProduct.getCategory());

        return productRepository.save(resultProduct);
    }
}
