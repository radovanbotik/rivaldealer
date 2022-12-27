import React from "react";
import styled from "styled-components";
import { Logographic } from "../assets";

export const Navbar = () => {
  return (
    <Wrapper>
      <div className="logo-control">
        <Logographic />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-left: 1px solid var(--black-main);
  border-right: 1px solid var(--black-main);
  width: 90px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white-main);
  box-shadow: inset 0px 0px 5px 0px var(--black-main);

  .logo-control {
    top: 60px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;

      /* fill: var(--white-main); */
    }
  }
`;
