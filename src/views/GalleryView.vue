<template>
  <div class="gallery">
    <TitleServices title="GALERÍA"></TitleServices>
  </div>
</template>

<script>
import TitleServices from "@/components/TitleServices.vue";
// @ is an alias to /src

export default {
  name: "GalleryView",
  components: {
    TitleServices,
  },
  mounted() {
    var aux = this;
    window.onload = function () {
      aux.$emit("hide");
    };
  },
};
</script>