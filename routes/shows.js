const express = require('express'),
    handler = require('../handlers');

const router = express.Router();
const {showList, showFilter, showDetail} = handler.shows;

router.get('/', showList);
router.get('/shows', showFilter);
router.get('/shows/:showId', showDetail);

module.exports = router;