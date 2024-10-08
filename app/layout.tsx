import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/provider/CartProvider";
import { Toaster } from "react-hot-toast";
import { getCurrentUser } from "@/actions/getCurrentUser";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "E-shop",
  description: "E-commerce App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  console.log("User <<<<",currentUser)
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <Toaster toastOptions={{
          style: {
            background: 'rgb(51 65 85)',
            color: '#fff'
          }
        }}/>
        <CartProvider>
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
        </div>
        </CartProvider>
       
        </body>
    </html>
  );
}
