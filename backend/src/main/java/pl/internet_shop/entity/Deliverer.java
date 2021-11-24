package pl.internet_shop.entity;

import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.SEQUENCE;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "is_deliverer", uniqueConstraints = {
        @UniqueConstraint(name = "phone_number_unique", columnNames = "phone_number")
})
public class Deliverer {

    @Id
    @SequenceGenerator(name = "deliverer_sequence", sequenceName = "deliverer_sequence", allocationSize = 1)
    @GeneratedValue(strategy = SEQUENCE, generator = "deliverer_sequence")
    @Column(name = "deliverer_id", nullable = false)
    private long delivererId;

    @Column(name = "name", length = 63, nullable = false)
    private String name;

    @Column(name = "surname", length = 63, nullable = false)
    private String surname;

    @Column(name = "phone_number", length = 15, nullable = false)
    private String phoneNumber;
}
