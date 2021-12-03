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
@Table(name = "is_passuser")
public class User {
    public static final String USER = "USER";
    public static final String ADMIN = "ADMIN";
    public static final String WORKER = "WORKER";
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @Column(name = "USER_ID", nullable = false)
    private Long userId;

    @Column(name = "USER_NAME", length = 63, nullable = false)
    private String userName;

    @Column(name = "PASSWORD", length = 63, nullable = false)
    private String password;

    @Column(name = "ROLE", length = 63, nullable = false)
    private String role = USER;

    @Column(name = "name", length = 63, nullable = false)
    private String name;

    @Column(name = "surname", length = 63, nullable = false)
    private String surname;

    @Column(name = "email", length = 63, nullable = false)
    private String email;

    @Column(name = "phone_number", length = 15, nullable = false)
    private String phoneNumber;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "address_id")
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id", referencedColumnName = "company_id")
    private Company company;

}
