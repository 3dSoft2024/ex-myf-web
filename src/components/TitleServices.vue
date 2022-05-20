<template lang="html">
    <div class="title d-flex flex-column justify-content-end align-items-center" :style="{backgroundImage : `url(${img})`}">
        <p class="fs-2 fw-bold text-light text-shadow-sm mb-2">{{title}}</p>
    </div>
</template>
<script>
export default {
    props:{
        title: {
            required: true,
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
        height: 250px
        p
            text-shadow: 1px 1px 2px #000
</style>