import Todo from './todo';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

async function getTodos() {
    console.log(process.env.NEXT_PUBLIC_HOST)
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todos`);
    // const todos: Todo[] = await res.json();
    // return todos;
}

export default async function Page() {
    // const todos = await getTodos();
    return (
        <ul>
            {/* {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))} */}
            {process.env.NEXT_PUBLIC_HOST}
        </ul>
    );
}