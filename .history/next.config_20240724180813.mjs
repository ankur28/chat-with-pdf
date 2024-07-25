/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: ''
            }
        ]
        domains: ['imgur.com'],
      },
};

export default nextConfig;
