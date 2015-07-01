var stPlaynum = 0;
var joPlaynum = 0;
var kePlaynum = 0;
var esPlaynum = 0;
var guPlaynum = 0;
var rePlaynum = 0;
var ciPlaynum = 0;
var mrPlaynum = 0;
var paPlaynum = 0;
var goPlaynum = 0;
var wiPlaynum = 0;
console.log("I made playnum equal "+playnum);
var playnum = 0; // delete after everyone has one


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

   var request = gapi.client.youtube.search.list({ // search 12 for wisecrack
    part: 'snippet', 
    channelId: 'UC6-ymYjG0SU0jUWnWh9ZzEQ' ,  // wisecrack
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponsewisecrack);

}


// Called automatically with the response of the YouTube API request.
function onSearchResponsestucky(response) { // stuckman

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(stPlaynum > 0){
    do {
      stPlaynum --;
      console.log("stPlaynum countdown "+stPlaynum);
      renum = stPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("stuckyplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(stPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("stcol").className = document.getElementById("stcol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )


    // I'm going to add up to three players
    document.getElementById("nostuckytitle").innerHTML = "<h2></h2>";   
    document.getElementById("stuckytitle").innerHTML = "<h2>Stuckman results</h2>";
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;
      var para = document.createElement("div");  
      para.setAttribute("id", "stuckyplayer"+vnumber);
      document.getElementById("stDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  
      player = new YT.Player('stuckyplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      stPlaynum++;
      console.log("stPlaynum in the add loop "+stPlaynum);
      document.getElementById("stuckyplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("nostuckytitle").innerHTML = "<h2>No results From Stuckman</h2>";   
      document.getElementById("stuckytitle").innerHTML = "<h2></h2>";

      document.getElementById("stcol").className += " empty";
     // document.getElementById("stcol").style.cssText +=';'+ "width: 0%; height: 0%; padding: 0px; min-height: 0px; min-width: 0px;  border: 0px;";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseJoe(response) { // a joe

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(joPlaynum > 0){
    do {
      joPlaynum --;
      console.log("joPlaynum countdown "+joPlaynum);
      renum = joPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("joeyplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(joPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("jocol").className = document.getElementById("jocol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )


    // I'm going to add up to three players
    document.getElementById("nojoeytitle").innerHTML = "<h2></h2>";   
    document.getElementById("joeytitle").innerHTML = "<h2>Joe results</h2>";
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;
      var para = document.createElement("div");  
      para.setAttribute("id", "joeyplayer"+vnumber);
      document.getElementById("joDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  
      player = new YT.Player('joeyplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      joPlaynum++;
      console.log("joPlaynum in the add loop "+joPlaynum);
      document.getElementById("joeyplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("nojoeytitle").innerHTML = "<h2>No results From Joe </h2>"; 
      document.getElementById("joeytitle").innerHTML = "<h2></h2>";  

      document.getElementById("jocol").className += " empty";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseKermode(response) { // kermode 
  
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(kePlaynum > 0){
    do {
      kePlaynum --;
      console.log("kePlaynum countdown "+kePlaynum);
      renum = kePlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("kermodeplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(kePlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("kecol").className = document.getElementById("kecol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )

    // I'm going to add up to three players
    document.getElementById("nokermodetitle").innerHTML = "<h2></h2>";   
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

      kePlaynum++;
      console.log("kePlaynum in the add loop "+kePlaynum);
      document.getElementById("kermodeplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("nokermodetitle").innerHTML = "<h2>No results From kermode</h2>";   
      document.getElementById("kermodetitle").innerHTML = "<h2></h2>";
      document.getElementById("kecol").className += " empty";
  } 
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseEscapist(response) { // the escapist

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(esPlaynum > 0){
    do {
      esPlaynum --;
      console.log("esPlaynum countdown "+esPlaynum);
      renum = esPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("escapistplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(esPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("escol").className = document.getElementById("escol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )

    // I'm going to add up to three players
    document.getElementById("noescapisttitle").innerHTML = "<h2></h2>";   
    document.getElementById("escapisttitle").innerHTML = "<h2>escapist results</h2>";
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

      esPlaynum++;
      console.log("esPlaynum in the add loop "+esPlaynum);
      document.getElementById("escapistplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("noescapisttitle").innerHTML = "<h2>No results From escapist</h2>";   
      document.getElementById("escapisttitle").innerHTML = "<h2></h2>";

      document.getElementById("escol").className += " empty";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseGuardian(response) { // the Guardian

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(guPlaynum > 0){
    do {
      guPlaynum --;
      console.log("guPlaynum countdown "+guPlaynum);
      renum = guPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("guardianplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(guPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("gucol").className = document.getElementById("gucol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )


    // I'm going to add up to three players
    document.getElementById("noguardiantitle").innerHTML = "<h2></h2>";   
    document.getElementById("guardiantitle").innerHTML = "<h2>guardian results</h2>";
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

      guPlaynum++;
      console.log("guPlaynum in the add loop "+guPlaynum);
      document.getElementById("guardianplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("noguardiantitle").innerHTML = "<h2>No results From guardian</h2>";   
      document.getElementById("guardiantitle").innerHTML = "<h2></h2>";

      document.getElementById("gucol").className += " empty";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseRemaker(response) { // the remaker

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(rePlaynum > 0){
    do {
      rePlaynum --;
      console.log("rePlaynum countdown "+rePlaynum);
      renum = rePlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("remakerplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(rePlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("recol").className = document.getElementById("recol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )


    // I'm going to add up to three players
    document.getElementById("noremakertitle").innerHTML = "<h2></h2>";   
    document.getElementById("remakertitle").innerHTML = "<h2>remaker results</h2>";
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

      rePlaynum++;
      console.log("rePlaynum in the add loop "+rePlaynum);
      document.getElementById("remakerplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("noremakertitle").innerHTML = "<h2>No results From remaker</h2>";  
      document.getElementById("remakertitle").innerHTML = "<h2></h2>"; 

      document.getElementById("recol").className += " empty";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseCinefix(response) { // Cinefix

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(ciPlaynum > 0){
    do {
      ciPlaynum --;
      console.log("ciPlaynum countdown "+ciPlaynum);
      renum = ciPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("cinefixplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(ciPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("cicol").className = document.getElementById("cicol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )

    // I'm going to add up to three players
    document.getElementById("nocinefixtitle").innerHTML = "<h2></h2>";   
    document.getElementById("cinefixtitle").innerHTML = "<h2>cinefix results</h2>";
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

      ciPlaynum++;
      console.log("ciPlaynum in the add loop "+ciPlaynum);
      document.getElementById("cinefixplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("nocinefixtitle").innerHTML = "<h2>No results From cinefix</h2>";   
      document.getElementById("cinefixtitle").innerHTML = "<h2></h2>";

      document.getElementById("cicol").className += " empty";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseMrSundayMovies(response) { // MrSunday

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(mrPlaynum > 0){
    do {
      mrPlaynum --;
      console.log("mrPlaynum countdown "+mrPlaynum);
      renum = mrPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("mrsundayplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(mrPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("mrcol").className = document.getElementById("mrcol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )

    // I'm going to add up to three players
    document.getElementById("nomrsundaytitle").innerHTML = "<h2></h2>";   
    document.getElementById("mrsundaytitle").innerHTML = "<h2>mrsunday results</h2>";
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

      mrPlaynum++;
      console.log("mrPlaynum in the add loop "+mrPlaynum);
      document.getElementById("mrsundayplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("nomrsundaytitle").innerHTML = "<h2>No results From mrsunday</h2>";   
      document.getElementById("mrsundaytitle").innerHTML = "<h2></h2>";

      document.getElementById("mrcol").className += " empty";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponsePainting(response) { // Painting

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(paPlaynum > 0){
    do {
      paPlaynum --;
      console.log("paPlaynum countdown "+paPlaynum);
      renum = paPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("paintingplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(paPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("pacol").className = document.getElementById("pacol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )

    // I'm going to add up to three players
    document.getElementById("nopaintingtitle").innerHTML = "<h2></h2>";   
    document.getElementById("paintingtitle").innerHTML = "<h2>painting results</h2>";
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

      paPlaynum++;
      console.log("paPlaynum in the add loop "+paPlaynum);
      document.getElementById("paintingplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("nopaintingtitle").innerHTML = "<h2>No results From painting</h2>";
      document.getElementById("paintingtitle").innerHTML = "<h2></h2>";   

      document.getElementById("pacol").className += " empty";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseGoodBadFlicks(response) { // the goodbad

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(goPlaynum > 0){
    do {
      goPlaynum --;
      console.log("goPlaynum countdown "+goPlaynum);
      renum = goPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("goodbadplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(goPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("gocol").className = document.getElementById("gocol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )

    // I'm going to add up to three players
    document.getElementById("nogoodbadtitle").innerHTML = "<h2></h2>";   
    document.getElementById("goodbadtitle").innerHTML = "<h2>goodbad results</h2>";
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

      goPlaynum++;
      console.log("goPlaynum in the add loop "+goPlaynum);
      document.getElementById("goodbadplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("nogoodbadtitle").innerHTML = "<h2>No results From goodbad</h2>";   
      document.getElementById("goodbadtitle").innerHTML = "<h2></h2>";

      document.getElementById("gocol").className += " empty";
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponsewisecrack(response) { //  wisecrack

  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  if(vnumber > capnum){
    vnumber = capnum;
  }

  if(wiPlaynum > 0){
    do {
      wiPlaynum --;
      console.log("wiPlaynum countdown "+wiPlaynum);
      renum = wiPlaynum +1;
      console.log("renum countdown "+renum);
      var element = document.getElementById("wisecrackplayer"+renum);   // need to make it remove all the players
      element.parentNode.removeChild(element); 
    }
    while(wiPlaynum > 0);
  }

  if(vnumber > 0){

    document.getElementById("wicol").className = document.getElementById("wicol").className.replace( /(?:^|\s)empty(?!\S)/g , '' )

    // I'm going to add up to three players
    document.getElementById("nowisecracktitle").innerHTML = "<h2></h2>";   
    document.getElementById("wisecracktitle").innerHTML = "<h2>wisecrack results</h2>";
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');

    do {
      var vindex = vnumber-1;
      var para = document.createElement("div");  
      para.setAttribute("id", "wisecrackplayer"+vnumber);
      document.getElementById("wiDIV").appendChild(para);

      //Make the up to five vids        
      vid = response.items[vindex].id.videoId;  
      player = new YT.Player('wisecrackplayer'+vnumber, {
        height: 'auto',
        width: 'auto'
      });

      wiPlaynum++;
      console.log("wiPlaynum in the add loop "+wiPlaynum);
      document.getElementById("wisecrackplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
      //incement down the vnumber
      vnumber --;
    }
    while(vnumber > 0); // the cap number is more then none    
  }
  else{
      document.getElementById("nowisecracktitle").innerHTML = "<h2>No results From wisecrack</h2>";   
      document.getElementById("wisecracktitle").innerHTML = "<h2></h2>";

      document.getElementById("wicol").className += " empty";
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


