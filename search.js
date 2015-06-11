// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
 
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString; // can remove safely
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
 
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
 
    gapi.client.setApiKey('AIzaSyAIorEJxO3GGHDQt_LZTv142xiVWlMqs-E');
}

function verifyorder() {
 
  var order = document.getElementById('value').value;

  var request = gapi.client.youtube.search.list({  // search 1 for stuckman
    part: 'snippet', 
    channelId: 'UCCqEeDAUf4Mg0GgEN658tkA' ,  // stuckman
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponsestucky);

  var request = gapi.client.youtube.search.list({ // search 2 for joe
    part: 'snippet', 
    channelId: 'UCsgv2QHkT2ljEixyulzOnUQ' ,  // JOE
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseJoe);


  var request = gapi.client.youtube.search.list({ // search 3 for kermode and mayo
    part: 'snippet', 
    channelId: 'UCCxKPNMqjnqbxVEt1tyDUsA' ,  // kermode and mayo
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseKermode); 

  var request = gapi.client.youtube.search.list({ // search 4 for the escapist
    part: 'snippet', 
    channelId: 'UCADQiLMJMO3HUMvePgscTMg' ,  // the escapist
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseEscapist);



  var request = gapi.client.youtube.search.list({ // search 5 for the remaker
    part: 'snippet', 
    channelId: 'UC1Ra1PtRYMwv2DO7DfXA9Tw' ,  // the remaker
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseRemaker);

  var request = gapi.client.youtube.search.list({ // search 6 for the cinefix
    part: 'snippet', 
    channelId: 'UCVtL1edhT8qqY-j2JIndMzg' ,  // the cinefix
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseCinefix);

  var request = gapi.client.youtube.search.list({ // search 8 for every frame a painting
    part: 'snippet', 
    channelId: 'UCjFqcJQXGZ6T6sxyFB-5i6A' ,  // every frame a painting
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponsePainting);

  var request = gapi.client.youtube.search.list({ // search 9 for good bad flicks
    part: 'snippet', 
    channelId: 'UCtKttDTGqEbBrC7jDN2_axQ' ,  // good bad flicks
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseGoodBadFlicks);

  var request = gapi.client.youtube.search.list({ // search 10 for mr Sunday movies 
    part: 'snippet', 
    channelId: 'UCkDSAQ_5-yx5hmuvUcsJL7A' ,  // mr Sunday movies 
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseMrSundayMovies);

  var request = gapi.client.youtube.search.list({ // search 11 for the guardian film show
    part: 'snippet', 
    channelId: 'UC4OxS-w63-g00lI7nGkzpcw' ,  // the guardian film show
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseGuardian);

}

// the remaker UC1Ra1PtRYMwv2DO7DfXA9Tw
// cinefix UCVtL1edhT8qqY-j2JIndMzg
// couch tomato UCOZcxtwy_YYe7KKky8DCLGQ
// every frame a painting UCjFqcJQXGZ6T6sxyFB-5i6A
// good bad flicks UCtKttDTGqEbBrC7jDN2_axQ
// mr Sunday movies UCkDSAQ_5-yx5hmuvUcsJL7A
// the guardian film show UC4OxS-w63-g00lI7nGkzpcw

// Called automatically with the response of the YouTube API request.
function onSearchResponsestucky(response) { // stuckman

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }
  if(vnumber > 0){
    document.getElementById("stuckytitle").innerHTML = "<h2>Stuckman results</h2>";
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "stuckytplayer"+vnumber);
      document.getElementById("stDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  
      player = new YT.Player('stuckytplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });



      // var para = document.createElement("div");
      // var t = document.createTextNode("This is a paragraph.");
      // para.appendChild(t);
      // document.getElementById("stuckytitle").appendChild(para);
      //document.getElementById("myDIV").setAttribute("id", "recursive");



      document.getElementById("stuckytplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }

  else{


      var element = document.getElementById("stuckytplayer1");   // need to make it remove all the players
      element.parentNode.removeChild(element);    
      var element = document.getElementById("stuckytplayer2");   // need to make it remove all the players
      element.parentNode.removeChild(element);    
      var element = document.getElementById("stuckytplayer3");   // need to make it remove all the players
      element.parentNode.removeChild(element);   
      

      document.getElementById("stuckytitle").innerHTML = "<h2>No results From Stuckman</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseJoe(response) { // a joe

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(vnumber > 0){
    document.getElementById("joeytitle").innerHTML = "<h2>Joe results</h2>";  
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "joeytplayer"+vnumber);
      document.getElementById("joDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('joeytplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("joeytplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }

  else{

    var element = document.getElementById("joeytplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("joeytplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("joeytplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    document.getElementById("joeytitle").innerHTML = "<h2>No results from Angry Joe</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseKermode(response) { // kermode 

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;  

  if(vnumber > capnum){
    vnumber = capnum;
  }
  
 if(vnumber > 0){
   document.getElementById("kermodetitle").innerHTML = "<h2>kermode results</h2>";  
   var str = JSON.stringify(response.result);
   $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;
      
      var para = document.createElement("div");  
      para.setAttribute("id", "kermodeplayer"+vnumber);
      document.getElementById("keDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('kermodeplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("kermodeplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }

  else{

    var element = document.getElementById("kermodeplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("kermodeplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("kermodeplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);  

    document.getElementById("kermodetitle").innerHTML = "<h2>No results from kermode</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseEscapist(response) { // the escapist

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

  if(vnumber > capnum){
    vnumber = capnum;
  }

  
  if(vnumber > 0){

    document.getElementById("escapisttitle").innerHTML = "<h2>The Escapist results</h2>";  
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "escapistplayer"+vnumber);
      document.getElementById("esDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('escapistplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("escapistplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
    }

  else{

    var element = document.getElementById("escapistplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("escapistplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("escapistplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);  

    document.getElementById("escapisttitle").innerHTML = "<h2>No results from the escapist</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseGuardian(response) { // the Guardian

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;

  if(vnumber > capnum){
    vnumber = capnum;
  }

  
  if(vnumber > 0){

    document.getElementById("guardiantitle").innerHTML = "<h2>The Guardian results</h2>";  
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "guardianplayer"+vnumber);
      document.getElementById("guDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('guardianplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("guardianplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }

  else{

    var element = document.getElementById("guardianplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("guardianplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("guardianplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);  

    document.getElementById("guardiantitle").innerHTML = "<h2>No results from the guardian</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseRemaker(response) { // the remaker

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults; 

  if(vnumber > capnum){
    vnumber = capnum;
  }

  
  if(vnumber > 0){

    document.getElementById("remakertitle").innerHTML = "<h2>The Remaker results</h2>";  
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "remakerplayer"+vnumber);
      document.getElementById("reDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('remakerplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("remakerplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }

  else{

    var element = document.getElementById("remakerplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("remakerplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("remakerplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);  

    document.getElementById("remakertitle").innerHTML = "<h2>No results from the remaker</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseCinefix(response) { // Cinefix

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

  if(vnumber > capnum){
    vnumber = capnum;
  }
  
  if(vnumber > 0){

    document.getElementById("cinefixtitle").innerHTML = "<h2>Cinefix results</h2>";  
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "cinefixplayer"+vnumber);
      document.getElementById("ciDIV").appendChild(para);


      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('cinefixplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("cinefixplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }

  else{

    var element = document.getElementById("cinefixplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("cinefixplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("cinefixplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);  

    document.getElementById("cinefixtitle").innerHTML = "<h2>No results from Cinefix</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseMrSundayMovies(response) { // MrSunday

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;  

  if(vnumber > capnum){
    vnumber = capnum;
  }
  
  if(vnumber > 0){

    document.getElementById("mrsundaytitle").innerHTML = "<h2>MrSunday results</h2>";  
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "mrsundayplayer"+vnumber);
      document.getElementById("mrDIV").appendChild(para);


      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('mrsundayplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("mrsundayplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }

  else{

    var element = document.getElementById("mrsundayplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("mrsundayplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("mrsundayplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);  

    document.getElementById("mrsundaytitle").innerHTML = "<h2>No results from the MrSunday</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponsePainting(response) { // Painting

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;  

  if(vnumber > capnum){
    vnumber = capnum;
  }
  
  if(vnumber > 0){

    document.getElementById("paintingtitle").innerHTML = "<h2>Painting results</h2>"; 
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "paintingplayer"+vnumber);
      document.getElementById("paDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('paintingplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("paintingplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }

    while(vnumber > 0); // the cap number is more then none    
  }
  else{

    var element = document.getElementById("paintingplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("paintingplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("paintingplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);  

    document.getElementById("paintingtitle").innerHTML = "<h2>No results from Painting</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseGoodBadFlicks(response) { // the goodbad

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;  

  if(vnumber > capnum){
    vnumber = capnum;
  }
  
  if(vnumber > 0){

    document.getElementById("goodbadtitle").innerHTML = "<h2>GoodBadFlicks results</h2>"; 
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;

      var para = document.createElement("div");  
      para.setAttribute("id", "goodbadplayer"+vnumber);
      document.getElementById("goDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  

      player = new YT.Player('goodbadplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      document.getElementById("goodbadplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }

  else{

    var element = document.getElementById("goodbadplayer1");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("goodbadplayer2");   // need to make it remove all the players
    element.parentNode.removeChild(element);    

    var element = document.getElementById("goodbadplayer3");   // need to make it remove all the players
    element.parentNode.removeChild(element);  
    
    document.getElementById("goodbadtitle").innerHTML = "<h2>No results from GoodBadFlicks</h2>";   
  }
}

var capnum = 3;   // a cap on results delt with
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;


