<template lang="html">
    <div style="background: #000;">
        <nav class="container d-none flex-row justify-content-between align-items-center" >
            <a data-bs-toggle="collapse" href="#nav-collapse" role="button" aria-expanded="false" aria-controls="nav-collapse" class="py-2">
                <img src="@/assets/menu.svg" style="height: 25px;">
            </a>
            <a href="https://wa.me/51984286881?text=Buen%20día%20*MYF%20Reparaciones*,%20solicito%20información%20acerca%20del%20servicio." style="background: #31af36;" class="p-2">
                <img src="@/assets/wz.svg" style="height: 25px;">
            </a>
            
        </nav>
        <div class="collapse dropdown" id="nav-collapse">
            <router-link class="nav-link d-flex flex-row align-items-center text-light container w-100" to="/" >
                <p class="m-0 text-light">INICIO</p>
            </router-link>
            <div class="nav-link d-flex flex-row align-items-center text-light container w-100 dropdown-toggle text-light"  id="services2" data-bs-toggle="dropdown" aria-expanded="false">
                <p class="m-0 text-light">SERVICIOS</p>
            </div>
            <ul class="dropdown-menu" aria-labelledby="services2">
                <li><router-link class="dropdown-item" to="/parabrisas">Reparación de Parabrisas</router-link></li>
                <li><router-link class="dropdown-item" to="/faros">Pulido de Faros</router-link></li>
                <li><router-link class="dropdown-item" to="/vidrios">Pulido de Vidrios</router-link></li>
                <li><router-link class="dropdown-item" to="/repelente">Repelente Hidrofóbico</router-link></li>
            </ul>
            <router-link class="nav-link d-flex flex-row align-items-center text-light container w-100" to="/gallery" >
                <p class="m-0 text-light">GALERIA</p>
            </router-link>
            <router-link class="nav-link d-flex flex-row align-items-center text-light container w-100" to="/contact" >
                <p class="m-0 text-light">CONTACTO</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
    .router-link-exact-active
        background: rgba(255, 255, 255, 0.18)

@media (max-width: 600px)
  nav
      display: flex !important
      
</style>