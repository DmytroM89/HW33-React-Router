import React from 'react';
import {IconButton, Link, ListItem, ListItemButton, ListItemText, Tooltip} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Link as RouterLink } from "react-router-dom";

import './ToDoItem.scss';

function ToDoItem({item, onChangeStatus, onDelete}) {
    return (
        <ListItem
            secondaryAction={
                <>
                    <Tooltip title="Change status">
                        <IconButton color="primary" onClick={() => onChangeStatus(item.id)}>
                            <ChangeCircleIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <IconButton edge="end" color="error" onClick={() => onDelete(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </>
            }
            disablePadding
            className={'todo-item ' + (item.done ? 'todo-item--done' : '')}
        >
            <Link component={RouterLink} underline="none" to={`todo/${item.id}`}>
                <ListItemButton role={undefined} dense>
                    <ListItemText className="todo-item__text" primary={item.name} />
                </ListItemButton>
            </Link>
        </ListItem>
    );
}

export default ToDoItem;
