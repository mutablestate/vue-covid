<template>
  <div id="app" class="container max-w-s mx-auto">
    <section v-if="isLoading">
      loading...
    </section>
    <section v-else class="text-center mx-4">
      <h1 class="text-3xl mb-1 mt-4">COVID-19 Statistics</h1>
      <p class="text-l">Last Updated</p>
      <p>{{ updatedAt }}</p>
      <div class="grid grid-cols-3 gap-4 mt-6">
        <GridCard
          title="Confirmed"
          :stat="stats.confirmed.value"
          tag="global"
        />
        <GridCard title="Deaths" :stat="stats.deaths.value" tag="global" />
        <GridCard
          title="Recovered"
          :stat="stats.recovered.value"
          tag="global"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { useCovidApi } from '@/composition/useCovidApi';
import GridCard from '@/components/GridCard.vue';

export default {
  name: 'App',
  components: { GridCard },
  setup() {
    const { stats, isLoading, updatedAt } = useCovidApi();

    return { stats, isLoading, updatedAt };
  }
};
</script>

<style></style>
