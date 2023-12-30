process.on("message",(request)=>{
    console.log("data received ");
    console.log(request);
    process.send({
        data:request.data.toUpperCase()
    });
});