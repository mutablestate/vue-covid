<template>
  <div class="grid grid-cols-3 gap-4 mt-6">
    <GridCard title="Confirmed" :stat="confirmed" :tag="tag" />
    <GridCard title="Deaths" :stat="deaths" :tag="tag" />
    <GridCard title="Recovered" :stat="recovered" :tag="tag" />
  </div>
</template>

<script>
import GridCard from '@/components/GridCard.vue';

export default {
  name: 'StatsGrid',
  components: { GridCard },
  props: {
    confirmed: {
      type: Number,
      required: true
    },
    deaths: {
      type: Number,
      required: true
    },
    recovered: {
      type: Number,
      required: true
    },
    tag: {
      type: String,
      required: true
    }
  }
};
</script>
