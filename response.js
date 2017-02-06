var MailAPI={};
const ERROR_SECRET_DIDNT_MATCH="secret didn't match may be someone try to use your phone"
const ERROR_PARSE="not able to parse the mail"
const ERROR_ID="can't run the same command twice"
const DONE="Roger that"
const NOT_ALLOWED="one command in the previous list is an rm not able to perform this task"
const UNKNOWN = "unknown error"
var loadTemplate=function(status,params){
  if(status=="ERROR_SECRET_DIDNT_MATCH") return ERROR_SECRET_DIDNT_MATCH
  else if(status=="ERROR_PARSE") return ERROR_PARSE
  else if(status == "ERROR_ID") return ERROR_PARSE
  else if(status=="DONE"){
    var result="<p>I run it at <i><b>"+params[0]+"</b></i></br>"+
    "<i>here is some information about the command :</i><br>"+
    "<b>Command : </b>"+params[1]+"<br>"+
    "<b>Status  :</b>"+params[2]+"<br></p>"
    return result
  }
  else if(status=="NOT_ALLOWED") return NOT_ALLOWED
  else return UNKNOWN
}

MailAPI.sendCode = function(code,timeR,execTime,command,secret,status){
  try{

    var execution="fail";
    if(code==0) execution="success";
    params=[execTime,command,execution]
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport('smtps://yourgmailid%40gmail.com:yourpassword2@smtp.gmail.com');
    var mailOptions = {
        from: '"Your PC"',
        to: 'destination@gmail.com', // list of receivers
        subject: 'Command Execution Code', // Subject line
        html: "<h2>Code : "+code+"</h2>"+
        "<p> Sir I received your mail at<b><i>"+timeR+"</i></b><br></p>"
        +loadTemplate(status,params)
    };
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message was sent');
});
  }catch(e){

  }
}
module.exports=MailAPI;
