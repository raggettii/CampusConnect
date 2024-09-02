import MainLogo from "../components/mainLogo";
import NavBar from "../components/navbar";
import NavData from "../components/navData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-[#F4F4f4] h-full`}>
        <NavBar>
          <MainLogo />
          <NavData />
        </NavBar>
        {children}
      </body>
    </html>
  );
}
