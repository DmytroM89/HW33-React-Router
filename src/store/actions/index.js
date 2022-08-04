import {getTodosApi, deleteTodoApi, createTodoApi, updateTodoApi, getTodoApi} from "../../components/ToDo/todoApi";

export const ACTION_SET_TODOS = '[ToDos] set todos';
export const ACTION_CREATE_TODO = '[ToDos] create todo';
export const ACTION_UPDATE_TODO = '[ToDos] update todo';
export const ACTION_DELETE_TODO = '[ToDos] delete todo';

export function setTodosAction(todos) {
    return {
        type: ACTION_SET_TODOS,
        payload: todos
    }
}

export function createTodoAction(todo) {
    return {
        type: ACTION_CREATE_TODO,
        payload: todo
    }
}

export function updateTodoAction(todo) {
    return {
        type: ACTION_UPDATE_TODO,
        payload: todo
    }
}

export function deleteTodoAction(id) {
    return {
        type: ACTION_DELETE_TODO,
        payload: id
    }
}

// Thunk creator
export function setTodosThunk() {
    return async function(dispatch) {
        const todos = await getTodosApi();
        dispatch(setTodosAction(todos));
    }
}

export function addTodoThunk(todo) {
    return async function(dispatch) {
        try {
            const newTodo = await createTodoApi(todo);
            dispatch(createTodoAction(newTodo));
        } catch(e) {
            console.warn(e);
        }
    }
}

export function deleteTodoThunk(id) {
    return async function(dispatch) {
        try {
            await deleteTodoApi(id);
            dispatch(deleteTodoAction(id));
        } catch (e) {
            console.warn(e);
        }
    }
}

export function updateTodoThunk(id) {
    return async function(dispatch, getState) {
        try {
            const { todos } = getState();
            const todo = todos.find((item) => item.id === id);
            todo.done = !todo.done;

            await updateTodoApi(id, todo);
            dispatch(updateTodoAction(todo));
        } catch (e) {
            console.warn(e);
        }
    }
}

export function getTodoAction(id) {
    return async function() {
        return getTodoApi(id);
    }
}
