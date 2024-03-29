const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
        ],
      },
      webpack: (config, { isServer }) => {
        // For CSS
        config.module.rules.push({
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader', // Add postcss-loader
          ],
        });
    
        // For SASS/SCSS
        config.module.rules.push({
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader', // Add postcss-loader
            'sass-loader', // Add sass-loader
          ],
        });
    
        return config;
      },
};

module.exports = nextConfig;
