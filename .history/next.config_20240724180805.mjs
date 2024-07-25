/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https"
            }
        ]
        domains: ['imgur.com'],
      },
};

export default nextConfig;
