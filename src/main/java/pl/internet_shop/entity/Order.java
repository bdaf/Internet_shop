package pl.internet_shop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "IS_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_sequence")
    @SequenceGenerator(name = "order_sequence", sequenceName = "order_sequence", allocationSize = 1)
    @Column(name = "order_id", nullable = false)
    private Long orderId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "delivery_id", referencedColumnName = "delivery_id")
    private Delivery delivery;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customer customer;

    @OneToMany
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    private List<Product> products;
}
