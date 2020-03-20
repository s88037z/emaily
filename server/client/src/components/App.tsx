import React, { useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { cyan } from "@material-ui/core/colors";
import Container from "./Container";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { fetchUser } from "../reducers/auth/authActions";

const theme = createMuiTheme({
  palette: {
    secondary: cyan
  }
});

///delete after
const DashBoard = () => {
  return <h2>DashBoard</h2>;
};
const Landing = () => {
  return <h2>Landing</h2>;
};
///
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispatch in App");
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <Header />
          <Container>
            <Router>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/surveys" component={DashBoard} />
                <Route render={() => "page not found.."} />
              </Switch>
            </Router>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}
