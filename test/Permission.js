/**
 * Created by Stephane on 05/08/2014.
 */
var Permission = require("../lib/Permission");
var assert = require("assert");

describe('Permission Libraryt', function() {
    it('should check that Permission is an object', function () {
        assert.notEqual(Permission, undefined, 'Permission should be an object');
    });

    it('should have an init method', function () {
        var instance = Permission.init();
        assert.notEqual(instance, undefined, 'Permission should have an init method');
    });

    it('should have an init method taking a scope and return a Permission object with a scope property', function () {
        var instance = Permission.init("Test Automation");
        assert.equal(instance.scope, 'Test Automation', 'Scope should be defined as given parameter');
    });

    describe('Permission Object', function() {

        var instance = Permission.init("Test Automation");

        it('should have a scope property with value Test Automation', function () {
            assert.equal(instance.scope, 'Test Automation', 'Scope should be defined as given parameter');
        });

        it('should have a function defineRole to create a Role Object with a name property as input parameter', function () {
            var role = instance.defineRole("administrator");
            assert.notEqual(role, undefined, 'Role should have been created');
            assert.equal(role.name, 'administrator', 'Role name should be administrator');
        });
    });
});