
exports.up = function(knex) {
    return knex.schema.createTable('questions', tbl => {
        tbl.increments();
        tbl.text('Question')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('questions');
};
