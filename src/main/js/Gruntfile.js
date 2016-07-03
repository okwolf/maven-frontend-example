module.exports = function(grunt) {
  var serveStatic = require('serve-static');
  var buildConfig = require('./build.config.js');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-openport');

  var taskConfig = {
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        '<%= userJs.files %>'
      ]
    },
    concat: {
      dist: {
        src: ['<%= distJs.files %>'],
        dest: 'dist/<%= pkg.name %>.js',
      }
    },
    karma: {
      ci: {
        configFile: 'karma.conf.ci.js'
      },
      start: {
        configFile: 'karma.conf.js',
        background: true
      }
    },
    connect: {
      server: {
        options: {
          useAvailablePort: true,
          open: true,
          livereload: true,
          hostname: 'localhost',
          middleware: function(connect) {
            return [
              serveStatic('../../src/main/webapp'),
              connect().use('/js', serveStatic('dist'))
            ];
          }
        }
      }
    },
    watch: {
      js: {
        files: ['<%= userJs.files %>'],
        tasks: ['build', 'karma:ci:run']
      },
      app: {
        files: ['../../src/main/webapp/**/*'],
        options: {
          livereload: true
        }
      }
    }
  };
  grunt.initConfig(grunt.util._.extend(taskConfig, buildConfig));

  grunt.registerTask('build', ['jshint', 'concat']);
  grunt.registerTask('findports', ['openport:watch.app.options.livereload:35729', 'openport:connect.server.options.livereload:35729']);
  grunt.registerTask('develop', ['findports', 'karma:start', 'connect', 'watch']);
  grunt.registerTask('default', ['build', 'develop']);
};