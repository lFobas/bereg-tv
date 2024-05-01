import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Jura } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export const inter = Jura({ subsets: ["latin"] });


export const metadata = {
  title: "Bereg TV",
  description: "Bereg Tv Selo",
};


export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        <SpeedInsights/>
        <div className="bg-main-bg h-full w-screen">
        {/* <Navbar /> */}
        <Header />
        <ToastContainer />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
