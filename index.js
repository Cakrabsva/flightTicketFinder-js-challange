const passsangers = [
    'Andi Travel', 7, 'Senin',
    'Budi Travel', 4, 'Selasa',
    'Cindi Travel', 1, 'Rabu',
    'Andi Travel', 10, 'Kamis',
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

function generateTravel (passangersParam) {
    //this 'generatedPassangers' would be the expected output of array object
    let generatedPassangers = []
    let generateObjData = {
            travelAgent: '',
            sumOfPassangers: 0,
            day: ''
        }
    let counter = 0
    let generateObjDataHelper   = []

    for (let i = 0; i < passangersParam.length; i ++) {
        let perData = passangersParam[i]
        
        if (counter === 3) {

            generateObjData.travelAgent = generateObjDataHelper[0]
            generateObjData.sumOfPassangers = generateObjDataHelper[1]
            generateObjData.day = generateObjDataHelper[2]
            
            generatedPassangers.push(generateObjData)

            generateObjData = {
                travelAgent: '',
                sumOfPassangers: 0,
                day: ''
            }

            counter = 0
            generateObjDataHelper = []
            generateObjDataHelper.push(perData)

        } else if (i === passangersParam.length -1) {
            generateObjDataHelper.push(perData)
            generateObjData.travelAgent = generateObjDataHelper[0]
            generateObjData.sumOfPassangers = generateObjDataHelper[1]
            generateObjData.day = generateObjDataHelper[2]
            
            generatedPassangers.push(generateObjData)

        } else {
            generateObjDataHelper.push(perData)
        }
        counter++
    }
    // console.log(generatedPassangers)
    return generatedPassangers
}
// generateTravel(passsangers)

/*Expected Output
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
    //total price get from multiple passangers with ticket pric
    let travelsData = generateTravel(generatedPassangers)
    
    // console.log(travelsData)

    for (let i = 0; i < travelsData.length; i ++) {
        let travelAgentData = travelsData[i]
        // console.log(travelAgentData)

        for (let j = 0; j < ticketsParam.length; j ++) {
            let ticketsDetail = ticketsParam[i]

            if (travelAgentData.day === ticketsDetail.flight) {
                let totalPrice = travelAgentData.sumOfPassangers * ticketsDetail.price

                travelAgentData.totalprice = totalPrice
            }
        }
        
    }
    
    return travelsData    
}
// getTicket(generateTravel(passsangers), tickets)
console.log(getTicket(passsangers, tickets))
/* expected output
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

/* expected output
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



