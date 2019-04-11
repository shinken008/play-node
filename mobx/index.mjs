// node mobx/index.mjs --experimental-modules

import mobx from 'mobx';

// var todos = mobx.observable([
//   { title: "Spoil tea", completed: true },
//   { title: "Make coffee", completed: false }
// ]);

// mobx.autorun(() => {
//   console.log("Remaining:", todos
//     .filter(todo => !todo.completed)
//     .map(todo => todo.title)
//     .join(", ")
//   );
// });
// // Prints: 'Remaining: Make coffee'

// todos[0].completed = false;
// // Prints: 'Remaining: Spoil tea, Make coffee'

// todos[2] = { title: 'Take a nap', completed: false };
// // Prints: 'Remaining: Spoil tea, Make coffee, Take a nap'

// todos.shift();
// // Prints: 'Remaining: Make coffee, Take a nap'

// const cityName = mobx.observable.box("Vienna");

// console.log(cityName.get());
// // prints 'Vienna'

// cityName.observe(function (change) {
//   console.log(change.oldValue, "->", change.newValue);
// });

// cityName.set("Amsterdam");
// // prints 'Vienna -> Amsterdam'

// actions

class Clock {
  constructor() {
    this.intervalHandler = null;
    this.currentDateTime;
    // creates an atom to interact with the MobX core algorithm
    this.atom = mobx.createAtom(
      // first param: a name for this atom, for debugging purposes
      "Clock",
      // second (optional) parameter: callback for when this atom transitions from unobserved to observed.
      () => this.startTicking(),
      // third (optional) parameter: callback for when this atom transitions from observed to unobserved
      // note that the same atom transitions multiple times between these two states
      () => this.stopTicking()
    );
  }

  getTime() {
    // let MobX know this observable data source has been used
    // reportObserved will return true if the atom is currently being observed
    // by some reaction.
    // reportObserved will also trigger the onBecomeObserved event handler (startTicking) if needed
    if (this.atom.reportObserved()) {
      return this.currentDateTime;
    } else {
      // apparently getTime was called but not while a reaction is running.
      // So, nobody depends on this value, hence the onBecomeObserved handler (startTicking) won't be fired
      // Depending on the nature of your atom
      // it might behave differently in such circumstances
      // (like throwing an error, returning a default value etc)
      return new Date();
    }
  }

  tick() {
    this.currentDateTime = new Date();
    // let MobX know that this data source has changed
    this.atom.reportChanged();
  }

  startTicking() {
    this.tick(); // initial tick
    this.intervalHandler = setInterval(
      () => this.tick(),
      1000
    );
    console.log('startTicking')
  }

  stopTicking() {
    clearInterval(this.intervalHandler);
    this.intervalHandler = null;
    console.log('stopTicking')
  }
}

const clock = new Clock();

const disposer = mobx.autorun(() => console.log(clock.getTime()));

// ... prints the time each second



// printing stops. If nobody else uses the same `clock` the clock will stop ticking as well.

setTimeout(() => {
  disposer();
}, 10000);

