import styled from "styled-components";

export const Tabs = styled.div`
  overflow: hidden;
//  background: #fff;
  height: 3em;
`;

export const Tab = styled.a`
font-size: 1rem;
font-weight: bold;
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
