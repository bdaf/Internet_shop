package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Gallery;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.GalleryRepository;
import pl.internet_shop.repository.ProductRepository;

import java.util.List;

@Service
public class GalleryServiceImpl implements GalleryService{

    @Autowired
    private GalleryRepository galleryRepository;

    @Autowired
    private ProductService productService;

    @Override
    public List<Gallery> fetchAllGalleries() {
        return galleryRepository.findAll();
    }

    @Override
    public Gallery fetchGalleryByProductId(Long aProductId) {
        Product product = productService.fetchProductById(aProductId);
        if(product != null){
            return product.getGallery();
        }
        return null;
    }

    @Override
    public Gallery saveGalleryByproductId(Gallery aGallery, Long aProductId) {
        Product product = productService.fetchProductById(aProductId);
        product.setGallery(aGallery);
        Gallery result = galleryRepository.save(aGallery);
        productService.saveProduct(product);
        return result;
    }

    @Override
    public void deleteGalleryByProductId(Long aGalleryId) {
        galleryRepository.deleteById(aGalleryId);
    }

    @Override
    public Gallery updateGalleryByProductId(Long aGalleryId, Gallery aGallery) {
        return null;
    }
}
