<template>
  <div class="footer">
    <h4>Developed by</h4>
    <a href="https://www.linkedin.com/in/fausto-castillo/" alt="Link to linkedin">Fausto Castillo</a>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
 <style scoped>
.footer {
  height: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-left: 2rem;
  align-content: center;
}
h4 {
  margin: 0;
  margin-right:1rem;
}
a{
color: #fff;
text-decoration:none;
}

@media(max-width:1024px) {
  .footer{
   background-color:#ffe81f;
   color:#000000;
}
a{
    color: #000000;
}
}
</style>