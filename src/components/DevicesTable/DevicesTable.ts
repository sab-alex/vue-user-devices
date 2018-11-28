import { Component, Vue } from 'vue-property-decorator';
import { DxDataGrid, DxRemoteOperations, DxColumnChooser, DxColumn,  DxEditing } from 'devextreme-vue/ui/data-grid';
import { DxSelectBox  } from 'devextreme-vue/ui/select-box';
import CustomStore  from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { UserModel } from '@/models/UserModel';

@Component({
    name: 'DevicesTable',
    components: {
        DxDataGrid,
        DxRemoteOperations,
        DxColumnChooser,
        DxColumn,
        DxSelectBox,
        DxEditing,
    }, 
})

export default class DevicesTable extends Vue {
    public store: CustomStore;
    public dataSource: DataSource;

    constructor() {
        super();
        this.store = new CustomStore({
            key: 'id',
            load: (loadOptions) => {
               loadOptions = Object.assign(loadOptions, {
                   users: this.$store.state.selectedUsers.map((item: UserModel) => item.id)
                }); 
               return this.$store.dispatch('getUserSelectedDevices', loadOptions);
            },
            update: (id, object) => {
                const payload = {
                    id: id,
                    object: object
                };
                return this.$store.dispatch('updateDevice', payload);
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
}
