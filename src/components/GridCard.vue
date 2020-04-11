<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GridCard',
  props: {
    title: {
      type: String,
      required: true
    },
    stat: {
      type: Number,
      required: true
    },
    tag: {
      type: String,
      default: ''
    }
  }
});
</script>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="">
      <div class="font-bold text-l py-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ stat.toLocaleString() }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span
        class="inline-block bg-gray-200 rounded-full py-1 text-sm font-semibold text-gray-700"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>
