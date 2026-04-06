/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // 关键配置：客户端打包时忽略 Node.js 原生模块
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
};

export default nextConfig;
