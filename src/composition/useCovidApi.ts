import { ref } from 'vue';
import { IUseCovidApi, ICovidData } from '../interfaces';

export const BASE_URL = 'https://covid19.mathdro.id/api';

const getCovidResponse = async (
  endpoint: string,
  params: object
): Promise<ICovidData | any> => {
  const response = await fetch(endpoint, params);
  return response.json();
};

export const useCovidApi = ({
  endpoint,
  params = {},
  handleData
}: IUseCovidApi) => {
  const isLoading = ref<boolean>(true);
  const error = ref<string | null>(null);

  getCovidResponse(endpoint, params)
    .catch(error => {
      error.value = error;
    })
    .then(data => {
      if (handleData) {
        handleData(data);
      }
    })
    .finally(() => {
      isLoading.value = false;
    });

  return { isLoading, error };
};
