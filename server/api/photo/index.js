'use strict';

var express = require('express');
var controller = require('./photo.controller');
var config = require('../../config/environment');

var router = express.Router();

router.get('/', controller.index);
router.delete('/:id', controller.destroy);
router.get('/:id', controller.show);
router.post('/', controller.create);

module.exports = router;
