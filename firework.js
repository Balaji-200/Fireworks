function Firework() {
     this.hu=random(255);
     this.firework=new Sparkle(random(width),height,this.hu,false);
     this.exploded=false;
     this.brightnesss=255;
     this.particles=[];
     this.update=function () {
         if (!this.exploded){
             this.firework.force();
             this.firework.update();
         if(this.firework.velocity.y>=0){
             this.exploded=true;
             this.explode();
        }
    }
     for (let i = this.particles.length-1; i >=0; i--) {
         this.particles[i].force();
         this.particles[i].update();
         if(this.particles[i].lifespan<0){
             this.particles.splice(i,1);
        }
   }
}
     this.finished=function(){
         if(this.exploded && this.particles.length===0){
             return true;
         }
         else{
             return false;
         }
     }
     this.explode=function(){
      for(let i=0;i<100;i++){
        this.particles.push(new Sparkle(this.firework.pos.x,this.firework.pos.y,this.hu,true));
    }
}
     this.show=function () {

         if (!this.exploded) {
             this.firework.view();          
        }
         for (let i=0;i<this.particles.length; i++) {
             this.particles[i].view();
        }
    }
}