import './globals.css'
import { Inter, Bebas_Neue, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
export const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: ['400'],  variable: '--bebas-font' });
export const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--jarkata-font' });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.variable} ${bebas_neue.variable}`}>{children}</body>
    </html>
  )
}
