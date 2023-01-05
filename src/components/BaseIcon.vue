<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  fileUrl?: string
  id: string
}
const props = withDefaults(defineProps<Props>(), {
  fileUrl: 'icons.svg',
});

const imgURL = computed(() => `${props.fileUrl}#${props.id}`);
</script>

<template>
  <svg>
    <use :xlink:href="imgURL" />
  </svg>
</template>
