<template>
  <div class="home">
    <CarouselGeneral></CarouselGeneral>
    <div class="services d-flex container flex-row justify-content-between py-5">
      <router-link to="/parabrisas" class="d-flex item_services p-4 flex-column align-items-center justify-content-center">
        <img src="@/assets/parabrisas.svg" alt="parabrisas" class="d-flex align-self-start" />
        <p class="fs-4 fw-bold mb-0 mt-5 text-end">REPARACIÓN DE PARABRISAS</p>
      </router-link>
      <router-link to="/faros" class="d-flex item_services p-4 flex-column align-items-center justify-content-center">
        <img src="@/assets/faros.svg" alt="faros" class="d-flex align-self-start" />
        <p class="fs-4 fw-bold mb-0 mt-5 text-end">PULIDO DE FAROS</p>
      </router-link>
      <router-link to="/vidrios" class="d-flex item_services p-4 flex-column align-items-center justify-content-center">
        <img src="@/assets/pulido.svg" alt="pulido" class="d-flex align-self-start" />
        <p class="fs-4 fw-bold mb-0 mt-5 text-end">PULIDO DE VIDRIOS</p>
      </router-link>
      <router-link to="/repelente" class="d-flex item_services p-4 flex-column align-items-center justify-content-center">
        <img src="@/assets/spray.svg" alt="spray" class="d-flex align-self-start" />
        <p class="fs-4 fw-bold mb-0 mt-5 text-end">REPELENTE HIDROFÓBICO</p>
      </router-link>
    </div>
    <div class="gallery flex-row justify-content-between py-4 bg-dark">
      <div class="container">
        <p class="fs-4 text-light">Galería</p>
        <div style="height: 1px; background: #fff; opacity: 0.6;"></div>
        <CarouselGaleria></CarouselGaleria>
      </div>
    </div>
    <div class="business flex-row justify-content-between py-2 bg-light">
      <div class="business_container container d-flex flex-row justify-content-between py-4 align-items-center">
        <div class="item_bussines ms-4 logo">
          <img src="@/assets/logo_v.svg" alt="Logo MYF" />
        </div>
        <div class="item_bussines px-4 info">
          <h3 class="fs-3 fw-bold">¿Quienes Somos?</h3>
          <p class="fs-5 m-0" style="text-align: justify">
            <b>MyF Reparaciones</b> es una empresa prestadora de servicios automotrices, especializada en reparación, mantenimiento y restauración de parabrisas, pulido de vidrios, pulido de faros. Contamos con experiencia y años de trayectoria y estamos en capacitación permanente. Brindamos asistencia de calidad respaldada por tecnología vanguardista y personal capacitado en proveer una solución rápida, confiable, eficaz y económica a los problemas de su vehículo. Aspiramos ser reconocidos en Perú como líderes generar confianza en nuestros clientes, sobresalir y afianzar nuestros servicios en el mercado automotriz.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselGeneral from "@/components/CarouselGeneral.vue";
import CarouselGaleria from "@/components/CarouselGaleria.vue";

export default {
  name: "HomeView",
  components: {
    CarouselGeneral,
    CarouselGaleria,
  },
  mounted() {
    var aux = this;
    window.onload = function () {
      aux.$emit("hide");
    };
  },
};
</script>

<style lang="sass">
.item_bussines
  width: 45%
  img
    width: 80%
.item_services
  cursor: pointer
  transition: all 0.1s ease
  background: #0F56FF
  height: 300px
  width: 22%
  margin-top: -150px
  z-index: 99
  &:hover
    transition: all 0.3s ease
    transform: translateY(-20px)
  img
    height: 100px
  p
    color: #fff
</style>

<style lang="sass" scoped>
@media (max-width: 1025px)
  .item_services
    width: 24%

@media (max-width: 992px)
  .services
    flex-wrap: wrap
    padding: 10px !important
    .item_services
      width: 45%
      margin-top: 10px
      margin-bottom: 10px
  .business_container
    flex-flow: column wrap-reverse
    .item_bussines  
      width: 100%
      img
        width: 70%

@media (max-width: 600px)
  .item_services
    width: 49% !important
    img
      height: 80px
  .item_bussines
    margin: 0px !important
    
    p
      font-size: 18px !important
</style>