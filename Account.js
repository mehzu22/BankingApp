class Account{
    static accountNo = 201
    //static passbook = []
    constructor(bankID,balance){
        this.accountNo=Account.accountNo++
        this.bankID=bankID
        this.balance=balance
    }
    static newAccount(bankID,balance)
    {
        try {
            if(typeof bankID != 'number')
            {
                throw new Error("Invalid Bank ID")
            }
            if(typeof balance != 'number')
            {
                throw new Error("Put proper input for balance")
            }
         
            return new Account(bankID,balance)
        } 
        catch (error) {
            console.log(error.message)
        }
    }
    getBalance()
    {
        return this.balance
    }
    depositAmount(amount)
    {
        try {
            if(typeof amount != 'number' )
            {
                throw new Error("Inavlid Amount")
            }
            
            return this.balance+=amount
        } catch (error) {
            console.log(error.message)
        }
        
    }
    withdrawAmount(amount)
    {
        try {
            if(typeof amount != 'number' )
            {
                throw new Error("Inavlid Amount")
            }
            return this.balance-=amount
        } catch (error) {
            console.log(error.message)
        }
    }
    // static printPassbook(transactionDetails)
    // {
    //     try {
    //         Account.passbook.push(transactionDetails)
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }
    // static getPassbook()
    // {
    //     return this.passbook
    // }

    //Accounts me passbook ka list bana
// Aur saare transactions usme push kar de
}
module.exports = Account