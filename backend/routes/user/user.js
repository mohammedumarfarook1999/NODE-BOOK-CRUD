// NPM
const express = require('express');
const router = express.Router();

// CONTROLLERS
const isAuthenticated = require('../../helpers/origin_check');
const isOriginVerify = isAuthenticated.origin;
const { bookCRUD } = require('../../controller/user/user-controller');



router.post(['/add-book', '/list-book', '/get-single-book', '/update-book', '/delete-book'], isOriginVerify, bookCRUD)



module.exports = router;