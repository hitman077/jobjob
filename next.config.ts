import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{ hostname: "i.imgur.com", protocol: "https" },
			{ hostname: "picsum.photos", protocol: "https" },
			{
				hostname: "mercular.s3.ap-southeast-1.amazonaws.com",
				protocol: "https",
			},
			// { hostname: "www.jobbkk.com", protocol: "https" },
		],
	},
}

export default nextConfig;
