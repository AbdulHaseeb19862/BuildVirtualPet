const Animal = {
  name: "",
  type: "",
  age: "",
  happiness: "",
  hunger: "",

  feed: function () {
    if (this.hunger > 0) {
      this.hunger = this.hunger - 20;
      console.log("The Value of the hunger is: " + this.hunger);
    } else {
      alert("The hunger value can't go below zero.");
    }
  },

  play: function () {
    if (this.happiness < 100) {
      this.happiness += 20;
      alert("The happiness level after playing: " + this.happiness);
    }
  },

  agePet: function () {},
};
