/**
 * Created by Stephane on 05/08/2014.
 */
var right = require("../lib/right");
var assert = require("assert");

describe('Right Way', function() {
    it('should check that RightSum is an object', function () {
        assert.notEqual(right, undefined, 'RigthSum should be an object');
    });

    it('should check that RightSum is able to sum numbers with function sum', function () {
        assert.ok("sum" in right, 'RigthSum should have a sum function');
    });

    it('should check that when using sum with 2 parameters, it sums them up correctly', function () {
        assert.ok(right.sum(1,2) == 3, 'RigthSum should correct sum correctly');
    });
});