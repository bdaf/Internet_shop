package pl.internet_shop.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "city")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    @SequenceGenerator(name = "city_sequence", sequenceName = "city_sequence", allocationSize = 1)
    @Column(name = "city_id", nullable = false)
    private Long cityId;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "postcode", nullable = false, length = 10)
    private String postcode;

    @Column(name = "country", nullable = false, length = 50)
    private String country;

    @OneToMany(mappedBy = "city")
    private List<Address> addresses;

}

