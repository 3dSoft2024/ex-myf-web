<template lang="html">
    <transition name="fade">
        <div class="d-flex justify-content-center align-items-center bg-light" :style="style" v-if="status">
            <div class="row">
                <div class="col-md-12" style="margin-top: -50px;">
                    <div class="loader">
                        <div class="loader-inner">
                            <div class="loading one"></div>
                        </div>
                        <div class="loader-inner">
                            <div class="loading two"></div>
                        </div>
                        <div class="loader-inner">
                            <div class="loading three"></div>
                        </div>
                        <div class="loader-inner">
                            <div class="loading four"></div>
                        </div>
                    </div>
                    <p class="fs-4">MyF Reparaciones</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;

export default {
  data() {
    return {
      style: {
        height: window.innerHeight + "px",
      },
      status: true,
    };
  },
  methods: {
      Hide(){
          console.log('false');
          this.status = false;
      },
      Show(){
          console.log('true');
          this.status = true;
      }
  },
};
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

p {
  font-family: "Trade Winds", cursive;
}

.loader {
  width: 100px;
  height: 100px;
  margin: 100px auto;
  margin-bottom: 50px;
  transform: rotate(-45deg);
  font-size: 0;
  line-height: 0;
  animation: rotate-loader 5s infinite;
  padding: 25px;
  border: 1px solid #2a40dd;
}
.loader .loader-inner {
  position: relative;
  display: inline-block;
  width: 50%;
  height: 50%;
}
.loader .loading {
  position: absolute;
  background: #2a40dd;
}
.loader .one {
  width: 100%;
  bottom: 0;
  height: 0;
  animation: loading-one 1s infinite;
}
.loader .two {
  width: 0;
  height: 100%;
  left: 0;
  animation: loading-two 1s infinite;
  animation-delay: 0.25s;
}
.loader .three {
  width: 0;
  height: 100%;
  right: 0;
  animation: loading-two 1s infinite;
  animation-delay: 0.75s;
}
.loader .four {
  width: 100%;
  top: 0;
  height: 0;
  animation: loading-one 1s infinite;
  animation-delay: 0.5s;
}
@keyframes loading-one {
  0% {
    height: 0;
    opacity: 1;
  }
  12.5% {
    height: 100%;
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    height: 100%;
    opacity: 0;
  }
}
@keyframes loading-two {
  0% {
    width: 0;
    opacity: 1;
  }
  12.5% {
    width: 100%;
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
@keyframes rotate-loader {
  0% {
    transform: rotate(-45deg);
  }
  20% {
    transform: rotate(-45deg);
  }
  25% {
    transform: rotate(-135deg);
  }
  45% {
    transform: rotate(-135deg);
  }
  50% {
    transform: rotate(-225deg);
  }
  70% {
    transform: rotate(-225deg);
  }
  75% {
    transform: rotate(-315deg);
  }
  95% {
    transform: rotate(-315deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}
</style>