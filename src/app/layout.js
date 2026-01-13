import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";

/* Heading Font */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

/* Body Font */
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "88 Digital",
  description: "Digital agency website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
