<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import dayjs from 'dayjs';
// eslint-disable-next-line no-unused-vars
import { ICovidData } from './interfaces';
import { useCovidApi, BASE_URL } from './composition/useCovidApi';
import StatsGrid from './components/StatsGrid.vue';
import CountryStats from './components/CountryStats.vue';

export default defineComponent({
  name: 'App',
  components: { StatsGrid, CountryStats },
  setup() {
    const confirmed = ref<number>(0);
    const recovered = ref<number>(0);
    const deaths = ref<number>(0);
    const lastUpdate = ref<string>('');

    const updateStats = (data: ICovidData | any) => {
      confirmed.value = data.confirmed.value;
      recovered.value = data.recovered.value;
      deaths.value = data.deaths.value;
      lastUpdate.value = data.lastUpdate;
    };
    const { isLoading, error } = useCovidApi({
      endpoint: BASE_URL,
      handleData: updateStats
    });
    const updatedAt = computed(() => {
      const date = dayjs(lastUpdate.value);
      return date.format('YYYY-MM-DD HH:mm:ss Z');
    });

    return { isLoading, error, confirmed, recovered, deaths, updatedAt };
  }
});
</script>

<template>
  <div id="app" class="container max-w-s mx-auto">
    <div v-if="error">Error: {{ error }}</div>

    <section v-if="isLoading">
      loading...
    </section>
    <section v-else class="text-center mx-4">
      <h1 class="text-3xl mb-1 mt-4">COVID-19 Statistics</h1>
      <p class="text-l">Last Updated</p>
      <p>{{ updatedAt }}</p>
      <StatsGrid
        :confirmed="confirmed"
        :deaths="deaths"
        :recovered="recovered"
        tag="global"
      />
      <CountryStats />
    </section>
  </div>
</template>
