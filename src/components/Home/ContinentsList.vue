<template>
  <DataTable :value="continents">
    <Column field="continent" header="Name"></Column>
    <Column field="countriesCount" header="Countries"></Column>
  </DataTable>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import covidService from '@/infrastructure/services/covid-service';
import { Continent } from '@/types/continent';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

  @Component({
    name: 'ContinentsList',
    components: { DataTable, Column },
  })
export default class ContinentsList extends Vue {
    continents: Continent[] = [];

    mounted() {
      this.fetchContinents();
    }

    async fetchContinents() {
      const response = await covidService.getInfo();
      console.log({ response });
      console.log({ data: response.data });
      this.continents = response.data;
    }
}
</script>

<style scoped>

</style>
