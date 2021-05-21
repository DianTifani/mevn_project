<template>
    <div class="col-lg-6">
       <h3 class="text-center">Edit Post</h3>
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
                await axios.put(baseApi + '/posts/' + this.$route.params.id, this.post)
                this.$router.push({name: 'post.list'})
            },
            async fetchPost() {
                let {data} = await axios.get(baseApi + '/posts/' + this.$route.params.id)
                this.post = data
            }
        },
        mounted() {
            this.fetchPost()
        }
    }
</script>