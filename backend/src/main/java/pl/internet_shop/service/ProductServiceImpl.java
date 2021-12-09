package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.*;
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

        //if the Product is not for sale but to add to some order, just create it
        if (!aProduct.isForSale()) {
            aProduct.getGallery().setGalleryId(null);
            aProduct.getGallery().getPhotos().forEach( p -> p.setPhotoId(null));
            return productRepository.save(aProduct);
        }

        //if the same Product is in DB, increase amount, otherwise save new product in DB
        Product product = productRepository.findProductByNameAndProducerAndPriceAndForSale(aProduct.getName(), aProduct.getProducer(), aProduct.getPrice(), true);
        if (product == null) product = aProduct;
        else product.setAmount(product.getAmount() + aProduct.getAmount());

        return productRepository.save(product);
    }

    @Override
    public void deleteProductById(Long aProductId) {
        productRepository.deleteById(aProductId);
    }

    @Override
    public Product updateProductById(Long aProductId, Product aProduct) {
        Product resultProduct = fetchProductForSaleById(aProductId);

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
    public Product fetchProductForSaleById(Long aProductId) {
        Product product = productRepository.findByIdForSaleAndFetchGallery(aProductId);
        if (product == null) {
            product = productRepository.findById(aProductId).get();
        }
        return getDiscountedProduct(product);
    }

    @Override
    public List<Product> fetchAllProductsForSaleWithGalleries() {
        return fetchAllProducts();
    }

    @Override
    public Product saveProduct(Product aProduct) {
        return productRepository.save(aProduct);
    }

    @Override
    public Long getOrderIdOf(Long aProductId) {
        return productRepository.getOrderIdByProductId(aProductId);
    }

    @Override
    public List<Product> fetchAllProducts() {
        List<Product> products = productRepository.findAllProductsForSaleWithGalleryAndFetchGallery();
        for (int i = 0; i < products.size(); i++) {
            products.set(i, getDiscountedProduct(products.get(i)));
        }
        return products;
    }

    private Product getDiscountedProduct(Product product) {
        // take category of product
        Long categoryId = product.getCategory().getCategoryId();
        List<Discount> discounts = categoryService.findById(categoryId).getDiscounts();
        // count the biggest discount which product has
        Discount theBiggestDiscount = null;
        Date now = new Date(System.currentTimeMillis()); // if date includes now
        for (int i = 0; i < discounts.size(); i++) {
            if (theBiggestDiscount == null || (theBiggestDiscount.getPercent() < discounts.get(i).getPercent()
                    && theBiggestDiscount.getFromDate().getTime() < now.getTime() && now.getTime() < theBiggestDiscount.getToDate().getTime()))
                ;
            theBiggestDiscount = discounts.get(i);
        }
        if (theBiggestDiscount != null) {
            product.setPrice(product.getPrice() * (1 - theBiggestDiscount.getPercent()));
        }
        return product;
    }
}
