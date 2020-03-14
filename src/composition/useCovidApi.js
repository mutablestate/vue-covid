import { watchEffect, ref, computed } from 'vue';
import dayjs from 'dayjs';

const BASE_URL = 'https://covid19.mathdro.id/api';

const handleError = err => {
  // eslint-disable-next-line no-console
  console.log('OH NO!', err);
};

export const useCovidApi = endpoint => {
  const url = endpoint ? `${BASE_URL}/${endpoint}` : `${BASE_URL}`;
  const isLoading = ref(true);
  let stats = ref({});
  let updatedAt = computed(() => {
    const lastUpdate = dayjs(stats.value.lastUpdate);
    return lastUpdate.format('YYYY-MM-DD HH:mm:ss Z');
  });

  watchEffect(() => {
    const fetchData = async () => {
      isLoading.value = true;
      const response = await fetch(url);
      return response.json();
    };
    fetchData()
      .catch(handleError)
      .then(res => {
        stats.value = res;
      })
      .finally(() => {
        isLoading.value = false;
      });
  });

  return { stats, isLoading, updatedAt };
};
