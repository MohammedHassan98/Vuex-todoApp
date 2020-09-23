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
    },
    async DeleteTodo( { commit }, id ){
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('deleteTodo',response.data)
    },

    async FilterTodos({commit},e){
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodos',response.data)
    },

    async updateTodos({commit},update) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${update.id}`,update)
        commit('updatetodo',response)
        console.log(response)
    }
}

const mutations = {
    setTodos: (state,todos) => (state.todos = todos),
    newTodo: (state,todos) => (state.todos.unshift(todos)),
    deleteTodo: (state,id) => (state.todos.filter(todo => todo.id !== id)),
    updatetodo: (state, update) => {
        const index = state.todos.findIndex(todo => todo.id === update.id)
        if (index !== -1){
            state.todos.splice(index,1,update)
        }
    }
}

export default {
    state ,
    getters ,
    actions , 
    mutations
}