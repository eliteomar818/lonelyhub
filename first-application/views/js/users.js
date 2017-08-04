         signInAnonymously
function signInAnonymously(){
    firebase.auth().signInAnonymously()
    .then(function(res){
        console.log(res)
        checkIfLoggedIn()
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

function checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged(function(user){
        if ( user ) {
            console.log('logged in')
            // do stuff with logged in user
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            showCatPage()
            
        } else {
            hideCatPage()
            console.log('not logged in')
            // do stuff as if user is not logged in
        }
    })
}

checkIfLoggedIn()

function hideCatPage(){
    document.getElementById('cat-page')
    .setAttribute('style', 'display: none; visibility: hidden')
    
    document.getElementById('sign-out')
    .setAttribute('style', 'display: none; visibility: hidden')
}

function showCatPage(){
    document.getElementById('cat-page')
    .setAttribute('style', 'display: block; visibility: visible') 
    
    document.getElementById('sign-out')
    .setAttribute('style', 'display: block; visibility: visible')     
}

