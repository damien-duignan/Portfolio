
module.exports = function(grunt){
    grunt.initConfig({
        watch: {
            css: {
                files: ['css/*.css', 'css/*.scss'],
                tasks: ['sass', 'cssmin'],
            },
        },
        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/style.scss',
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/style.min.css': ['css/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch', 'sass', 'cssmin']);
};
