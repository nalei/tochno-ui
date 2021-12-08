<template lang="pug">
.inputs.storybook-card
  section.tables-component-usage
    h2.section-title.h-800 Component usage

  section.tables-preview
    .table-header
      .flexspace
      Button(
        size='m'
        mode='secondary'
        @click='clearRows'
      ) Clear all
      Button(size='m' @click='addRow') Add

    Table(
      keyField='rowName'
      :withSelect='true'
      :dataSource='tableData'
      :columns='tableColumns'
    )
      template(#icon='{ row }')
        .table-slot-icon
          Icon(color='--gray-500' :name='row.iconName')
      template(#control='{ row }')
        Button(
          mode='info'
          iconOnly
          @click='removeRow(row)'
          :icon='{ name: "ic24-close-delete" }'
        )
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import { TableDataSource } from '@/components/table/use/TableDataSource';
  import Table from '@/components/table/Table.vue';
  import Button from '@/components/button/Button.vue';
  import Icon from '@/components/icon/Icon.vue';
  import ICON_LIST from '@/common/iconNameList';
  import { TableRow } from '@/components/table/Table';

  export default defineComponent({
    components: { Table, Button, Icon },
    setup() {
      const tableRows = ref<TableRow[]>(
        [...ICON_LIST].map((iconName, idx) => ({
          rowName: `foo ${idx}`,
          iconName,
        }))
      );
      const tableData = ref(new TableDataSource<TableRow>(tableRows.value));

      const tableColumns = computed(() => {
        return [
          {
            name: 'rowName',
            label: 'Row name',
          },
          {
            name: 'iconName',
            label: 'Icon name',
          },
          {
            name: 'icon',
            label: 'Icon column',
            slot: true,
            info: 'Column contains the "Icon" component inside the slot',
          },
          {
            name: 'control',
            slot: true,
          },
        ];
      });

      const addRow = () => {
        const newItem = {
          rowName: `foo ${tableData.value.total + 1}`,
          iconName: [...ICON_LIST].reverse()[tableData.value.total + 1],
        };

        tableRows.value.push(newItem);
        tableData.value = new TableDataSource<TableRow>(tableRows.value);
      };

      const clearRows = () => {
        tableRows.value = [];
        tableData.value = new TableDataSource<TableRow>(tableRows.value);
      };

      const removeRow = (row: Record<string, TableRow>) => {
        tableRows.value = tableRows.value.filter(({ rowName }: TableRow) => row.rowName !== rowName);
        tableData.value = new TableDataSource<TableRow>(tableRows.value);
      };

      return { tableColumns, tableData, addRow, clearRows, removeRow };
    },
  });
</script>

<style scoped>
  .tables-component-usage {
    margin-bottom: 48px;
  }
  .table-header {
    margin-bottom: 16px;
  }
  .tables-preview {
    .table-header {
      align-items: center;
      display: flex;
      justify-content: space-between;

      &::v-deep(.button) {
        margin-left: 16px;
      }
    }
  }
</style>
