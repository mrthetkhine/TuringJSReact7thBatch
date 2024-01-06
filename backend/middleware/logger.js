
function customLog(req,res,next)
{
    req.requestTime = Date.now();
    console.log('CustomLog>> ',req.url);
    next();
}
module.exports.logger = customLog;