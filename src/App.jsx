import { AppRouter } from "./routes";
import "./assets/global.css";
import { AuthProvider } from "./context/Auth";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};