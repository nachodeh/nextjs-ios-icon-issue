import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const coreOpenGraph = {
  title: "mentor",
  description:
      "Simplify, understand, learn and get things done with your personal assistant. Designed to guide and support, Mentor is your solution for personal and professional growth.",
  url: "https://goalmentor.app/",
  siteName: "mentor",
  locale: "en_US",
  type: "website",
  images: [
      {
          url: "https://d3oz27zfogf62e.cloudfront.net/opengraph.png",
          alt: "mentor | Simplify, understand, learn and get things done with your personal assistant",
      },
  ],
}


export const metadata: Metadata = {
  metadataBase: new URL("https://goalmentor.app/"),
  alternates: {
      canonical: "/",
  },
  title: {
      default: "mentor | Achieve your goals",
      template: "mentor | %s",
  },
  description:
      "Simplify, understand, learn and get things done with your personal assistant. Designed to guide and support, Mentor is your solution for personal and professional growth.",
  openGraph: {
      ...coreOpenGraph,
  },
  robots: {
      index: true,
      follow: true,
      googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
      },
  },
  twitter: {
      title: "mentor",
      card: "summary_large_image",
  },
  // icons: {
  //     icon: "/logo.png",
  //     apple: "/logo-maskable.png",
  // },
  // appleWebApp: {
  //     title: "Mentor",
  //     capable: true,
  //     statusBarStyle: "black-translucent",
  // },
  // other: {
  //     // "apple-touch-icon": "/logo-maskable.png",
  //     // "apple-mobile-web-app-title": "Mentor",
  //     "apple-mobile-web-app-capable": "yes",
  //     // "apple-mobile-web-app-status-bar-style": "black-translucent",
  // },
}

export const viewport: Viewport = {
  themeColor: "#080E20",
  colorScheme: "dark",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="call-iosPWASplash" strategy="afterInteractive">
          {`
              function iosPWASplash(t,e="white"){if("string"!=typeof t||0===t.length)throw Error("Invalid icon URL provided");let i=screen.width,a=screen.height,h=window.devicePixelRatio||1,n=document.createElement("canvas"),l=document.createElement("canvas"),r=n.getContext("2d"),d=l.getContext("2d"),o=new Image;o.onerror=function(){throw Error("Failed to load icon image")},o.src=t,o.onload=function(){let t=o.width/(3/h),g=o.height/(3/h);n.width=i*h,l.height=n.width,n.height=a*h,l.width=n.height,r.fillStyle=e,d.fillStyle=e,r.fillRect(0,0,n.width,n.height),d.fillRect(0,0,l.width,l.height);let c=(n.width-t)/2,p=(n.height-g)/2,s=(l.width-t)/2,w=(l.height-g)/2;r.drawImage(o,c,p,t,g),d.drawImage(o,s,w,t,g);let m=n.toDataURL("image/png"),u=l.toDataURL("image/png"),f=document.createElement("link");f.setAttribute("rel","apple-touch-startup-image"),f.setAttribute("media","screen and (orientation: portrait)"),f.setAttribute("href",m),document.head.appendChild(f);let A=document.createElement("link");A.setAttribute("rel","apple-touch-startup-image"),A.setAttribute("media","screen and (orientation: landscape)"),A.setAttribute("href",u),document.head.appendChild(A)}}
              iosPWASplash("/logo.png", "#9333ea"); // Fixed missing closing quote
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
