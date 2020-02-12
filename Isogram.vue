<template lang="">
    <v-container grid-list-lg>
        <v-layout row wrap>
          <v-card>
            <span>{{ isogram(word) }}</span>
          </v-card>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            word: 'moOse'
        }
    },
  methods: {
    isogram (str) {
      var arr = str.toLowerCase().split("")
      var inArr = []
      for(var i =0; i<arr.length; i++){
       if (!inArr[arr[i]]) {
       	inArr[arr[i]] = arr[i];
       } else {
       	return false;
       }
      }
      return true;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
