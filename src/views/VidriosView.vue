<template lang="">
    <div>
        <h1>Vidrios</h1>
    </div>
</template>
<script>
export default {
  mounted() {
    var aux = this;
    window.onload = function () {
      aux.$emit("hide");
    };
  },
}
</script>
<style lang="">
    
</style>