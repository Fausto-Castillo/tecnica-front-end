<template>
  <div>
    <input type="text" v-model="name" placeholder="Filter by name" />
  </div>
</template>

<script>
export default {
  name: "FilterList",
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name() {
      this.$emit("enterName", this.name);
    },
  },
};
</script>
