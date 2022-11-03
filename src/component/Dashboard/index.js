import "./styles.css";

import { Container, Dropdown, Form, Label, Segment } from 'semantic-ui-react';
import {SideBar} from "../SideBar/index";

// import {SideBar} from './component/SideBar/index';
//https://codepen.io/nscherneck/pen/dJoVdZ

//https://codepen.io/hellboy71/pen/RedBBE
export function Dashboard () {
    



    return (

    <body>
        <main>
            <section class="glass-container">
                {/* <!-- Dashboard --> */}
                <div class="dashboard">
                    {/* <div class="dashboard-user">
                        <img class="avatar" src="https://cdn.pixabay.com/photo/2020/08/31/12/29/harry-potter-5532341_960_720.jpg" alt="User Avatar"/>
                        <h3>Harry Potter</h3>
                        <p>Sr. Auror</p>
                    </div> */}
                    <i class="fa fa-filter" aria-hidden="true">
                        <span>Filter Results</span>
                    </i>
                    <div class="filter-sort-container">
                    <div><SideBar/></div>
                        {/* <div class="filter-sort-label">
                            <span>Sort By</span>
                        </div>
                            <div>
                                <select class="filter-sort-select">
                                    <option value="name">System Name</option>
                                    <option value="system_type_id">System Type</option>
                                    <option value="customer_id">Customer</option>
                                    <option value="site_id">Site</option>
                                    <option value="next_test_date">Next Test Date</option>
                                </select>
                            </div> */}
                    </div>


                    


                    {/* <!-- Dashboard Side Menu --> */}
                    <div class="dashboard-menu">
                        <div class="link">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M3,13h1v2v5c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2v-5v-2h1c0.404,0,0.77-0.244,0.924-0.617 c0.155-0.374,0.069-0.804-0.217-1.09l-9-9c-0.391-0.391-1.023-0.391-1.414,0l-9,9c-0.286,0.286-0.372,0.716-0.217,1.09 C2.23,12.756,2.596,13,3,13z M12,4.414l6,6V15l0,0l0.001,5H6v-5v-3v-1.586L12,4.414z"></path><path d="M12,18c3.703,0,4.901-3.539,4.95-3.689l-1.9-0.621C15.042,13.713,14.269,16,12,16c-2.238,0-3.02-2.221-3.051-2.316 L7.05,14.311C7.099,14.461,8.297,18,12,18z"></path></svg> */}
                            <h2>Holder</h2>
                        </div>
                        <div class="link">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M19.875,3H4.125C2.953,3,2,3.897,2,5v14c0,1.103,0.953,2,2.125,2h15.75C21.047,21,22,20.103,22,19V5 C22,3.897,21.047,3,19.875,3z M19.875,19H4.125c-0.057,0-0.096-0.016-0.113-0.016c-0.007,0-0.011,0.002-0.012,0.008L3.988,5.046 C3.995,5.036,4.04,5,4.125,5h15.75C19.954,5.001,19.997,5.028,20,5.008l0.012,13.946C20.005,18.964,19.96,19,19.875,19z"></path><path d="M6 7H12V13H6zM13 15L6 15 6 17 13 17 14 17 18 17 18 15 14 15zM14 11H18V13H14zM14 7H18V9H14z"></path></svg> */}
                            <h2>Holder </h2>
                        </div>
                        <div class="link">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9 17 6.243 14.757 4 12 4zM11 18H13V20H11z"></path></svg> */}
                            <h2> Holder</h2>
                        </div>
                        <div class="link">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-1.594,1.594c-0.739-0.22-2.118-0.72-2.992-1.594 s-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.391-0.391-1.023-0.391-1.414,0L3.581,5.005 c-0.38,0.38-0.594,0.902-0.586,1.435c0.023,1.424,0.4,6.37,4.298,10.268s8.844,4.274,10.269,4.298c0.005,0,0.023,0,0.028,0 c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L17.707,12.293z M17.58,19.005 c-1.248-0.021-5.518-0.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7,4.414L9.586,7L8.293,8.293 C8.054,8.531,7.952,8.875,8.021,9.205c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271 c0.333,0.071,0.674-0.032,0.912-0.271L17,14.414L19.586,17L17.58,19.005z"></path></svg> */}
                            <h2>Holder</h2>
                        </div>
                    </div> 
                    {/* <div class="dashboard-join">
                        <h2>Join our website for all the latest wizard news!</h2>
                    </div>  */}
                    
                    {/* End Dashboard Side Menu  */}
                </div>  
                
                {/* <!-- End Dashboard --> */}
                {/* <!-- News --> */}
                <div class="news">
                    <div class="title">
                        <h1>Delaget Restaurant Data </h1>
                        <input type="text" name="Search" id="Search" />
                    </div>
                    {/* <!-- Cards --> */}
                    <div class="cards">
                        {/* <div class="card">
                            <img src="https://cdn.pixabay.com/photo/2015/10/06/22/04/harry-potter-975362_960_720.jpg" alt=""/>
                            <div class="card-info">
                                <h2>Hoqwarts Great Hall Prepares for Party</h2>
                                <h3>Jan 28, 2021 10:30 AM</h3>
                                <p>The Great Hall in the Hogwarts Castle prepares for another amazing dance party with guests ...</p>
                            </div>
                            <h2>View</h2>
                        </div> */}



                        {/* <div class="card">
                            <img src="https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                            <div class="card-info">
                                <h2>Dragon Escapes from Gringotts!</h2>
                                <h3>Jan 23, 2021 9:49 AM</h3>
                                <p>A Ukrainian Ironbelly escaped its chains from Gringotts and flys atop the building ...</p>
                            </div>
                            <h2>View</h2>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/3767825/pexels-photo-3767825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                            <div class="card-info">
                                <h2>Flying Car Found</h2>
                                <h3>Jan 19, 2021 2:05 PM</h3>
                                <p>The famous flying car owned by the Weasleys has recently been found in the Forbidden Forest ...</p>
                            </div>
                            <h2>View</h2>
                        </div> */}
                    </div> 
                    {/* <!-- End Cards --> */}
                </div> 
                {/* <!-- End News --> */}
            </section>
        </main>
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        
        <script src="" async defer></script>
    </body>

      
    );
  }
  
