import type { NextConfig } from "next";

const prod = process.env.NODE_ENV === "production";

const internalHost = process.env.TAURI_DEV_HOST || "localhost";

const nextConfig: NextConfig = {
  // Ensure Next.js produces a static export instead of doing SSR
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: "export",
  // Note: This feature is required to use the Next.js Image component in SSG mode
  // See https://nextjs.org/docs/messages/export-image-api for different workarounds
  images: {
    unoptimized: true,
  },
  // Configure assetPrefix or else the server won't properly resolve your assets in dev mode
  assetPrefix: prod ? undefined : `http://${internalHost}:3000`,
};

export default nextConfig;
