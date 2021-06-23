<template>
  <div class="home">
    <ButtonSeccion text="People" />
    <ButtonSeccion text="Starships" />
    <ButtonSeccion text="Planets" />
  </div>
</template>

<script>
import ButtonSeccion from "@/components/ButtonSeccion";
export default {
  name: "Home",
  components: {
    ButtonSeccion,
  },
  mounted() {
    this.$store.commit("setHeaderTitle", "Prueba Tecnica Front End");
  },
};
</script>
<style>
.home {
  align-content: center;
  height: 100%;
}
</style>