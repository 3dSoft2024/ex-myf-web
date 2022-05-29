<template lang="html">
    <div>
        <TitleServicesVue title1="Pulido de Faros" wsp="https://wa.me/51984286881?text=Buen%20día%20*MYF%20Reparaciones*,%20solicito%20información%20acerca%20del%20servicio%20de%20Pulido%20de%20Faros." title2="Deja tu parabrisas en manos de profesionales certificados" :img="require('@/assets/faros.jpg')"></TitleServicesVue>
        <InfoService frase="El mejor servicio a domicilio" title="Descripción del Servicio" description="Con el paso del tiempo, los faros de los coches van perdiendo el brillo hasta volverse opacos o mates. Las condiciones climatológicas son una de las principales causas por las que los faros pierden esa intensidad. De manera regular debemos someterlos a un pulido profesional para que recobren su estado natural y los conductores ganen esa visibilidad tan importante que requerimos en la carretera. El pulido de faros consiste en microlijar, pulir y sellar la superficie de los faros para eliminar la capa externa que impide la visibilidad, recuperando la transparencia necesaria para una correcta iluminación de la vía." :img="require('@/assets/descripcion2.jpg')"></InfoService>
        <BeneficiosServiceVue :items="beneficios" :img="require('@/assets/beneficios2.jpg')"></BeneficiosServiceVue>
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
      beneficios: ["Eliminar los arañazos."
      , "Restaurar lentes nubladas y opacas."
      , "Ayuda a mantener el valor total de tu vehículo."
      , "Mantener la funcionalidad y el rendimiento."
      , "Aumentar la visibilidad."
      , "Mejore la apariencia de tu vehículo agregando luminosidad."
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