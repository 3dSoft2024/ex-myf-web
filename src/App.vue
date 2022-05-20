<template>
  <div id="app">
    <PreLoader ref="preloader" style="position:fixed; z-index: 999; width: 100%;" ></PreLoader>
    <HeaderPhone></HeaderPhone>
    <HeaderGeneral></HeaderGeneral>
    <router-view @hide="hidePreloader" @show="showPreloader"/>
    <FooterGeneral></FooterGeneral>
  </div>
</template>

<script>
import PreLoader from "@/components/PreLoader.vue";
import FooterGeneral from "@/components/FooterGeneral.vue";
import HeaderGeneral from "@/components/HeaderGeneral.vue";
import HeaderPhone from "@/components/HeaderPhone.vue";

export default {
  components: {
    PreLoader,
    FooterGeneral,
    HeaderGeneral,
    HeaderPhone
    
},
  methods: {
    hidePreloader() {
      this.$refs.preloader.Hide();
    },
    showPreloader(){
      this.$refs.preloader.Show();
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="css">
  .close{
    background: none;
    border: none;
    font-size: 18px;
    color: #fff
  }
  ::-webkit-scrollbar {
    width: 5px;               /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: #000; 
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.6);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }
</style>