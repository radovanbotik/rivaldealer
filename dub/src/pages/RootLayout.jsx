import React, { forwardRef } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import dusty from "../assets/dusty.jpg";

export const RootLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <div className="player">
        <div className="icon-control">
          <span className="material-symbols-outlined icon">play_arrow</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: url("https://www.transparenttextures.com/patterns/asfalt-light.png"),
    linear-gradient(
      to right bottom,
      #000000,
      #2e2e2e,
      #585858,
      #878787,
      #b9b9b9,
      #b9b9b9,
      #b9b9b9,
      #b9b9b9,
      #878787,
      #585858,
      #2e2e2e,
      #000000
    );
  /* background: url("https://www.transparenttextures.com/patterns/simple-dashed.png"),
    linear-gradient(
      to left,
      var(--white-main),
      var(--black-main) 25%,
      var(--white-main) 95%
    ); */
  /* background: url("https://www.transparenttextures.com/patterns/bright-squares.png"); */
  /* background: url("https://www.transparenttextures.com/patterns/inflicted.png"); */
  height: 100vh;
  width: 100vw;
  display: flex;
  .player {
    position: fixed;
    bottom: 0;
    left: 85px;
    width: 100vw;
    height: 60px;
    background-color: var(--black-main);
    display: grid;
    align-items: center;
    padding-left: 22px;
    .icon {
      color: white;
      font-size: var(--size-600);
      cursor: pointer;
    }
  }
`;
