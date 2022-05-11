const data = {
    a: 1,
    b: 2,
    c: 3,
    d: 4

}
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(data);
})

module.exports = router;