<template>
  <div class="gallery">
    <TitleGeneral title="GALERÍA"></TitleGeneral>
    <nav class="container d-flex flex-row mt-3 justify-content-center flex-wrap">
      <input class="form-check-input d-none" type="radio" name="option" id="todos" v-model="filtro" value="all"/>
      <label class="form-check-label option btn btn-outline-primary m-2" for="todos">TODOS</label>
      <input class="form-check-input d-none" type="radio" name="option" id="parabrisas" v-model="filtro" value="parabrisas"/>
      <label class="form-check-label option btn btn-outline-primary m-2" for="parabrisas">PARABRISAS</label>
      <input class="form-check-input d-none" type="radio" name="option" id="faros" v-model="filtro" value="faros"/>
      <label class="form-check-label option btn btn-outline-primary m-2" for="faros">FAROS</label>
      <input class="form-check-input d-none" type="radio" name="option" id="vidrios" v-model="filtro" value="vidrios"/>
      <label class="form-check-label option btn btn-outline-primary m-2" for="vidrios">VIDRIOS</label>
      <input class="form-check-input d-none" type="radio" name="option" id="repelente" v-model="filtro" value="repelente"/>
      <label class="form-check-label option btn btn-outline-primary m-2" for="repelente">REPELENTE</label>
    </nav>
    <div class="container d-flex flex-wrap flex-row my-3 justify-content-center align-items-center">
      <div class="item p-3 d-flex" v-if="Filtrar('parabrisas')">
        <img src="@/assets/galeria_parabrisas1.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('parabrisas')">
        <img src="@/assets/galeria_parabrisas2.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('parabrisas')">
        <img src="@/assets/galeria_parabrisas3.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('parabrisas')">
        <img src="@/assets/galeria_parabrisas4.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('vidrios')">
        <img src="@/assets/galeria_vidrios1.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('parabrisas')">
        <img src="@/assets/galeria_parabrisas5.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('vidrios')">
        <img src="@/assets/galeria_vidrios2.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('faros')">
        <img src="@/assets/galeria_faros1.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('faros')">
        <img src="@/assets/galeria_faros2.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('faros')">
        <img src="@/assets/galeria_faros3.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('faros')">
        <img src="@/assets/galeria_faros4.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('faros')">
        <img src="@/assets/galeria_faros5.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('faros')">
        <img src="@/assets/galeria_faros6.jpg" />
      </div>
      <div class="item p-3 d-flex" v-if="Filtrar('faros')">
        <img src="@/assets/beneficios1.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleGeneral from "@/components/TitleGeneral.vue";
// @ is an alias to /src

export default {
  name: "GalleryView",
  components: {
    TitleGeneral,
  },
  data() {
    return {
      filtro: "all",
    };
  },
  mounted() {
    var aux = this;
    window.onload = function () {
      aux.$emit("hide");
    };
  },
  methods: {
    Filtrar(str) {
      if (this.filtro == "all") {
        return true;
      } else if (str == this.filtro) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
input
  &:checked + label
    color: #fff !important
    background: #0d6efd !important
    border-color: #0d6efd !important
.container
  .option
    cursor: pointer !important
  .item
    max-width: 400px
    img
      width: 100%
</style>

<style lang="sass" scoped>
@media (max-width: 768px)
  .container:last-child
    margin-top: 0px !important
</style>