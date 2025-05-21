/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'luxury-drip.com',
                port: '', 
                pathname: '/**', 
            },
        ],
    },
};

export default nextConfig;
