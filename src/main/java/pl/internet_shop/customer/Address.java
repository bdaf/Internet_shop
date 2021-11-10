package pl.internet_shop.customer;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "address")
public class Address {

    public Address(String aStreet, String aNumber, City aCity) {
        street = aStreet;
        number = aNumber;
        city = aCity;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "address_sequence")
    @SequenceGenerator(name = "address_sequence", sequenceName = "address_sequence", allocationSize = 1)
    @Column(name = "addressId", nullable = false)
    private Long addressId;

    @Column(name = "street", nullable = false, length = 50)
    private String street;

    @Column(name = "number", nullable = false, length = 5)
    private String number;

    @ManyToOne
    @JoinColumn(name = "cityId")
    private City city;

}
