package pl.internet_shop.entity;

import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "delivery", uniqueConstraints = {
        @UniqueConstraint(name = "delivery_name_unique", columnNames = "name")
})
public class Delivery {

    @Id
    @GeneratedValue(strategy = SEQUENCE, generator = "delivery_sequence")
    @SequenceGenerator(name = "delivery_sequence", sequenceName = "delivery_sequence", allocationSize = 1)
    @Column(name = "delivery_id", nullable = false, updatable = false)
    private Long delivery_id;

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "deliverer_id")
    private Deliverer deliverer;
}