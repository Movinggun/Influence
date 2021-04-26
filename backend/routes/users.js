const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        test: "Working"
    })
});

module.exports = router;