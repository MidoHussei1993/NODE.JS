  
  var bodyParser = require('body-parser')  //use when come requset this will translate it
  
  
  
  
  //3rd party middleware
  app.use(bodyParser.urlencoded   //to use middleware that not in verb we use app.use
  
  
  
  
  app.post('/xyz',function(req,res){
  console.log( req.body.usr_name  )                                   //to get data from that send to this url by post method
  var usernm=req.body.usr_name 
  
                                                                               //npm install ejs --save
    res.render("template.ejs",{userename:usernm}                              //difine file call template.ejs in h1
                                                                              //<h1> <%=username %>  </h1> 
                                                                              //<%-include('partialTemplate.ejs') %>  add html file
  })
  
  //<%-include('partialTemplate.ejs') %>  add html file
  <% for(i=0;i<5;i++){ %>
      <li>
      <%=i%>
      </li>
  <%}%>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
