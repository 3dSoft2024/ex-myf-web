<template>
  <div class="services">
    <TitleServices title="SERVICIOS"></TitleServices>
    <router-view></router-view>
  </div>
</template>

<script>
import TitleServices from "@/components/TitleServices.vue";
// @ is an alias to /src

export default {
  name: "ServicesView",
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