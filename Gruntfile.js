module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'assets/styles/scss',
					cssDir: 'assets/styles/css',
					environment: 'production'
				}
			}
		},

		sprite: {
			all: {
				src: 'assets/images/sprites/*.png',
				destImg: 'assets/images/spritesheet.png',
				destCSS: 'assets/styles/scss/_sprite.scss'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-spritesmith');

	grunt.registerTask('default', ['sprite', 'compass']);
}