import Vue from "vue";
import Vuex from "vuex";
import createMultiTabState from 'vuex-multi-tab-state';
// work with reloading
// sync tabs

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [  { text: "learn javascript", done: true, id: Date.now() },
    { text: "learn vue", done: false, id: Date.now() + 1 },
    { text: "learn vuex", done: false, id: Date.now() + 2 }
  ]
  },
  getters: {
    todos: state => {
      return state.todos;
    }
  },
  mutations: {
    // setTodos(state, todos) {
    //   state.todos = todos;
    // },
    addTodo: (state, todo) => {
      state.todos.push(todo);
    },
    toggle: (state, id) => {
      state.todos = state.todos.map(todo => {
        // console.log(id);
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    },
    removeTodo: (state, id) => {
      state.todos = state.todos.filter(el => el.id !== id);
    }
  },
  actions: {
    // initTodos: ({ commit }) => {
    //   commit("setTodos", todos);
    // },
    addTodo: ({ commit }, todo) => {
      commit("addTodo", todo);
    },
    toggle: ({ commit }, id) => {
      commit("toggle", id);
    },
    removeTodo: ({ commit }, id) => {
      commit("removeTodo", id);
    }
  },
  plugins: [   createMultiTabState()]
});
