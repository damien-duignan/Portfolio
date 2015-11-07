
module.exports = function(grunt){
    grunt.initConfig({
        watch: {
            css: {
                files: ['css/*.css', 'css/*.scss'],
                tasks: ['sass'],
            },
        },
        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/style.scss',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['watch', 'sass']);
};
