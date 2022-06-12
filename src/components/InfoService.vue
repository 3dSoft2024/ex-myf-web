<template>
  <div class="d-flex flex-row w-100 container my-2">
    <div class="w-50 p-2 item d-flex justify-content-center align-items-center">
      <img :src="img" class="w-100" />
    </div>
    <div class="w-50 d-flex flex-column justify-content-center align-items-center p-4 item">
      <h3 class="text-primary fw-bold align-self-start mb-0 text-start">{{title}}</h3>
      <hr
        class="bg-primary mt-1 mb-2 align-self-start"
        style="width: 50px; height: 3px; opacity: 1"
      />
      <p style="text-align:justify">{{description}}</p>
      <p class="fw-bold fs-5 m-0" style="text-align:center; font-style: italic;">{{"''"+frase+"''"}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    description: {
      required: false,
      type: String,
      default: "Default",
    },
    title: {
      required: false,
      type: String,
      default: "Default",
    },
    img: {
      required: false,
      type: String,
      default: require("@/assets/title2.jpg"),
    },
    frase: {
      required: false,
      type: String,
      default: "Default",
    },
  },
};
</script>
<style lang="sass" scoped>
@media (max-width: 992px)
    .container
        flex-direction: column-reverse !important
        .item
            width: 100% !important
        .item:last-child
            padding: 30px !important

@media (max-width: 576px)
    .container
        flex-direction: column-reverse !important
        .item
            width: 100% !important
        .item:last-child
            padding: 24px !important

</style>