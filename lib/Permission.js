var Permission = function(scope) {
    this.scope = scope;

    this.defineRole = function(name) {
        return new Role(name);
    };
};

var Role = function(name) {
    this.name = name;
};

module.exports = {
    init : function(scope) {
        return new Permission(scope);
    }
};