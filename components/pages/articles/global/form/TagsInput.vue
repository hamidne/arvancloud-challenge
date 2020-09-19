<template>
  <div class="tags-inputs">
    <b-form-group label="Tags">
      <b-form-input
        v-model="text"
        placeholder="New Tag"
        trim
        @keypress.enter="addItem"
      />
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <div class="border p-2 mt-3 rounded">
            <b-skeleton
              v-for="i in 10"
              :key="i"
              class="mb-3"
              :width="`${Math.random() * 50 + 30}%`"
            />
          </div>
        </template>
        <b-form-checkbox-group
          v-model="innerValue"
          :options="items"
          name="flavour-2a"
          class="border p-2 mt-3 rounded"
          stacked
        />
      </b-skeleton-wrapper>
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
  data: () => ({ items: [], text: '', loading: true }),
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
      this.items = [...new Set([...tags, ...this.innerValue])].sort((a, b) => {
        const nameA = a.toUpperCase()
        const nameB = b.toUpperCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
      this.loading = false
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
