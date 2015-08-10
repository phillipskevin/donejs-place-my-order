import fixture from 'can/util/fixture/';

fixture({
    'GET /api/states': function () {
        return [
            { name: 'Calisota', short: 'CA' },
            { name: 'New Troy', short: 'NT'}
        ];
    }
});
