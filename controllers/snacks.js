const { Snacks } = require('../models');
const { layout } = require('../utils');

const list = async (req, res) => {
    const snacks = await Snacks.findAll();
    res.render('snacks/list', {
        locals: {
            snacks
        },
        ...layout
    });
};

const showForm = (req, res) => {
    res.render('snacks/form', {
        ...layout
    });
};

const processForm = async (req, res) => {
    const {
        title,
        category,
        healthiness
    } = req.body;
    const newSnack = await Snacks.create({
        title,
        category,
        healthiness: parseInt(healthiness, 10)
    });
    console.log(newSnack);
    res.redirect(req.baseUrl);
};

module.exports = {
    list,
    showForm,
    processForm
};
