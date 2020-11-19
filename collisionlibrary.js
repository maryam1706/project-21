function createcollision(target1,target2){
    if (target1.x - target2.x < target2.width/2 + target1.width/2
      && target2.x - target1.x < target2.width/2 + target1.width/2
      && target1.y - target2.y < target2.height/2 + target1.height/2
      && target2.y - target1.y < target2.height/2 + target1.height/2) {
     
      return true
  }
  else {
      return false
  }
    }