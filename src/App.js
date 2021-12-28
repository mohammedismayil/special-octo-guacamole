
import AdminLogin from "./Admin/AdminLogin";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      {/* {
        if (localStorage.setItem("isAdminLogged", true)){

        }else{

        }
      } */}
      <AdminLogin></AdminLogin>
    </div>
  );
}

export default App;
