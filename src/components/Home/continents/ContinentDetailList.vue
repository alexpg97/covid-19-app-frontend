<template>
  <Accordion v-if="continent">
    <AccordionTab :key="continent.continent" :continent="continent" :active="true">
      <template slot="header">
        <div class="w-100 d-flex justify-content-between">
          <div>
            <i class="pi pi-calendar"></i>
            <span>{{continent.continent || 'N/A'}}</span>
          </div>
          <div class="cases-container">
            <span class=""><strong>New cases</strong></span>
            <span class=""><strong>Active cases</strong></span>
            <span class=""><strong>Critical cases</strong></span>
            <span class=""><strong>Recovered</strong></span>
            <span class=""><strong>Recovered</strong></span>
          </div>
        </div>
      </template>
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
                  <span class="text-green-color"
                        title="New cases">{{country.cases.new | validateNullInteger}}</span>
                <span class="text-green-color"
                      title="Active cases">{{country.cases.active | validateNullInteger}}</span>
                <span class="text-green-color" title="Critical cases">
                    {{country.cases.critical | validateNullInteger}}</span>
                <span class="text-green-color"
                      title="Recovered">{{country.cases.recovered | validateNullInteger}}</span>
                <span class="text-green-color"
                      title="Total deaths">{{country.deaths.total | validateNullInteger}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </AccordionTab>
  </Accordion>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Continent } from '@/types/continent';
import Accordion from 'primevue/components/accordion/Accordion.vue';
import AccordionTab from 'primevue/components/accordiontab/AccordionTab.vue';
import { Country } from '@/types/country';
import router from '@/router';

  @Component({
    components: {
      Accordion,
      AccordionTab,
    },
    name: 'ContinentDetailList',
    filters: {
      validateNullText(data: string) {
        return data || 'N/A';
      },
      formatInteger(value: number) {
        const val = (value / 1).toFixed(0).replace(',', '.');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
      validateNullInteger(value: number) {
        if (!value) {
          return 'N/A';
        }
        const val = (value / 1).toFixed(0).replace(',', '.');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
    },
  })
export default class ContinentDetailList extends Vue {
    @Prop()
    continent: Continent = {} as Continent;

    mounted() {
      console.log({ continent: this.continent });
    }

    goToDetailView = (data: Country) => {
      router.push({
        name: 'SearchByCountry',
        params: { searchText: data.country },
      });
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

  .text-green-color {
    color: #41b883;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
