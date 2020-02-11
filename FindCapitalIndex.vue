<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
          <v-card>
            <span>{{ capitals(string) }}</span>
          </v-card>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            string: 'CoDeWaR'
        }
    },
  methods: {
    capitals (word) {
     let arrIndex = []
     for (let i=0; i < word.length; i++) {
       if(word[i] === word[i].toUpperCase()){
         arrIndex.push(i)
       }
     }
     return arrIndex;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
