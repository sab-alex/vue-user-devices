<template>
    
    <dx-popup  :title="title"
            :visible="visiblePopup"
            @hiding="onClosePopup">
        <dx-scroll-view :height="400">
            <div>My devices</div>
            <dx-list
                :items="myDevices"
                :height="100"
            />
    
            <dx-data-grid
                ref='table'
                :allowColumnResizing="true"
                :data-source="dataSource"
                :show-column-lines="true" 
                :show-row-lines="true"
                :show-borders="true">
                    <dx-search-panel :visible="true"></dx-search-panel>
                    <dx-remote-operations 
                        :sorting="true"/>
                    <dx-column 
                        data-field="name"
                        caption="Name"/>
                    <dx-column 
                        data-field="serial"
                        :allowEditing="false"
                        caption="Serial"/>
                    <dx-column 
                        cell-template="actionsTemplate"
                        caption="Actions"/>
                        <actions-cell
                            slot="actionsTemplate"
                            slot-scope="options" 
                            :cell-data="options.data"
                            @onAddDeviceToUser="addDeviceToUser"/>
            </dx-data-grid>
        </dx-scroll-view>    
    </dx-popup>
</template>
<script src="./UserDevicesPopup.ts" lang="ts"></script>
