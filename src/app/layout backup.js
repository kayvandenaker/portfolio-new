import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kay van den Aker',
  description: 'Designer and prototyper, exploring interactions that fuse digital and physical. Turning ambiguous ideas into experiences by gluing together various hard- and software.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        Yeet
        {children}
      </body>
    </html>
  )
}
