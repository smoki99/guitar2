<template>
  <Panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">{{song.title}}</div>
        <div class="song-artist">{{song.title}}</div>
        <div class="song-genre">{{song.genre}}</div>

        <v-btn @click="navigateTo({name: 'song-edit', params: { songId: song.id} })" dark class="cyan">
                Edit</v-btn>
      </v-flex>
      <v-flex xs6>
        <img :src="song.albumImageUrl" class="album-image" />
        <div>{{song.album}}</div>
      </v-flex>
    </v-layout>
  </Panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.song {
  padding: 20px;
  height: 230px;
  overflow: hidden;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 atuo;
}
.song-title {
  font-size: 30px;
}
</style>
