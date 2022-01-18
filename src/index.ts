import express, {Request, Response, NextFunction} from  'express'

const app = express()
const porta = 3000
const host = 'http://localhost:'

app.get('/status', (req:Request, res:Response, next:NextFunction)=>{
    res.status(200).send({foo:'Aeee porraaaa'})
})

app.listen(porta, ()=>console.log(`Executando em... ${host}${porta}`)
)