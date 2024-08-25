import React, { useEffect, useState } from 'react';
import './Login.css';
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const User = {
  email: "test@naver.com",
  password: 'test123@@'
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setpassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const onclickConfirm = () => {
    if(email === User.email && password === User.password){
      alert('로그인 성공')
    }else{
      alert('등록되지 않은 회원')
    }
  }

  useEffect(() => {
    if(emailValid && passwordValid){
      setNotAllow(false)
      return;
    }
    setNotAllow(true);
  },[emailValid, passwordValid])

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ m: 2 }}>
          Sign in
        </Typography>
        <TextField
          type="text"
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmail}
          sx={{mb: 2, mt:2}}
        />
        <div className="errorMessage">
          {!emailValid && email.length > 0 && (
            <span>이메일 형식에 맞게 입력해주세요.</span>
          )}
        </div>
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
          name="password"
          autoComplete="ccurrent-password"
          value={password}
          onChange={handlePassword} 
          sx={{mb: 2, mt:2}}
        />
        <div className="errorMessage">
          {!passwordValid && password.length > 0 && (
            <span>영문, 숫자, 특수문자 포함 9글자 이상 입력해주세요.</span>
          )}
        </div>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" disabled={notAllow} onClick={onclickConfirm} fullWidth variant="contained" sx={{ mt: 3 }}>
          Sign in
        </Button>
        <Grid container sx={{ mb: 10 }}>
          <Grid item xs>
            <RouterLink to="/forgotpw" className='movePages'>Forgot password?</RouterLink>
          </Grid>
          <Grid item>
            <RouterLink to="/signUp" className='movePages'>Sign Up</RouterLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
