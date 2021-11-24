package pl.internet_shop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "IS_product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "name", nullable = false, length = 63)
    private String name;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "amount", nullable = false)
    private int amount;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "producer_id", referencedColumnName = "producer_id")
    private Producer producer;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "category_id", referencedColumnName = "category_id", nullable = false)
    private Category category;
}
