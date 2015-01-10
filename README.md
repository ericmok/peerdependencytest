Node nested vs peer dependency 
------------------------------

When we `require` a module multiple times in different contexts,
do they refer to the same module?

This is a demo to confirm my suspicions.


### Example 1: Nested dependencies

####Question
When we `require` a module with the same name,
do they necessarily refer to the same module, even
when we require it in different contexts?

#####Conclusion
When we `require` a module with the same name
in different contexts, they may refer to different things.


```
├── example1
│   ├── example1.js
│   ├── node_modules
│   │   ├── a
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   └── b
│   │       ├── index.js
│   │       ├── node_modules
│   │       │   └── a
│   │       │       ├── index.js
│   │       │       └── package.json
│   │       └── package.json
│   └── package.json
```

####Experiment
* In `example1.js`, `require('a')`. 
* In `b/index.js`, `require('a')`.
* Module `a` stores a reference to a mutatable variable.

* I mutate it in example1.js. 
* Then I access the reference of `a` through `b`'s module and mutate it

**Run example1.js to see the demo.**

####Observation
The values do not sync up.



### Example 2: Peer dependencies

####Question
If I require a module in 2 different contexts and mutate the module
in the 2 contexts, do the mutations 'carry over'?

####Conclusion
Yes

```
├── example2
│   ├── example2.js
│   ├── node_modules
│   │   ├── animal
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   └── dog
│   │       ├── index.js
│   │       └── package.json
│   └── package.json
└── README.md
```

####Experiment
* In `example2.js`, I `require('animal')`. 
* In `dog/index.js`, I `require('animal')`.
* Module `dog` stores a reference to a mutatable variable.

* I mutate it in example2.js. 
* Then I access the reference of `animal` through `dog`'s module and mutate it

**Run example2.js to see the demo.**

####Observation
The values sync up.


