import React from 'react';
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
import { Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Login() {
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
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
          name="password"
          autoComplete="ccurrent-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Sign in
        </Button>
        <Grid container sx={{mb: 10}}>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
