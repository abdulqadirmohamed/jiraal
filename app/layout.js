import Header from '@/components/Header'
import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = IBM_Plex_Sans({ 
  weight: ['100','200','300', '400','500', '600','700'],
  subsets: ['latin'] 
}) 
export const metadata = {
  title: 'Binance',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
