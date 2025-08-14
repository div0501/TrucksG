import "./../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TrucksG",
  description: "Move freight. Faster. Smarter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
