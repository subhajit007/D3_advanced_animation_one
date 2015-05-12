function setRandom(){
   var circle = d3.selectAll('circle').style('fill', function(){
       return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
   }).attr('r','30');
   circle.transition().duration(2000).ease('linear').attr('cx', function(){
       return Math.random() * 1020;
   }).attr('cy', function(){
       return Math.random() * 720;
   }).attr('r', function(){
       return Math.random() * 380;
   }).style('fill', function(){
       return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
   }).each('end', setRandom);
}
setRandom();
