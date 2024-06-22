<script setup>
import { defineEmits } from "vue";

defineEmits(["click"]);
</script>
<template>
    <button
        class="mx-auto w-16 h-16 uppercase text-xl btn-portfolio border-2 relative rounded-full transition-color"
        @click="emit('click')"
    >
        <slot></slot>
    </button>
</template>
