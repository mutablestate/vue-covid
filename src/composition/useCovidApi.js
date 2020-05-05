import { ref } from 'vue';

export const BASE_URL = 'https://covid19.mathdro.id/api';

const getCovidResponse = async (endpoint, params) => {
  const response = await fetch(endpoint, params);
  return response.json();
};

export const useCovidApi = ({ endpoint, params, handleData }) => {
  const isLoading = ref(true);
  const error = ref(null);

  getCovidResponse(endpoint, params)
    .catch((error) => {
      error.value = error;
    })
    .then((data) => {
      if (handleData) {
        handleData(data);
      }
    })
    .finally(() => {
      isLoading.value = false;
    });

  return { isLoading, error };
};
