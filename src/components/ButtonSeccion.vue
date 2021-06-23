<template>
  <div class="button-seccion">
    <button class="card" @click="changeHeaderTitle()" :title="text">
      <h3 class="title">{{ text }}</h3>
      <img class="image" :src="srcImage" :alt="'foto' + text" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonSeccion",
  props: {
    text: {
      type: String,
    },
  },
  computed: {
    srcImage() {
      let src = require(`@/assets/${this.text}.webp`);
      return src;
    },
  },
  methods: {
    changeHeaderTitle() {
      this.$router.push({ name: "seccion", params: { name: this.text } });
    },
  },
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
body {
  font-family: "Muli", sans-serif;
}
.button-seccion {
  display: flex;
  justify-content: center;
}
.card {
  background-color: #2a265f;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 700px;
  transition: 0.3s;
  border: 0;
  padding: 0;
}
.card:hover {
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.4);
  .title {
    width: 8rem;
    font-size: 1.2rem;
  }
}

.title {
  color: #fff;
  text-align: center;
  transition: 0.3s;
  width: 20rem;
  font-size: 1.5rem;
}
.image {
  width: 100%;
  height: 210px;
  object-fit: cover;
}

@media (max-width: "760px") {
  .card {
    width: 400px;
    height: 300px;
    display: block;
  }
  .title {
    color: #fff;
    text-align: center;
    transition: 0.3s;
    font-size: 1.5rem;
    height: 3rem;
    width: 100%;
  }
  .card:hover {
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.4);
    .title {
      width: 8rem;
      font-size: 1rem;
      height: 0.5rem;
      text-align: center;
      width: 100%;
    }
    .image {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
}
</style>
