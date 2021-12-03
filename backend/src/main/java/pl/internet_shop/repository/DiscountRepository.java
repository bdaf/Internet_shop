package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import pl.internet_shop.entity.Discount;

import java.sql.Date;

public interface DiscountRepository extends JpaRepository<Discount,Long> {
    static Discount getInstanceForTests() {
        return Discount.builder()
                .fromDate(Date.valueOf("2021-11-19"))
                .toDate(Date.valueOf("2021-11-20"))
                .percent(0.3F).build();
    }

    @Modifying
    @Transactional
    @Query(
            value = "delete from IS_CATEGORY_DISCOUNT_MAP where discount_id = ?1",
            nativeQuery = true
    )
    void deleteDiscountRecordsFromMappingManyToManyTable(Long aDiscountId);
}
