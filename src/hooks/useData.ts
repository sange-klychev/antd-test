import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {IData} from '../@types/IData';
import {ITodo} from '../@types/ITodos';

export default function useData() {
    const [data, setData] = useState<IData>(
        JSON.parse(localStorage.getItem('data') || '{}')
    );

    const create = (todo: ITodo) => {
        const todos = data?.todos || [];
        const newData = {...data, todos: [...todos, {...todo, id: uuidv4()}]};
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
    };

    const update = (todo: ITodo) => {
        const todos = data?.todos || [];
        const newData = {
            ...data,
            todos: todos.map((item) => (item.id === todo.id ? todo : item))
        };
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
    };

    const saveTodos = (todo: ITodo) => {
        if (todo.id) {
            update(todo);
        } else {
            create(todo);
        }
    };

    const remove = (id: string) => {
        const todos = data?.todos || [];
        const newData = {
            ...data,
            todos: todos.filter((item) => item.id !== id)
        };
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
    };

    return {
        data,
        saveTodos,
        remove
    };
}
