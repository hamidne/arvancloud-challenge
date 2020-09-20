<template>
  <b-table
    head-variant="light"
    :items="items"
    :fields="fields"
    responsive
    small
  >
    <template #cell(index)="{ index }">
      {{ rowIndex(index) }}
    </template>
    <template #cell(actions)="{ item, index }">
      <b-dropdown
        variant="info"
        right
        split
        text="..."
        class="text-white m-2"
        size="sm"
      >
        <b-dropdown-item
          :to="{ name: 'articles-edit-slug', params: { slug: item.slug } }"
        >
          Edit
        </b-dropdown-item>
        <b-dropdown-item @click="deleteItem(index)">Delete</b-dropdown-item>
      </b-dropdown>
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    fields: [
      { key: 'index', label: '#' },
      { key: 'title', label: 'Title' },
      { key: 'author.username', label: 'Author' },
      {
        key: 'tagList',
        label: 'Tags',
        formatter: (value) => value.join(' , '),
      },
      {
        key: 'body',
        label: 'Excerpt',
        formatter: (value) => {
          return value.length > 20 ? value.substring(0, 20) + ' ...' : value
        },
      },
      {
        key: 'createdAt',
        label: 'Created',
        formatter: (value) =>
          new Date(value).toDateString().replace(/^\w+/, ''),
      },
      { key: 'actions', label: '' },
    ],
  }),
  methods: {
    rowIndex(index) {
      return index + 1 + ((this.$route.params?.page - 1) * 10 || 0)
    },
    deleteItem(index) {
      this.$bvModal
        .msgBoxConfirm('Are you sure to delete Article?', {
          title: 'Delete Article',
          okVariant: 'danger px-4',
          cancelVariant: 'outline-dark px-4',
          okTitle: 'YES',
          cancelTitle: 'NO',
          centered: true,
          hideHeaderClose: false,
        })
        .then((value) => {
          if (value) {
            const slug = this.items[index].slug
            this.$axios.$delete(`/articles/${slug}`).then(() => {
              this.$emit('delete-item', index)
            })
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
