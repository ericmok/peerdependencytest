// With peer dependencies
// `dog` has a peer dependency on `animal`
// `animal` depends on nothing
var animal = require('animal');
var dog = require('dog');

animal.speak();
// Output: 'blurp'

// This function delegates to animal.speak();
dog.speak();
// Output 'blurp'

animal.mutateVoice('woof!');

animal.speak();
// Ouput: 'woof!'

dog.speak();
// Ouput: 'woof!' (as expected!)

// We reference the required `animal` module in `dog`
dog.animal.mutateVoice('bow wow!');

animal.speak();
// Ouput: 'bow wow!'

dog.speak();
// Ouput: 'bow wow!' (as expected!)
