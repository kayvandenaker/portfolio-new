import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })
const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Kay van den Aker',
  description: 'Designer and prototyper, exploring interactions that fuse digital and physical. Turning ambiguous ideas into experiences by gluing together various hard- and software.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
