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
    public Product addProductAndSave(Product aProduct) {
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
        Product resultProduct = fetchProductById(aProductId);

        if(Objects.nonNull(aProduct.getName()) && !aProduct.getName().equalsIgnoreCase(""))
            resultProduct.setName(aProduct.getName());
        if(Objects.nonNull(aProduct.getDescription()) && !aProduct.getDescription().equalsIgnoreCase(""))
            resultProduct.setDescription(aProduct.getDescription());
        if(Objects.nonNull(aProduct.getPrice()) && aProduct.getPrice() != 0)
            resultProduct.setPrice(aProduct.getPrice());
        if(Objects.nonNull(aProduct.getAmount()) && aProduct.getAmount() != 0)
            resultProduct.setAmount(aProduct.getAmount());

        return productRepository.save(resultProduct);
    }

    @Override
    public Product fetchProductById(Long aProductId) {
        Product product = productRepository.findByIdAndFetchGallery(aProductId);
        if(product == null){
            product = productRepository.findById(aProductId).get();
        }
        // count the biggest discount which product has

        return product;
    }

    @Override
    public List<Product> fetchAllProductsWithGalleries() {
        return productRepository.findAllProductsWithGalleryAndFetchGallery();
    }

    @Override
    public List<Product> fetchAllProductsWithoutGalleries() {
        return productRepository.findAllProductsWithoutGallery();
    }

    @Override
    public Product saveProduct(Product aProduct) {
        return productRepository.save(aProduct);
    }

    @Override
    public List<Product> fetchAllProducts() {
        List<Product> products = productRepository.findAllProductsWithGalleryAndFetchGallery();
        products.addAll(productRepository.findAllProductsWithoutGallery());
        return products;
    }
}
