package pl.internet_shop.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "IS_gallery")
public class Gallery {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gallery_sequences")
    @SequenceGenerator(name = "gallery_sequences", sequenceName = "gallery_sequences", allocationSize = 1)
    @Column(name = "gallery_id", nullable = false)
    private Long galleryId;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "gallery_id", referencedColumnName = "gallery_id")
    private List<Photo> photos;

    public void addPhoto(Photo aPhoto){
        if(photos==null) photos = new ArrayList<>();
        photos.add(aPhoto);
    }
}
