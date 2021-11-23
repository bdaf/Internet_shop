# Internet_shop

#HOW OPERATION ON TABLES ACT

#DISCOUNT
To add discount you don't have to do any extra acts.
Adding discount to DB is possible.
Deleting discount deletes only photo from DB.

#CATEGORY
To add category you don't have to do any extra acts.
Adding category with one discount or more which are not in DB to DB is possible.
Deleting category deletes every discounts from DB which were assigned to this category.

#PHOTO
To add photo you don't have to do any extra acts.
Adding photo to DB is possible.
Deleting photo deletes only photo from DB.

#GALLERY
To add gallery you don't have to do any extra acts.
Adding gallery with some photos which are not in DB is possible.
Deleting gallery deletes whole gallery including its photos in DB.

#DELIVERER
To add deliverer you don't have to do any extra acts.
Adding deliverer to DB is possible.
Deleting deliverer deletes only deliverer from DB.

#DELIVERY
To add delivery you can create deliverer, but shouldn't have to. #NotTested
Adding delivery with deliverer which is not in DB is possible.
Deleting delivery deletes only delivery from DB without deliverer.

#CITY
To add city you don't have to do any extra acts.
Adding city to DB is possible.
Deleting city deletes only city from DB.

#ADDRESS
To add address you can create city, but shouldn't have to. #NotTested
Adding address with City which is not in DB is possible.
Deleting address deletes only address from DB without city.

#COMPANY
To add company you don't have to do any extra acts.
Adding company to DB is possible.
Warning! Deleting company may delete customer, but shouldn't. #NotTested

#CUSTOMER
To add customer you don't have to do any extra acts.
Adding to DB customer with company and address which are not in DB is possible.
Deleting customer deletes from DB: customer, his company and address.

#ORDER
To add order you have to create customer and add him to database first or get him from DB.
Adding order with delivery which is not in DB is possible.
Warning! Adding order with products which is not in DB is NOT possible, firstly enter products do DB or get some from DB.
Warning! Deleting order deletes order with delivery and ALL PRODUCTS from DB.

#PRODUCER
To add producer you don't have to do any extra acts.
Adding producer to DB is possible.
Deleting producer deletes only city from DB.

#PRODUCT
To add product you have to create category and add it to database first or get it from DB, product should also have
producer (but at this moment it's not requierd) and.
Adding product with delivery which is not in DB is possible.
Deleting product deletes product with delivery from DB.

#PRODUCT AND ORDER RELATION
Product can be a replication in database which only Id would be distinct, this means that we have many same things, for example like this mouse for computer:
- id | name  |..........category..........| ... | ...
- 1  | mouse | electronic_category | ... | ...
- 2  | mouse | electronic_category | ... | ...
- 3  | mouse | electronic_category | ... | ...
- 6  | mouse | electronic_category | ... | ...

This means that same mouses' amount is 4 (numbers of rows)
By adding product to order we understand change product's row's column "order_Id" to "order_Id" (Primary key of "order" table) order row's column.
