<template>
  <div class="col">
      <DevicesTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DevicesTable from "@/components/DevicesTable/DevicesTable";

@Component({
  components: {
    DevicesTable
  }
})
export default class DevicesView extends Vue {

}
</script>
