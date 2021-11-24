package pl.internet_shop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "IS_photo")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "photo_sequence")
    @SequenceGenerator(name = "photo_sequence", sequenceName = "photo_sequence", allocationSize = 1)
    @Column(name = "photo_id", nullable = false)
    private Long photoId;

    @Column(name = "url", nullable = false, length = 1023)
    private String url;
}
