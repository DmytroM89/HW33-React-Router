import React, {useEffect} from 'react';
import { Container } from "@mui/material";

import './ToDo.scss';
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoList from "./ToDoList/ToDoList";
import {useDispatch, useSelector} from "react-redux";
import {
    addTodoThunk,
    deleteTodoThunk,
    setTodosThunk,
    updateTodoThunk
} from "../../store/actions";

function ToDo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTodosThunk());
    }, [])

    async function deleteTodo(id) {
        dispatch(deleteTodoThunk(id));
    }

    async function addTodo(todo) {
        dispatch(addTodoThunk(todo));
    }

    async function changeStatus(id) {
        dispatch(updateTodoThunk(id));
    }

    return (
        <Container maxWidth="sm">
            <ToDoForm onAddTodo={addTodo}></ToDoForm>
            <ToDoList todos={todos} onChangeStatus={changeStatus} onDelete={deleteTodo}></ToDoList>
        </Container>
    );
}

export default ToDo;
