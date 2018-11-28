import { Component, Vue, Prop } from 'vue-property-decorator';
import { DxDataGrid, DxRemoteOperations, DxColumnChooser, DxColumn, DxSearchPanel } from 'devextreme-vue/ui/data-grid';
import DataSource from 'devextreme/data/data_source';
import { UserModel } from '@/models/UserModel';
import DxList from 'devextreme-vue/list';
import { DeviceModel } from '@/models/DeviceModel';
import { DxPopup } from 'devextreme-vue/popup';
import { devicesHttpService } from '@/services/http/Devices.http.service';
import ActionsCell from './ActionsCell.vue';
import { DxScrollView  } from 'devextreme-vue/ui/scroll-view';

@Component({
    name: 'UserDevicesPopup',
    components: {
        DxDataGrid,
        DxRemoteOperations,
        DxColumnChooser,
        DxColumn,
        DxList,
        DxPopup,
        DxSearchPanel,
        ActionsCell,
        DxScrollView,
    }, 
})

export default class UserDevicesPopup extends Vue {
    @Prop() user!: UserModel;
    @Prop() show: boolean | undefined;

    
    public dataSource: DataSource;

    constructor() {
        super();  
        this.dataSource = new DataSource({
            load(loadOptions: any) {
                return devicesHttpService.fetch(loadOptions)
                    .then((data: any) => {
                        return {data};
                    });
            },
        });
    }

    public get myDevices() {
        if (this.user && this.user.devices) {
            return this.user.devices.map((device: DeviceModel) => device.name);
        } else {
            return [];
        }
    }
    public get title() {
        if (this.user) {
            return this.user.name + " " + this.user.surname + " devices.";
        } else {
            return '';
        }
    }
    public get visiblePopup() {
        if (this.show) {
            return true;
        } else {
            return false;
        } 
    }

    public onClosePopup() {
        this.$emit('onClosePopup');
    }
    public addDeviceToUser(device: DeviceModel) {
        devicesHttpService.attach({user_id: this.user.id, device_id: device.id}).then((res: any) => {
            if (this.user.devices && res[1]) {
                this.user.devices.push(device);
            }
        });
    }
}
