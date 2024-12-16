import Header from "@/components/Header/Header";
import "@/styles/global.css";

export const metadata = {
  title: {
    template: "%s - A K Singh",
    default: "A K Singh",
  },
  description:
    "Hello! My name is Ashok and I am a software developer located in India, I have a serious passion for web devlopment, designs and interactive user experiences.",
  };

  export const viewport = {
    themeColor:'#155e75', 
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     

      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
