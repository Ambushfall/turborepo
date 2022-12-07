"use client";

import { useRouter } from 'next/navigation';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

async function update(id: number, completed: boolean, refresh: () => void) {
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            "userId": 1,
            "id": 1,
            "title": "delectus Anus",
            "completed": true
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    // Refresh the current route and fetch new data from the server
    refresh();
}

export default function Todo(todo: Todo) {
    const router = useRouter();
    // console.log(process.env.NEXT_PUBLIC_HOST)

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => update(todo.id, !todo.completed, router.refresh)}
            />
            {todo.title}
        </li>
    );
}