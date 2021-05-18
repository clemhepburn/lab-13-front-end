import request from 'superagent';


export async function signUp(credentials) {
  const response = await request
    .post('/api/auth/signup')
    .ok(res => res.status < 500)
    .send(credentials);
  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
}

export async function signIn(credentials) {
  const response = await request
    .post('/api/auth/signin')
    .ok(res => res.status < 500)
    .send(credentials);
  if (response.status === 400) {
    throw response.body;
  }

  return response.body;
}

export async function addTodo(todo) {
  const response = await request
    .post('/api/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(todo);

  return response.body;
}

export async function getTodos() {
  const response = await request
    .get('/api/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function deleteTodo(id) {
  const response = await request
    .delete(`/api/todos/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function updateTodoCompleted(todo) {
  const response = await request
    .put(`/api/todos/${todo.id}/completed`)
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(todo);
  return response.body;
}