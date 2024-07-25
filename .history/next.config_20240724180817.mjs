/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'i.imgbur'
            }
        ]
        domains: ['imgur.com'],
      },
};

export default nextConfig;
