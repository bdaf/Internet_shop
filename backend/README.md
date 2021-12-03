# Internet_shop

<h1>HOW OPERATION ON TABLES ACT</h1>

<h1>DISCOUNT</h1>
To add discount you don't have to do any extra acts.
Adding discount to DB is possible.
Deleting discount deletes only photo from DB.

<h1>CATEGORY</h1>
To add category you don't have to do any extra acts.
Adding category with one discount or more which are not in DB to DB is possible.
Deleting category deletes every discounts from DB which were assigned to this category.

<h1>PHOTO</h1>
To add photo you don't have to do any extra acts.
Adding photo to DB is possible.
Deleting photo deletes only photo from DB.

<h1>GALLERY</h1>
To add gallery you don't have to do any extra acts.
Adding gallery with some photos which are not in DB is possible.
Deleting gallery deletes whole gallery including its photos in DB.

<h1>DELIVERER</h1>
To add deliverer you don't have to do any extra acts.
Adding deliverer to DB is possible.
Deleting deliverer deletes only deliverer from DB.

<h1>DELIVERY</h1>
To add delivery you can create deliverer, but shouldn't have to. #NotTested
Adding delivery with deliverer which is not in DB is possible.
Deleting delivery deletes only delivery from DB without deliverer.

<h1>CITY</h1>
To add city you don't have to do any extra acts.
Adding city to DB is possible.
Deleting city deletes only city from DB.

<h1>ADDRESS</h1>
To add address you can create city, but shouldn't have to. #NotTested
Adding address with City which is not in DB is possible.
Deleting address deletes only address from DB without city.

<h1>COMPANY</h1>
To add company you don't have to do any extra acts.
Adding company to DB is possible.
Warning! Deleting company may delete user, but shouldn't. #NotTested

<h1>USER</h1>
To add user you don't have to do any extra acts.
Adding to DB user with company and address which are not in DB is possible.
Deleting user deletes from DB: user, his company and address.

<h1>ORDER</h1>
To add order you have to create user and add him to database first or get him from DB.
Adding order with delivery which is not in DB is possible.
Warning! Adding order with products which is not in DB is NOT possible, firstly enter products do DB or get some from DB.
Warning! Deleting order deletes order with delivery and ALL PRODUCTS from DB.

<h1>PRODUCER</h1>
To add producer you don't have to do any extra acts.
Adding producer to DB is possible.
Deleting producer deletes only city from DB.

<h1>PRODUCT</h1>
To add product you have to create category and add it to database first or get it from DB, product should also have
producer (but at this moment it's not requierd) and.
Adding product with producer which is not in DB is propably NOT possible.
Deleting product deletes only product from DB.

<h1>PRODUCT AND ORDER RELATION</h1>
Product can be a replication in database which only Id would be distinct, this means that we have many same things, for example like this mouse for computer:
<h3>id | name  |..........category..........| ... | ...</h3>
<h3>1  | mouse | electronic_category | ... | ...</h3>
<h3>2  | mouse | electronic_category | ... | ...</h3>
<h3>3  | mouse | electronic_category | ... | ...</h3>
<h3>6  | mouse | electronic_category | ... | ...</h3>

This means that same mouses' amount is 4 (numbers of rows)
By adding product to order we understand change product's row's column "order_Id" to "order_Id" (Primary key of "order" table) order row's column.
