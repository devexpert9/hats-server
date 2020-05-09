'use strict';

module.exports = function(app) {

var userAdmin = require('../controllers/adminCtrl');
   app.route('/addUseradmin')
     .post(userAdmin.create_user_admin);

var adminlogin = require('../controllers/adminCtrl');
   app.route('/loginadmin')
     .post(adminlogin.login_admin);

var updateadminprofile = require('../controllers/adminCtrl');
   app.route('/updateprofile')
     .post(adminlogin.update_admin_profile);

var update_admin_password = require('../controllers/adminCtrl');
   app.route('/update_admin_password')
     .post(adminlogin.update_admin_password);
     
var upload_admin_image = require('../controllers/adminCtrl');
   app.route('/upload_admin_image')
     .post(adminlogin.upload_admin_image);

var userlists = require('../controllers/userCtrl');
   app.route('/listuser')
     .post(userlists.userlist);

var deleteuserfromlist = require('../controllers/userCtrl');
   app.route('/userdelete')
     .post(deleteuserfromlist.deleteuser);

var edituserfromlist = require('../controllers/userCtrl');
   app.route('/edituser/:id')
     .post(edituserfromlist.update_user);

var edituserimage = require('../controllers/userCtrl');
   app.route('/edituserimage/:id')
     .post(edituserimage.update_user_image);

   app.route('/uploadImage')
     .post(edituserimage.upload_image);

var cat = require('../controllers/categoryCtrl');
    app.route('/addcategorty')
    .post(cat.add_categorty);

var cats = require('../controllers/categoryCtrl');
    app.route('/uploadImage')
    .post(cats.upload_image);  

var cats = require('../controllers/categoryCtrl');
    app.route('/categortyexist')
    .post(cats.categorty_exist);  

var cats = require('../controllers/categoryCtrl');
    app.route('/categories')
    .post(cats.category_listing);   

var cats = require('../controllers/categoryCtrl');
    app.route('/deletecategory')
    .post(cats.delete_category);  
       
var cats = require('../controllers/categoryCtrl');
    app.route('/updatecategory')
    .post(cats.update_category);
  

var product = require('../controllers/productCtrl');
    app.route('/addproduct')
     .post(product.add_product);

var product = require('../controllers/productCtrl');
    app.route('/deleteproduct')
     .post(product.deleteproduct);

var product = require('../controllers/productCtrl');
    app.route('/productslist')
     .post(product.product_listing);

var product = require('../controllers/productCtrl');
    app.route('/isproductexist')
     .post(product.is_product_exist);

var product = require('../controllers/productCtrl');
    app.route('/update_product')
     .post(product.updateproduct);
    
};

