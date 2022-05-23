<template lang="html">
    <div class="d-flex flex-row justify-content-center aling-items-center bg-dark py-2">
        <div class="container d-flex flex-row justify-content-between">
            <div class="logo">
                <img class="logo" src="@/assets/logo_blanco.svg">
            </div>
            <nav class="d-flex flex-row align-items-center dropdown">
                <router-link class="nav-link d-flex flex-row align-items-center me-2" to="/">
                    <p class="m-0 text-light">INICIO</p>
                </router-link>
                <div class="nav-link d-flex flex-row align-items-center me-2 dropdown-toggle text-light" id="services" data-bs-toggle="dropdown" aria-expanded="false">
                    <p class="m-0 text-light ">SERVICIOS</p>
                </div>
                <ul class="dropdown-menu" aria-labelledby="services">
                    <li><router-link class="dropdown-item" to="/parabrisas">Reparación de Parabrisas</router-link></li>
                    <li><router-link class="dropdown-item" to="/faros">Pulido de Faros</router-link></li>
                    <li><router-link class="dropdown-item" to="/vidrios">Pulido de Vidrios</router-link></li>
                    <li><router-link class="dropdown-item" to="/repelente">Repelente Hidrofóbico</router-link></li>
                </ul>
                <router-link class="nav-link d-flex flex-row align-items-center me-2" to="/galeria">
                    <p class="m-0 text-light">GALERIA</p>
                </router-link>
                <router-link class="nav-link d-flex flex-row align-items-center me-2" to="/contacto">
                    <p class="m-0 text-light">CONTACTO</p>
                </router-link>
                <div class="linea bg-light"></div>
                <div class="redes d-flex flex-row pb-2">
                    <a href="https://www.facebook.com/Restauraciondeparabrisasypulidodevidrioss">
                        <img src="@/assets/fb.svg" alt="fb" class="mx-2 ms-3">
                    </a>
                    <a href="https://twitter.com/ParabrisasDe?s=09">
                        <img src="@/assets/twitter.svg" alt="twitter" class="mx-2">
                    </a>
                    <a href="https://vm.tiktok.com/ZMLW9HoCk/">
                        <img src="@/assets/tiktok.svg" alt="tiktok" class="mx-2">
                    </a>
                </div>

            </nav>
            
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
    .dropdown-item
        &:hover
            color: #fff
            background: #212529
    .router-link-exact-active
        background: rgba(255, 255, 255, 0.18)
    .redes
        img
            height: 25px
            &:hover
                opacity: 0.6
                transition: all 0.1s ease
    .logo
        height: 60px
    .linea
        height: 80%
        width: 0.5px
        opacity: 0.5
</style>
<style lang="sass" scoped>
@media (max-width: 1025px)
  .container 
    flex-direction: column !important
    .logo
        margin-bottom: 10px
    nav
        justify-content: center

@media (max-width: 600px)
  .nav-link, .linea
      display: none !important
    
    
</style>