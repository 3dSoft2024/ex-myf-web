<template lang="html">
    <div>
        <div id="carouselGallery" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container d-flex flex-row pt-4 justify-content-center">
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria3.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria1.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria2.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container d-flex flex-row pt-4 justify-content-center">
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria5.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria4.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria6.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container d-flex flex-row pt-4 justify-content-center container-gallery">
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria8.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria7.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                        <div class="card mx-2 shadow-sm " style="width: 20rem;">
                            <div class="w-100">
                                <img src="@/assets/galeria9.jpg" class="card-img-top w-100">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/gallery" class="btn btn-primary" style="width: max-content">Mas Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">

@media (max-width: 768px)
  .card:last-child
      display: none !important
    
@media (max-width: 520px)
  .card:nth-last-child(2)
      display: none !important
       
</style>