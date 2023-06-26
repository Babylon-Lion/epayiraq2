import Navbar from '../components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'ePayIraq',
  description: 'Payment Systems for the internet in Iraq',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
