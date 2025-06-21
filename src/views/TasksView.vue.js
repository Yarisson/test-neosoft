import TaskList from '../components/TaskList.vue';
import AddTask from '../components/task/AddTask.vue';
import TaskFilters from '../components/TaskFilters.vue';
import { ref } from 'vue';
const filter = ref('all');
const onFilterChange = (type) => {
    filter.value = type;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
/** @type {[typeof TaskFilters, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TaskFilters, new TaskFilters({
    ...{ 'onUpdate:filter': {} },
    filter: (__VLS_ctx.filter),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onUpdate:filter': {} },
    filter: (__VLS_ctx.filter),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    'onUpdate:filter': (__VLS_ctx.onFilterChange)
};
var __VLS_2;
/** @type {[typeof AddTask, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(AddTask, new AddTask({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
/** @type {[typeof TaskList, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(TaskList, new TaskList({
    filter: (__VLS_ctx.filter),
}));
const __VLS_11 = __VLS_10({
    filter: (__VLS_ctx.filter),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TaskList: TaskList,
            AddTask: AddTask,
            TaskFilters: TaskFilters,
            filter: filter,
            onFilterChange: onFilterChange,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TasksView.vue.js.map