import "@/styles/global.css";


export const metadata = {
  title: {
    template: '%s - A K Singh',
    default: 'A K Singh', 
  },
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
