import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
   display:flex;
    >li{
      width: 33.33333%;
      padding: 16px;
      text-align: center;
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    );

}
export default Nav;
