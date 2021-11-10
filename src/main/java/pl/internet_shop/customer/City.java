package pl.internet_shop.customer;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "city")
public class City {

    public City(String aName, String aPostCode, String aCountry) {
        name = aName;
        postCode = aPostCode;
        country = aCountry;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    @SequenceGenerator(name = "city_sequence", sequenceName = "city_sequence", allocationSize = 1)
    @Column(name = "cityId", nullable = false)
    private Long cityId;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "postCode", nullable = false, length = 10)
    private String postCode;

    @Column(name = "country", nullable = false, length = 50)
    private String country;

    @OneToMany(mappedBy = "city")
    private List<Address> addresses;

}

