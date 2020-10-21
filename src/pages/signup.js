import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';

import { Form } from '../components';
import * as ROUTES from '../constants/router';

export default function Signup() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = () => {
    return firstName === '' || emailAddress === '' || password === '';
  }

  const handleSignup = (event) => {
    event.preventDefault();

    try {
      firebase.auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoUrl: Math.floor(Math.random() * 5) + 1
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      }).catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input
              placeholder='First Name'
              type='name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}   
            />
            <Form.Input
              placeholder='Email address'
              type='email'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}   
            />
            <Form.Input
              placeholder='Password'
              type='password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}   
            />
            <Form.Submit disable={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>

      </HeaderContainer>
      <FooterContainer>
      </FooterContainer>
    </>
  );
}