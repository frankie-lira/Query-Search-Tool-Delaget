//import logo from './logo.svg';
import './App.css';
import "./index.css";
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import { Container, Dropdown, Form, Label, Segment } from 'semantic-ui-react';
import {Dashboard} from './component/Dashboard/index';
import {SideBar} from './component/SideBar/index';
import {Restaurants} from "./Data/Restaurants.json";
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
//import Datatable from './lib/component/Datatable';
import $ from 'jquery';


//import React, {useEffect,useState} from 'react'

function App() {

  return (
    // <div><PersonComp/> </div>
    <Container style={{height: '100vh'}}>
     <div><SideBar/></div> 
     {/* <div><Dashboard/></div>  */}
    </Container>
    
    
  );
}

export default App;
