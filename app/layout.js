import { Geist, Geist_Mono , Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const host_Grotesk = Host_Grotesk({
  subsets: ["latin"],
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${host_Grotesk.variable}`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}