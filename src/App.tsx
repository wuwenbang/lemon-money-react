import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`;
const Main = styled.div`
  flex-grow:1;
`;
const Nav = styled.nav`
  >ul{
   display:flex;
    >li{
      width: 33.33333%;
      padding: 16px;
      text-align: center;
    }
  }
  border: 1px solid yellow;
`;

const App = function App() {
  return (

    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>

        <Nav>
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
        </Nav>
      </Wrapper>
    </Router>
  );
}
function NoMatch() {
  return <h2>页面不存在，请输入正确路径</h2>;
}
function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

export default App