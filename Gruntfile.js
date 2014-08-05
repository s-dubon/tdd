/**
 * Created by jfl on 5/8/2014.
 */
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochacli: {
            options: {
                reporter: 'spec',
                filesRaw: ['test/*.js'],
                timeout: 300000
            },
            all: []
        }
    });

    grunt.event.on('coverage', function(lcovFileContents, done){
        // Check below
        done();
    });

    // Default task(s).
    grunt.registerTask('test', ['mochacli']);
};