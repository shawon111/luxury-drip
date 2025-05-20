import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Jost } from "next/font/google"

export const metadata = {
  title: "Luxury Drip - Best drip at the Best price!",
};

// font
const jost = Jost({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
  variable: '--font-jost'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className}`} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
