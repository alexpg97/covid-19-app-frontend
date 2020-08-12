<template>
  <div class="d-flex justify-content-center" >
    <div class="w-75">
      <ContinentDetailList :continents="continents"></ContinentDetailList>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContinentDetailList from '@/components/Home/continents/ContinentDetailList.vue';
import { Continent } from '@/types/continent';
import covidService from '@/infrastructure/services/covid-service';

  @Component({
    name: 'ContinentsInfo',
    components: {
      ContinentDetailList,
    },
  })
export default class ContinentsInfo extends Vue {
    continents: Continent[] = [];

    mounted() {
      this.fetchContinents();
    }

    async fetchContinents() {
      const response = await covidService.getInfo();
      this.continents = response.data;
    }
}
</script>

<style scoped>

</style>
