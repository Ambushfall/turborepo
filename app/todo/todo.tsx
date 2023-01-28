"use client";
import { useRouter } from 'next/navigation';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

async function update(id: number, completed: boolean, refresh: () => void) {
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todos/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            "userId": 1,
            "id": 8,
            "title": "delectus thy Anus",
            "completed": true
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    // Refresh the current route and fetch new data from the server
    refresh();
}


export const TodoList = ({todos}:{todos:Todo[]}) => {
    const router = useRouter();


    return <>{todos.map((v, k) =><li key={k}>
        <input
            key={k}
            type="checkbox"
            checked={v.completed}
            onChange={(e) => update(v.id, !v.completed, router.refresh)}
        />
        {v.title}
    </li>)}
    </>;
};