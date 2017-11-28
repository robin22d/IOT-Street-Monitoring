const io = require('socket.io')();


var AllStreets = [{
    id: '1',
    street: 'Red street',
    airQuality: '6',
    airQualityRange: false,
    light: '750',
    lightRange: false,
    noise: '30',
    noiseRange: false
},
    {
        id: '2',
        street: 'Blue street',
        airQuality: '6',
        airQualityRange: false,
        light: '750',
        lightRange: false,
        noise: '30',
        noiseRange: false
    }
    ];

io.on('connection', (client) => {

    client.on('connected', () => {
        console.log("Connected!");
    });

    client.on('sendingStreet', (id, street) => {
        AllStreets.push({
            id: id,
            street: street,
            airQuality: '6',
            airQualityRange: false,
            light: '750',
            lightRange: false,
            noise: '30',
            noiseRange: false
        });
        console.log("all names: ", AllStreets);
    });

    client.on('checkingStreets', (interval) => {
        setInterval(() => {
            for(var i = 0; i<Object.keys(AllStreets).length; i++){
                AllStreets[i].airQuality = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

                if (AllStreets[i].airQuality < 8) {
                    AllStreets[i].airQualityRange = true
                }else{
                    AllStreets[i].airQualityRange = false
                }


                AllStreets[i].light = Math.floor(Math.random() * (1200 - 400 + 1)) + 400;


                if (AllStreets[i].light > 500 && AllStreets[i].light < 1000) {
                    AllStreets[i].lightRange = true
                }else{
                    AllStreets[i].lightRange = false
                }


                AllStreets[i].noise = Math.floor(Math.random() * (60 - 0 + 1)) + 0;

                if (AllStreets[i].noise < 40) {
                    AllStreets[i].noiseRange = true
                }else{
                    AllStreets[i].noiseRange = false
                }

            }
            client.emit('returningStreets', AllStreets);
        }, interval)
    });

});

const port = 8000;
io.listen(port);
console.log('Listening on port ' + port);