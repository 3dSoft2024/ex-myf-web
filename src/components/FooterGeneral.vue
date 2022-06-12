<template lang="html">
    <div class="w-100">
        <div class="data d-flex justify-content-center align-items-center py-4">
            <div class="container d-flex flex-row justify-content-between container-contacto">
                <div class="item_contacto d-flex flex-row align-items-center justify-content-center">
                    <img src="@/assets/position.svg" class="me-3" alt="position">
                    <div class="d-flex flex-column align-items-start">
                        <p class="fw-bold fs-5 text-light mb-0">DIRECCIÓN</p>
                        <p class="fs-6 text-light mb-0 text-start">Av Micaela Bastidas 825, Sector 19  Mz J Lt 22 V.E.S.</p>
                    </div>
                </div>
                <div class="item_contacto d-flex flex-row align-items-center justify-content-center">
                    <img src="@/assets/phones.svg" class="me-3" alt="position">
                    <div class="d-flex flex-column align-items-start">
                        <p class="fw-bold fs-5 text-light mb-0">NÚMEROS</p>
                        <p class="fs-6 text-light mb-0 text-start">984286881</p>
                    </div>
                </div>
                <div class="item_contacto d-flex flex-row align-items-center justify-content-center">
                    <img src="@/assets/email.svg" class="me-3" alt="position">
                    <div class="d-flex flex-column align-items-start">
                        <p class="fw-bold fs-5 text-light mb-0">EMAIL</p>
                        <p class="fs-6 text-light mb-0 text-start">ventas@reparaciondeparabrisas.pe</p>
                        <p class="fs-6 text-light mb-0 text-start">ftomayro@reparaciondeparabrisas.pe</p>
                    </div>
                </div>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.2344064160045!2d-76.9515774024382!3d-12.199840173189429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9995bd123b9fd1b!2zMTLCsDExJzU5LjgiUyA3NsKwNTcnMDQuMCJX!5e0!3m2!1ses!2spe!4v1652032071124!5m2!1ses!2spe" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="d-flex justify-content-center align-items-center py-2 bg-dark">
            <p class="text-light mb-0 text-footer">Copyright © 2022 | MyF Reparaciones</p>
        </div>
    </div>

</template>
<style lang="sass">
    iframe
        margin-bottom: -8px
    .item_contacto
        width: 33%
        img
            height: 65px
    .data
        background: #0F56FF
</style>


<style lang="sass" scoped>
@media (max-width: 1200px)
    .container-contacto
        flex-wrap: wrap
        .item_contacto
            width: 33%
            img
                height: 45px
            p
                font-size: 14px !important
                max-width: 200px

@media (max-width: 1025px)
    .container-contacto
        flex-wrap: wrap
        justify-content: center !important
        .item_contacto
            width: 50%
            padding-top: 10px

@media (max-width: 600px)
    .text-footer
        font-size: 14px !important
    .item_contacto:last-child
        width: 100% !important
        margin-top: 10px
        .d-flex
            p
                max-width: 500px !important
                width: auto !important
</style>