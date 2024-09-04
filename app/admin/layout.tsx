import MainLogo from "../components/mainLogo";
import NavBar from "../components/navbar";
import NavData from "../components/navData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar>
        <MainLogo />
        <NavData />
      </NavBar>
      {children}
    </>
  );
}
