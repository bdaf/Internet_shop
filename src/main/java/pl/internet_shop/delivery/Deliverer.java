package pl.internet_shop.delivery;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.GenerationType.SEQUENCE;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "deliverer", uniqueConstraints = {
        @UniqueConstraint(name = "phone_number_unique", columnNames = "phoneNumber")
})
public class Deliverer {

    @Id
    @SequenceGenerator(name = "deliverer_sequence", sequenceName = "deliverer_sequence", allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "deliverer_sequence")
    @Column(name = "delivererId", updatable = false, nullable = false)
    private long delivererId;

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Column(name = "surname", length = 70, nullable = false)
    private String surname;

    @Column(name = "phoneNumber", length = 12, nullable = false)
    private int phoneNumber;

    public Deliverer(String aName, String aSurname, int aPhoneNumber) {
        name = aName;
        surname = aSurname;
        phoneNumber = aPhoneNumber;
    }
}
