package pl.internet_shop.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pl.internet_shop.entity.Photo;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PhotoRepositoryTest {

    @Autowired
    private PhotoRepository photoRepository;

    @Test
    void savePhotoThenPrintAllThenDeleteIt(){
        Photo photo = PhotoRepository.getInstanceForTests();
        Long amountOfPhotos = photoRepository.count();

        photoRepository.save(photo);
        assertEquals(amountOfPhotos+1,photoRepository.count());

        List<Photo> photos = photoRepository.findAll();
        System.out.println("photos = " + photos);

        photoRepository.delete(photo);
        assertEquals(amountOfPhotos, photoRepository.count());
    }
}