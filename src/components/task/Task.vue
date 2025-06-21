<template>
    <div class="task-wrapper">
        <div class="task-checkbox">
            <span class="task-checkbox__text">текущий статус</span>
            <input class="task-checkbox__input" type="checkbox" id="checkbox" :value="isActive" :checked="isActive" @input="toggleTaskStatus" />
        </div>
        <div class="task">
            <div class="task__field">
                id: <span>{{ task.id }}</span>
            </div>
            <div class="task__field">
                {{ task.title }}
            </div>
            <div class="task__field">
                статус: <span>{{ status }}</span>
            </div>
        </div>
        <button class="task-button" @click="deleteTask">Удалить задачу</button>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
    task: {
        title: string,
        id: string | number,
        completed: boolean
    }
}>()

import storeTask from '../../store/tasks';

const isActive = ref(props.task.completed)

const status = computed(() => isActive.value ?  'выполнена' : 'активна')

const toggleTaskStatus = (async() => {
    isActive.value = !isActive.value
    await storeTask.dispatch('changeTaskStatus', { id: props.task.id, status: isActive.value })
})

const deleteTask = (async() => {
    await storeTask.dispatch('deleteTask', props.task.id)
})
</script>

<style scoped>
.task {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    margin-right: 10px;
    border-radius: 40px;
    border: 1px solid grey;
    background-color: cadetblue;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 20px;
        border-radius: 10px;
        margin-right: 0;
    }
}

.task__field {
    margin-right: 10px;

    @media (max-width: 768px) {
        margin-right: 0;
    }
}

.task__field:last-child {
    margin-right: 0;
}

.task-checkbox {
    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
    }
}

.task-checkbox__input {
    width: 40px;
    height: 40px;
    margin-left: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out opacity;

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
}

.task-checkbox__input:hover {
    opacity: 0.8;
}

.task-checkbox__text {
    display: none;
    @media (max-width: 768px) {
        display: inline;
        margin-right: 10px;
    }
}

.task-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px 0;
        margin-bottom: 10px;
    }
}

.task-button {
    width: 100px;
    height: 40px;
    background-color: brown;
    border-radius: 40px;
    transition: 0.3s ease-in-out opacity;

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 10px;
    }
}

.task-button:hover {
    opacity: 0.8;
}
</style>