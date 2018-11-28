<template>
  <div class="col">
      <UsersTable @onShowDevices="showUserDevices"/>
      <UserDevicesPopup 
          :show="showUserDevicesView"
          :user="currentUser"
          @onClosePopup="closeUserDevicesView"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import UsersTable from "@/components/UsersTable/UsersTable";
  import UserDevicesPopup from "@/components/UserDevicesPopup/UserDevicesPopup";
  import { UserModel } from '@/models/UserModel';


  @Component({
    components: {
      UsersTable,
      UserDevicesPopup,
    }
  })
  export default class UsersView extends Vue {
      public currentUser: UserModel  = new UserModel();
      public showUserDevicesView: boolean = false;

      constructor() {
        super();
      }


      public showUserDevices(user: UserModel) {
        this.currentUser = user;
        this.showUserDevicesView = true;
      }
      public closeUserDevicesView() {
        this.showUserDevicesView = false;
      }
  }
</script>
