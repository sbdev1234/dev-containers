/*
 This is a simple typescript application that makes an API request to get a todo
 object and logs the todo object to the console.
*/

import axios from 'axios';
import { format } from 'date-fns';

const now = new Date();
console.log(`ex01 Hello Node.js on ${format(now, 'yyyy-MM-dd HH:mm:ss')}`);

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (todo: ITodo): void => {
  console.log(`
    Todo Details:
    -------------
    UserId:     ${todo.userId}
    Id:         ${todo.id}
    Title:      ${todo.title}
    Completed:  ${todo.completed ?? false}
  `);
};

axios
  .get(url)
  .then((response): void => {
    const data = response.data as ITodo;
    logTodo(data);
  })
  .catch((error): void => {
    console.error(error);
  });
