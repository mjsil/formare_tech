const bcrypt = require('bcrypt');

module.exports = {
    up: QueryInterface => {
        return QueryInterface.bulkInsert('users',
            [
                {
                    user: 'admin',
                    password_hash: bcrypt.hashSync('123456', 8),
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        );
    },

    down: () => { }
};
