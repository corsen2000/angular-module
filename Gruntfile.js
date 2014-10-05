module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/module.css': 'src/module.scss'
        }
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true,
        ngAnnotateOptions: {
          sourcemap: true
        }
      },
      dist: {
        files: {
          'dist/module.js': ['src/module.js', 'src/temperature/temperature.directive.js']
        }
      }
    },
    karma: {
      unit: {
        options: {
          singleRun: true,
          browsers: ['PhantomJS'],
          frameworks: ['jasmine'],
          files: [
            'bower_components/underscore/underscore.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/**/*.js'
          ]
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      all: {
        files: ['**/*'],
        tasks: ['sass']
      }
    },
    connect: {
      server: {
        options: {
          open: true,
          hostname: 'localhost',
          livereload: true
        }
      }
    },
    jshint: {
      all: {
        options: {
          jshintrc: true
        },
        src: ['Gruntfile.js', 'src/**/*.js']
      }
    },
    jscs: {
      options: {
          config: ".jscsrc"
      },
      src: ['Gruntfile.js', "src/**/*.js"]
    }
  });

  grunt.registerTask('default', ['jscs', 'jshint', 'sass', 'ngAnnotate']);
  grunt.registerTask('serve', ['connect', 'watch']);
};
