module.exports =(req,response,next)=> {
    console.log({remoteIp: req.ip, method: req.method})
    next()
}