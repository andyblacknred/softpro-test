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
    }
}