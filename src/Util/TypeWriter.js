const TypeWriter = function(wait = 3000) {
  this.words = ['front-end', 'back-end', 'fullstack'];
  this.wordIndex = 0;
  this.txt = '';
  this.speed = 300;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

TypeWriter.prototype.getSpeed = function() {
  return this.speed;
}

TypeWriter.prototype.getText = function() {
  return this.txt;
}

TypeWriter.prototype.type = function() {
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  if (this.isDeleting) {
    this.speed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    this.speed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.wordIndex++;
    this.speed = 300;
  }
  
  setTimeout(() => this.type(), this.speed);
}

export default TypeWriter;
