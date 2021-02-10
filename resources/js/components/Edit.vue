<template lang="">
    <div>
        <h3 class="text-center">Edit Post</h3>
        <div class="d-flex justify-content-center">
            <div class="dashed-loading" v-if="loading"></div>
        </div>
        <div class="row" v-show="!loading">
            <div class="col-md-6">
                <form @submit.prevent="updatePost">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="text" class="form-control" v-model="product.price">
                    </div>
                    <button type="submit" class="btn btn-primary">Update Post</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product: [],
            loading: true
        }
    },
    created() {
        this.axios
            .get(`/api/products/${this.$route.params.id}/edit`)
            .then((response) => {
                this.product = response.data;
                this.loading = false
                // console.log(response.data);
            });
    },
    methods: {
        updatePost() {
            this.axios
                .put(`/api/products/${this.$route.params.id}`, this.product)
                .then((response) => {
                    this.$router.push({name: 'index'});
                });
        }
    }
}
</script>
<style lang="">

</style>
