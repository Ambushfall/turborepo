import Todo from './todo';
import styles from '../page.module.css'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

async function getTodos() {
    // console.log(process.env.NEXT_PUBLIC_HOST)
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todos`);
    const todos: Todo[] = await res.json();
    return todos;
}

export default async function Page() {
    const todos = await getTodos();
    return (
        <div className={styles.container} >
            <main className={styles.main}>
                <ul>
                    {todos.map((todo) => (
                        <Todo key={todo.id} {...todo} />
                    ))}
                    {/* {process.env.NEXT_PUBLIC_HOST} */}
                </ul>
            </main>
        </div>
    );
}