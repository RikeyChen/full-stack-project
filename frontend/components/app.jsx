import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ListingShowContainer from './listings/listings_show/listing_show_container';

const Header = () => (
  <header className="navbar">
    <Link to="/">
      <div className="navbar-logo" />
    </Link>
    <NavBarContainer />
  </header>
);

const SplashPic = () => (
  <div id="splash-pic" />
);

const App = () => (
  <div>
    <Modal />
    <Route
      exact
      path="/"
      component={Header}
    />
    <Switch>
      <AuthRoute exact path="/" component={SplashPic} />
      <Route path="/listings" component={Header} />
    </Switch>
    <Route path="/listings/:listingId" component={ListingShowContainer} />
  </div>
);


export default App;
