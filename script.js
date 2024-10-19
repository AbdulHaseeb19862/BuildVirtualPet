const animal = {
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

while (!animal.name) {
  animal.name = prompt("Enter the pet name");
}

while (!animal.type) {
  animal.type = prompt("What kind of pet is it ? (e.g: dog,cat,dragon");
}

while (!animal.age) {
  animal.age = +prompt("How old is your pet ?");
}

while (!animal.happiness) {
  animal.happiness = +prompt("How happy is your pet ?");
}

while (!animal.hunger) {
  animal.hunger = +prompt("How hungry is your pet ?");
}
