<template lang="html">
    <div>
        <TitleServicesVue title1="Pulido de Vidrios" wsp="https://wa.me/51984286881?text=Buen%20día%20*MYF%20Reparaciones*,%20solicito%20información%20acerca%20del%20servicio%20de%20Pulido%20de%20Vidrios." title2="Deja tu parabrisas en manos de profesionales certificados" :img="require('@/assets/vidrios.webp')"></TitleServicesVue>
        <InfoService frase="El mejor servicio a domicilio" title="Descripción del Servicio" description="Los cristales de un vehículo pueden estar deteriorados por muchos motivos. No es extraño encontrar parabrisas rayados por escobillas defectuosas, cristales delanteros a los que la continua exposición a la intemperie, lluvia acida, u otros agentes químicos contaminantes han dañado profundamente u otros que, simplemente, han sufrido la agresión de cualquier objeto que ha provocado una raya en su superficie sin llegar a romperlos." :img="require('@/assets/descripcion3.webp')"></InfoService>
        <BeneficiosServiceVue :items="beneficios" :img="require('@/assets/beneficios3.webp')"></BeneficiosServiceVue>
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
      beneficios: ["Con el pulido y abrillantado se consiguen unos cristales de aspecto impecable."
      , "El pulido de cristales tiene un coste mucho más asequible que sustituir los vidrios cuando están muy deteriorados."
      , "Esta técnica se puede aplicar en todo tipo de superficies de cristal, normales, de seguridad o blindadas."
      , "El proceso es sencillo y no causa molestias a los usuarios de los edificios."
      , "Las zonas dañadas se restauran aplicando una pasta específica antes de usar la máquina pulidora."
      , "El pulido de cristales elimina todo rastro de grafitis, arañazos y manchas provocadas por ácidos y otras sustancias corrosivas."
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