function addMadMessage(content){
	var database = firebase.database()
	
	var user = firebase.auth().currentUser
	var userId = user.uid
	var displayName = localStorage.getItem('displayName')
	
	var messageRef = database.ref('/messages/madchat').child(userId)
	
	var messageInput = document.getElementById('sendMadMessage')
	
	var messageM = messageInput.value
	messageInput.value = ''
	
	messageRef.push({
		text: messageM,
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