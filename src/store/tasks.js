import { createStore } from 'vuex';
import list from '../data/list';
const store = createStore({
    state: {
        list: null,
    },
    getters: {
        allTasks: (state) => {
            return state.list;
        },
        activeTasks: (state) => {
            return state.list?.filter((task) => task.completed) || [];
        },
        closedTasks: (state) => {
            return state.list?.filter((task) => !task.completed);
        }
    },
    mutations: {
        getTasksToList(state) {
            state.list = list;
        },
        addTaskToList(state, task) {
            state.list = state.list ? [...state.list, task] : [task];
        },
        removeTaskById(state, id) {
            const list = state.list;
            if (list) {
                const index = list.findIndex((task) => task.id === id);
                if (index !== -1) {
                    list.splice(index, 1);
                }
            }
        },
        toggleTaskStatus(state, payload) {
            if (state.list) {
                state.list = state?.list.map(task => task.id === payload.id ? { ...task, completed: payload.status } : task);
            }
        },
    },
    actions: {
        getTasks({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('getTasksToList');
                    resolve();
                }, 1000);
            });
        },
        addTask({ commit }, task) {
            const newTask = {
                title: task,
                id: Date.now() + Math.floor(Math.random() * 1000),
                completed: false
            };
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('addTaskToList', newTask);
                    resolve();
                }, 1000);
            });
        },
        deleteTask({ commit }, id) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('removeTaskById', id);
                    resolve();
                }, 1000);
            });
        },
        changeTaskStatus({ commit }, { id, status }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('toggleTaskStatus', { id, status });
                    resolve();
                }, 1000);
            });
        }
    }
});
export default store;
//# sourceMappingURL=tasks.js.map