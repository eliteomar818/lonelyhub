function addAMessage(content){
	var database = firebase.database()
	
	var user = firebase.auth().currentUser
	var userId = user.uid
	var displayName = localStorage.getItem('displayName')
	
	var messageRef = database.ref('/messages/arousedchat').child(userId)
	
	var messageInput = document.getElementById('sendAMessage')
	
	var messageA = messageInput.value
	messageInput.value = ''
	
	messageRef.push({
		text: messageA,
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