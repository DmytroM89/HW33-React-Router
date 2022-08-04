import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Container, Divider} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useDispatch} from "react-redux";
import {getTodoAction} from "../../../store/actions";

import './ToDoDetails.scss';

function ToDoDetails() {
    let { id } = useParams();
    const [todo, setTodo] = useState({
        name: '',
        done: false
    });
    const dispatch = useDispatch();

    useEffect(() => {
        async function getTodoInfo() {
            const todoInfo = await dispatch(getTodoAction(id));
            setTodo(todoInfo);
        }

        getTodoInfo();
    }, [id])

    return (
        <Container className="main-container" maxWidth="sm">
            <Link to="/" underline="none">
                <Button variant="contained" startIcon={<ArrowBackIosIcon />}>Back</Button>
            </Link>

            <Divider />

            <h3>Todo info</h3>
            <p><strong>Name:</strong> {todo.name}</p>
            <p><strong>Status:</strong> {todo.done ? 'Completed' : 'Not completed'}</p>
        </Container>
    );
}

export default ToDoDetails;
