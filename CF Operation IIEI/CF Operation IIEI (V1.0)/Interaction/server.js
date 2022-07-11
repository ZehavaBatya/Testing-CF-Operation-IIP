const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 6000

app.use(cors())

const ideas = {
    'idea number 1':{
        'name': 'Annaliese Bronz',
        'email': 'annaliese.bronz@commonfund.org',
        'idea': 'Hire DEI'
    },
    'idea number 2':{
        'name': 'George Suttles',
        'email': 'george.suttles@commonfund.org',
        'idea': 'Hire diverse talent'
    },
    'idea number 3':{
        'name': 'Cari Lodge'
        'email': 'cari.lodge@commonfund.org'
        'idea': 'Retain and nurture talent'
    }
}

app.get('/', (reqest, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:interactiveInput', (request, response)=>{
    const interactiveInput = request.params.interactiveInput.toLowerCase()
    if(ideas[interactiveInput]){
        response.json(ideas[interactiveInput])
    }else{
        response.json(ideas['idea number one'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Speed up already!`)
})