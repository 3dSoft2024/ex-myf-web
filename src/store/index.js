import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    sendMail(context,obj){
      console.log(obj);
      $.ajax({
				// En data puedes utilizar un objeto JSON, un array o un query string
				data: {"correo" : obj.email, "nombre" : obj.name, "mensaje" : obj.message, "telefono" : obj.number, "marca": obj.marca, "modelo":obj.modelo},
				//Cambiar a type: POST si necesario
				type: "POST",
				// Formato de datos que se espera en la respuesta
				dataType: "json",
				// URL a la que se enviará la solicitud Ajax
				url: "sendmail.php",
			})
			.done(function( data) {
				console.log(data);
				alert(data.data);

			})
			.fail(function() {
				alert("Error al enviar correo");
			});
    }
  },
  modules: {
  }
})
