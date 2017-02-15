# Remote-Command-Runner
Control your PC from your mobile
## How it Works ?
* NodeJS will start by running imap.py file which will connect to your account and fetch new mails
* if a new mail with the object "command" was found the command will be parsed then launshed
* Finally the program will notify you about the status of the previous commands by sending you a mail
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

```
$ git clone https://github.com/YassineFadhlaoui/Remote-Command-Runner.git
$ cd Remote-Command-Runner
```
### Install client dependencies 
    
 ```
 $ npm install
 $ sudo pip install imap
 ```
    
## Running the tests
how to run the project ?
### valid gmail address
You need a valid gmail address to get this project working (create a new gmail account) and you have to allow access for less secure apps her [Change account access for less secure apps](https://www.google.com/settings/security/lesssecureapps).
### Change the code
you have to add the gmail address and the password of the new gmail account in the source code to get the project working :
* mail.login('gmailaccount@gmail.com', 'yourpassword') in the imap.py file 
* result, data = mail.uid('search', None, '(HEADER Subject "your_subject")') change "your_subject" by anything "command" for example 
* var transporter = nodemailer.createTransport('smtps://gmailaccount%40gmail.com:yourpassword@smtp.gmail.com'); in the response.js file
*  var mysecret="mysecret" change the secret if you want by a secret from your choice in the server.js file

That's all :)

### Launch the server
* using Gulp
If you are familar with gulp you can launch the server by just typing :

    ```
    $ gulp
    ```
* using node
You can start the server by just typing the famous command:

    ```
    $ node server.js
    ```
### test
open your e-mail and send an email to the email address you've created previously :
* object : your_subject
* mail :
         ls -l****yoursecret****1457****

## Requirments
  * Python installed
  * Nodejs installed
## Used programming languages
  
  * Javascript
  * Python
  
## Authors

* **Yassine Fadhlaoui** - *Initial work* - [Yassine Fadhlaoui](https://github.com/YassineFadhlaoui)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Remote-Command-Runner/blob/master/LICENSE) file for details

## Questions ?
 
 feel free to ask me any question :
 * yassinefadhlaoui93@gmail.com
 * [Facebook](https://www.facebook.com/yassine.fadhlaoui.9)
 * [Twitter](https://twitter.com/FadYassine)
