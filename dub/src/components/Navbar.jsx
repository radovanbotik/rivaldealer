import React from "react";
import styled from "styled-components";
import { Logographic } from "../assets";

export const Navbar = () => {
  return (
    <Wrapper>
      <div className="logo-control">
        <Logographic />
      </div>
      <div className="icon-control">
        <span className="material-symbols-outlined icon">drag_handle</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-left: 2px solid var(--black-main);
  border-right: 2px solid var(--black-main);
  width: 90px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: var(--white-main);
  .logo-control {
    position: absolute;
    top: 60px;
    width: 60px;
    height: 60px;
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* fill: var(--white-main); */
    }
  }
  .icon-control {
    /* margin-top: auto; */
    flex: 1;
    display: grid;
    place-content: center;
    .icon {
      font-size: var(--size-700);
      font-size: 4em;
      justify-self: center;
      /* color: var(--white-main); */
    }
  }
`;
