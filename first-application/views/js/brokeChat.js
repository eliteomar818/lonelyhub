function addBMessage(content){
	var database = firebase.database()
	
	var user = firebase.auth().currentUser
	var userId = user.uid
	var displayName = user.displayName
	
	var messageRef = database.ref('/messages/brokechat').child(userId)
	
	var messageInput = document.getElementById('sendBMessage')
	
	var messageB = messageInput.value
	messageInput.value = ''
	
	messageRef.push({
		text: messageB,
		time: new Date().toDateString(),
		name: displayName || `Anonymous`
	})
	.then(function(res){
		window.location.reload()
	})
	.catch(function(err){
		console.log(err)
	})
}