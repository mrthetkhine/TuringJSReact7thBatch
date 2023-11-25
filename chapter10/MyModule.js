//console.log('MyModule ',window.MyModule);
window.MyModule = window.MyModule || (function()
{
    console.log('MyModule loaded');
    function internalApi()
    {
        console.log('Module method');
    }
    return {
        api : internalApi
    }
}());
//window.something = 'Something';