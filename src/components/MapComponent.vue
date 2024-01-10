<template>
  <h1 class="text-gradient m-auto">
    Illuminating the World from Son & Breugel
  </h1>

  <div style="height: 600px; width: 100%">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[51.500811552998165, 5.493521567842981, 17]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker
        :lat-lng="[51.500811552998165, 5.493521567842981, 19.72]"
      ></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 15,
    };
  },
};
</script>

<style></style>
