<template>
  <div id="app">
    <section v-if="isLoading">
      loading...
    </section>
    <section v-else>
      <ul>
        <li>Confirmed: {{ stats.confirmed.value }}</li>
        <li>Deaths: {{ stats.deaths.value }}</li>
        <li>Recovered: {{ stats.recovered.value }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { useCovidApi } from "@/composition/useCovidApi";

export default {
  name: "App",
  setup() {
    const { stats, isLoading } = useCovidApi();
    return { stats, isLoading };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
