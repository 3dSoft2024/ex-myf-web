<template>
  <div class="contact">
    <TitleServices title="CONTACTO"></TitleServices>
  </div>
</template>

<script>
import TitleServices from "@/components/TitleServices.vue";
// @ is an alias to /src

export default {
  name: "ContactView",
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