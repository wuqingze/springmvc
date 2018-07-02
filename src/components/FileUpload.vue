<template>
    <div>
        <!-- <form name="serForm" action="/SpringMVC006/fileUpload" method="post"  enctype="multipart/form-data">
            <h1>采用流的方式上传文件</h1>
            <input type="file" name="file">
            <input type="submit" value="upload"/>
        </form> -->
        
        <form name="Form2" action="http://localhost:8192/user/fileUpload2" method="post"  enctype="multipart/form-data" id="file">
            <p>采用multipart提供的file.transfer方法上传文件</p>
            <input type="file" name="file">
            <!-- <input type="submit" value="upload"/> -->
        </form>
        
        <button v-on:click="upload">upload</button>
        <!-- <form name="Form2" action="/SpringMVC006/springUpload" method="post"  enctype="multipart/form-data">
            <h1>使用spring mvc提供的类的方法上传文件</h1>
            <input type="file" name="file">
            <input type="submit" value="upload"/>
        </form> -->
    </div>
</template>

<script>
export default {
    methods:{
        upload: function(){
            alert("jjjj")
            var f = new FormData(document.getElementById("file"));
            $.ajax({
                 type:"post",
                processData:false,
                contentType:false,
                url: "http://localhost:8192/user/fileUpload2",
                data: f,
                success: function(res){ 
                    alert(res)
                }
            })

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
