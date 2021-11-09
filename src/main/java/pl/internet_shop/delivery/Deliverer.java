package pl.internet_shop.delivery;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Deliverer {

    @Id
    private long DelivererId;
    private String Name;
    private String Surname;
    private int PhoneNumber;

    public Deliverer(long aDelivererId, String aName, String aSurname, int aPhoneNumber) {
        DelivererId = aDelivererId;
        Name = aName;
        Surname = aSurname;
        PhoneNumber = aPhoneNumber;
    }

    public Deliverer() {}

    public long getDelivererId() {
        return DelivererId;
    }

    public void setDelivererId(long aDelivererId) {
        DelivererId = aDelivererId;
    }

    public String getName() {
        return Name;
    }

    public void setName(String aName) {
        Name = aName;
    }

    public String getSurname() {
        return Surname;
    }

    public void setSurname(String aSurname) {
        Surname = aSurname;
    }

    public int getPhoneNumber() {
        return PhoneNumber;
    }

    public void setPhoneNumber(int aPhoneNumber) {
        PhoneNumber = aPhoneNumber;
    }
}
