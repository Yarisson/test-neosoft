<template>
    <div class="add-task">
        <p class="add-task__text">Новая задача</p>
        <div class="add-task__text-wrapper">
            <input v-model="name" type="text" placeholder="название задачи" class="add-task__input">
            <button :disabled="!name" @click="addTask" class="add-task__button">Добавить задачу</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import storeTask from '../../store/tasks';

const name = ref('')

const addTask = (async() => {
    await storeTask.dispatch('addTask', name.value)
})
</script>

<style scoped>
.add-task {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
}

.add-task__text {
    margin-bottom: 20px;
}

.add-task__text-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.add-task__input {
    width: 200px;
    height: 40px;
    padding: 20px;
    margin-right: 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out opacity;
}

.add-task__input:hover {
    opacity: 0.8;
}

.add-task__button {
    width: 100px;
    height: 40px;
    background-color: darkgreen;
    border-radius: 40px;
    transition: 0.3s ease-in-out opacity;
    color: beige;
}


.add-task__button:hover {
    opacity: 0.8;
}

.add-task__button:disabled {
    background-color: gray;
    cursor: not-allowed;
}

.add-task__button:disabled:hover {
    opacity: 1;
}
</style>