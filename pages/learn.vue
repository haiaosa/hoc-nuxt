<template>
<v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span v-on="on">This text has a tooltip</span>
      </template>
      <span>Tooltip11111111</span>
    </v-tooltip>
</template>

<script>
  export default {
    data: () => ({
      //
    })
  }
</script>
