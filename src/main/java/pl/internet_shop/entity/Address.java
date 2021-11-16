package pl.internet_shop.entity;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "IS_address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "address_sequence")
    @SequenceGenerator(name = "address_sequence", sequenceName = "address_sequence", allocationSize = 1)
    @Column(name = "address_id", nullable = false)
    private Long addressId;

    @Column(name = "street", nullable = false, length = 50)
    private String street;

    @Column(name = "house_number", nullable = false, length = 5)
    private String houseNumber;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

}
