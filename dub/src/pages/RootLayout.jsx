import React, { forwardRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";

export const RootLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <div className="player">
        <span className="material-symbols-outlined icon">play_arrow</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  .player {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
    background-color: var(--black-main);
    display: grid;
    .icon {
      color: white;
    }
  }
`;
