<template>
  <div>
    <ContinentDetailList :continents="[continent]"></ContinentDetailList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContinentDetailList from '@/components/Home/continents/ContinentDetailList.vue';
import { Continent } from '@/types/continent';
import covidService from '@/infrastructure/services/covid-service';
import router from '@/router';

  @Component({
    components: {
      ContinentDetailList,
    },
    name: 'ContinentDetail',
  })
export default class ContinentDetail extends Vue {
    continentName = '';

    continent: Continent | null = null;

    mounted() {
      this.setDataFromRoute();
      this.fetchData();
    }

    setDataFromRoute() {
      this.continentName = router.currentRoute.params.continentName;
    }

    async fetchData() {
      covidService.getContinentData(this.continentName)
        .then((response) => {
          this.continent = response.data;
        })
        .catch((err) => {
          console.error(err);
        });
    }
}
</script>

<style scoped>

</style>
