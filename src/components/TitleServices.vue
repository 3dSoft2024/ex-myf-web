<template lang="html">
    <div class="title d-flex flex-column justify-content-center align-items-center" :style="{backgroundImage : `url(${img})`}">
        <h3 class="fw-bold text-light">{{title1}}</h3>
        <p class=" text-light">{{title2}}</p>
        <a href="https://wa.me/51984286881?text=Buen%20día%20*MYF%20Reparaciones*,%20solicito%20información%20acerca%20del%20servicio." class="btn btn-primary">Cotiza tu Reparación Aquí!</a>
    </div>
</template>
<script>
export default {
    props:{
        title1: {
            required: false,
            type: String,
            default: 'Default'
        },
        title2: {
            required: false,
            type: String,
            default: 'Default'
        },
        img: {
            required: false,
            type: String,
            default: require("@/assets/title2.jpg")
        }
    }
}
</script>
<style lang="sass">
    .title
        background-position: center
        background-size: cover
        height: 400px
</style>