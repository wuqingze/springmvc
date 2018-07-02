<template>
    <div>{{data}}
        <br>
        <!-- <button v-on:click="getdata">get data from server from different domain</button>     -->
        <!-- <button v-on:click="attributemodel">test annotation AttributeModel</button>                                                             -->
        <button v-on:click="json">json test</button>
        <!-- <button v-on:click="requestHeader">request header</button> -->

        <!-- <button v-on:click="responsebody">responsebody message convert</button> -->
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
                url: 'http://localhost:8192/user/login',
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
                url: 'http://localhost:8192/user/attributemodel',
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
                url: 'http://localhost:8192/user/json',
                type: "post",  
	            async: true,  
	            dataType: "json", 
	            contentType: "application/json; charset=utf-8",
                contentType: "application/json",
                data:JSON.stringify({
                    bookId:1,
                    name: "springmvc",
                    number: 10
                }),
                // xhrFields:{withCredentials:true},
                success: function(res){
                    alert(JSON.stringify(res))
                }
            })
        },
        requestHeader: function(){
            $.ajax({
                url: "http://localhost:8192/user/requestHeader",
                success: function(res){
                    alert(res)
                }
            })
        },
        responsebody: function(){
            $.ajax({
                url: "http://localhost:8192/user/responsebody",
                success: function(res){
                    alert(JSON.stringify(res))
                }
            })
        }
    }
}
</script>

<style>

</style>

