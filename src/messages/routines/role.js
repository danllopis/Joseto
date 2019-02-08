
module.exports = 

[
    {
        name: '',
        type: '',
        description: '',
        command: '',
        priority: 0,
        condition: sentData => false,
        exec: sentData => {
            console.log("Esto no debería salir en la consola");
        },
        errorMsg: ''
    }
];