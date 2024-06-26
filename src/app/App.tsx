import React from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'

// You can learn about the difference by reading this guide on minimizing bundle size.
// https://mui.com/guides/minimizing-bundle-size/
// import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Menu } from '@mui/icons-material';
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "./store";
import {TodolistDomainType} from "../features/TodolistsList/todolists-reducer";
import {initialStateType, RequestStatusType} from "../features/TodolistsList/app-reducer";
import ErrorSnackbar from "../components/ErrorSnackbar/ErrorSnackbar";


function App() {
    const status = useAppSelector<initialStateType>(state => state.loading)
    return (
        <div className="App">
            <ErrorSnackbar />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {status.status==='loading' &&<LinearProgress/>}
            <Container fixed>
                <TodolistsList/>
            </Container>
        </div>
    )
}

export default App
