$(document).ready(function() {
  chrome.storage.sync.get(["webm"],function (obj){
    g = obj;

    if (g.webm){
      var pomf = new RegExp("http://[:A-Za-z0-9\.\/]+\\.webm");
               var counter = 0;
      var otherCounter =0;

      $("a").each(function(index, image){
        $this = $(image)
        var text = $this.attr("href");
        var ur85 = pomf.exec(text);
        
        if (pomf.test(text)){
          if (ur85[0] != 'http://www.webm'){
            console.log(ur85[0])
            var sth = '<video autoplay loop width="500" muted="true" controls> <source src="'+ur85[0]+'" type="video/webm"> </video>'
            $this.replaceWith(sth)
          };
        }

      });
    };
  });
});


