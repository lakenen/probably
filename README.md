# Probably #

Do something... probably.


## Installation ##

```
npm install probably
```


## Usage ##

Probably will call the given function with the given probability and return whatever the function returns or false if the function was not called.

```
var probably = require('probably');

probably(0.5, function () {
    console.log('This will probably happen approximately 50% of the time');
});
```


## License ##

(The MIT License)

Copyright 2014 Cameron Lakenen
