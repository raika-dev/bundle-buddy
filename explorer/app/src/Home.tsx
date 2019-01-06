import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";
import Header from "./Header";
import ErrorBoundry from './ErrorBoundry';

// noopener noreferrer

const Bundle = lazy(() => import("./bundle/Bundle"));
const Import = lazy(() => import("./import/Import"));
const Resolve = lazy(() => import("./resolve/Resolve"));

class Home extends Component {
  constructor(props: {}) {
    super(props);
  }

  state = {};

  render() {
    return (
      <Router>
        <ErrorBoundry>
          <div className="App">
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route
                  path="/bundle"
                  component={({ location }: { location: Location }) => {
                    let params = new URLSearchParams(location.search);
                    return <Bundle selected={params.get("selected")} />;
                  }}
                />
                <Route path="/import" component={Import} />
                <Route path="/resolve" component={Resolve} />
              </Switch>
            </Suspense>
          </div>
        </ErrorBoundry>
      </Router>
    );
  }
}

export default Home;
