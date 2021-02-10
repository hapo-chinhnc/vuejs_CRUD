// User.vue
<template>
    <div>
        <h3 class="text-center">Add Post</h3>
        <div class="row">
            <div class="col-md-6 offset-3">
                <form @submit.prevent="addPost">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="text" class="form-control" v-model="product.price">
                    </div>
                    <button type="submit" class="btn btn-primary">Add Post</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        data() {
            return {
                product: {}
            }
        },
        methods: {
            addPost() {
                this.axios
                    .post('/api/products', this.product)
                    .then(response => (
                        this.$router.push({name: 'index'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
