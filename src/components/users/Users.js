import * as React from 'react';
import styled from 'styled-components';
import { setTabTitle } from './../../redux/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import { useFormik } from 'formik';
import { selectUsers } from './../../redux/Users';
import { getUsersAsync, createUserAsync } from './../../redux/Users';

const UsersContainer = styled.div`
display: flex;
flx-direction: row;
margin: 0px 20px;
padding: 40px 60px;
`;

const UsersItemContainer = styled.div`
flex: 1 1 auto;
`;

const StyledTable = styled.table`
    caption-side: top,
    border: none,
    border-collapse: collapse,
    caption-side: bottom,
    
    td, th {
        
    },

    td, th {
        border: none;
        padding: 5px 20px;
    }
    thead > tr {
        background-color: #c2c2c2;
    }
    tbody tr {
        :nth-of-type(odd) {
            background-color: #efefef;
        }
        :hover {
            background-color: cadetblue;
        }
    }

`;

const UserFormContainer = styled.div`
display: flex;
flex-direction: row;
padding: 0px 10px;
`;
const UserFormField = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
padding-bottom: 10px;
column-gap: 15px;

label {
    font-size: 22px;
    font-family: fantasy;
}
input {
    border: 2px solid lawngreen;
    height: 30px;
}
`;

const StyledSubmitButton = styled.button`
width: 50%;
height: 40px;
font-size: 20px;
margin-left: 40px;
border: 2px solid cadetblue;
background-color: cadetblue;
`;


const Users = () => {
    const dispatch = useDispatch();
    const usersList = useSelector(selectUsers);
    useEffect(() => {
        dispatch(setTabTitle('Users'));
        dispatch(getUsersAsync());
    }, []);

    const userFormik = useFormik({
        initialValues : {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        validate: () => {},
        onSubmit: (values) => {
            console.log(values);
            dispatch(createUserAsync(values))
        }
    });


    return (
        <>
        {console.log('Rendered')}
        <UsersContainer>
            <UsersItemContainer>
            <StyledTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                {usersList.users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    )
                })}

                </tbody>
            </StyledTable>
            </UsersItemContainer>

            <UsersItemContainer>
            {/* User form here */}
            <UserFormContainer>
            <form onSubmit={userFormik.handleSubmit}>
                <UserFormField>
                <label htmlFor='firstName'>First Name</label>
                <input 
                type="text"
                id="firstName"
                name="firstName"
                onChange={userFormik.handleChange}
                value={userFormik.values.firstName}
                // onValueChange={userFormik.handleChange}
                />
                </UserFormField>

                <UserFormField>
                <label htmlFor='lastName'>Last Name</label>
                <input 
                type="text"
                id="lastName"
                name="lastName"
                onChange={userFormik.handleChange}
                value={userFormik.values.lastName}
                />
                </UserFormField>

                <UserFormField>
                <label htmlFor='email'>Email</label>
                <input
                type="email"
                id="email"
                name="email"
                onChange={userFormik.handleChange}
                value={userFormik.values.email}
                />
                </UserFormField>

                <UserFormField>
                <label htmlFor='phone'>Phone</label>
                <input
                type="phone"
                id="phone"
                name="phone"
                onChange={userFormik.handleChange}
                value={userFormik.values.phone}
                />
                </UserFormField>

                <br/>
                <StyledSubmitButton type='submit'>Save</StyledSubmitButton>
            </form>
            </UserFormContainer>

            </UsersItemContainer>
        </UsersContainer>
        
        </>
    )
}

export default Users;