import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter, Red_Rose } from "next/font/google";
import "./globals.css";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });
export const redRose = Red_Rose({ subsets: ["latin"] });


export const metadata = {
  title: "Bereg TV",
  description: "Bereg Tv Selo",
};


export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={redRose.className}>
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
