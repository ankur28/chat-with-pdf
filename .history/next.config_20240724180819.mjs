/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'i.img'
            }
        ]
        domains: ['imgur.com'],
      },
};

export default nextConfig;
