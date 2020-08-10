<template>
  <div class="row">
    <template v-for="continent in continents">
      <div class="card" :key="continent.continent">
        <div class="card-header">
          <span><strong>{{continent.continent || 'N/A'}}</strong></span>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="cases-item" title="New cases">
              <span class="mb-1 cursor-default hover-green">New</span><br>
              <font-awesome-icon icon="user" class="fs-2  mb-1"/>
              <br>
              <span class="cursor-default"
                    title="New cases">{{continent.cases_new | formatInteger}}</span>
            </div>
            <div class="cases-item" title="Active cases">
              <span class="mb-1 cursor-default hover-green">Active</span><br>
              <font-awesome-icon icon="user" class="fs-2 "/>
              <br>
              <span class="" title="Active cases">{{continent.cases_active| formatInteger}}</span>
            </div>
            <div class="cases-item" title="Critical cases">
              <span class="mb-1 cursor-default hover-green">Critical</span><br>
              <font-awesome-icon icon="user" class="fs-2 "/>
              <br>
              <span class="" title="Critical cases">
                {{continent.cases_critical| formatInteger}}</span>
            </div>
            <div class="cases-item" title="Recovered cases">
              <span class="mb-1 cursor-default hover-green">Recovered</span><br>
              <font-awesome-icon icon="user" class="fs-2 "/>
              <br>
              <span class="" title="Recovered cases">
                {{continent.cases_recovered| formatInteger}}</span>
            </div>
            <div class="cases-item" title="Total deaths">
              <span class="mb-1 cursor-default hover-green">Deaths</span><br>
              <font-awesome-icon icon="user" class="fs-2 "/>
              <br>
              <span class="" title="Total deaths">{{continent.cases_deaths| formatInteger}}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import covidService from '@/infrastructure/services/covid-service';
import Accordion from 'primevue/components/accordion/Accordion.vue';
import AccordionTab from 'primevue/components/accordiontab/AccordionTab.vue';
import { Country } from '@/types/country';
import { ContinentItem } from '@/types/continent-item';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGrimace, faGrin, faBookmark, faUser,
} from '@fortawesome/free-solid-svg-icons';

library.add(faGrimace, faGrin, faBookmark, faUser);

  @Component({
    components: {
      Accordion,
      AccordionTab,
    },
    name: 'ContinentsList2',
    filters: {
      formatDouble(value) {
        const val = (value / 1).toFixed(2).replace(',', '.');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
      formatInteger(value) {
        const val = (value / 1).toFixed(0).replace(',', '.');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
    },
  })
export default class ContinentsList2 extends Vue {
    continents: ContinentItem[] = [];

    mounted() {
      this.fetchContinents();
    }

    async fetchContinents() {
      const response = await covidService.getContinents();
      this.continents = response.data;
    }

    goToDetailView = (data: Country) => {
      console.log(data.country);
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

  .card {
    margin: 1rem;
    width: 30%;
    border-radius: 0 0 15% 15%;
  }

  .card:hover {
    border-color: green;
  }

  .card:hover span.hover-green {
    color: green;
    font-weight: bold;
  }

  .cases-item {
    width: 100px;
    margin: 1rem;
  }

  .fs-2 {
    font-size: 2rem;
  }

  .card:hover .txt-cases-new {
    color: darkcyan;
  }

  .card:hover .txt-cases-active {
    color: darkblue;
  }

  .card:hover .txt-cases-critical {
    color: darkred;
  }

  .card:hover .txt-cases-recovered {
    color: forestgreen;
  }

  .card:hover .txt-deaths-total {
    color: darkslategray;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .cursor-default {
    cursor: default;
  }
</style>
