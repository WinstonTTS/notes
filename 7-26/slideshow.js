const slideshow = {
  photoList: ['beach.jpg', 'house.png', 'dog.jpeg', 'superman.jpeg'],
  currentPhotoIndex: 0,
  nextPhoto: function() {
    if (this.currentPhotoIndex < this.photoList.length - 1) {
      this.currentPhotoIndex += 1

      console.log(this.getCurrentPhoto())
    } else {
      console.log('End of slideshow')
    }
  },
  prevPhoto: function() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex -= 1

      console.log(this.getCurrentPhoto())
    } else {
      console.log('End of slideshow')
    }
  },
  getCurrentPhoto: function() {
    return this.photoList[this.currentPhotoIndex]
  }
}

