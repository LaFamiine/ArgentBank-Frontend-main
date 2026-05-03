import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../Store/Index";
import { updateUserProfile } from "../api/auth";

function User() {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(user?.userName || "");
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");

  const handleSave = async () => {
    try {
      const updatedUser = await updateUserProfile(token, firstName, lastName, userName);
      dispatch(setUser(updatedUser));
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <>
            <h1>Edit user info</h1>
            <div className="edit-form">
              <div className="edit-form-row">
                <label>User name:</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div className="edit-form-row">
                <label>First name:</label>
                <input type="text" value={firstName} disabled />
              </div>
              <div className="edit-form-row">
                <label>Last name:</label>
                <input type="text" value={lastName} disabled />
              </div>
              <div className="edit-form-buttons">
                <button className="edit-button" onClick={handleSave}>
                  Save
                </button>
                <button className="edit-button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {user?.firstName} {user?.lastName}!
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default User;
