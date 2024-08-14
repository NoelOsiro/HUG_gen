
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        {children}
        </body>
        
    </html>
  );
}
