import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartWidget from "../components/CartWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Simulación de navbar */}
        <CartProvider>
          <header className="bg-gray-800 p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Mi Shopping</h1>
            <CartWidget />
          </header>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
