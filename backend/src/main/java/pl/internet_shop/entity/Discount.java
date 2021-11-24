package pl.internet_shop.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "IS_discount")
public class Discount {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "discount_sequence")
    @SequenceGenerator(name = "discount_sequence", sequenceName = "discount_sequence", allocationSize = 1)
    @Column(name = "discount_id", nullable = false)
    private Long discountId;

    @Column(name = "percent", nullable = false, scale = 2, precision = 3)
    private Float percent;

    @Column(name = "from_date", nullable = false)
    private Date fromDate;

    @Column(name = "to_date", nullable = false)
    private Date toDate;
}
