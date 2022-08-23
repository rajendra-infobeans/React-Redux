import * as React from 'react';
import styled from 'styled-components';
import { setTabTitle } from './../../redux/Dashboard';
import { useDispatch} from 'react-redux';
import {useEffect} from 'react';

const About = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTabTitle('About'));
    }, [dispatch])
    return (
        <>
        <h2>About content here..!</h2>
        </>
    )
}

export default About;