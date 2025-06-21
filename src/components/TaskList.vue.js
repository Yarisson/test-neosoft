import { onMounted, computed, ref } from 'vue';
import TaskItem from './task/Task.vue';
import storeTask from '../store/tasks';
const props = defineProps();
onMounted(async () => {
    await storeTask.dispatch('getTasks');
    storeTask.getters.allTasks;
});
const list = computed(() => {
    if (props.filter === 'all')
        return storeTask.getters.allTasks;
    if (props.filter === 'active')
        return storeTask.getters.activeTasks;
    if (props.filter === 'closed')
        return storeTask.getters.closedTasks;
    return [];
});
const itemsPerPage = 10;
const visibleCount = ref(itemsPerPage);
const visibleTasks = computed(() => {
    return list?.value ? list?.value.slice(0, visibleCount.value) : null;
});
const loadMore = (() => {
    visibleCount.value += itemsPerPage;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['task-list__button']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.list && __VLS_ctx.list.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "task-list" },
    });
    for (const [task] of __VLS_getVForSourceType((__VLS_ctx.visibleTasks))) {
        /** @type {[typeof TaskItem, ]} */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(TaskItem, new TaskItem({
            key: (task.id),
            task: (task),
        }));
        const __VLS_1 = __VLS_0({
            key: (task.id),
            task: (task),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    if (__VLS_ctx.list.length > __VLS_ctx.visibleCount) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.loadMore) },
            ...{ class: "task-list__button" },
        });
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "empty" },
    });
}
/** @type {__VLS_StyleScopedClasses['task-list']} */ ;
/** @type {__VLS_StyleScopedClasses['task-list__button']} */ ;
/** @type {__VLS_StyleScopedClasses['empty']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TaskItem: TaskItem,
            list: list,
            visibleCount: visibleCount,
            visibleTasks: visibleTasks,
            loadMore: loadMore,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TaskList.vue.js.map