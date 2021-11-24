package pl.internet_shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.internet_shop.entity.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    static Category getInstanceForTests() {
        return  Category.builder().name("TestCategory").build();
    }
}
