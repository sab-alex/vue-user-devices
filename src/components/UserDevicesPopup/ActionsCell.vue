<template>
  <dx-button 
      text="Add"
      :onClick="addDevice"/>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {
  DxButton,
} from 'devextreme-vue/ui/button';
import { UserModel } from '@/models/UserModel';
import { DeviceModel } from '@/models/DeviceModel';

@Component({
  components: {
    DxButton
  }
})
export default class ActionsCell extends Vue {
    @Prop() cellData: DeviceModel | undefined;
    public addDevice() {
      this.$emit('onAddDeviceToUser', this.cellData);
    }
}
</script>
