var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

var admin = require('firebase-admin')


var serviceAccount = require('./lone-ly-97556-firebase-adminsdk-nhper-9fa02d2300')

var firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://lone-ly-97556.firebaseio.com"
});

var database = firebaseAdmin.database()

var app = express()

// We want to serve js and html in ejs
// ejs stands for embedded javascript
app.set('view engine', 'ejs')

// We also want to send css, images, and other static files
app.use(express.static('views'))
app.set('views', __dirname + '/views')

// Give the server access to the user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.get('/', function(request, response){
    response.render('home.ejs')        
})

app.get('/anon', function(request, response){
        
        response.render('anon.ejs')        
    // })
})

app.get('/mad', function(request, response){
        
        var messagesRef = database.ref('messages/madchat')
        
        messagesRef.once('value', function(snapshot){
            var messageObject = snapshot.val()
            
            console.log(messageObject)
            
            if (!messageObject){
                messageObject = {
                    'fakeId': {
                        what: 'Nothing yet'
                    }
                }
            }
            
            response.render('mad.ejs', { messages: messageObject })
        })
})


app.get('/sad', function(request, response){
        
        var messagesRef = database.ref('messages/sadchat')
        
        messagesRef.once('value', function(snapshot){
            var messageObject = snapshot.val()
            
            console.log(messageObject)
            
            if (!messageObject){
                messageObject = {
                    'fakeId': {
                        what: 'Nothing yet'
                    }
                }
            }
            
            response.render('sad.ejs', { messages: messageObject })
        })
})


app.get('/lonely', function(request, response){
        var messagesRef = database.ref('messages/lonelychat')
        
        messagesRef.once('value', function(snapshot){
            var messageObject = snapshot.val()
            
            console.log(messageObject)
            
            if (!messageObject){
                messageObject = {
                    'fakeId': {
                        what: 'Nothing yet'
                    }
                }
            }
            
            response.render('lonely.ejs', { messages: messageObject })
        })
})


app.get('/broke', function(request, response){
        var messagesRef = database.ref('messages/brokechat')
        
        messagesRef.once('value', function(snapshot){
            var messageObject = snapshot.val()
            
            console.log(messageObject)
            
            if (!messageObject){
                messageObject = {
                    'fakeId': {
                        what: 'Nothing yet'
                    }
                }
            }
            
            response.render('broke.ejs', { messages: messageObject })
        })
})



app.get('/aroused', function(request, response){
        
        var messagesRef = database.ref('messages/arousedchat')
        
        messagesRef.once('value', function(snapshot){
            var messageObject = snapshot.val()
            
            console.log(messageObject)
            
            if (!messageObject){
                messageObject = {
                    'fakeId': {
                        what: 'Nothing yet'
                    }
                }
            }
            
            response.render('aroused.ejs', { messages: messageObject })
        })
})

app.get('/cat', function(request, response){
        
        response.render('cat.ejs')        
    // })
})

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('App running on port ' + port)
})

 