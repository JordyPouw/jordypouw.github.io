module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Packages.
    processhtml: {
      dist: {
        files: {
          'dest/index.html': ['src/index.html'],
          'dest/404.html': ['src/404.html'],
          'dest/projects/index.html': ['src/projects/index.html'],

          'dest/projects/project-simba.html':           ['src/projects/project-simba.html'],
          'dest/projects/internship-seoshop.html':      ['src/projects/internship-seoshop.html'],
          'dest/projects/hva-frontend2.html':           ['src/projects/hva-frontend2.html'],
          'dest/projects/hva-frontend1.html':           ['src/projects/hva-frontend1.html'],
          'dest/projects/hva-search-findability.html':  ['src/projects/hva-search-findability.html']
        }
      }
    },

    sass: {
      options: {
        sourcemap: "none"
      },
      src: {
        options: {
          style: "expanded"
        },
        expand: true,
        cwd: "src/css/scss",
        src: "*.scss",
        dest: "src/css",
        ext: ".css"
        },
      dest: {
        options: {
          style: "compressed"
        },
        expand: true,
        cwd: "src/css",
        src: "*.css",
        dest: "dest/css",
        ext: ".min.css"
      }
    },

    concat: {
      src: {
        src: [
          'src/js/modules/classie.js',
          'src/js/modules/loadingScreen.js',
          'src/js/modules/intense.js'
        ],
        dest: 'src/js/main.js',
      }
    },

    uglify: {
      dest: {
        src: 'src/js/main.js',
        dest: 'dest/js/main.min.js'
      },
      destForModernizr: {
        src: 'bower_components/modernizr/modernizr.js',
        dest: 'dest/js/modernizr.min.js'
      }
    },

    watch: {
      options: {
        livereload: 35729
      },
      html: {
        files: "src/index.html",
        tasks: ["processhtml"]
      },
      css: {
        files: "src/css/scss/**/*.scss",
        tasks: ["sass"]
      },
      scripts: {
        files: 'src/js/modules/*.js',
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      } 
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 7,
        },
        files: [{
          expand: true,
          cwd: 'src/assets/img',
          src: '**/*.{png,jpg}',
          dest: 'dest/assets/img'
        }]
      },
      icons: {
        files: {
          'dest/favicon.ico': 'src/favicon.ico',
          'dest/apple-touch-icon-precomposed.png': 'src/apple-touch-icon-precomposed.png'
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        cwd: 'src/assets/fonts/',
        src: '*.{svg,ttf,woff}',
        dest: 'dest/assets/fonts/'
      }
    }
  });

  // Load the plugins that provides the tasks.
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default tasks.
  grunt.registerTask('default');

};