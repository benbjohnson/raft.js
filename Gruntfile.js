module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      development: {
        options: {
          include: "main",
          optimize: "none",
          baseUrl: "lib",
          mainConfigFile: "lib/main.js",
          out: "build/raft.js"
        }
      },
      production: {
        options: {
          include: "main",
          baseUrl: "lib",
          mainConfigFile: "lib/main.js",
          out: "build/raft.min.js"
        }
      }
    },
    qunit: {
      all: ['tests/*.html']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: ['tests/*.js', 'tests/*.html', 'src/*.js'],
      tasks: ['qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('default', ['uglify']);
};
