import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";
import ReactDOM from "react-dom";
import BookShow from "../../screens/BookShow/BookShow";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const TabContainer = function(props) {
  return (
    <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      regUsername: "",
      regPassword: "",
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      firstnameRequired: "dispNone",
      lastnameRequired: "dispNone",
      emailRequired: "dispNone",
      regUsernameRequired: "dispNone",
      regPasswordRequired: "dispNone"
    };
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({
      modalIsOpen: false,
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      regUsername: "",
      regPassword: "",
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      firstnameRequired: "dispNone",
      lastnameRequired: "dispNone",
      emailRequired: "dispNone",
      regUsernameRequired: "dispNone",
      regPasswordRequired: "dispNone",
      value: 0
    });
  };

  tabChangeHandler = (event, value) => {
    console.log(value);
    this.setState({ value });
  };

  loginClickHandler = () => {
    this.state.username === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });

    this.state.password === ""
      ? this.setState({ passwordRequired: "dispBlock" })
      : this.setState({ passwordRequired: "dispNone" });
  };

  registerClickHandler = () => {
    this.state.firstname === ""
      ? this.setState({ firstnameRequired: "dispBlock" })
      : this.setState({ firstnameRequired: "dispNone" });

    this.state.lastname === ""
      ? this.setState({ lastnameRequired: "dispBlock" })
      : this.setState({ lastnameRequired: "dispNone" });

    this.state.email === ""
      ? this.setState({ emailRequired: "dispBlock" })
      : this.setState({ emailRequired: "dispNone" });

    this.state.regUsername === ""
      ? this.setState({ regUsernameRequired: "dispBlock" })
      : this.setState({ regUsernameRequired: "dispNone" });

    this.state.regPassword === ""
      ? this.setState({ regPasswordRequired: "dispBlock" })
      : this.setState({ regPasswordRequired: "dispNone" });
  };

  inputUsernameChangeHandler = e => {
    this.setState({ username: e.target.username });
  };

  inputPasswordChangeHandler = e => {
    this.setState({ password: e.target.password });
  };

  inputfirstnameChangeHandler = e => {
    this.setState({ firstname: e.target.firstname });
  };

  inputlastnameChangeHandler = e => {
    this.setState({ lastname: e.target.lastname });
  };

  inputemailChangeHandler = e => {
    this.setState({ email: e.target.email });
  };

  inputregUsernameChangeHandler = e => {
    this.setState({ regUsername: e.target.regUsername });
  };

  inputregPasswordChangeHandler = e => {
    this.setState({ regPassword: e.target.regPassword });
  };

  bookShowHandler = () => {
    ReactDOM.render(<BookShow />, document.getElementById("root"));
  };

  render() {
    return (
      <div>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="login-button">
            <Button
              variant="contained"
              color="default"
              onClick={this.openModalHandler}
            >
              Login
            </Button>
          </div>
          {this.props.showBookShowButton === "true" ? (
            <div className="bookshow-button">
              <Button
                variant="contained"
                color="primary"
                onClick={this.bookShowHandler}
              >
                BOOK SHOW
              </Button>
            </div>
          ) : (
            ""
          )}
        </header>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          contentLabel="Login"
          onRequestClose={this.closeModalHandler}
          style={customStyles}
        >
          <Tabs
            className="tabs"
            value={this.state.value}
            onChange={this.tabChangeHandler}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  password={this.state.password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
                LOGIN
              </Button>
            </TabContainer>
          )}

          {this.state.value === 1 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="firstname">First Name</InputLabel>
                <Input
                  id="firstname"
                  type="text"
                  firstname={this.state.firstname}
                  onChange={this.inputfirstnameChangeHandler}
                />
                <FormHelperText className={this.state.firstnameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl required>
                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                <Input
                  id="lastname"
                  type="text"
                  lastname={this.state.lastname}
                  onChange={this.inputlastnameChangeHandler}
                />
                <FormHelperText className={this.state.lastnameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl required>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="text"
                  email={this.state.email}
                  onChange={this.inputemailChangeHandler}
                />
                <FormHelperText className={this.state.emailRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl required>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  regUsername={this.state.regUsername}
                  onChange={this.inputregUsernameChangeHandler}
                />
                <FormHelperText className={this.state.regUsernameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <FormControl required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="text"
                  regPassword={this.state.regPassword}
                  onChange={this.inputregPasswordChangeHandler}
                />
                <FormHelperText className={this.state.regPasswordRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.registerClickHandler}
              >
                REGISTER
              </Button>
            </TabContainer>
          )}
        </Modal>
      </div>
    );
  }
}

export default Header;
