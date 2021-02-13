<template>
  <v-simple-table fixed-header height="80vh" width="50vw">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Names (Count - {{ names.length }})
            <SortIcon
              column="names"
              :selectedColumn="selectedColumn"
              :sort="sort.names"
              @sortBy="setSortBy"
            />
          </th>

          <th class="text-left">
            Amount (Total - {{ mountSum }})
            <SortIcon
              column="amount"
              :selectedColumn="selectedColumn"
              :sort="sort.amount"
              @sortBy="setSortBy"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in names" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.amount }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import SortIcon from '../../components/SortIcon.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Table',
  props: {
    names: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  components: {
    SortIcon,
  },
  created() {
    this.getNames({
      column: this.selectedColumn,
      order: this.sort[this.selectedColumn] ? 'DESC' : 'ASC',
    })
  },
  computed: {
    mountSum() {
      return this.names.length > 0 ? this.getAmountSum() : 0
    },
  },
  data() {
    return {
      selectedColumn: 'names',
      sort: {
        names: true,
        amount: false,
      },
    }
  },
  methods: {
    ...mapActions(['getNames']),
    setSortBy(column) {
      if (this.selectedColumn == column) {
        this.sort[column] = !this.sort[column]
      } else {
        this.selectedColumn = column
        this.sort[column] = !this.sort[column]
      }

      this.getNames({
        column: this.selectedColumn,
        order: this.sort[this.selectedColumn] ? 'DESC' : 'ASC',
      })
    },
    getAmountSum() {
      // Create array of amounts and reduce it into a single value
      return this.names
        .map((name) => name.amount)
        .reduce((accumulator, currentvalue) => {
          return accumulator + currentvalue
        })
    },
  },
}
</script>

<style scoped></style>
