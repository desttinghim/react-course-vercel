import { Route, Redirect, Switch } from 'react-router-dom';

import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import QuoteAdd from "./pages/QuoteAdd";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <Quotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <QuoteAdd />
      </Route>
    </Switch>
  );
}

export default App;
