<template>
    <div class="d-flex flex-row w-100 container mb-4"> 
        <div class="w-50 d-flex flex-column justify-content-start align-items-center p-4 item">
            <h3 class="text-primary fw-bold align-self-start mb-0">Beneficios:</h3>
            <hr class="bg-primary mt-1 mb-2 align-self-start" style="width: 50px; height: 3px; opacity: 1">
            <div v-for="(item,index) in items" :key="index" class="d-flex flex-row justify-content-start align-items-center w-100 ms-5 mb-2 mt-1">
                <img src="@/assets/check.svg" class="me-2" style="height: 20px">
                <p class="m-0" style="text-align: start; max-width: 90%;">{{item}}</p>
            </div>
        </div>
        <div class="w-50 p-2 item d-flex justify-content-center align-items-center">
            <img :src="img" class="w-100">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        description: {
            required: false,
            type: String,
            default: 'Default'
        },
        title: {
            required: false,
            type: String,
            default: 'Default'
        },
        img: {
            required: false,
            type: String,
            default: require("@/assets/title2.jpg")
        },
        items: {
            type: Array
        }
    }    
}
</script>
<style lang="sass" scoped>
@media (max-width: 992px)
    .container
        flex-direction: column !important
        .item
            width: 100% !important
        .item:first-child
            padding: 30px !important

@media (max-width: 576px)
    .container
        flex-direction: column !important
        .item
            width: 100% !important
        .item:first-child
            padding: 24px !important

</style>