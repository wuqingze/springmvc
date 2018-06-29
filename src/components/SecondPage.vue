<template>
    <div>
        this is secondpage and params is {{params}}
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            params: ""
        }
    },

    mounted: function(){
        // this.params = this.$route.params.age
        const vm = this

        $.ajax({
            url: "http://localhost:8080/user/age",
            data: {
                age: vm.$route.params.age
            },
            success: function(res){
                vm.params = res
            }
        })
    }
}
</script>

<style>

</style>
