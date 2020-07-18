import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
// require 可以防止 Tree Shaking
// require("icons/money.svg");
// require("icons/tag.svg");
// require("icons/statistics.svg");

const NavWrapper = styled.nav`
  line-height: 1.2;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
   display:flex;
    >li{
      padding:4px 0;
      width: 33.33333%;
      text-align: center;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      font-size:12px;
      >.icon{
          width:32px;
          height:32px;
      }
    }

  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="tag" />
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <Icon name="money" />
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Icon name="statistics" />
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    );

}
export default Nav;
