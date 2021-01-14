/**
 * PostCSS configuration file
 * as configured under cssRules.use['postcss-loader'] in development.js and production.js
 *
 * @docs https://postcss.org/
 * @since 1.0.0
 */
module.exports = ( projectOptions ) => {
    return {
        postcssOptions: {
            plugins: [
                // To parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
                // https://github.com/postcss/autoprefixer
                require( 'autoprefixer' ),
            ]
        }
    }
}