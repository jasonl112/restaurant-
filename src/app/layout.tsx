import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthProvider from '@/components/AuthProvider'
import QueryProvider from '@/components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kyoto Hibachi Sushi & Bar',
  description: 'Best Japanese Food in all of mckinney ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <QueryProvider>
              <Navbar/>
              {children}
              <ToastContainer position='bottom-right' theme="dark" autoClose={3000}/>
            </QueryProvider>
          </AuthProvider>
          </body>
    </html>
  )
}
