import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "app/redux/init/createStore";

import { withStyles } from "@material-ui/core";

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import loginBack from "public/img/loginBack.jpg";
import pagesBack from "public/img/pagesBack.jpg";
import allPagesStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

function App({ children, classes, ...rest }) {
  const { store, history } = configureStore(rest);
  const { location: { pathname } = {} } = history;
  const isLoginPage = pathname.includes('login');

  return (
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Header
            absolute
            color="transparent"
            brand="Users"
            rightLinks={<HeaderLinks />}
            {...rest}
          />
          <div
            className={classes[isLoginPage ? 'pageHeader' : 'pagesHeader']}
            style={{
              backgroundImage: "url(" + (isLoginPage ? loginBack : pagesBack) + ")",
              backgroundSize: "cover",
              backgroundPosition: "top center"
            }}
          >
            <div className={classes.container}>
              {children}
            </div>
          </div>
        </div>
      </ConnectedRouter>
    </ReduxProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(allPagesStyle)(App);