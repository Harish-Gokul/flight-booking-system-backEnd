async function getallflights(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/posts");
        if(response.status!=200){
            alert("Connection Error");
            return
        }
        let jsonData=await response.json()
        return jsonData
    
    }
    catch(ex){
        alert("Error occured while connecting to server"+ex)
    }
}