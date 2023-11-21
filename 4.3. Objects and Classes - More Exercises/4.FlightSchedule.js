function checkFlightStatus(flightsData) {
    class Flight {
        constructor(number, destination, status) {
            this.number = number;
            this.destination = destination;
            this.status = status;
        }
    }
    let allFlights = [];
    flightsData[0].forEach((flight) => {
        let [flightNumber, ...destination] = flight.split(' ');
        let newFlight = new Flight(flightNumber, destination, 'Not specified');
        allFlights.push(newFlight);
    });

    flightsData[1].forEach((changeStatus) => {
        const [flightNumber, newStatus] = changeStatus.split(' ');
        allFlights.forEach(f => {
            if (f.number === flightNumber) {
                f.status = newStatus;
            }
        })
    });

    let statusToCheck = flightsData[2][0];

    if (statusToCheck === "Ready to fly") {
        allFlights.forEach(f => {
            if (f.status === 'Not specified') {
                console.log(`{ Destination: '${f.destination}', Status: 'Ready to fly' }`)
            }
        })
    } else {
        allFlights.forEach(f => {
            if (f.status === statusToCheck) {
                console.log(`{ Destination: '${f.destination}', Status: '${f.status}' }`)
            }
        })
    }
}

checkFlightStatus([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
);

checkFlightStatus([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
);
