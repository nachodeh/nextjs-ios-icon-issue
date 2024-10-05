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
      "A random description as a filler",
  url: "https://nextjs-ios-icon-issue.vercel.app",
  siteName: "My test app",
  locale: "en_US",
  type: "website",
  images: [
      {
          url: "https://d3oz27zfogf62e.cloudfront.net/opengraph.png",
          alt: "Testing the splash screen and icon",
      },
  ],
}


export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-ios-icon-issue.vercel.app"),
  alternates: {
      canonical: "/",
  },
  title: {
      default: "My app",
      template: "Home | %s",
  },
  description:
      "Create a sample where splash screen and icon work",
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
      title: "My test app",
      card: "summary_large_image",
  },
  appleWebApp: {
      title: "My test app",
      capable: true,
      statusBarStyle: "black-translucent",
  },
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
