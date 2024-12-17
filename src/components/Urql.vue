<script lang="ts" setup>
import {gql, useQuery} from '@urql/vue';

const response = useQuery({
  query: gql`
       query ($name: String!) {
          Character(search: $name) {
            id
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
          }
        }
      `,
  variables: {
    'name': 'gosho'
  }
});

await response

const {fetching, error, data} = response
</script>

<template>
  <div v-if="fetching">
    Loading...
  </div>
  <div v-else-if="error">
    Oh no... {{ error }}
  </div>
  <div v-else>
    {{ data }}
  </div>
</template>
