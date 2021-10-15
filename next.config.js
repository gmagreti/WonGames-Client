// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const withPWA = require('next-pwa')
// const isProd = process.env.NODE_ENV === 'production'

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     disable: !isProd
//   },
//   images: {
//     domains: ['localhost', 'res.cloudinary.com', 'source.unsplash.com']
//   }
// })

module.exports = {
  images: {
    domains: ['localhost', 'source.unsplash.com', 'res.cloudinary.com']
  }
}
