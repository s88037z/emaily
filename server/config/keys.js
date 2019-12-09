// figure out what set of credentials to return 

if(process.env.NODE_ENV==="production"){ //when we in production ,the variable would automatically set by Heroku 
     // we're in production 
     module.exports=require('./prod')

}else{
    //we're in development
    module.exports=require('./dev')
}