/** @type {import('next').NextConfig} */
const nextConfig = {};

const withSerwist = (await import("@serwist/next")).default({
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
    cacheOnNavigation: true,
})

let config = withSerwist(nextConfig);

export default config;
