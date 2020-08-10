<template>
  <Accordion>
    <template v-for="continent in continents">
      <AccordionTab :key="continent.continent" :header="continent.continent || 'N/A'">
        <div class="text-left">
          <ul>
            <li :key="country.country" :country="country"
                v-for="country in continent.countries">
              <div class="d-flex justify-content-between">
                <div>
                  <span class="cursor-pointer"
                        @click="goToDetailView(country)">{{country.country | capitalize}}</span>
                </div>
                <div class="cases-container">
                  <span class="txt-cases-new"
                        title="New cases">{{country.cases.new | numFormat}}</span>
                  <span class="txt-cases-active"
                        title="Active cases">{{country.cases.active}}</span>
                  <span class="txt-cases-critical"
                        title="Critical cases">{{country.cases.critical}}</span>
                  <span class="txt-cases-recovered"
                        title="Recovered">{{country.cases.recovered}}</span>
                  <span class="txt-deaths-total"
                        title="Total deaths">{{country.deaths.total}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </AccordionTab>
    </template>
  </Accordion>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import covidService from '@/infrastructure/services/covid-service';
import { Continent } from '@/types/continent';
import Accordion from 'primevue/components/accordion/Accordion.vue';
import AccordionTab from 'primevue/components/accordiontab/AccordionTab.vue';
import { Country } from '@/types/country';

  @Component({
    components: {
      Accordion,
      AccordionTab,
    },
    name: 'ContinentsList',
  })
export default class ContinentsList extends Vue {
    continents: Continent[] = [];

    mounted() {
      this.fetchContinents();
    }

    async fetchContinents() {
      const response = await covidService.getInfo();
      this.continents = response.data;
    }

    goToDetailView = (data: Country) => {
      console.log(data.country);
    }

    formatPrice = (value: any) => {
      console.log({ value });
      const val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
}
</script>

<style scoped>
  .cases-container {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 40%;
  }

  .cases-container span {
    display: inline-block;
    width: 20%;
    text-align: right;
  }

  .txt-cases-new {
    color: darkcyan;
  }

  .txt-cases-active {
    color: darkblue;
  }

  .txt-cases-critical {
    color: darkred;
  }

  .txt-cases-recovered {
    color: forestgreen;
  }

  .txt-deaths-total {
    color: darkslategray;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
