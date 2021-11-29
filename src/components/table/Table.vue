<template lang="pug">
.table-wrapper
  table.table
    thead(v-if='withHead')
      tr.table__row-header
        th.table__head.table__head--checkbox.fit(v-if='withSelect')
          .table__head-data
            .table-control-button(@click.stop.prevent='toggleAllOnPage')
              Checkbox#selection-checkbox-head(v-model='dataSource.areAllSelected')

        th.table__head.text-14px-medium(
          v-for='column of columns'
          :style='getColumnStyle(column)'
          :key='column.name'
        )
          .table__head-data.head-data
            .head-data__content
              h4.text-14px-medium {{ column.label }}
              small.text-12px-medium(v-if='column.subLabel') {{ column.subLabel }}
            .head-data__info(v-tooltip='column.info' v-if='column.info')
              Icon(name='ic24-info')

    tbody.table-body
      tr.table__row(
        v-for='(row, rowIdx) of rows'
        @click.stop='$emit("rowClick", row)'
        :key='keyField ? row[keyField] : rowIdx'
        :class='{ "row-as-link": rowsAsLinks }'
      )
        td.table__data.table__data--checkbox.fit(v-if='withSelect')
          .table__data-content
            .table-control-button(@click.stop.prevent='row.checked = !row.checked')
              Checkbox(v-model='row.checked' :id='`selection-checkbox-${rowIdx}`')

        td.table__data(
          v-for='cell of columns'
          :style='getColumnStyle(cell)'
          :key='cell.name'
        )
          .table__data-content
            slot(
              v-if='cell.slot'
              :row='row'
              :name='cell.name'
              :index='rowIdx'
            )
            span.table__value.text-14px-regular(v-else) {{ row[cell.name] }}
</template>
<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';
  import { TableDataSource } from '@/components/table/use/TableDataSource';
  import Checkbox from '@/components/checkbox/Checkbox.vue';
  import { TableColumn, TableRow } from '@/components/table/Table';
  import Icon from '@/components/icon/Icon.vue';
  import Tooltip from '@/directives/Tooltip';

  export default defineComponent({
    name: 'Table',
    components: { Icon, Checkbox },
    directives: { Tooltip },
    emits: ['rowClick'],
    props: {
      keyField: {
        type: String, //Unique field row name for correct key attr work
      },
      dataSource: {
        type: Object as PropType<TableDataSource<TableRow>>,
        default: new TableDataSource([]),
      },
      columns: {
        type: Array as PropType<TableColumn[]>,
        default: () => [],
      },
      withHead: {
        type: Boolean,
        default: true,
      },
      withSelect: {
        type: Boolean,
        default: false,
      },
      rowsAsLinks: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const rows = computed<TableRow[]>(() => {
        return props.dataSource.pageData;
      });

      const toggleAllOnPage = () => {
        if (props.dataSource.areAllSelected) {
          props.dataSource.unSelectAll();
        } else {
          props.dataSource.selectAll();
        }
      };

      const getColumnStyle = (column: TableColumn): string => {
        const fillingColumns = props.columns.filter(({ columnBehavior }) => columnBehavior === 'fill').length;

        switch (column.columnBehavior) {
          case 'fill':
            return `width: ${Math.round((100 - (props.columns.length - fillingColumns)) / fillingColumns)}%;`;
          case 'fit':
            return 'width: 1%;';
          default:
            return '';
        }
      };

      return { rows, toggleAllOnPage, getColumnStyle };
    },
  });
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }

  .table-wrapper {
    background-color: var(--white);
    border: 1px solid var(--gray-150);
    border-radius: 8px;
  }

  .table {
    width: 100%;
    table-layout: auto;

    &__row {
      &.selected {
        background-color: var(--gray-50);
      }

      &.row-as-link {
        cursor: pointer;
      }

      &.row-as-link:hover {
        ::v-deep(.button) {
          &.info {
            background-color: var(--white);

            &:hover {
              background-color: var(--gray-200);
            }

            .button-icon {
              --icon-color: var(--blue-500);
            }
          }
        }

        .table__data {
          background-color: var(--gray-50);
        }

        .table-control-button {
          background-color: var(--white);
        }
      }

      &:first-child {
        .table__data {
          border-top: none;
        }
      }
    }

    &__row-header {
      height: 54px;
    }

    &__head {
      text-align: left;
      color: var(--gray-500);
      background-color: var(--white);
      position: relative;
      padding: 10px 16px 10px 6px;

      &.right {
        padding-right: 16px;

        .table__head-data {
          justify-content: flex-end;
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border-bottom: 1px solid var(--gray-150);
        border-top: 1px solid var(--gray-150);
        pointer-events: none;
      }

      &:first-child {
        padding-left: 16px;
        border-top-left-radius: 8px;

        &::after {
          left: -1px;
          border-left: 1px solid var(--gray-150);
        }
      }

      &.table__head--checkbox {
        padding-left: 10px;
        padding-right: 20px;
      }

      &:last-child {
        padding-right: 16px;
        border-top-right-radius: 8px;

        &::after {
          right: -1px;
          border-right: 1px solid var(--gray-150);
        }

        .table__head-data {
          justify-content: flex-end;
        }
      }

      &.fit {
        width: 1%;
        white-space: nowrap;
      }
    }

    .head-data {
      display: flex;
      align-items: center;

      &__info {
        align-self: center;
        width: 22px;
        height: 22px;
        margin-left: 4px;

        .sui-icon {
          width: 22px;
          height: 22px;
          --icon-color: var(--black);
          transition: fill 0s ease;
        }

        &:hover {
          .sui-icon {
            --icon-color: var(--blue-500);
          }
        }
      }

      small {
        color: var(--gray-500);
        margin-top: 4px;
      }
    }

    &__data {
      font-weight: 400;
      border-top: 1px solid var(--gray-150);
      font-size: 14px;
      padding: 6px 16px 6px 6px;
      transition: background-color 0.2s;

      &.right {
        padding-right: 16px;

        .table__data-content {
          justify-content: flex-end;
        }
      }

      &:first-child {
        padding-left: 16px;
      }

      &.table__data--checkbox {
        padding-left: 10px;
        padding-right: 20px;
      }

      &:last-child {
        padding-right: 8px;

        .table__data-content {
          justify-content: flex-end;
        }
      }

      &.fit {
        width: 1%;
        white-space: nowrap;
      }
    }

    &__data-content {
      min-height: 35px;
      display: flex;
      align-items: center;
    }

    &__value {
      //max-width: 50vw;
      //word-break: break-all; /* for ff */
      //word-break: break-word; /* for chrome */
      //word-wrap: break-word; /* for ff */
      overflow-x: hidden; /* for ff */
    }
  }

  .table-control-button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    transition: background-color var(--transition);

    &:hover {
      background-color: var(--gray-50);
    }
  }
</style>
