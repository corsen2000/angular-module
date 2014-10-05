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
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      },
      others: {
        files: ['src/**/*', '!src/**/*.scss']
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
    },
    cssmin: {
      dist: {
        files: {
          'dist/module.min.css': ['dist/module.css']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/module.min.js': ['dist/module.js']
        }
      }
    },
    clean: ["dist"]
  });

  grunt.registerTask('default', ['clean', 'jscs', 'jshint', 'sass',
    'ngAnnotate', 'cssmin', 'uglify']);
  grunt.registerTask('serve', ['connect', 'watch']);
};
