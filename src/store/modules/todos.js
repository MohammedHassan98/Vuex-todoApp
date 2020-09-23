import axios from 'axios'

const state = {
    todos: []
}

const getters = {
    allTodos: state => state.todos
}

const actions = {
    async fetchTodos( { commit } ){
        const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos',response.data)
    },
    async AddTodo( { commit },title ) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos', {title, compeleted: false})
        commit('newTodo',response.data)
    }
}

const mutations = {
    setTodos: (state,todos) => (state.todos = todos),
    newTodo: (state,todos) => (state.todos.unshift(todos))
}

export default {
    state ,
    getters ,
    actions , 
    mutations
}