package pl.internet_shop.delivery;

import javax.persistence.*;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(
        name = "deliverer",
        uniqueConstraints = {
                @UniqueConstraint(name = "phone_number_unique", columnNames = "phoneNumber")
        }
)
public class Deliverer {

    @Id
    @SequenceGenerator(
            name = "deliverer_sequence",
            sequenceName = "deliverer_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "deliverer_sequence"
    )
    @Column(
            name = "delivererId",
            updatable = false
    )
    private long delivererId;

    @Column(
            name = "name",
            length = 50,
            nullable = false
    )
    private String name;

    @Column(
            name = "surname",
            length = 70,
            nullable = false
    )
    private String surname;

    @Column(
            name = "phoneNumber",
            length = 12,
            nullable = false
    )
    private int phoneNumber;

    public Deliverer(String aName, String aSurname, int aPhoneNumber) {
        name = aName;
        surname = aSurname;
        phoneNumber = aPhoneNumber;
    }

    public Deliverer() {}

    public long getDelivererId() {
        return delivererId;
    }

    public void setDelivererId(long aDelivererId) {
        delivererId = aDelivererId;
    }

    public String getName() {
        return name;
    }

    public void setName(String aName) {
        name = aName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String aSurname) {
        surname = aSurname;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int aPhoneNumber) {
        phoneNumber = aPhoneNumber;
    }
}
