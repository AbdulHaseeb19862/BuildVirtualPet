const Animal = {
  name: "",
  type: "",
  age: "",
  happiness: 50,
  hunger: 50,

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

while (true) {
  let displayInfo = prompt(
    "Now you can get my pet details: \n(1): Age \n(2): Type \n(3): Name  \n(4):  Happiness \n(5): Hunger \nType 'exit' to stop"
  );

  if (displayInfo.toLowerCase() === "exit") {
    break;
  }

  // Handle Age
  if (displayInfo === "1") {
    if (Animal.age === "") {
      Animal.age = prompt("Enter the age of your pet:");
    }
    alert(`My pet's age is ${Animal.age}`);
  }

  if (displayInfo === "2") {
    if (Animal.type === "") {
      Animal.type = prompt("Enter the age of your pet:");
    }
    alert(`My pet's type is ${Animal.type}`);
  }

  if (displayInfo === "3") {
    if (Animal.name === "") {
      Animal.name = prompt("Enter the age of your pet:");
    }
    alert(`My pet's name is ${Animal.name}`);
  }

  // Handle Happiness
  else if (displayInfo === "happiness") {
    alert(`My pet's happiness level is ${Animal.happiness}`);
  }

  // Handle Hunger
  else if (displayInfo === "hunger") {
    alert(`My pet's hunger level is ${Animal.hunger}`);
  }

  // Invalid input handling
  else {
    alert(
      "Please enter a valid option (Age, Happiness, Hunger, or 'exit' to stop)."
    );
  }
}
