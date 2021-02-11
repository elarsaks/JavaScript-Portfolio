<template>
  <v-icon
    aria-hidden="false"
    medium
    :color="color"
    style="margin-left: 10px"
    :disabled="false"
    @click="$emit('sortBy', column)"
  >
    {{ arrow }}
  </v-icon>
</template>

<script>
export default {
  name: 'SortIcon',
  props: {
    column: {
      type: String,
      required: true,
      default: 'names',
    },
    selectedColumn: {
      type: String,
      required: true,
      default: 'names',
    },
    sort: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  computed: {
    arrow() {
      return this.sort ? 'mdi-arrow-up' : 'mdi-arrow-down'
    },
    color() {
      return this.column == this.selectedColumn
        ? 'blue darken-2'
        : 'gray darken-2'
    },
  },
}
</script>
