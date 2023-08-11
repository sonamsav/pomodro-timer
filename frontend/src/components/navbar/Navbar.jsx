import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  height: 30px;
  background-color: rgba(225, 207, 229, 0.698);
  color: #c66edd;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const ListItem = styled.li`
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <NavContainer>
      <Logo>PomoDro App</Logo>
      {user ? (
        <List>
          <ListItem>
            <AvatarImage src={user.photos[0].value} alt="Avatar" />
          </ListItem>
          <ListItem>{user.displayName}</ListItem>
          <ListItem onClick={logout}>Logout</ListItem>
        </List>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </NavContainer>
  );
};

export default Navbar;
