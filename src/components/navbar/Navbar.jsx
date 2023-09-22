import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { baseUrl } from "../../services/api";
import axios from "axios";
import Cookies from "js-cookie";
import { setUsers } from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  console.log(baseUrl);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const {
    username,
    password,
    setUsername,
    setPassword,
    isUserLogged,
    setIsUserLogged,
  } = useAuth();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // const testName = "gaurav@9870";
  // const testPassword = "gaurav@9870";

  const handleLogin = async (e) => {
    e.preventDefault();
    setUsername(enteredUsername);
    setPassword(enteredPassword);

    const url = `${baseUrl}/playerLogin`;

    const response = await axios.post(url, {
      userName: enteredUsername,
      password: enteredPassword,
    });

    if (response.status == 201) {
      alert(`You are not registered, Please contact your owner`);
    } else if (response.status == 204) {
      alert("You are disabled please contact your owner");
    } else if (response.status == 200) {
      console.log("logined");

      const token = response.data.token;
      Cookies.set("userToken", token);
      Cookies.set("userName", response.data.userName);
      dispatch(setUsers({ ...response.data }));
      alert("Login Successfull");
      navigate(`/`);
      setIsUserLogged(true);

      // localStorage.setItem("isUserLogged", "true");
      // localStorage.setItem("username", enteredUsername);

      // console.log("User logged in:", testName);
    } else {
      console.error("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setEnteredUsername("");
    setEnteredPassword("");
    setIsUserLogged(false);
    Cookies.remove("userToken");
    Cookies.remove("userName");
    dispatch(setUsers({}));
    // localStorage.removeItem("isUserLogged");
    // localStorage.removeItem("username");
    navigate("/");
    console.log("User Logged out");      
  };

  const checkTokenExist = async () => {
    const cookie = Cookies.get("userToken");
    const url = `${baseUrl}/login`;

    const response = await axios.post(url, { cookie });

    if (response.status == 200) {
      const token = response.data.token;
      Cookies.set("userToken", token);
      Cookies.set("userName", response.data.userName);
      dispatch(setUsers(response.data));
      // navigate(`/`);
      setIsUserLogged(true);
    } else return;
  };

  useEffect(() => {
    checkTokenExist();
  }, []);

  return (
    <div className="header">
      <div className="container">
        <nav className="top">
          <ul className="left">
            <li>
              <Link to="/">
                <img
                  src="/vegas.png"
                  alt="logo"
                  className="logo"
                  loading="lazy"
                />
              </Link>
            </li>
          </ul>
          <div className="right">
            {isUserLogged ? (
              <div className="log-out">
                <button onClick={() => handleLogout()}>Logout</button>
              </div>
            ) : (
              <form className="form" onSubmit={(e) => handleLogin(e)}>
                <div className="input">
                  {/* <BiSolidUser className="icon" /> */}
                  <input
                    required
                    type="text"
                    placeholder="username"
                    value={enteredUsername}
                    onChange={(e) => setEnteredUsername(e.target.value.trim())}
                  />
                </div>
                <div className="input">
                  {/* <BsFillShieldLockFill className="icon" /> */}
                  <input
                    required
                    type="password"
                    placeholder="password"
                    value={enteredPassword}
                    onChange={(e) => setEnteredPassword(e.target.value.trim())}
                  />
                </div>
                <div className="btn">
                  <button type="submit">Login</button>
                </div>
              </form>
            )}
          </div>

          <div
            className={`mobile-menu-btn ${open && "opened"}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        {open && (
          <div className="mobile-menu">
            <div className="mobile-menu-container">
              {/* <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/flights">Flights</Link>
                </li>
                <li>Business Class</li>
                <li>Airline deals</li>
                <li>
                  <Link to="/contact-us">Contact us</Link>
                </li>
              </ul> */}
              {isUserLogged ? (
                <div className="log-out">
                  <button onClick={() => handleLogout()}>Logout</button>
                </div>
              ) : (
                <form className="form" onSubmit={(e) => handleLogin(e)}>
                  <div className="input">
                    {/* <BiSolidUser className="icon" /> */}
                    <input
                      required
                      type="text"
                      placeholder="username"
                      value={enteredUsername}
                      onChange={(e) =>
                        setEnteredUsername(e.target.value.trim())
                      }
                    />
                  </div>
                  <div className="input">
                    {/* <BsFillShieldLockFill className="icon" /> */}
                    <input
                      required
                      type="password"
                      placeholder="password"
                      value={enteredPassword}
                      onChange={(e) =>
                        setEnteredPassword(e.target.value.trim())
                      }
                    />
                  </div>
                  <div className="btn">
                    <button type="submit">Login</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
