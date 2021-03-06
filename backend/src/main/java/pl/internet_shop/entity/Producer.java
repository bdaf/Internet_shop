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
@Table(name = "IS_producer")
public class Producer {
    public static final String UNKNOWN = "Unknown";
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producer_sequence")
    @SequenceGenerator(name = "producer_sequence", sequenceName = "producer_sequence", allocationSize = 1)
    @Column(name = "producer_id", nullable = false)
    private Long producerId;

    @Column(name = "name_of_company", length = 63)
    private String nameOfCompany = UNKNOWN;

    @Column(name = "nip", nullable = false, unique = true, length = 15)
    private String nip;
}
