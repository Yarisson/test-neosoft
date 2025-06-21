<template>
    <div class="filters">
        <button class="filters__button" :class="{'filters__button--active' : filter === 'all' }" @click="setFilter('all')">Все</button>
        <button class="filters__button" :class="{'filters__button--active' : filter === 'active' }" @click="setFilter('active')">Активные</button>
        <button class="filters__button" :class="{'filters__button--active' : filter === 'closed' }" @click="setFilter('closed')">Завершенные</button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    filter: string,
}>()

const emit = defineEmits(['update:filter'])

const setFilter = (type: 'all' | 'active' | 'closed') => {
    emit('update:filter', type)
}
</script>

<style scoped>
.filters {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px 0;
    }
}

.filters__button {
    padding: 6px 12px;
    margin-right: 20px;
    background-color: darkslategrey;
    border-radius: 20px;
    transition: 0.3s ease-in-out opacity;
}

.filters__button:hover {
    opacity: 0.8;
}

.filters__button:last-child {
    margin-right: 0;
}

.filters__button--active {
    background-color: dodgerblue;
}
</style>