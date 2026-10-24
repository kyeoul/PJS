$(document).ready(function(){
    $('.header').height($(window).height());
  })


var db = firebase.firestore();
const displayName = window.localStorage.getItem("displayName")
const roomId = window.localStorage.getItem("roomId")


const isAdmin = window.localStorage.getItem("isAdmin")

//var inGamePlayers = []
//var isPlayersReady = []
var goBack = false

document.getElementById("copyLink").addEventListener("click", function(){
    
    var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
})

// var target = 'https://playpjs.com';
// $.ajax({
// url: "https://api.linkpreview.net",
// dataType: 'jsonp',
// data: {q: target, key: aaa39639b82a7de79e29a8bb7dd70dae},
// success: function (response) {
// console.log(response);
// }
// });



//add a thing for actually getting the identity
// button listener for ready
//console.log("goes before on click")
document.getElementById("submit").addEventListener("click", function() {
    //console.log("is in on click")

    const selection = document.getElementById("identity").value


    db.collection("rooms").doc(roomId).collection("players").doc(displayName).set({
        isEliminated: false,
        isReady: true,
        selection: selection
        }, {merge: true}).then(function(){
            window.localStorage.setItem("selection", selection)
            window.location.href = "waiting.html"
    })
})


// // button listener for start game
// document.getElementById("start").addEventListener("click", function() {
//     var numPlayersReady = 0
//     for(i = 0; i < isPlayersReady.length; i++){
//         if(isPlayersReady[i] == true)
//             numPlayersReady++
//     }
//     if(numPlayersReady == inGamePlayers.length){
//         db.collection("rooms").doc(roomId).set({
//         numPlayersRemaining: inGamePlayers.length,
//         hasBegun: true,
//         }, {merge: true})
//     }
//     else{
//         alert("Everyone is not ready.")
//     }
// })

//lets player go back to starting page
// document.getElementById("back").addEventListener("click", function(){
//     db.collection("rooms").doc(roomId).set({
//         goBack: true,
//     }, {merge: true})

//     db.collection("rooms").doc(roomId).collection("players").doc(displayName).delete().then(function(){
        
//         window.location.href = "index.html"
//         })
// })



// //start game listener
// var startGameListener = db.collection("rooms").doc(roomId).onSnapshot({
//     includeMetadataChanges: false
// }, function(room_document) {

//             const selection = document.getElementById("identity").value
//             //if (room_document.data().hasBegun) {
//             db.collection("rooms").doc(roomId).collection("players").doc(displayName).set({
//                 selection: selection
//             }).then(function() {
//                 window.localStorage.setItem("selection", selection)
//                 //window.location.href = 'waiting.html'
//                 startGameListener()
//             })
            
//             //}
//             // else {
//             //     return false
//             // }
        
// })