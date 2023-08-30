class Transactions{
    static transactionsList=[ ]
    
    constructor(date,senderID,receiverID,type,amount,currentBalance)
    {
        this.date=date
        this.senderID=senderID
        this.receiverID=receiverID
        this.type=type
        this.amount=amount
        this.currentBalance=currentBalance
    }
    static newTransaction(date,senderID,receiverID,type,amount,currentBalance)
    {
        try {
            
            let newTransaction= new Transactions(date,senderID,receiverID,type,amount,currentBalance)
            Transactions.transactionsList.push(newTransaction)
            return newTransaction
        } 
        catch (error) {
            console.log(error.message)
        }
    }
    static getAllTransaction()
    {
        return Transactions.transactionsList
    }
}
module.exports = Transactions