import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [email, set] = useState("mhurtado1@berklee.edu");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "wishlist_user",
            JSON.stringify({
              id: user.id,
              admin: user.isAdmin,
            })
          );

          navigate("/");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (
    <main className="container--login">
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Nashville Geeter WishList</h1>
          <h3>Please sign in</h3>
          <div className="login-form">
            <label className="email" htmlFor="inputEmail">
              {" "}
              Email address{" "}
            </label>
            <input
              type="email"
              value={email}
              onChange={(evt) => set(evt.target.value)}
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
            <button className="submit" type="submit">
              Sign in
            </button>

            <div className="btn-box">
              <button className="link--register">
                <Link to="/register">Not a member yet?</Link>
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
