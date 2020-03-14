import { watchEffect, ref } from "vue";

const BASE_URL = "https://covid19.mathdro.id/api";

const handleError = err => {
  console.log("OH NO!");
  console.log(err);
};

export const useCovidApi = endpoint => {
  const url = endpoint ? `${BASE_URL}/${endpoint}` : `${BASE_URL}`;
  const isLoading = ref(true);
  let stats = ref({});

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

  return { stats, isLoading };
};
