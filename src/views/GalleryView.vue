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
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_parabrisas1.webp')})`, cursor: 'pointer'}" v-if="Filtrar('parabrisas')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_parabrisas2.webp')})`, cursor: 'pointer'}" v-if="Filtrar('parabrisas')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_parabrisas3.webp')})`, cursor: 'pointer'}" v-if="Filtrar('parabrisas')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_parabrisas4.webp')})`, cursor: 'pointer'}" v-if="Filtrar('parabrisas')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_parabrisas5.webp')})`, cursor: 'pointer'}" v-if="Filtrar('parabrisas')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_faros1.webp')})`, cursor: 'pointer'}" v-if="Filtrar('faros')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_faros2.webp')})`, cursor: 'pointer'}" v-if="Filtrar('faros')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_faros3.webp')})`, cursor: 'pointer'}" v-if="Filtrar('faros')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_faros4.webp')})`, cursor: 'pointer'}" v-if="Filtrar('faros')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_faros5.webp')})`, cursor: 'pointer'}" v-if="Filtrar('faros')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_vidrios1.webp')})`, cursor: 'pointer'}" v-if="Filtrar('vidrios')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
      </div>
      <div class="item d-flex justify-content-center align-items-center m-2" :style="{backgroundImage : `url(${require('@/assets/galeria_vidrios2.webp')})`, cursor: 'pointer'}" v-if="Filtrar('vidrios')">
        <div class="texto w-100 h-100 d-flex justify-content-center align-items-center" style="background: rgba(0, 0, 0, 0.7); opacity: 0;">
          <p class="text-light" style="width: 80%">Texto de Ejemplo</p>
        </div>
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
.texto
  transition: all 0.1s ease
  &:hover
    transition: all 0.3s ease
    opacity: 1 !important
input
  &:checked + label
    color: #fff !important
    background: #0d6efd !important
    border-color: #0d6efd !important
.container
  .option
    cursor: pointer !important
  .item
    width: 350px
    background-position: center
    background-size: cover
    height: 200px
    img
      width: 100%
</style>

<style lang="sass" scoped>
@media (max-width: 768px)
  .container:last-child
    margin-top: 0px !important
</style>