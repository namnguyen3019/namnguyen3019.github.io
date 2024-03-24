import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Footer from '../components/footer/index';
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import withRouter from "../hooks/withRouter";
import { About } from '../pages/about';
import { Portfolio } from "../pages/portfolio";
import "./App.css";
import AppRoutes from "./routes";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
       
        <AppRoutes />
        <About />
        <Portfolio />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}
