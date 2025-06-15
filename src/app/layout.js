import StyledComponentsRegistry from '../lib/registry';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'Chiar Abdi | Software Developer',
  description: 'The professional portfolio of Chiar Abdi, a passionate software developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}