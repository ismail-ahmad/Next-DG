import type { Metadata } from "next";
import '@/app/globals.css';

export const metadata:Metadata = {
  title: 'Design Gravitas',
  description: 'some description'
}
export default function RootLayout({children}: {children: React.ReactNode}){
  return(
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}