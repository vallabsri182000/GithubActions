const add = require('../src/index');
const assert = require('assert');

describe('Addition', function() {
    it('should return 3 when adding 1 and 2', function() {
        assert.strictEqual(add(1, 2), 3);
    });
});
