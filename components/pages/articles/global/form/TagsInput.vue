<template>
  <div class="tags-inputs">
    <b-form-group label="Tags">
      <b-form-input
        v-model="text"
        placeholder="New Tag"
        trim
        @keypress.enter="addItem"
      />
      <b-form-checkbox-group
        v-model="innerValue"
        :options="items"
        name="flavour-2a"
        class="border p-2 mt-3 rounded"
        stacked
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data: () => ({ items: [], text: '' }),
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  created() {
    this.$axios.$get('/tags').then(({ tags }) => {
      this.items = tags.sort((a, b) => {
        const nameA = a.toUpperCase()
        const nameB = b.toUpperCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
    })
  },
  methods: {
    addItem() {
      if (!this.items.includes(this.text)) this.items.unshift(this.text)
      if (!this.innerValue.includes(this.text))
        this.innerValue.unshift(this.text)
      this.text = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.tags-inputs {
  max-width: 17rem;
}
</style>
