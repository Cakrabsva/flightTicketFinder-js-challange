const passsangers = [
    'Andi Travel', 7, 'Senin',
    'Budi Travel', 4, 'Selasa',
    'Cindi Travel', 1, 'Rabu',
    'Andi Travel', 10, 'Kamis'
]

const tickets = [
    {
        flight: 'Senin',
        price: 120000
    },
    {
        flight: 'Selasa',
        price: 180000
    },
     {
        flight: 'Rabu',
        price: 140000
    },
     {
        flight: 'Kamis',
        price: 200000
    },
     {
        flight: 'Jumat',
        price: 160000
    },
     {
        flight: 'Sabtu',
        price: 220000
    },
     {
        flight: 'Minggu',
        price: 210000
    }

]

const travelsGetReward = ['Cindi Travel', 'Andi Travel']

function generateTravel (pasangersParam) {

}
/*
    [   
        {
            travelAgent: 'Andi Travel'
            sumOfPassangers: 7,
            day: 'Senin'
        },
        {
            ...
        } 
    ]   
*/

function getTicket (generatedPassangers, ticketsParam) {
    //total price get fro multiple passangers with ticket price 

}
/*
    [   
        {
            travelAgent: 'Andi Travel'
            sumOfPassangers: 7,
            day: 'Senin',
            totalPrice: 840000
        },
        {
            ...
        } 
    ]   
*/

function getReward (travelsGetRewardParam, travelsData) {
    // if total price more than 2 mio and total passanger more than 15 then travel worth to get 20% cash back from total price

}

/*
    [   
        {
            travelAgent: 'Andi Travel'
            flight: ['Senin', kamis]
            totalPrice: 2840000,
            totalPassangers: 17,
            reward: 568000
        },
        {
            travelAgent: 'Andi Travel'
            flight: ['Rabu']
            totalPrice: 140000,
            totalPassangers: 1,
            reward: 0
        } 
    ]   
*/



