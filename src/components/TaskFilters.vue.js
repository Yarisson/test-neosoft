const __VLS_props = defineProps();
const emit = defineEmits(['update:filter']);
const setFilter = (type) => {
    emit('update:filter', type);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['filters__button']} */ ;
/** @type {__VLS_StyleScopedClasses['filters__button']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "filters" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.setFilter('all');
        } },
    ...{ class: "filters__button" },
    ...{ class: ({ 'filters__button--active': __VLS_ctx.filter === 'all' }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.setFilter('active');
        } },
    ...{ class: "filters__button" },
    ...{ class: ({ 'filters__button--active': __VLS_ctx.filter === 'active' }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.setFilter('closed');
        } },
    ...{ class: "filters__button" },
    ...{ class: ({ 'filters__button--active': __VLS_ctx.filter === 'closed' }) },
});
/** @type {__VLS_StyleScopedClasses['filters']} */ ;
/** @type {__VLS_StyleScopedClasses['filters__button']} */ ;
/** @type {__VLS_StyleScopedClasses['filters__button--active']} */ ;
/** @type {__VLS_StyleScopedClasses['filters__button']} */ ;
/** @type {__VLS_StyleScopedClasses['filters__button--active']} */ ;
/** @type {__VLS_StyleScopedClasses['filters__button']} */ ;
/** @type {__VLS_StyleScopedClasses['filters__button--active']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            setFilter: setFilter,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TaskFilters.vue.js.map