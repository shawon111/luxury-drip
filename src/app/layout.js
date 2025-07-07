import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Jost } from "next/font/google"
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { loadCommonTranslations } from "@/lib/loadCommonTranslations";
import WhatsAppBtn from "@/components/layout/WhatsAppBtn";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Luxury Drip - Best drip at the Best price!",
};

// font
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-jost'
})

export default async function RootLayout({ children }) {
  const { translations } = await loadCommonTranslations();
  return (
    <html lang="en">
      <TranslationProvider translations={translations}>
          <body className={`${jost.className} relative`} suppressHydrationWarning={true}>
            <ToastContainer />
            <LanguageSwitcher />
            <WhatsAppBtn />
            <Header />
            {children}
            <Footer />
          </body>
      </TranslationProvider>
    </html>
  );
}
