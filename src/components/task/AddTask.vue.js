import { ref } from 'vue';
import storeTask from '../../store/tasks';
const name = ref('');
const addTask = (async () => {
    await storeTask.dispatch('addTask', name.value);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['add-task__input']} */ ;
/** @type {__VLS_StyleScopedClasses['add-task__button']} */ ;
/** @type {__VLS_StyleScopedClasses['add-task__button']} */ ;
/** @type {__VLS_StyleScopedClasses['add-task__button']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "add-task" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "add-task__text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "add-task__text-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    value: (__VLS_ctx.name),
    type: "text",
    placeholder: "название задачи",
    ...{ class: "add-task__input" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.addTask) },
    disabled: (!__VLS_ctx.name),
    ...{ class: "add-task__button" },
});
/** @type {__VLS_StyleScopedClasses['add-task']} */ ;
/** @type {__VLS_StyleScopedClasses['add-task__text']} */ ;
/** @type {__VLS_StyleScopedClasses['add-task__text-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['add-task__input']} */ ;
/** @type {__VLS_StyleScopedClasses['add-task__button']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            name: name,
            addTask: addTask,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AddTask.vue.js.map