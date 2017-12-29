<template>
<v-layout>
  <v-flex xs4>
    <Panel title="Create new Song">
      <v-text-field label="Title" :rules="[required]" required v-model="song.title"/>
      <v-text-field label="Artist" :rules="[required]" required v-model="song.artist"/>
      <v-text-field label="Genre" :rules="[required]" required v-model="song.genre"/>
      <v-text-field label="Album" :rules="[required]" required v-model="song.album"/>
      <v-text-field label="Album Image Url" :rules="[required]" required v-model="song.albumImageUrl"/>
      <v-text-field label="Youtube ID" :rules="[required]" required v-model="song.youtubeId"/>
    </Panel>
  </v-flex>
  <v-flex xs8>
    <Panel title="Song Structure" class="ml-4">
      <v-text-field label="Lyrics" :rules="[required]" required v-model="song.lyrics" multi-line/>
      <v-text-field label="Tab" :rules="[required]" required v-model="song.tab" multi-line/>
    </Panel>
    <div v-if="error" class="danger-alert">{{error}}</div>
    <v-btn @click="save" :class="isValid() ? 'cyan' : 'grey'" dark round>Save Song</v-btn>
  </v-flex>
</v-layout>
  
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      try {
        if (!this.isValid()) {
          this.error = 'Please fill in all the required fields.'
          return
        }

        await SongsService.put(this.song)
        this.$router.push({
          name: 'songs',
          params: {
            songId: this.song.songId
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    isValid () {
      const validate = Object.keys(this.song).every(key => !!this.song[key])
      return validate
      //  Object.keys(songs).every(key => !!song[key])
    }
  },
  components: {
    Panel
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped>

</style>
