<template>
  <div class="header">
    <ButtonGoBack v-if="currentRouteName != 'Home'" />
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import ButtonGoBack from "@/components/layout/ButtonGoBack";
export default {
  name: "Header",
  components: {
    ButtonGoBack,
  },
  computed: {
    title() {
      return this.$store.state.headerTitle;
    },
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
 <style scoped>
.header {
  height: 2rem;
  background: linear-gradient(to left, #ffe81f 10%, #000000c9 60%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-left: 2rem;
  align-content: center;
}
h2 {
  margin: 0;
}
</style>