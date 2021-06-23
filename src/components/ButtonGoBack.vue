<template>
  <div class="back">
    <Button class="button-back" @click="goBack()" title="Back">
      <img src="@/assets/icons/back.svg" alt="Arrow back" />
    </Button>
  </div>
</template>

<script>
export default {
  name: "ButtonGoBack",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
<style>
.button-back {
  border: 0;
  background-color: transparent;
  width: 2rem;
  margin-right: 0.4rem;
  transition: 0.3s;
}
.button-back:hover {
  width: 2.4rem;
}
.back {
  align-items: center;
  display: flex;
}
</style>