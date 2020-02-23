const db = require('../data/dbConfig.js')

module.exports = {
    getQuestions,
};

function getQuestions() {
    return db("questions");
}