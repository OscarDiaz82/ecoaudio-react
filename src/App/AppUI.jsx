import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Login } from "../pages/Login";
import { AppRouter } from "../router/AppRouter";


export const AppUI = () => {
  return (
    <>
      <NavBar />
      <AppRouter>
        <Login />
      </AppRouter>
      <Footer />
    </>
  )
}
