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

                travelAgentData.totalPrice = totalPrice
            }
        }
        
    }
    
    return travelsData    
}
// getTicket(generateTravel(passsangers), tickets)
// console.log(getTicket(passsangers, tickets))
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
    let travels = getTicket(passsangers, travelsData)
    let filteredData = []
    let dataSummary = []
    let detaiDataObj = {
        travelAgent: '',
        flight: [],
        totalPrice: 0,
        totalPassangers: 0,
        deleted: true
    } 
    
    for (let i = 0; i < travels.length; i ++) {
        let travelDetail = travels[i]
         
        if(dataSummary.length === 0) {
            detaiDataObj.travelAgent = travelDetail.travelAgent
            detaiDataObj.flight.push(travelDetail.day)
            detaiDataObj.totalPrice = travelDetail.totalPrice
            detaiDataObj.totalPassangers = travelDetail.sumOfPassangers
            detaiDataObj.deleted = false
            
            dataSummary.push(detaiDataObj)
            detaiDataObj = {
                travelAgent: '',
                flight: [],
                totalPrice: 0,
                totalPassangers: 0,
                deleted: false
                
            } 

        } else {
            let flag = false
            for (let i = 0; i < dataSummary.length; i ++) {
                let dataInSummary = dataSummary[i]

                if(travelDetail.travelAgent === dataInSummary.travelAgent) {
                    dataInSummary.flight.push(travelDetail.day)
                    dataInSummary.totalPassangers += travelDetail.sumOfPassangers
                    dataInSummary.totalPrice += travelDetail.totalPrice
                    flag = true
                }
            }

            if(!flag) {
                detaiDataObj.travelAgent = travelDetail.travelAgent
                detaiDataObj.flight.push(travelDetail.day)
                detaiDataObj.totalPrice = travelDetail.totalPrice
                detaiDataObj.totalPassangers = travelDetail.sumOfPassangers
                detaiDataObj.deleted = false
                dataSummary.push(detaiDataObj)
                detaiDataObj = {
                    travelAgent: '',
                    flight: [],
                    totalPrice: 0,
                    totalPassangers: 0,
                    deleted: false
                }
            }
        }
    }

    for (let i = 0; i < dataSummary.length; i ++) {
        let dataInSummary = dataSummary[i]
        let flag = false

        for (let j = 0; j < travelsGetRewardParam.length; j ++) {
            let dataInTravelsGetParam = travelsGetRewardParam[j]
        
            if (dataInSummary.travelAgent === dataInTravelsGetParam) {
                flag= true
                
                if (dataInSummary.totalPassangers >= 15 && dataInSummary.totalPrice > 2000000) {
                    dataInSummary.reward = dataInSummary.totalPrice * 0.2
                } else {
                    dataInSummary.reward = 0
                }
            }
        }
        if (!flag) {
            dataInSummary.deleted = true
        }

        if (!dataInSummary.deleted) {
           filteredData.push(dataInSummary) 
        }
    }

    return filteredData
}
console.log(getReward(travelsGetReward, tickets))

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



