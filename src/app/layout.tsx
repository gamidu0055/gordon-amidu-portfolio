import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {

  metadataBase: new URL(
    "https://gordon-amidu-portfolio.vercel.app"
  ),

  title:
    "Gordon Amidu | Research Scholar in Social Informatics and Artificial Intelligence",

  description:
    "Academic portfolio of Gordon Amidu, researcher in social informatics, artificial intelligence, online communities, digital communication, misinformation, and technology-mediated interactions.",

  keywords: [
    "Gordon Amidu",
    "Social Informatics",
    "Artificial Intelligence",
    "Online Communities",
    "Digital Communication",
    "Online Trolling",
    "Digital Harassment",
    "Misinformation",
    "Information Science",
    "Academic Research",
    "AI and Society",
    "Technology and Human Behavior",
  ],

  authors: [
    {
      name: "Gordon Amidu",
    },
  ],

  creator: "Gordon Amidu",

  openGraph: {

    title:
      "Gordon Amidu | Research Scholar",

    description:
      "Research portfolio focused on artificial intelligence, social informatics, online communities, digital communication, and technology-mediated interactions.",

    type: "website",

    siteName:
      "Gordon Amidu Academic Portfolio",
  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "Gordon Amidu | Research Scholar",

    description:
      "Academic portfolio covering AI, social informatics, online communities, and digital communication.",
  },

};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
    >

      <body>

        <ThemeProvider>

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

        </ThemeProvider>

      </body>

    </html>

  );
}