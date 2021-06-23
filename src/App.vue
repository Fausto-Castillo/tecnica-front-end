<template>
  <div>
    <Header title="Prueba Tecnica" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>
<style lang="scss">
body {
  background: url("assets/fondo.webp") no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100%;
  min-height: 100vh;
  color: #fff;
  margin-top: 4rem;
}
</style>