# E-COMMERCE WHIT REACTJS - MOTORBIKESHOP 

### Ecommerce with connection to database, firebase.
### Divided the products by categories. These are associated with product details uploaded to firebase.
### With a counter associated with the stock of the product.
### At the end of the purchase, an order is generated with the buyer's data in firebase, and a tracker id is given to the buyer.

## Librarys:
### YUP. A library to validate forms with JavaScript, which supports both browser applications and servers with NodeJs. With Yup, we can define a set of rules, and find out if the data entered by the user complies with them or not. In this case it was used to validate the buyer's contact form.
### FORMIK. Library that we use to create the buyer contact form.
### SEETALERT2. Used to generate clean and friendly notifications to the customer, in case there is no stock of the product, or to provide information such as the ID of your purchase.
### FIREBASE. In this case we use it as a database, where we load our products by code, with different characteristics such as price, stock, image, detail; and in addition, purchase orders are dynamically created that interact with the products.

