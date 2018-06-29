<template>
    <div>{{data}}
        <br>
        <!-- <button v-on:click="getdata">get data from server from different domain</button>     -->
        <!-- <button v-on:click="attributemodel">test annotation AttributeModel</button>                                                             -->
        <button v-on:click="json">json test</button>
    </div>    
    
</template>

<script>
var ajax = require('node.ajax')
export default {
    data: function(){
        return{
            data: ""
        }
    },
    methods: {
        getdata: function(){
            const vm = this
            $.ajax({
                url: 'http://localhost:8080/user/login',
                success: function(data){
                    // alert(data)
                    vm.data = data
                },
                // contentType: "json",
                data: {
                    "hello": "world",
                    "name": "wuqingze"
                },
                xhrFields:{withCredentials:true},
                type: "POST"
            })
        },
        attributemodel: function(){
            alert("attributemodel")
            const vm = this
            $.ajax({
                url: 'http://localhost:8080/user/attributemodel',
                data:{
                    "abc": "this is abc from wuqingze"
                },
                success: function(res){
                    alert(res)
                }
            })
        },
        json: function(){
            const vm = this
            $.ajax({
                url: 'http://localhost:8080/user/json',
              
                data:{
                    bookId:1,
                    name: "spring mvc企业实战应用"
                },
                async: true,
                success: function(res){
                    alert(res)
                }
            })
        }
    }
}
</script>

<style>

</style>

