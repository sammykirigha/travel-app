import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'blogger.googleusercontent.com',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default withNextIntl(nextConfig);
