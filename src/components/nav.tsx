import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
// require 可以防止 Tree Shaking
// require("icons/money.svg");
// require("icons/tag.svg");
// require("icons/statistics.svg");
const themeColor = "#61bafb";
const NavWrapper = styled.nav`
  line-height: 1.2;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
   display:flex;
    >li{
      padding:4px 0;
      width: 33.33333%;
      >a{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        font-size:12px;
        color:#666666;
        fill:#666666;
        >.icon{
          width:32px;
          height:32px;
        }
        &.selected{
            color:${themeColor};
            fill:${themeColor};
        }
      } 
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag" />
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money" />
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics" />
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );

}
export default Nav;
