/*
Promise.reject(100)
        .then(data=>console.log('success ',data),(err)=>(console.log('Err ',err),Promise.reject(2)))
        .then(x=>x+1, x=>x* 2)
        .then(console.log)
*/
/*
Promise.resolve(101)
        .then(data=> {
            if(data==100)
            {
                throw new Error('Something got wrong');
            }
            else
            {
                return Promise.reject(data+1);
            }
        })
        .catch(data=>data+20)
        .then(data=>console.log('Data ',data ),(err)=>console.log('Err =>',err))
*/
/*
Promise.resolve(undefined)
        .then(data=>data.toUpperCase())
        .then(console.log)
*/
Promise.resolve(100)
       .then(x=>Promise.resolve(Promise.resolve(x+2)))
       .then(console.log)