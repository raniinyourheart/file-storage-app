import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 bg-slate-100 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}