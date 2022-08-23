import * as React from 'react';
import styled from 'styled-components';
import dashImgSrc from './images/hero-blog-v2.jpg';
import { setTabTitle } from './../../redux/Dashboard';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const DashboardPageContainer = styled.div`
 display: flex;
 padding: 0px 20px;
 width: 100%;
`;

const DashboardPageItems = styled.div`
display: grid;
grid-auto-flow: column;
grid-template-columns: auto auto;
grid-gap: 50px;
width: 100%
`;

const DashboardPageLeftContent = styled.div`
.title {
    font-size: 65px;
    line-height: 90px;
    letter-spacing: 2px;
}
.desc {
    margin: 0;
    font-size: 30px;
    line-height: 36px;
    font-weight: 500;
}
}
`;
const DashboardPageRightContent = styled.div`
padding: 0px 20px;
`;

const DashboardPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTabTitle('Dashboard'));
    }, [dispatch])

    return (
        <>
        <DashboardPageContainer>
            <DashboardPageItems>
                <DashboardPageLeftContent>
                <h1 className={'title'}>Your stories are<strong>worth Retelling</strong></h1>
                <h2 className={'desc'}>Remember, share, and reminisce about life’s precious moments on a <b>free storytelling website</b></h2>
                </DashboardPageLeftContent>

                <DashboardPageRightContent>
                 <img src={dashImgSrc} alt={'Image here'} />
                </DashboardPageRightContent>
                
            </DashboardPageItems>
        </DashboardPageContainer>
        </>
    )
}

export default DashboardPage;