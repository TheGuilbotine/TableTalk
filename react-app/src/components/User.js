import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="user-profile__container">
      <div className="user-profile__rewards-container">
        <h1>Total Rewards Points: 1 000 000</h1>
        <div className="reward-examples__container">
          <table>
            <tr>
              <th>Amount</th>
              <th>Goodies</th>
            </tr>
            <tr>
              <td>50</td>
              <td>Appetizer</td>
            </tr>
            <tr>
              <td>100</td>
              <td>Desert</td>
            </tr>
            <tr>
              <td>250</td>
              <td>Two Mixed Drinks</td>
            </tr>
            <tr>
              <td>500</td>
              <td>Entree</td>
            </tr>
            <tr>
              <td>1000</td>
              <td>Appetizer, Two Entrees and Two Deserts</td>
            </tr>
            <tr>
              <td>5000</td>
              <td>Dinner with Drinks for Two</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    // <ul>
    //   <li>
    //     <strong>User Id</strong> {userId}
    //   </li>
    //   <li>
    //     <strong>Username</strong> {user.username}
    //   </li>
    //   <li>
    //     <strong>Email</strong> {user.email}
    //   </li>
    // </ul>
  );
}
export default User;
