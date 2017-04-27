### Working with Events 

Syntax goodies: v-on or simply @click
Important stuff: You can not too complex JS (for loops and bigger if condiationals) in these! Simple ternary Works though!

ex 1: 
// counter: 0
// negCount(step){ return this.counter += step; },
<button v-on:click="addCounter(2)">Click me twice</button>


ex2:
<input type="text" @keyup.space="alertFunc">


ex3a: 
// inValue: ''
// getValue(event){ return this.inValue = event.target.value; }

<input v-on:keydown="getValue" type="text">
<p>{{ inValue }}</p>


ex3b:
(this time only when enter is pressed)
<input v-on:keydown.enter="getValue" type="text">

ex4.
// counter: 0,
// msg: 'Zero'
// addCount(steps){
      this.counter += steps;
      this.counter > 100 ? this.msg = "You've Reached 100!" : this.msg ="Almost There"
    }
//
<button @click="addCount(10)">Click</button>
<h2>Count: {{ counter }} <small><i>{{ msg }}</i></small></h2>

















