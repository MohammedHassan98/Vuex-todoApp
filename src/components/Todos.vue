<template>
    <div>
        <h3> Todos </h3>
        <div class="todos">
            <div class="todo"> Todo 1 </div>
            <div v-for="todo in allTodos" :key="todo.id" class="todo" > {{todo.title}} </div>
        </div>
    </div>
</template>

<script>
// import { component } from 'vue/types/umd'
import {mapGetters, mapActions} from 'vuex'
export default {
    name : 'Todos',

    data () {
        return {}
    },

    computed: mapGetters(["allTodos"]),

    methods: {
        ...mapActions(['fetchTodos'])
    },

    created() {
        this.fetchTodos()
    }

    

}
</script>

<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
    }

    .todo{
        border: 1px solid rgb(232, 230, 230);
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
</style>