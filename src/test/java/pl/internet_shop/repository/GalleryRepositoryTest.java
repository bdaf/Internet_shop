package pl.internet_shop.repository;

import org.hibernate.Hibernate;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Gallery;
import pl.internet_shop.entity.Photo;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class GalleryRepositoryTest {

    @Autowired
    private GalleryRepository galleryRepository;

    @Autowired
    private PhotoRepository photoRepository;

    @Test
    void saveGalleryWith2PhotosThenPrintAllThenDeleteIt(){
        Long amountOfGalleries = galleryRepository.count();
        Long amountOfPhotos = photoRepository.count();

        Photo photo1 = Photo.builder().url("https://www.laczynasmuzyka.pl/wp-content/uploads/2018/10/owca3.jpg").build();
        Photo photo2 = Photo.builder().url("https://i.ytimg.com/vi/3X6mr8VglWc/maxresdefault.jpg").build();

        Gallery gallery = new Gallery();
        gallery.addPhoto(photo1);
        gallery.addPhoto(photo2);

        galleryRepository.save(gallery);

        assertEquals(amountOfGalleries+1, galleryRepository.count());
        assertEquals(amountOfPhotos+2, photoRepository.count());

        List<Gallery> galleries = galleryRepository.findAll();
        System.out.println("galleries = " + galleries);
        List<Photo> photos = photoRepository.findAll();
        System.out.println("photos = " + photos);

        galleryRepository.delete(gallery);

        assertEquals(amountOfGalleries, galleryRepository.count());
        assertEquals(amountOfPhotos, photoRepository.count());
    }
}