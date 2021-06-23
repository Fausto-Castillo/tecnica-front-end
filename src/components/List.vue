<template>
  <div>
    <ul class="card-container">
      <li
        class="card-list"
        v-for="item in data"
        :key="item.name"
        @click="goToDetail(item)"
      >
        <div>{{ item.name }}</div>
        <img class="icon" :src="getSrc()" alt="Icon List" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      icons: {
        People: "@/assets/icons/lightsaber.webp",
        Starships: "@/assets/icons/starship.png",
        Planets: "@/assets/icons/planet.png",
      },
    };
  },
  props: {
    data: {
      type: Array,
    },
  },
  methods: {
    goToDetail(item) {
      this.$store.commit("setDataDetail", item);
      this.$router.push({ name: "detail" });
    },
    getSrc() {
      switch (this.title) {
        case "People":
          return require("@/assets/icons/lightsaber.png");
        case "Starships":
          return require("@/assets/icons/starship.png");
        case "Planets":
          return require("@/assets/icons/planet.png");
      }
    },
  },
  computed: {
    title() {
      return this.$store.state.headerTitle;
    },
  },
};
</script>
<style scoped lang="scss">
li {
  list-style: none;
  margin-right: 1rem;
  
}
.card-list {
  height: 3.2rem;
  width: 10rem;
  background: #1b193d;
  border-radius: 10px;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  margin-left: 0;
  transition: 0.3s;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-list:hover {
  height: 3.2rem;
  width: 12rem;
  background: #322e75;
  border-radius: 10px;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  margin-left: 0;
  box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
  & .icon{
    display: block;
  }
}
ul {
  padding-left: 0;
}
.icon {
  display: none;
  transition: 0.3s;
  height:3rem;
}
.card-container{
  display: flex;
  flex-wrap: wrap;
}
@media(max-width:1024px) {
  .card-container{
  display: block;
}
}
</style>