import React from "react";
import styled from "styled-components";
import { Logographic } from "../assets";

export const Button = ({ text }) => {
  return (
    <Wrapper>
      <div className="svg-control">
        <Logographic />
      </div>
      <span>{text}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  /* width: calc(var(--vspace-0) * 2); */
  /* height: 60px; */
  /* padding: 0 var(--vspace-2); */
  border-left: 1px solid var(--black-main);
  transition: border-left 1500ms;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;

  cursor: pointer;
  .svg-control {
    justify-self: flex-start;
    width: 100%;
    height: 100%;
    height: 40px;
    width: 40px;
    svg {
      width: 100%;
      height: 100%;
      transform: rotate(45deg);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 1px);
    height: calc(100% + 1px);

    border-right: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    transition: all 500ms ease-in-out;
    border-radius: 4px;
  }
  &:hover {
    border-left: 1px solid rgba(0, 0, 0, 0);

    &:before {
      width: 100px;
      left: 60px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    span {
      transform: translateX(20px);
    }
    svg {
      stroke-dashoffset: 0;
      fill: var(--black-main);
      transform: rotate(0deg);
    }
  }
  span {
    transform: translateX(-20px);
    transition: all 1000ms ease-in-out;
  }
  .logo-graphic {
    stroke: var(--black-main);
    fill: transparent;
    stroke-width: 5;
    stroke-dasharray: 1000;
    stroke-dashoffset: -1000;
    transition: stroke-dashoffset 500ms ease-in, fill 500ms 500ms ease-in,
      transform 500ms 500ms ease-in;
  }
`;
