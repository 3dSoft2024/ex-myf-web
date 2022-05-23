<template>
  <div class="contact">
    <TitleGeneral title="CONTACTO"></TitleGeneral>
    <div class="container d-flex flex-row">
      <div class="col-6 d-flex justify-content-center align-items-center flex-column">
        <h3 class="fw-bold">¿Necesitas una cotización?</h3>
        <p>¡No dude en ponerse en contacto con nosotros! Nos encanta el desafío de convertir sus ideas en realidad y siempre estamos listos para hablar sobre cualquier mensaje.</p>
        <img src="@/assets/contact-img.png" style="width: 70%" />
      </div>
      <div class="col-6 d-flex justify-content-center align-items-center p-4">
        <b-form @submit="onSubmit" v-if="show" class="w-100 bg-light p-3 rounded" >
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1" label-align="start" class="mb-2">
            <b-form-input
              id="input-1"
              v-model="form.name"
              type="text"
              placeholder="Ingrese su Nombre:"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-1" label="Email:" label-for="input-1" label-align="start" class="mb-2">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Ingrese su correo:"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Teléfono:"
            label-for="input-2"
            label-align="start"
            class="mb-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.number"
              type="text"
              placeholder="Ingrese su número:"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Marca del vehículo:"
            label-for="input-3"
            label-align="start"
            class="mb-2"
          >
            <b-form-input
              id="input-3"
              v-model="form.marca"
              type="text"
              placeholder="Ingrese la marca:"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="Modelo del vehículo:"
            label-for="input-4"
            label-align="start"
            class="mb-2"
          >
            <b-form-input
              id="input-4"
              v-model="form.modelo"
              type="text"
              placeholder="Ingrese la marca:"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-5" label="Mensaje:" label-for="input-5" label-align="start">
            <b-form-textarea
              id="input-5"
              v-model="form.message"
              placeholder="Ingrese mensaje..."
              rows="3"
              max-rows="6"
              class="mb-3"
              required
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary">Solicitar Cotización</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import TitleGeneral from "@/components/TitleGeneral.vue";
import { mapActions } from 'vuex';
// @ is an alias to /src

export default {
  name: "ContactView",
  components: {
    TitleGeneral,
  },
  data() {
    return {
      show: true,
      form: {
        name: "",
        email: "",
        message: "",
        marca: "",
        modelo: "",
        number: ""
      },
    };
  },
  mounted() {
    var aux = this;
    window.onload = function () {
      aux.$emit("hide");
    };
  },
  methods:{
    ...mapActions(["sendMail"]),
    onSubmit(){
      event.preventDefault();
      this.sendMail({email: this.form.email, name: this.form.name, number: this.form.number, marca: this.form.marca, modelo:this.form.modelo, message: this.form.message});
    }
  }
};
</script>
<style lang="sass" scoped>
  form
    background: #e2e3e5 !important
    label
      text-align: start !important
</style>
<style lang="sass" scoped>

@media (max-width: 1025px)
  .container
    flex-direction: column-reverse !important
    .col-6
      width: 100% !important
      margin: 20px 0px
      img
        width: 55% !important
        margin-bottom: 20px

</style>