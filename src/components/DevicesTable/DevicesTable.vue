<template>
  <div class="devices-table">
     <dx-data-grid
            ref='table'
            :allowColumnResizing="true"
            :data-source="dataSource"
            :show-column-lines="true" 
            :show-row-lines="true"
            :show-borders="true">
                <dx-editing
                    :allow-updating="true"
                    mode="cell"
                />
                <dx-remote-operations 
                    :sorting="true"/>
                <dx-column 
                    data-field="name"
                    caption="Name"/>
                <dx-column 
                    data-field="serial"
                    :allowEditing="false"
                    caption="Serial"/>
        </dx-data-grid>
  </div>
</template>
<script src="./DevicesTable.ts" lang="ts"></script>
