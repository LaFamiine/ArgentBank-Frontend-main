import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure, setUser } from "../Store/Index";
import { loginUser, fetchUserProfile } from "../api/auth";


function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(email, password);
      dispatch(loginSuccess({ token }));
      const user = await fetchUserProfile(token);
      dispatch(setUser(user));
      navigate("/profile");
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;