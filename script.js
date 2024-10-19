const animal = {
  name: "",
  type: "",
  age: "",
  happiness: "",
  hunger: "",

  feed: function () {
    if (this.hunger > 0) {
      this.hunger = this.hunger - 20;
      if (this.hunger < 0) {
        this.hunger = 0;
      }

      alert(`${this.name} has been fed. Hunger is now: ${this.hunger}`);
    } else {
      alert(`${this.name} is not hungry`);
    }
  },

  play: function () {
    if (this.happiness < 100) {
      this.happiness += 20;
      if (this.happiness > 100) {
        this.happiness = 100;
      }
      alert(
        `${this.name} played and is happy! Happy is now: ${this.happiness}`
      );
    } else {
      alert(`${this.name} is already happy!`);
    }
  },

  agePet: function () {
    this.age += 1;
    if (this.happiness > 0) {
      this.happiness = this.happiness - 5;
      if (this.happiness < 0) {
        this.happiness = 0;
      }
    }

    if (this.hunger < 100) {
      this.hunger = this.hunger + 10;
      if (this.hunger > 100) {
        this.hunger = 100;
      }
    }
    alert(
      `${this.name} age is now : ${this.age}, the happiness level is ${this.happiness} and the hunger level is ${this.hunger}`
    );
  },
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

while (true) {
  let displayInfo = prompt(
    "(1) : Feed() \n (2) : Play() \n (3) : AgePet() \n Type 'exit' "
  );

  if (displayInfo.toLowerCase() === "exit") {
    alert(`Goodbye! Thanks for taking care of ${animal.name}`);
    break;
  }

  if (displayInfo === "1") {
    animal.feed();
  }

  if (displayInfo === "2") {
    animal.play();
  }

  if (displayInfo === "3") {
    animal.agePet();
  }
}
