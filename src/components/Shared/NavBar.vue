<template>
  <div>
    <nav class="navbar_menu fixed-top">
      <div>
        <div class="d-flex">
          <a href="/" class="logo"> <strong>Covid19 App</strong></a>
          <div class="nav-menu">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/continents">Continents</router-link>
          </div>
        </div>
      </div>
      <div class="arama">
        <ul class="search-container">
          <li class="input-group">
            <input type="search" name="ara" class="form-control txt-search"
                   placeholder="Search by country name"
                   v-model="model.searchText"
                   @keyup.enter="searchByCountryHandler">
            <button class="btn" @click="searchByCountryHandler">
              <span class="material-icons">search</span></button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';

  @Component({
    components: {},
    name: 'NavBar',
  })
export default class NavBar extends Vue {
    public model = {
      searchText: '',
    };

    mounted() {
      this.setSearchTextFromRoute();
    }

    setSearchTextFromRoute() {
      this.model.searchText = router.currentRoute.params.searchText;
    }

    searchByCountryHandler = () => {
      router.push({
        name: 'SearchByCountry',
        params: { searchText: this.capitalize(this.model.searchText) },
      });
    }

    // eslint-disable-next-line class-methods-use-this
    capitalize(value: string) {
      if (!value) return '';
      const result = value.toString();
      return result.charAt(0).toUpperCase() + result.slice(1);
    }
}
</script>

<style scoped>
  .navbar_menu {
    width: 100%;
    background: black;
    opacity: 0.9;
    height: 70px;
    padding: 13px 2% 0 2%;
    display: flex;
    justify-content: space-between;
  }

  .nav-menu a {
    color: white;
  }

  .nav-menu a:hover {
    color: #41b883;
    text-decoration: none;
  }

  .nav-menu .router-link-exact-active {
    color: #41b883;
    font-weight: bold;
  }

  /*!* Logo Tasarımı *!*/
  .logo {
    color: white;
    text-decoration: none;
    font-size: 20px;
    float: left;
    padding-top: 3px;
    width: 170px;
    flex: 1;
  }

  .logo:hover {
    text-decoration: none;
    color: #41b883;
  }

  .nav-menu {
    margin-left: 2%;
    height: 100%;
    flex: 1;
  }

  .btn {
    background: #41b883;
    margin-left: 3%;
  }

  /*
  .search-container {
    width: 40%;
  }

  .navbar_bottom_menu {
    width: 100%;
    background: gray;
    opacity: 1.0;
    height: 10vh;
  }

  .arama {
    width: 85%;
    display: block;
    float: left;
    position: absolute;
    left: 13%;
    right: 2%;
  }

  li.input-group {
    width: 85%;
  }

  .input-group span {
    font-size: 19px;
    color: white;
  }

  .bottom_menu {
    display: inline;
    list-style: none;
    padding: 0;
    margin: 0%;
  }

  !* Bottom Menu Left Menu Tasarımı *!
  .left_menu {
    list-style: none;
    float: left;
    margin-left: 5%;
    width: 30%;
  }

  .left_menu li {
    float: left;
    margin: 1px 0px 5px 0px;
    padding: 8%;
    color: white;
    text-align: justify;
  }

  .orta_menu {
    list-style: none;
    float: left;
    margin-right: 3%;
    margin-left: 3%;
    width: 20%;
  }

  .orta_menu li {
    width: 50%;
    float: left;
    margin: 1px 5px;
    padding: 8% 0px;
    color: white;
    text-align: center;
  }

  .right_menu {
    list-style: none;
    float: left;
    margin-right: 9%;
    width: 25%;
  }

  .right_menu li {
    float: left;
    margin: 1px 0px 5px 0px;
    padding: 8%;
    color: white;
    text-align: justify;
  }

  !* Bottom_Menu:hover; *!
  .bottom_menu a:hover li {
    border-radius: 45%;
    background: white;
    opacity: 0.8;
    color: black;
    transition: 2s;
  }*/
</style>
