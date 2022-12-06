import Todo from './todo';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

async function getTodos() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todos`);
    const todos: Todo[] = await res.json();
    return todos;
}

export default async function Page() {
    const todos = await getTodos();
    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    );
}