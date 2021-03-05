import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/popper.scss";
// import AppContext from "../context/AppContext";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

/* _app.js */
import React from "react";
import App from "next/app";
import AppContext from "../context/AppContext";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  state = {
    redeemed: false,
    success: false,
  };

  componentDidMount() {
    const manMattersNo = window.localStorage.getItem("manMattersNo");
    if (manMattersNo) {
      this.setRedeemed(true);
    }
  }

  setRedeemed = (val) => {
    this.setState({ redeemed: val });
  };

  setSuccess = (val) => {
    this.setState({ success: val });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContext.Provider
        value={{
          redeemed: this.state.redeemed,
          setRedeemed: this.setRedeemed,
          setSuccess: this.setSuccess,
          success: this.state.success
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    );
  }
}

export default MyApp;
