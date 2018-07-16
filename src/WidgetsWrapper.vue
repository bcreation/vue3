<template>
  <div id="widgets-wrapper">
    <h1>WIDGETS WRAPPER</h1>
    <WidgetComponent id="widget-1"/>
    <WidgetComponent id="widget-2"/>
  </div>
</template>

<script>
import WidgetComponent from "./components/WidgetComponent.vue";

export default {
  name: "widgets-wrapper",
  components: {
    WidgetComponent
  }
};
</script>
<style lang="sass">
@import "../node_modules/bootstrap/scss/bootstrap";

</style>
