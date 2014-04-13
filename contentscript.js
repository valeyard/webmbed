
$(document).ready(function() {
  chrome.storage.sync.get(["webm"],function (obj){
    g = obj;

    if (g.webm){
      var pomf = new RegExp("http://[:A-Za-z0-9\.\/]+\.webm");
               var counter = 0;
      var otherCounter =0;
      $("a").each(function(index, image){
        $this = $(image)
        var text = $this.attr("href");
        var ur85 = pomf.exec(text);

        

        var twit = new RegExp("https://twitter.com/[:A-Za-z0-9\.\/]+/status/[0-9]+");
        var twitUrl = twit.exec(text);

        
        if (pomf.test(text)){
          console.log(ur85[0])
          var sth = '<video autoplay loop width="500" muted="true" controls> <source src="'+ur85[0]+'" type="video/webm"> </video>'
          $this.replaceWith(sth)
        }
        else if(twit.test(text)){
          console.log("found docevilstweet")
          $this.wrap('<div id="tweet' + otherCounter + '">')
            console.log($this[0])
          $.ajax({
            url: "https://api.twitter.com/1/statuses/oembed.json?url="+twitUrl[0],

            success: function(data){
                console.log(data.html) 
                $this.empty()
                console.log($this)
                console.log('#tweet' + counter)
                $('#tweet' + counter).html(data.html);
                counter++;
            }
        });
          otherCounter++;
        }
      });
    }




  });
});


