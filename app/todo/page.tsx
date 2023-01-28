import { TodoList, Todo } from './todo';
import styles from '../page.module.css'


async function getTodos() {

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
                   <TodoList todos={todos} />
                </ul>
            </main>
        </div>
    );
}