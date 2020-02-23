
exports.up = function(knex) {
    return knex.schema.createTable('questions', function(tbl) {
        tbl.increments();
        tbl.text('question')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('questions');
};
