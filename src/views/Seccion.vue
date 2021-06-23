<template>
  <div class="people">
    <div v-if="!dataLoading && !msgError">
      <FilterList @enterName="filterProductsByName" />
      <List :data="dataList" />
    </div>
    <Error :msg="msgError" v-if="!dataLoading && msgError" />
    <Spinner v-if="dataLoading" />
  </div>
</template>

<script>
import List from "@/components/List";
import Spinner from "@/components/Spinner";
import Error from "@/components/ErrorMessage";
import FilterList from "@/components/FilterList";
import { getPeople, getStarships, getPlanets } from "@/services/seccion";
export default {
  name: "Seccion",
  data() {
    return {
      dataList: [],
      dataListOriginal: [],
      valueLengthMax: 0,
      dataLoading: true,
      msgError: "",
    };
  },
  components: {
    List,
    FilterList,
    Spinner,
    Error,
  },
  mounted() {
    this.$store.commit("setHeaderTitle", this.$route.params.name);
    this.getListData();
  },
  methods: {
    async getListData() {
      try {
        let data;
        this.dataLoading = true;
        switch (this.$route.params.name) {
          case "People":
            data = await getPeople();
            break;
          case "Starships":
            data = await getStarships();
            break;
          case "Planets":
            data = await getPlanets();
            break;
        }
        this.dataList = data.data.results;
        this.dataListOriginal = data.data.results;
      } catch (error) {
        console.error(error);
        this.msgError = error.message;
      } finally {
        this.dataLoading = false;
      }
    },
    filterProductsByName(value) {
      if (value && value.length > this.valueLengthMax) {
        this.valueLengthMax = value.length;
        this.dataList = this.dataList.filter(
          (item) => !item.name.toUpperCase().indexOf(value.toUpperCase())
        );
      } else if (value) {
        this.valueLengthMax = value.length;
        this.dataList = this.dataListOriginal.filter(
          (item) => !item.name.toUpperCase().indexOf(value.toUpperCase())
        );
      } else {
        this.dataList = this.dataListOriginal;
      }
    },
  },
};
</script>



<style >
.people {
  padding-left: 2rem;
}
@media (max-width: 1024px) {
  .people {
    padding-left: 1rem;
    padding-bottom: 2rem;
  }
}
</style>