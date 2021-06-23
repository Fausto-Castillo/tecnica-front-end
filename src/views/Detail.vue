<template>
  <div class="detail">
    <h4 class="title-detail">Specifications</h4>
    <ul>
      <li v-for="(item, key) in data" :key="item.name">
        <div v-if="showInformation(key)" class="item-detail">
          <div class="key">{{ key }} :</div>
          <div v-if="key != 'created' && key != 'edited'" class="item">
            {{ item }}
          </div>
          <div v-if="key == 'created' || key == 'edited'" class="item">
            {{ item | date }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
      showInformation(key) {
      switch (key) {
        case "homeworld":
          return false;
        case "films":
          return false;
        case "vehicles":
          return false;
        case "starships":
          return false;
        case "url":
          return false;
        case "residents":
          return false;
        case "pilots":
          return false;
      }
      return true;
    },
  },
  computed: {
    data() {
      return this.$store.state.dataDetail;
    },
  },
  filters: {
    date: function (value) {
      let valueFormat = value.slice(0, 10);
      return valueFormat;
    },
  },
  mounted() {
    this.$store.commit("setHeaderTitle", this.data.name);
  },
};
</script>
<style  lang="css">
.title-detail {
  margin-left: 2rem;
}
.detail {
  background-color: #141436d0;
  padding: 2rem;
  border-radius: 20px;
}
li {
  list-style: none;
}
.item-detail {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.3rem;
  border-bottom: aliceblue solid 1px;
}
.item {
  margin-right: 2rem;
  text-align: left;
}
</style>