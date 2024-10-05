import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "mentor",
        short_name: "mentor",
        icons: [
            {
                src: "/logo-maskable.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/logo.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        theme_color: "#080E20",
        background_color: "#9333EA",
        start_url: "/",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
    }
}
