<template>    
    <div class="col-lg-12">
        <router-link :to="{name: 'post.create'}">
            <button class="btn btn-success mb-3">Create Product</button>
        </router-link>
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>No</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in posts" :key="post._id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ post.product }}</td>
                    <td>{{ post.price }}</td>
                    <td>
                        <router-link :to="{name: 'post.edit', params: { id: post._id }}" class="btn btn-success mr-2">Edit
                        </router-link>
                        <button @click.prevent="deletePost(post)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios"
    import {baseApi} from '../../constants'

    export default {
        data() {
            return {
                posts: []
            }
        },
        methods: {
            deletePost(post){
                if (!confirm('Apakah anda yakin?')) return
                axios.delete(baseApi + '/posts/' + post._id)
                .then(() => {
                    this.fetchPosts()
                })
                .catch((e) => {
                    console.error(e, e.response)
                })
            },
            async fetchPosts() {
                try {
                    let {data} = await axios.get(baseApi + '/posts')
                    this.posts = data
                } catch (e) {
                    console.error(e, e.response)
                }
            }
        },
        mounted() {
            this.fetchPosts()
        }
    }
</script>
