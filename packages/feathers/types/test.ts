import feathers, { Service } from '@feathersjs/feathers';

interface Todo {
    text: string;
}

interface Services {
    todos: Service<Todo>;
}

const app = feathers<Services>(); // $ExpectType Application<Services>

app.use('todos', {
    async find(): Promise<Todo[]> {
        return [];
    }
});

const todosService = app.service('todos'); // $ExpectType Service<Todo>
