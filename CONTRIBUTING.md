# How to contribute

## How to be included as a contributor
1. Fork this repository.
2. Implement a new feature in Joseto without modifying the main structure.
3. Pull request your Joseto repository.
4. Wait for PR validation.
5. If everything is correct, you will be included as a new contributor.

## Include a feature
1. Go to '/src/messages/routines/'
2. Add a routine in a current directory file.
3. Use following JSON based structure.

```javascript
{
    name: 'test',
    type: 'COMMAND',
    description: 'Send a message to verify that the robot is still online',
    command: '$test',
    priority: 9999,
    condition: sentMsg => sentMsg.content === '$test',
    exec: sentMsg => {
        sentMsg.channel.send('Si podeis leer esto significa que sigo vivo.');
    },
    errorMsg: ''
}
```

* **name:** Name of routine.
* **type:** *'COMMAND'* (if requires $command) or *REACT*.
* **descrition:** Short description of what the routine do.
* **command:** Commmand with posible parameters (only for command type routines).
* **priority:** Only the most priority activated routines will be executed.
* **condition:** Function that returns true if routine has been activated by the received message.
* **exec:** Routine code.
* **errorMsg:** Still not implemented.

**IMPORTANT:** Parameters of functions can not be changed!

## Create a new module

1. Create a list of routines such as mentioned above.
2. Add your module to *'/src/messages/routineRouter.js'* adding the following line of code:
   
```javascript
allRoutines = allRoutines.concat(require('./routines/YOUR_MODULE_NAME'));
```
