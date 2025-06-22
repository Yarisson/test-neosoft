<template>
    <section v-if="list && list.length > 0" class="task-list">
        <TaskItem v-for="task in visibleTasks" :key="task.id" :task="task" />
        <button v-if="list.length > visibleCount" class="task-list__button" @click="loadMore">Показать еще</button>
    </section>
    <p v-else class="empty">Нет задач</p>
</template>
<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue';
import TaskItem from './task/Task.vue';
import storeTask from '../store/tasks'

const props = defineProps<{
    filter: string,
}>()

onMounted(async () => {
    await storeTask.dispatch('getTasks')
    storeTask.getters.allTasks
})

const list = computed(() => {
    if (props.filter === 'all') return storeTask.getters.allTasks
    if (props.filter === 'active') return storeTask.getters.activeTasks
    if (props.filter === 'closed') return storeTask.getters.closedTasks
    return []
})

const itemsPerPage = 10;
const visibleCount = ref(itemsPerPage);

const visibleTasks = computed(() => {
    return list?.value ? list?.value.slice(0, visibleCount.value) : null;
});

const loadMore = (() => {
    visibleCount.value += itemsPerPage;
})

watch(() => props.filter, async (newVal, oldVal) => {
    if (newVal !== oldVal) {
        visibleCount.value = itemsPerPage
    }
})
</script>

<style scoped>
.task-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 800px;
    margin: 0 auto;
    padding: 40px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
}

.empty {
    margin-top: 20px;
    text-align: center;
}

.task-list__button {
    width: 200px;
    height: 40px;
    margin: auto;
    background-color: darkslategray;
    border-radius: 20px;
    transition: 0.3s ease-in-out opacity;
}

.task-list__button:hover {
    opacity: 0.8;
}
</style>