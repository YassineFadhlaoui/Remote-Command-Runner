var Mail = require('./response')
var fs   = require('fs')
var verifyID=function(newID){
  try{
      var oldID = fs.readFileSync("id.txt", 'utf8');
      oldID=parseInt(oldID);
      console.log(oldID)
      if (newID==oldID) return "no"
      else{
        try{
          console.log("writing to id")
          var stream = fs.createWriteStream("id.txt");
            stream.once('open', function(fd) {
            stream.write(newID)
            stream.end();
          });
        }catch(e){
          console.log("error")
        }
        return "yes"
      }

  }catch(e){
    console.log(e)
    return "error"
  }
}
var run = function(command,secret,timeR,execTime,id){
  var r=verifyID(id)
  console.log(r)
//choose a secret
  if(secret=="mysecret" && !command.includes("rm") && !command.includes("rmdir") && r=="yes"){
    console.log(command)
    var command_ps = require('child_process').spawn('sh', ['-c', command], { stdio: 'inherit' });
    command_ps.on('close', function (code){
    console.log("yes")
    Mail.sendCode(code,timeR,execTime,command,secret,"DONE");
    });
  }else if(command.includes("rm") || command.includes("rmdir")){
    Mail.sendCode(1,timeR,execTime,command,secret,"NOT_ALLOWED");
  }else if(secret != "monta"){
    Mail.sendCode(1,timeR,execTime,command,secret,"ERROR_SECRET_DIDNT_MATCH");
  }else if(r=="no"){

  }else{
    Mail.sendCode(1,timeR,execTime,command,secret,"UNKNOWN");
  }
}
var getMail = function(){
  var buffer="",secret="",command="",time="";
  var getCommand = require('child_process').spawn('python', ['imap.py']);
  time=Date();
  getCommand.on('error', function (err) {throw err;});
  getCommand.on('close', function (code) {
     var message_body= buffer.split('****')
     command=message_body[0];
     secret =message_body[1];
     console.log(command)
     console.log(secret)
     var id = message_body[2];
     console.log(id)
     if(buffer != "" && command!=""){
       try{
          run(command,secret,time.toString(),Date().toString(),id)
       }catch(e){
         console.log("error in running")
       }
     }
   	});
  getCommand.stdout.on('data', function (data) {
    buffer+=data;
   });
}
try{
  getMail()
}catch(e){
  console.log("not connected")
}
var stream = fs.createWriteStream("redo.txt");
  stream.once('open', function(fd) {
  stream.write("redo")
  stream.end();
});
