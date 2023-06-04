import { Inter, Poppins } from 'next/font/google'
import { StyledComponentsRegistry } from '@/lib/registry';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});       

export const metadata = {
  title: 'Lifedev test task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
