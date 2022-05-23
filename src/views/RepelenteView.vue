<template lang="html">
    <div>
        <TitleServicesVue title1="Repelente Hidrofóbico" title2="Deja tu parabrisas en manos de profesionales certificados" :img="require('@/assets/repelente.jpg')"></TitleServicesVue>
        <InfoService frase="El mejor servicio a domicilio" title="Descripción del Servicio" description="La finalidad principal del tratamiento antilluvia para el parabrisa  consiste en aplicar una fina capa encargada de hacer que las gotas de agua y los copos de nieve resbalen sobre la superficie del parabrisas, evitando así que se adhieran al cristal y despejando la visión del conductor en muy poco tiempo. Además, en momentos en los que la temperatura sea muy baja, nuestro tratamiento antilluvia impedirá que el hilo se fije en el parabrisas, haciendo así muy fácil la tarea de retirarlo después. ¡Ahorrarás tiempo por la mañana tras esas heladas nocturnas tan típicas del invierno!" :img="require('@/assets/descripcion4.jpg')"></InfoService>
        <BeneficiosServiceVue :items="beneficios" :img="require('@/assets/beneficios4.jpg')"></BeneficiosServiceVue>
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
      beneficios: ["Mejora sustancialmente la visibilidad diurna y nocturna en situaciones de lluvia permitiendo incluso no usar el limpiaparabrisas a + de 80km/h."
      , "Impide la adherencia, por lo que facilita la limpieza de insectos, polvo, manchas, etc."
      , "Tiene una eficacia de entre 6 y 8 meses en función del uso."
      , "Dificulta la congelación de las lunas."
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