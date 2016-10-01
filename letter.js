
function Letter(lets){
    this.charac = lets;
    this.appear = false;

    this.letterRender = function(charac){
        //console.log("Inside letterRender: "+this.charac);
      if(this.charac === false ){
        return "_";
      }else {
        
        return this.charac;
      }
    }
}

module.exports = Letter;