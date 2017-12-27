<template>
    <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Songs">
        <v-btn slot="action" @click="navigateTo({ name: 'songs-create' })" 
                fab class="cyan accent-2" light small absolute right middle>
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id" class="song">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.title}}</div>
              <div class="song-genre">{{song.genre}}</div>

              <v-btn @click="navigateTo({name: 'song', params: { songId: song.id} })" dark class="cyan">
                View</v-btn>
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImageUrl" class="album-image" />
            </v-flex>
          </v-layout>
        </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
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
.song-title {
  font-size: 30px;
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
</style>
