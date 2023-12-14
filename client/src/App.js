import "./App.css";
// import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Allcenter from "./pages/center/Allcenter";
import Centerdetail from "./pages/center/Centerdetail";
import Addcenter from "./pages/center/Addcenter";
import Userprofile from "./pages/user/Userprofile";
// import Sidebar from "./layout/sidebar";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/allcenter">
            <Allcenter />
          </Route>

          <Route path="/centerdetail/:id">
            <Centerdetail />
          </Route>

          <Route path="/addcenter">
            <Addcenter />
          </Route>

          <Route path="/userprofile/:id">
            <Userprofile />
          </Route>
          {/* 
          <Route path="/sidebar">
            <Sidebar />
          </Route> */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
