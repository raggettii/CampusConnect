import MainLogo from "./components/mainLogo";
import NavBar from "./components/navbar";
import NavData from "./components/navData";
import WelcomePage from "./components/welcomePage";

export default function Home() {
  return (
    <>
      <NavBar>
        <MainLogo />
        <NavData />
      </NavBar>
      <WelcomePage />
    </>
  );
}
