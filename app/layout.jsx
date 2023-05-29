import './globals.css';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['700', '400'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>The NextJS App</title>
      </head>
      <body className={`${montserrat.className} min-h-screen mx-32 my-12`}>
        {/*         <nav>
          <h1>Logo</h1>
          <ul className="font-montserrat">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
