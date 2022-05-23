<template lang="html">
    <div>
        <TitleServicesVue title1="Reparación de Parabrisas" title2="Deja tu parabrisas en manos de profesionales certificados" :img="require('@/assets/parabrisas.jpg')"></TitleServicesVue>
        <InfoService frase="El mejor servicio a domicilio" title="Descripción del Servicio" description="Sin duda alguna esta viene a ser la solución perfecta para una restructuración. Cuando un objeto o una pequeña piedra impactan un parabrisas se produce un daño llamado astilladura causando una distorsión óptica muy notoria. Cuando se opta rápidamente por la reparación de parabrisas sin duda alguna esta viene a ser la solución para la recomposición estructural. De no hacerlo, se corre el riesgo de que la astilladura se convierta en una gran rajadura, tanto así que por lo general se debe optar por el cambio del parabrisas." :img="require('@/assets/descripcion1.jpg')"></InfoService>
        <BeneficiosServiceVue :items="beneficios" :img="require('@/assets/beneficios1.jpg')"></BeneficiosServiceVue>
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
      beneficios: ["El costo de su reparación es más económico que un cambio de parabrisas."
      , "Devuelve al parabrisas la resistencia original."
      , "Detiene el avance de la astilladura (impacto o fisura)."
      , "Mejora la estética en la zona del impacto entre un 50% hasta 90%."
      , "Evita las filtraciones de agua, aire y tierra, típicas de una mala instalación de parabrisas."
      , "Conserve el sello original de la casa del automóvil revalorizando su inversión."
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