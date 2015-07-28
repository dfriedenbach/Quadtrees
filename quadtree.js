var Quadtree = function(x, y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new Error('You must supply coordinate to the initial node!');
  }
  this.coordinates = [x, y];
  this.x = x;
  this.y = y;
  this.children = {
    topRight: null,
    topLeft: null,
    bottomLeft: null,
    bottomRight: null
  }
}

Quadtree.prototype.add = function(x, y){
  if(y >= this.y) {
    if (x >= this.x) {
      if (this.children.topRight) {
        this.children.topRight.add(x, y);
      } else {
        this.children.topRight = new Quadtree(x, y);
      }
    } else {
      if (this.children.topLeft) {
        this.children.topLeft.add(x, y);
      } else {
        this.children.topLeft = new Quadtree(x, y);
      }
    }
  } else {
    if (x >= this.x) {
      if (this.children.bottomRight) {
        this.children.bottomRight.add(x, y);
      } else {
        this.children.bottomRight = new Quadtree(x, y);
      }
    } else {
      if (this.children.bottomLeft) {
        this.children.bottomLeft.add(x, y);
      } else {
        this.children.bottomLeft = new Quadtree(x, y);
      }
    }
  }
}

Quadtree.prototype.find = function(x, y){
  if(y === this.y && x === this.x) {
    return this;
  }
  if(y >= this.y) {
    if (x >= this.x) {
      if (this.children.topRight) {
        return this.children.topRight.find(x, y);
      } else {
        return null;
      }
    } else {
      if (this.children.topLeft) {
        return this.children.topLeft.find(x, y);
      } else {
        return null;
      }
    }
  } else {
    if (x >= this.x) {
      if (this.children.bottomRight) {
        return this.children.bottomRight.find(x, y);
      } else {
        return null;
      }
    } else {
      if (this.children.bottomLeft) {
        return this.children.bottomLeft.find(x, y);
      } else {
        return null;
      }
    }
  }
}

Quadtree.prototype.findInRange = function(topRight, topLeft, bottomLeft, bottomRight){
  /* Returns a list of nodes with coordinates within the input rectangle */

}

/* ---EXTRA CREDIT--- */
Quadtree.prototype.remove = function(x, y){
  /* Removes the node with the given coordinates */

}
