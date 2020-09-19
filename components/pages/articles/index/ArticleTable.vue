<template>
  <b-table head-variant="light" :items="items" :fields="fields">
    <template #cell(index)="{ index }">
      {{ index + 1 }}
    </template>
    <template #cell(actions)="{ item }">
      <b-dropdown variant="info" right split text="..." class="text-white m-2">
        <b-dropdown-item
          :to="{ name: 'articles-edit-slug', params: { slug: item.slug } }"
        >
          Edit
        </b-dropdown-item>
        <b-dropdown-item @click="deleteItem">Delete</b-dropdown-item>
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
    deleteItem() {},
  },
}
</script>

<style lang="scss" scoped></style>
