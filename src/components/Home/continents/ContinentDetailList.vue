<template>
  <Accordion v-if="continents">
    <template v-for="(continent, index) in continents">
      <AccordionTab :key="continent.continent" :continent="continent"
                    :active="continents.length === 1">
        <template slot="header">
          <div class="w-100 d-flex justify-content-between">
            <div>
              <span>{{index+1}}. {{continent.continent || 'N/A'}}</span>
            </div>
            <div class="cases-container text-right">
              <span class="w-20"><strong>Total cases</strong></span>
              <span class="w-20"><strong>Total deaths</strong></span>
              <span class="w-20"><strong>Population</strong></span>
              <span class="w-30"><strong>Last Update</strong></span>
            </div>
          </div>
        </template>
        <div class="text-left">
          <ul>
            <li :key="country.country" :country="country"
                v-for="country in continent.countries">
              <div class="d-flex justify-content-between item-detail">
                <div>
                  <span class="cursor-pointer"
                        @click="goToDetailView(country)">{{country.country | capitalize}}</span>
                </div>
                <div class="cases-container text-right">
                  <span class="w-20"
                        title="Total cases">{{country.cases.total | validateNullInteger}}</span>
                  <span class="w-20"
                        title="Total deaths">{{country.deaths.total | validateNullInteger}}</span>
                  <span class="w-20"
                        title="population">{{country.population | validateNullInteger}}</span>
                  <span class="w-30" title="Last update">{{country.time | formatDateTime}}</span>
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

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Continent } from '@/types/continent';
import Accordion from 'primevue/components/accordion/Accordion.vue';
import AccordionTab from 'primevue/components/accordiontab/AccordionTab.vue';
import { Country } from '@/types/country';
import router from '@/router';
import moment from 'moment';

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
      formatDateTime(value: string): string {
        if (value) {
          return moment(String(value)).format('MM/DD/YYYY hh:mm');
        }
        return 'N/A';
      },
    },
  })
export default class ContinentDetailList extends Vue {
    @Prop()
    continents: Continent[] = [];

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
    text-align: right;
  }

  .w-20 {
    width: 20%;
  }

  .w-30 {
    width: 30%;
  }

  .item-detail:hover {
    /*color: #41b883;*/
    background: #ccfbe6;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
