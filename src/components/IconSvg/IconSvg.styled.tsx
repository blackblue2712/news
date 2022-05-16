import styled from "styled-components";

export const IconSvgContainer = styled.div<{
  width: string;
  height: string;
  color: string;
  hoverColor: string;
  padding: string;
  position: string;
  opacity: number;
  pointer: string;
  backgroundColor: string;
  zIndex: number;
  rotate: number;
  margin: string;
}>`
  display: flex;
  position: ${(props) => props.position};
  opacity: ${(props) => props.opacity};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  max-width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  fill: ${(props) => props.color};
  cursor: ${(props) => props.pointer};
  background-color: ${(props) => props.backgroundColor};
  z-index: ${(props) => props.zIndex};
  transform: rotate(${(props) => props.rotate}deg);
  margin: ${(props) => props.margin};

  svg {
    height: 100%;
    width: 100%;
  }

  &:hover {
    fill: ${(props) => props.hoverColor};
  }
`;

export default {
  IconSvgContainer,
};
