import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import ContactPage from './pages/contactpage/contactpage.component';
import HatsPage from './pages/hatspage/hatspage.component';
import JacketsPage from './pages/jacketspage/jacketspage.component';
import MensPage from './pages/menspage/menspage.component';
import SneakersPage from './pages/sneakerspage/sneakerspage.component';
import WomenPage from './pages/womenspage/womenspage.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUp} />
        <Route path='/contact' component={ContactPage}/>
        <Route path='/shop/hats' component={HatsPage}/>
        <Route path='/shop/jackets' component={JacketsPage}/>
        <Route path='/shop/mens' component={MensPage}/>
        <Route path='/shop/sneakers' component={SneakersPage}/>
        <Route path='/shop/womens' component={WomenPage}/>




      </Switch>
    </div>
  );
} 



export default App;
