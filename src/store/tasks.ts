import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import list from '../data/list'
import type { Task, State, ChangeTask } from '../types/task';

export const key: InjectionKey<Store<State>> = Symbol()

export function useStore() {
  return baseUseStore(key)
}

const store = createStore<State>({
  state: {
    list: null,
  },
  getters: {
    allTasks: (state: State) => {
      return state.list;
    },
    activeTasks: (state: State) => {
      return state.list?.filter((task: Task) => task.completed) || [];
    },
    closedTasks: (state: State) => {
      return state.list?.filter((task: Task) => !task.completed);
    }
  },
  mutations: {
    getTasksToList(state: State) {
      state.list = list
    },
    addTaskToList(state: State, task: Task) {
      state.list = state.list ? [...state.list, task] : [task]
    },
    removeTaskById(state: State, id: string | number) {
      const list = state.list
      if (list) {
        const index = list.findIndex((task: Task) => task.id === id)
        if (index !== -1) {
          list.splice(index, 1)
        }
      }
    },
    toggleTaskStatus(state: State, payload: { id: string | number; status: boolean }) {
      if (state.list) {
        state.list = state?.list.map(task =>
          task.id === payload.id ? { ...task, completed: payload.status } : task
        );
      }
    },
  },
  actions: {
    getTasks({ commit }: { commit: Function }) {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          commit('getTasksToList')
          resolve()
        }, 1000)
      })
    },
    addTask({ commit }: { commit: Function }, task: string) {
      const newTask = {
        title: task,
        id: Date.now() + Math.floor(Math.random() * 1000),
        completed: false
      }
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          commit('addTaskToList', newTask)
          resolve()
        }, 1000)
      })
    },
    deleteTask({ commit }: { commit: Function }, id: string | number) {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          commit('removeTaskById', id)
          resolve()
        }, 1000)
      })
    },
    changeTaskStatus({ commit }: { commit: Function }, { id, status }: ChangeTask) {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          commit('toggleTaskStatus', {id, status})
          resolve()
        }, 1000)
      })
    }
  }
})

export default store