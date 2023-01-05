<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';

interface Props {
  icon?: string
  content?: string
}

const props = defineProps<Props>();
</script>

<template>
  <a>
    <BaseIcon
      v-if="props.icon"
      :id="props.icon"
      class="w-1em h-1em inline-block align-sub"
    />
    <span>{{ content }}</span>
  </a>
</template>
