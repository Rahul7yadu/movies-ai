const  path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
   },
   images:{
    domains:["image.tmdb.org"]
   }
      
}

module.exports = nextConfig
