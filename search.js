// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
 
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString; // can remove safely
    console.log("Show response "+response);
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
 
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    console.log("On client Load ");
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
 
    gapi.client.setApiKey('AIzaSyAIorEJxO3GGHDQt_LZTv142xiVWlMqs-E');
    console.log("You tube api laod ");
}

function verifyorder(){
 
  console.log("verify order is "+order);
  var order = document.getElementById('value').value;
  console.log(order);

  var request = gapi.client.youtube.search.list({  // search 1 for stuckman
    part: 'snippet', 
    channelId: 'UCCqEeDAUf4Mg0GgEN658tkA' ,  // stuckman
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponsestucky);
  console.log("request.execute + order stuckman "+order);


  var request = gapi.client.youtube.search.list({ // search 2 for joe
    part: 'snippet', 
    channelId: 'UCsgv2QHkT2ljEixyulzOnUQ' ,  // JOE
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseJoe);
  console.log("request.execute + order joe "+order);

  var request = gapi.client.youtube.search.list({ // search 3 for kermode and mayo
    part: 'snippet', 
    channelId: 'UCCxKPNMqjnqbxVEt1tyDUsA' ,  // kermode and mayo
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseKermode);
  console.log("request.execute + order kermode "+order);

  var request = gapi.client.youtube.search.list({ // search 4 for the escapist
    part: 'snippet', 
    channelId: 'UCADQiLMJMO3HUMvePgscTMg' ,  // the escapist
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseEscapist);
  console.log("request.execute + order escapist "+order);


  var request = gapi.client.youtube.search.list({ // search 5 for the remaker
    part: 'snippet', 
    channelId: 'UC1Ra1PtRYMwv2DO7DfXA9Tw' ,  // the remaker
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseRemaker);
  console.log("request.execute + order remaker "+order);


  var request = gapi.client.youtube.search.list({ // search 6 for the cinefix
    part: 'snippet', 
    channelId: 'UCVtL1edhT8qqY-j2JIndMzg' ,  // the cinefix
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseCinefix);
  console.log("request.execute + order cinefix "+order);

  // var request = gapi.client.youtube.search.list({ // search 7 for couch tomato
  //   part: 'snippet', 
  //   channelId: 'UCOZcxtwy_YYe7KKky8DCLGQ' ,  // couch tomato
  //   q: order ,
  //   maxResults: 3
  // });
  // // Send the request to the API server,
  // // and invoke onSearchRepsonse() with the response.
  // request.execute(onSearchResponseTomato);
  // console.log("request.execute + order tomato "+order);

  var request = gapi.client.youtube.search.list({ // search 8 for every frame a painting
    part: 'snippet', 
    channelId: 'UCjFqcJQXGZ6T6sxyFB-5i6A' ,  // couch tomato
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponsePainting);
  console.log("request.execute + order painting "+order);

  var request = gapi.client.youtube.search.list({ // search 9 for good bad flicks
    part: 'snippet', 
    channelId: 'UCtKttDTGqEbBrC7jDN2_axQ' ,  // good bad flicks
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseGoodBadFlicks);
  console.log("request.execute + order GoodBadFlicks "+order);

  var request = gapi.client.youtube.search.list({ // search 10 for mr Sunday movies 
    part: 'snippet', 
    channelId: 'UCkDSAQ_5-yx5hmuvUcsJL7A' ,  // mr Sunday movies 
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseMrSundayMovies);
  console.log("request.execute + order mr Sunday movies  "+order);


  var request = gapi.client.youtube.search.list({ // search 11 for the guardian film show
    part: 'snippet', 
    channelId: 'UC4OxS-w63-g00lI7nGkzpcw' ,  // the guardian film show
    q: order ,
    maxResults: 3
  });
  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponseGuardian);
  console.log("request.execute + order the guardian film show  "+order);


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

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("stucky total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("stuckytitle").innerHTML = "<h2>Stuckman results</h2>"  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
        //Make the up to five vids        
        vid = response.items[vindex].id.videoId;  

        player = new YT.Player('stuckytplayer'+vnumber, {
          height: 'auto',
          width: 'auto'
        });

        document.getElementById("stuckytplayer"+vnumber).src = "https://www.youtube.com/embed/"+vid;
        //incement down the vnumber
        vnumber --;
      }

      while(vnumber > 0); // the cap number is more then none    
    }

  else{

    var element = document.getElementById("stuckbrik");
    element.parentNode.removeChild(element);      
    // document.getElementById("stuckytplayer1").src = "";   // clear out
    // document.getElementById("stuckytplayer2").src = "";
    // document.getElementById("stuckytplayer3").src = "";

    console.log("no results");
    document.getElementById("stuckytitle").innerHTML = "<h2>No results From Stuckman</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseJoe(response) { // a joe

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("Joe total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("joeytitle").innerHTML = "<h2>Joe results</h2>";  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("joeytplayer1").src = "";   // clear out
    document.getElementById("joeytplayer2").src = "";
    document.getElementById("joeytplayer3").src = "";

    console.log("no results");
    document.getElementById("joeytitle").innerHTML = "<h2>No results from Angry Joe</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseKermode(response) { // kermode 

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("Kermode total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("kermodetitle").innerHTML = "<h2>kermode results</h2>";  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("kermodeplayer1").src = "";   // clear out
    document.getElementById("kermodeplayer2").src = "";
    document.getElementById("kermodeplayer3").src = "";

    console.log("no results");
    document.getElementById("kermodetitle").innerHTML = "<h2>No results from kermode</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseEscapist(response) { // the escapist

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("Escapist total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("escapisttitle").innerHTML = "<h2>The Escapist results</h2>";  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("escapistplayer1").src = "";   // clear out
    document.getElementById("escapistplayer2").src = "";
    document.getElementById("escapistplayer3").src = "";

    console.log("no results");
    document.getElementById("escapisttitle").innerHTML = "<h2>No results from the escapist</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseGuardian(response) { // the escapist

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("Guardian total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("guardiantitle").innerHTML = "<h2>The Guardian results</h2>";  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("guardianplayer1").src = "";   // clear out
    document.getElementById("guardianplayer2").src = "";
    document.getElementById("guardianplayer3").src = "";

    console.log("no results");
    document.getElementById("guardiantitle").innerHTML = "<h2>No results from the guardian</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseRemaker(response) { // the escapist

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("Remaker total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("remakertitle").innerHTML = "<h2>The Remaker results</h2>";  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("remakerplayer1").src = "";   // clear out
    document.getElementById("remakerplayer2").src = "";
    document.getElementById("remakerplayer3").src = "";

    console.log("no results");
    document.getElementById("remakertitle").innerHTML = "<h2>No results from the remaker</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseCinefix(response) { // the escapist

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("Cinefix total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("cinefixtitle").innerHTML = "<h2>Cinefix results</h2>";  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("cinefixplayer1").src = "";   // clear out
    document.getElementById("cinefixplayer2").src = "";
    document.getElementById("cinefixplayer3").src = "";

    console.log("no results");
    document.getElementById("cinefixtitle").innerHTML = "<h2>No results from Cinefix</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseMrSundayMovies(response) { // the escapist

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("MrSunday total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("mrsundaytitle").innerHTML = "<h2>MrSunday results</h2>";  

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("mrsundayplayer1").src = "";   // clear out
    document.getElementById("mrsundayplayer2").src = "";
    document.getElementById("mrsundayplayer3").src = "";

    console.log("no results");
    document.getElementById("mrsundaytitle").innerHTML = "<h2>No results from the MrSunday</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponsePainting(response) { // the escapist

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("painting total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("paintingtitle").innerHTML = "<h2>Painting results</h2>"; 

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("paintingplayer1").src = "";   // clear out
    document.getElementById("paintingplayer2").src = "";
    document.getElementById("paintingplayer3").src = "";

    console.log("no results");
    document.getElementById("paintingtitle").innerHTML = "<h2>No results from Painting</h2>";   
  }
}

// Called automatically with the response of the YouTube API request.
function onSearchResponseGoodBadFlicks(response) { // the escapist

  console.log("on search response +response "+response);
  showResponse(response); 
  var vnumber = response.pageInfo.totalResults;
  

    if(vnumber > capnum){
      vnumber = capnum;
      console.log("I capped the results at "+capnum);
    }

    var pnumber = 2;
    console.log("GoodBadFlicks total results = vnumber "+vnumber);
  
    if(vnumber > 0){

      document.getElementById("goodbadtitle").innerHTML = "<h2>GoodBadFlicks results</h2>"; 

      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');

      do {
        var vindex = vnumber-1;
        console.log("do loop vindex - the index of the array being pulled "+vindex);
        console.log("do loop vnumber minus one "+vnumber);
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

    document.getElementById("goodbadplayer1").src = "";   // clear out
    document.getElementById("goodbadplayer2").src = "";
    document.getElementById("goodbadplayer3").src = "";

    console.log("no results");
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


