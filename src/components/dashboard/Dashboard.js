import * as React from 'react';
import styled from 'styled-components';
import DashboardPage from './DashboardPage';
import { Router, Link } from '@reach/router';
import Users from '../users/Users';
import About from '../about/About';
import { useSelector } from 'react-redux';
import { selectTabTitle } from './../../redux/Dashboard';

const DashboardContainer = styled.div`
margin: 0px 20px;
padding: 40px 60px;
background-color: cadetblue;
`;

const DashboardItemContainer = styled.div`
background-color: #fff;
width: 100%;
height: 100%;
`;

const NavBarContainer = styled.div`
padding: 10px 10px;
`;
const NavBarItemsContainer = styled.div`
display:grid;
grid-auto-flow: column;
grid-template-columns: 4fr 1fr 1fr 1fr;
`;

const NavBarTitle = styled.div`
font-family: initial;
font-size: 25px;
font-weight: bold;
`;

const NavBarLink = styled.div`

`;


const Dashboard = () => {

    const tabTitle = useSelector(selectTabTitle);
    // const { title } = useSelector(state => state.dashboard);
    // console.log(tabTitle);
    return (
        <>
        <DashboardContainer>
            <DashboardItemContainer>
                <NavBarContainer>
                    <NavBarItemsContainer>
                    <NavBarTitle>{tabTitle}</NavBarTitle>
                    <Link to="/">Dashboard</Link>
                    <Link to="/users">UserList</Link>
                    <Link to="/about">About</Link>
                    </NavBarItemsContainer>
                </NavBarContainer>
                
                <Router>
                <DashboardPage path="/" />
                <Users path="/users" />
                <About path="/about" />
                </Router>
            </DashboardItemContainer>
        </DashboardContainer>

        </>
    )
}

export default Dashboard;