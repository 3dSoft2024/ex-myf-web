<template lang="html">
    <div>
        <TitleServicesVue title1="Reparación de Parabrisas" wsp="https://wa.me/51984286881?text=Buen%20día%20*MYF%20Reparaciones*,%20solicito%20información%20acerca%20del%20servicio%20de%20Reparación%20de%20Parabrisas." title2="Deja tu parabrisas en manos de profesionales certificados" :img="require('@/assets/parabrisas.webp')"></TitleServicesVue>
        <InfoService frase="El mejor servicio a domicilio" title="Descripción del Servicio" description="Sin duda alguna esta viene a ser la solución perfecta para una restructuración. Cuando un objeto o una pequeña piedra impactan un parabrisas se produce un daño llamado astilladura causando una distorsión óptica muy notoria. Cuando se opta rápidamente por la reparación de parabrisas sin duda alguna esta viene a ser la solución para la recomposición estructural. De no hacerlo, se corre el riesgo de que la astilladura se convierta en una gran rajadura, tanto así que por lo general se debe optar por el cambio del parabrisas." :img="require('@/assets/descripcion1.webp')"></InfoService>
        <BeneficiosServiceVue :items="beneficios" :img="require('@/assets/beneficios1.webp')"></BeneficiosServiceVue>
        <InfoService class="mb-4" frase="Especialistas a tu servicio" title="Tipos de Daño Reparables" description="La reparación de su parabrisas depende de la característica del daño que este tenga. En el caso de un piquete, el diámetro de este no puede ser superior a una moneda de 1 sol y el daño debe estar a más de 6cm del borde del parabrisas" :img="require('@/assets/tipos_danio.webp')"></InfoService>

    </div>
</template>
<script>
import TitleServicesVue from "@/components/TitleServices.vue";
import InfoService from "@/components/InfoService";
import BeneficiosServiceVue from "@/components/BeneficiosService.vue";
export default {
  components: {
    TitleServicesVue,
    InfoService,
    BeneficiosServiceVue,
  },
  data() {
    return {
      beneficios: [
        "El costo de su reparación es más económico que un cambio de parabrisas.",
        "Devuelve al parabrisas la resistencia original.",
        "Detiene el avance de la astilladura (impacto o fisura).",
        "Mejora la estética en la zona del impacto entre un 50% hasta 90%.",
        "Evita las filtraciones de agua, aire y tierra, típicas de una mala instalación de parabrisas.",
        "Conserve el sello original de la casa del automóvil revalorizando su inversión.",
      ],
    };
  },
  mounted() {
    var aux = this;
    window.onload = function () {
      aux.$emit("hide");
    };
  },
};
</script>
<style lang="">
</style>