<template lang="html">
    <div>
        <TitleServicesVue title1="Pulido de Faros" wsp="https://wa.me/51984286881?text=Buen%20día%20*MYF%20Reparaciones*,%20solicito%20información%20acerca%20del%20servicio%20de%20Pulido%20de%20Faros." title2="Deja tu parabrisas en manos de profesionales certificados" :img="require('@/assets/faros.webp')"></TitleServicesVue>
        <InfoService frase="El mejor servicio a domicilio" title="Descripción del Servicio" description="Con el paso del tiempo, los faros de los coches van perdiendo el brillo hasta volverse opacos o mates. Las condiciones climatológicas son una de las principales causas por las que los faros pierden esa intensidad. De manera regular debemos someterlos a un pulido profesional para que recobren su estado natural y los conductores ganen esa visibilidad tan importante que requerimos en la carretera. El pulido de faros consiste en microlijar, pulir y sellar la superficie de los faros para eliminar la capa externa que impide la visibilidad, recuperando la transparencia necesaria para una correcta iluminación de la vía." :img="require('@/assets/descripcion2.webp')"></InfoService>
        <BeneficiosServiceVue :items="beneficios1" :img="require('@/assets/beneficios2.webp')"></BeneficiosServiceVue>
        <InfoService frase="Con la seguridad no se juega!" title="¿Por qué restaurar los Faros?" description="En muchas ocasiones cuando hablamos de los faros de nuestro coche pocas veces sale a relucir el aspecto de la seguridad. Son los responsables de nuestra iluminación, y con iluminación decimos ver y ser vistos. Su deterioro pone en duda la seguridad de nuestro coche. No debemos nunca olvidar que la iluminación es uno de los pilares de la seguridad de nuestro vehículo y que, además de reducir la visibilidad, pueden traer consecuencias negativas" :img="require('@/assets/descripcion5.webp')"></InfoService>
        <BeneficiosServiceVue class="mb-4" :items="beneficios2" title="Procedimiento:" :img="require('@/assets/beneficios5.webp')"></BeneficiosServiceVue>
        
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
      beneficios1: ["Eliminar los arañazos."
      , "Restaurar lentes nubladas y opacas."
      , "Ayuda a mantener el valor total de tu vehículo."
      , "Mantener la funcionalidad y el rendimiento."
      , "Aumentar la visibilidad."
      , "Mejore la apariencia de tu vehículo agregando luminosidad."
      ],
      beneficios2: ["Primero se lija todo el área del faro  para eliminar todo el revestimiento quemado."
      , "A continuación, se aplica un revestimiento UV que dura 3 años garantizado."
      , "Por último se cella con la luz ultravioleta."
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