function addSMessage(content){
	var database = firebase.database()
	
	var user = firebase.auth().currentUser
	var userId = user.uid
	var displayName = localStorage.getItem('displayName')
	
	var messageRef = database.ref('/messages/sadchat').child(userId)
	
	var messageInput = document.getElementById('sendSMessage')
	
	var messageS = messageInput.value
	messageInput.value = ''
	
	messageRef.push({
		text: messageS,
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