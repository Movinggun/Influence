const router = require('express').Router();
const { check, validationResult } = require('express-validator');

const LandingSearch = require ('../models/LandingSearch');

// Get Terms
router.get('/', async (req, res) => {
    try {
        await LandingSearch.find({}).sort({ count: -1 }).limit(10).exec((err, terms) => {
            if (err) return  res.status(500).send('Server Error');
            return res.status(200).json(terms);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//Get Terms
router.post('/', [
    check('term', 'Term is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { term } = req.body;
    term = term.toLowerCase();
    try {
        let dbTerm = await LandingSearch.findOne({ term });
        
        if (!dbTerm) {
            let newTerm = new LandingSearch( { term });
            newTerm.save();
            return res.status(200).json({msg: 'Term has been added to database'});
        } else {
            await LandingSearch.findOneAndUpdate({term}, {count: dbTerm.count + 1}, (err, result) => {
                if (err) return res.status(400).json({msg: 'Failed to edit count of term'});
                else return res.status(200).json({msg: 'Term has been updated'});
            })
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;