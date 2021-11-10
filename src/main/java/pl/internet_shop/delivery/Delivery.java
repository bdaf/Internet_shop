package pl.internet_shop.delivery;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.GenerationType.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "delivery", uniqueConstraints = {
        @UniqueConstraint(name = "delivery_name_unique", columnNames = "name")
})
public class Delivery {

    public Delivery(String aName, Deliverer aDeliverer) {
        name = aName;
        deliverer = aDeliverer;
    }

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "delivery_sequence")
    @SequenceGenerator(name = "delivery_sequence", sequenceName = "delivery_sequence", allocationSize = 1)
    @Column(name = "deliveryId", nullable = false, updatable = false)
    private Long delivery_id;

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "delivererId")
    private Deliverer deliverer;
}
