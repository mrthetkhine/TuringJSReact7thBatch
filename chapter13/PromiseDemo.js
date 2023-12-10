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
       //.then(x=>Promise.reject(x+2))
       /*.then(x=>{
        throw new Error(x+2);
       })
       */
       .catch(x=>x+10)
       .finally(()=>{
        console.log('always excuted ')
        return 50;
       })
       .finally(()=>{
        console.log('always excuted 2')
        return 50;
       })
       .then(console.log)