package pl.internet_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.internet_shop.entity.Gallery;
import pl.internet_shop.entity.Product;
import pl.internet_shop.repository.GalleryRepository;

import java.util.List;
import java.util.Objects;

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
        Product product = productService.fetchProductForSaleById(aProductId);
        if(product != null){
            return product.getGallery();
        }
        return null;
    }

    //new gallery overwrites old when product already has gallery
    @Override
    public Gallery saveGalleryByproductId(Gallery aGallery, Long aProductId) {
        Product product = productService.fetchProductForSaleById(aProductId);
        product.setGallery(aGallery);
        Gallery result = galleryRepository.save(aGallery);
        productService.saveProduct(product);
        return result;
    }

    //gives null pointer exception when there is no to delete
    @Override
    public void deleteGalleryByProductId(Long aProductId) {
        Product product = productService.fetchProductForSaleById(aProductId);
        Long aGalleryId = product.getGallery().getGalleryId();
        product.setGallery(null);
        productService.saveProduct(product);
        galleryRepository.deleteById(aGalleryId);
    }

    @Override
    public Gallery updateGalleryById(Long aGalleryId, Gallery aGallery) {
        Gallery resultGallery = galleryRepository.findById(aGalleryId).get();

        if(Objects.nonNull(aGallery.getPhotos()))
            resultGallery.setPhotos(aGallery.getPhotos());

        return galleryRepository.save(resultGallery);
    }

    //throws null pointer exception for products without galleries
    @Override
    public Gallery updateGalleryByProductId(Long aProductId, Gallery aGallery) {
        Product product = productService.fetchProductForSaleById(aProductId);
        Long galleryId = product.getGallery().getGalleryId();
        return updateGalleryById(galleryId, aGallery);
    }

    //cannot delete gallery which is used by some product
    @Override
    public void deleteGalleryById(Long aGalleryId) {
        galleryRepository.deleteById(aGalleryId);
    }
}
