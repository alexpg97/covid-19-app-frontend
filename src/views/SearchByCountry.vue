<template>
  <div class="home">
    <template v-if="!message && country">
      <CountryDetails :country="country"></CountryDetails>
    </template>
    <template v-else>
      <span>Message: {{message}}</span>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Watch } from 'vue-property-decorator';
import Component from 'vue-class-component';
import { Country } from '@/types/country';
import CountryDetails from '@/components/Shared/CountryDetails.vue';
import covidService from '../infrastructure/services/covid-service';
import router from '../router';

  @Component({
    name: 'SearchByCountry.vue',
    components: {
      CountryDetails,
    },
  })
export default class SearchByCountry extends Vue {
    country: Country| null = null;

    message: string | null = null;

    mounted() {
      this.searchData();
    }

    @Watch('$route', { immediate: true, deep: true })
    searchData() {
      // eslint-disable-next-line max-len
      covidService.searchByCountryName(router.currentRoute.params.searchText)
        .then((response) => {
          this.message = null;
          this.country = response.data;
        }).catch((error) => {
          this.country = null;
          this.message = error.response.data.message;
        });
    }
}
</script>

<style scoped>

</style>
