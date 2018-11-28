import { Component, Vue } from 'vue-property-decorator';
import { DxDataGrid, DxRemoteOperations, DxColumnChooser, DxColumn, DxSelection } from 'devextreme-vue/ui/data-grid';
import { DxSelectBox  } from 'devextreme-vue/ui/select-box';
import CustomStore  from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { UserModel } from '@/models/UserModel';
import ActionsCell from './ActionsCell.vue';

@Component({
    name: 'ReportTable',
    components: {
        DxDataGrid,
        DxRemoteOperations,
        DxColumnChooser,
        DxColumn,
        DxSelectBox,
        DxSelection,
        ActionsCell,
    }, 
})

export default class UsersTable extends Vue {

    public store: CustomStore;
    public dataSource: DataSource;

    public showDevicesPopup: boolean = false;
    

    constructor() {
        super();
        this.store = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
               return this.$store.dispatch('getUsers', loadOptions);
            },
        });  
        this.dataSource = new DataSource({store: this.store});  
    }

    public created() {
        console.log('created');
    }

    public get selectedUsers() {
        return this.$store.state.selectedUsers.map((item: UserModel) => item.id);
    }
    
    public onSelectionChanged(e: any) {
        if (e.selectedRowsData) {
            this.$store.dispatch('setSelectedUser', e.selectedRowsData);
        }
    }
    public showDevices(user: UserModel) {
        console.log('onShowDevices');
        this.$emit('onShowDevices', user);
    }
}
