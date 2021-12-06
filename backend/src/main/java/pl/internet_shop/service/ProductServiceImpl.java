package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Category;
import pl.internet_shop.entity.Discount;
import pl.internet_shop.entity.Producer;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.ProductRepository;

import java.sql.Date;
import java.util.List;
import java.util.Objects;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private DiscountService discountService;

    @Autowired
    private ProducerService producerService;


    @Override
    public Product addProductAndSave(Product aProduct) {
        //save category and producer if they are not in database, or they weren't defined
        Category category = categoryService.addCategoryOfProduct(aProduct);
        aProduct.setCategory(category);

        Producer producer = producerService.saveProducerOfProduct(aProduct);
        aProduct.setProducer(producer);

        //if the same Product is in DB, increase amount, otherwise save new product in DB
        Product product = productRepository.findProductByNameAndProducerAndPrice(aProduct.getName(), aProduct.getProducer(), aProduct.getPrice());
        if (Objects.isNull(product)) {
            product = aProduct;
        } else product.setAmount(product.getAmount() + aProduct.getAmount());

        return productRepository.save(product);
    }

    @Override
    public void deleteProductById(Long aProductId) {
        productRepository.deleteById(aProductId);
    }

    @Override
    public Product updateProductById(Long aProductId, Product aProduct) {
        Product resultProduct = fetchProductById(aProductId);

        if (Objects.nonNull(aProduct.getName()) && !aProduct.getName().equalsIgnoreCase(""))
            resultProduct.setName(aProduct.getName());
        if (Objects.nonNull(aProduct.getDescription()) && !aProduct.getDescription().equalsIgnoreCase(""))
            resultProduct.setDescription(aProduct.getDescription());
        if (Objects.nonNull(aProduct.getPrice()) && aProduct.getPrice() != 0)
            resultProduct.setPrice(aProduct.getPrice());
        if (Objects.nonNull(aProduct.getAmount()) && aProduct.getAmount() != 0)
            resultProduct.setAmount(aProduct.getAmount());

        return productRepository.save(resultProduct);
    }

    @Override
    public Product fetchProductById(Long aProductId) {
        Product product = productRepository.findByIdAndFetchGallery(aProductId);
        if (product == null) {
            product = productRepository.findById(aProductId).get();
        }
        // take category of product
        Long categoryId = product.getCategory().getCategoryId();
        List<Discount> discounts = categoryService.findById(categoryId).getDiscounts();
        // count the biggest discount which product has
        Discount theBiggestDiscount = null;
        Date now = new Date(System.currentTimeMillis()); // if date includes now
        for (int i = 0; i < discounts.size(); i++) {
            if (theBiggestDiscount == null || ( theBiggestDiscount.getPercent() < discounts.get(i).getPercent()
            && theBiggestDiscount.getFromDate().getTime() < now.getTime() && now.getTime() < theBiggestDiscount.getToDate().getTime() ));
                theBiggestDiscount = discounts.get(i);
        }
        if (theBiggestDiscount != null){
            product.setPrice(product.getPrice() * (1-theBiggestDiscount.getPercent()) );
        }
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
