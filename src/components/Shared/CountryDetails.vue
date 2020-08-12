<template>
  <div>
    <template v-if="country">
      <div>
        <h3><strong>{{country.country}}</strong></h3>
        <!--<code>{{country}}</code>-->
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <span>General information</span>
            </div>
            <div class="card-body text-left">
              <ul>
                <li><strong>Continent:</strong>&nbsp;{{country.continent | validateNullText}}</li>
                <li><strong>Population:</strong>&nbsp;{{country.population | validateNullInteger}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              <span>Cases</span>
            </div>
            <div class="card-body text-left">
              <ul>
                <li><strong>New:</strong>&nbsp;{{country.cases.new | validateNullInteger}}</li>
                <li><strong>Active:</strong>&nbsp;{{country.cases.active | validateNullInteger}}
                </li>
                <li><strong>Critical:</strong>&nbsp;{{country.cases.critical | validateNullInteger}}
                </li>
                <li><strong>Recovered:</strong>&nbsp;{{country.cases.recovered |
                  validateNullInteger}}
                </li>
                <li><strong>Critical:</strong>&nbsp;{{country.deaths.total | validateNullInteger}}
                </li>
                <li><strong>TOTAL:</strong>&nbsp;{{country.cases.total | validateNullInteger}}</li>
              </ul>

              <span>Tests</span>
              <ul>
                <li><strong>Tests count:</strong>
                  &nbsp;{{country.tests.total | validateNullInteger}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header">
              Deaths
            </div>
            <div class="card-body text-left">
              <ul>
                <li><strong>New:</strong>&nbsp;{{country.deaths.new | validateNullInteger}}</li>
                <li><strong>Total:</strong>&nbsp;{{country.deaths.total | validateNullInteger}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';
import { Country } from '@/types/country';

  @Component({
    name: 'CountryDetails.vue',
    components: {},
    filters: {
      validateNullText(data: string) {
        return data || 'N/A';
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
export default class CountryDetails extends Vue {
    @Prop({ default: null })
    country: Country | null = null;
}
</script>

<style scoped>

</style>
