class MyPromise
{
    handlers = [];
    constructor(callback)
    {
        this.callback = callback;
        this.callback(this.resolve.bind(this),this.reject.bind(this));
    }
    resolve(data)
    {
        console.log('Resolve ',data);
        let accumalator = data;
        for(const handler of this.handlers)
        {
            accumalator = handler(accumalator);
        }
    }
    reject(data)
    {
        console.log('Reject ',data);
    }
    then(handler)
    {
        this.handlers.push(handler);
        return this;
    }
}
new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Execute after 3 seconds');
        resolve(200);
    },3000);
})
.then(x=>x+1)
.then(x=>console.log('Success ',x),err=>console.log('Error ',err));