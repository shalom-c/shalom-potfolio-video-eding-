import { Inter } from "next/font/google";
import "./globals.css";

export const viewport = {
  themeColor: "#11110f"
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Shalom Taki Sunday — Video Editor",
  description:
    "Shalom Taki Sunday is a video editor specializing in YouTube, short-form, documentary, and podcast storytelling.",
  openGraph: {
    type: "website",
    title: "Shalom Taki Sunday — Video Editor",
    description:
      "Story-first video editing for YouTube, short-form, documentaries, and podcasts. Explore Shalom Taki Sunday's work.",
    images: [
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalom Taki Sunday — Video Editor",
    description:
      "Story-first video editing for YouTube, short-form, documentaries, and podcasts. Explore Shalom Taki Sunday's work."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
