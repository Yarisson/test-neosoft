import { computed, ref } from 'vue';
const props = defineProps();
import storeTask from '../../store/tasks';
const isActive = ref(props.task.completed);
const status = computed(() => isActive.value ? 'выполнена' : 'активна');
const toggleTaskStatus = (async () => {
    isActive.value = !isActive.value;
    await storeTask.dispatch('changeTaskStatus', { id: props.task.id, status: isActive.value });
});
const deleteTask = (async () => {
    await storeTask.dispatch('deleteTask', props.task.id);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['task__field']} */ ;
/** @type {__VLS_StyleScopedClasses['task-checkbox__input']} */ ;
/** @type {__VLS_StyleScopedClasses['task-button']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "task-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "task-checkbox" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "task-checkbox__text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (__VLS_ctx.toggleTaskStatus) },
    ...{ class: "task-checkbox__input" },
    type: "checkbox",
    id: "checkbox",
    value: (__VLS_ctx.isActive),
    checked: (__VLS_ctx.isActive),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "task" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "task__field" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.task.id);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "task__field" },
});
(__VLS_ctx.task.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "task__field" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.status);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.deleteTask) },
    ...{ class: "task-button" },
});
/** @type {__VLS_StyleScopedClasses['task-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['task-checkbox']} */ ;
/** @type {__VLS_StyleScopedClasses['task-checkbox__text']} */ ;
/** @type {__VLS_StyleScopedClasses['task-checkbox__input']} */ ;
/** @type {__VLS_StyleScopedClasses['task']} */ ;
/** @type {__VLS_StyleScopedClasses['task__field']} */ ;
/** @type {__VLS_StyleScopedClasses['task__field']} */ ;
/** @type {__VLS_StyleScopedClasses['task__field']} */ ;
/** @type {__VLS_StyleScopedClasses['task-button']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isActive: isActive,
            status: status,
            toggleTaskStatus: toggleTaskStatus,
            deleteTask: deleteTask,
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
//# sourceMappingURL=Task.vue.js.map