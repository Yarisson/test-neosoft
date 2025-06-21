<template>
  <main>
    <TaskFilters :filter="filter" @update:filter="onFilterChange" />
    <AddTask />
    <TaskList :filter="filter" />
  </main>
</template>

<script setup lang="ts">
import TaskList from '../components/TaskList.vue';
import AddTask from '../components/task/AddTask.vue';
import TaskFilters from '../components/TaskFilters.vue';

import { ref } from 'vue';

const filter = ref('all')

const onFilterChange = (type: 'all' | 'active' | 'closed') => {
  filter.value = type;
}
</script>