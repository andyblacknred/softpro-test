module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/sass/variables.sass"
                    @import "@/sass/fonts.sass"                    
                `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/softpro-test/'
        : '/'
}