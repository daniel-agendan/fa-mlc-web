export default {
  target: 'server',
  head: {
    title: 'FA-MLC I Kristianstad',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'fa-mlc.se' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {}
    ]
  },
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss']
}
