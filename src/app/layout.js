import './globals.css'

export const metadata = {
  title: 'Kay van den Aker',
  description: 'Designer and prototyper, exploring interactions that fuse digital and physical. Turning ambiguous ideas into experiences by gluing together various hard- and software.'
}

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
