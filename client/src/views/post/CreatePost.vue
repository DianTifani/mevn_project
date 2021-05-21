<template>
    <div class="col-lg-6">
       <h3 class="text-center">Create Post</h3>
       <router-link :to="{name: 'post.list'}">
           <button class="btn btn-dark mb-3">Back</button>
       </router-link>
        <form @submit.prevent="handleSubmitForm">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="post.title" required>
            </div>

            <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" v-model="post.description" cols="30" rows="10"></textarea>
            </div>

            <div class="form-group">
                <label>Gambar</label>
                <input type="file" ref="fileInput" class="form-control">
            </div>

            <div class="form-group">
                <button class="btn btn-danger btn-block">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import {baseApi} from '../../constants'
    export default {
        data() {
            return {
                post: {
                   title: '',
                   description: ''
                }
            }
        },
        methods: {
            async handleSubmitForm() {
                try {
                    let payload = new FormData()
                    payload.append('title', this.post.title)
                    payload.append('description', this.post.description)
                    if (this.$refs.fileInput.files.length > 0) {
                        payload.append('file', this.$refs.fileInput.files[0])
                    }

                    // const config = {
                    //     headers: {
                    //         'content-type': 'multipart/form-data'
                    //     }
                    // }
                    await axios.post(baseApi + '/posts', this.post)
                    this.$router.push({name: 'post.list'})
                } catch (e) {
                    console.error(e, e.response)
                }
            }
        }
    }
</script>