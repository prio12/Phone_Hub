import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <>
     <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
    </>
  );
}

export default App;
