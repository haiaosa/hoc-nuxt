<template>
  <v-container fluid grid-list-sm>
    <v-layout>
      <v-flex xs6 sm4>
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to bottom, rgba(255,255,255,.0), rgba(0,0,0,.9)"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      card_text:
        'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        gradient: 'to bottom, #ffffff, #000000'
    }
  }
}
</script>
<style scoped>
.custom-btn::before {
  color: transparent;
}
.bottom-gradient {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }
</style>
