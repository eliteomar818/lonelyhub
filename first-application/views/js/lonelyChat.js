function addLMessage(content){
	var database = firebase.database()
	
	var user = firebase.auth().currentUser
	var userId = user.uid
	var displayName = localStorage.getItem('displayName')
	
	var messageRef = database.ref('/messages/lonelychat').child(userId)
	
	var messageInput = document.getElementById('sendLMessage')
	
	var messageL = messageInput.value
	messageInput.value = ''
	
	messageRef.push({
		text: messageL,
		time: new Date().toDateString(),
		name: displayName
	})
	.then(function(res){
		window.location.reload()
	})
	.catch(function(err){
		console.log(err)
	})
}