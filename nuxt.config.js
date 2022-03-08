export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Florante Rapio | Fullstack Software Developer / Software Engineer',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'This is a portfolio or resume website of Florante Rapio, containing work experience and projects' },
            { name: 'title', content: 'Florante Rapio | Fullstack Software Developer / Software Engineer' },
            { name: 'keywords', content: 'florante rapio,software engineer,florante rapio jr,filipino software engineer, filipino software developer,software developer,online resume' },
            { name: 'robots', content: 'index, follow' },
            { name: 'language', content: 'English' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/static/css/global.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/sitemap'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // Sitemap configurations: https://sitemap.nuxtjs.org/guide/configuration
    sitemap: {
        // options
    },
}