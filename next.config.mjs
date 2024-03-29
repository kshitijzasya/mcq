/** @type {import('next').NextConfig} */
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
      webpack: config => {
        config.module.rules.push(
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
        );
        return config;
      }
};

export default nextConfig;
