<template>
  <dx-button 
      text="Devices"
      :onClick="showDevices"/>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  DxButton,
} from 'devextreme-vue/ui/button';
import { UserModel } from '@/models/UserModel';

@Component({
  components: {
    DxButton
  }
})
export default class ActionsCell extends Vue {
    @Prop() cellData: UserModel | undefined;
    public showDevices() {
      this.$emit('onShowDevices', this.cellData);
    }
}
</script>
