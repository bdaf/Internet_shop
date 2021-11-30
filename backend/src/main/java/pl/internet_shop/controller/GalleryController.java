package pl.internet_shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.internet_shop.entity.Gallery;
import pl.internet_shop.service.GalleryService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GalleryController {

    @Autowired
    private GalleryService galleryService;

    @GetMapping("/api/galleries")
    public List<Gallery> fetchAllGalleries(){
        return galleryService.fetchAllGalleries();
    }

    @GetMapping("/api/products/{id}/gallery")
    public Gallery fetchGallery(@PathVariable("id") Long aProductId){
        return galleryService.fetchGalleryByProductId(aProductId);
    }

    @PostMapping("/api/products/save/gallery/{id}")
    public Gallery saveGallery(@RequestBody Gallery aGallery, @PathVariable("id") Long aProductId){
        return galleryService.saveGalleryByproductId(aGallery, aProductId);
    }

    @DeleteMapping("/api/products/{id}/gallery")
    public String deleteGalleryByProductId(@PathVariable("id") Long aProductId){
        galleryService.deleteGalleryByProductId(aProductId);
        return "Gallery in product with product ID "+aProductId+" has been deleted successfully!";
    }

    @DeleteMapping("/api/gallery/{id}")
    public String deleteGallery(@PathVariable("id") Long aGalleryId){
        galleryService.deleteGalleryById(aGalleryId);
        return "Gallery with ID "+aGalleryId+" has been deleted successfully!";
    }

    @PutMapping("/api/products/{id}/gallery")
    public Gallery updateGalleryByProductId(@PathVariable("id") Long aProductId, @RequestBody Gallery aGallery){
        return galleryService.updateGalleryByProductId(aProductId,aGallery);
    }

    @PutMapping("/api/gallery/{id}")
    public Gallery updateGallery(@PathVariable("id") Long aGalleryId, @RequestBody Gallery aGallery){
        return galleryService.updateGalleryById(aGalleryId,aGallery);
    }
}
