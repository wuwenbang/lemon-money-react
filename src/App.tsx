import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect } from 'react';
import Tags from "views/Tags";
import Money from "views/Money";
import Statistics from "views/Statistics";
import NoMatch from "views/NoMatch";
import TagEdit from './views/TagEdit';

const App = function App() {
  useEffect(() => {
    if (document.documentElement.clientWidth > 500) {
      window.alert("请使用【手机】或者【开发者工具手机模式】预览网址")
    }
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/tags/:id">
          <TagEdit />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App