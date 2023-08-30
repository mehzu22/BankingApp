class Bank{
    static bankID = 101//octal literas(at start u cant have 0)
    static banksList = []
    constructor(bankName,abbrevation)
    {
        this.bankID=Bank.bankID++
        this.bankName=bankName
        this.abbrevation=abbrevation
    }
    static newBank(bankName,abbrevation)
    {
        try {
            if(typeof bankName != 'string')
            {
                throw new Error("Invalid Bank name")
            }
            if(typeof abbrevation != 'string')
            {
                throw new Error("Invalid Abbrevation")
            }
            
            let newBank = new Bank(bankName,abbrevation)
            Bank.banksList.push(newBank)
            return newBank
            
        } 
        catch (error) {
            console.log(error.message)
        }
    }
    static getAllBankList()
    {
        return Bank.banksList
    }

    static findBank(bankId)
    {
        for (let index = 0; index < Bank.banksList.length; index++) {
            //console.log("Bank.banksList[index]",Bank.banksList[index])
            if(bankId == Bank.banksList[index].bankID)
            {
                return [Bank.banksList[index],index]
            }
        }
        return [null ,-1]
    }
    #updateBankName(newValue)
    {
        if(typeof newValue != 'string')
        {
            throw new Error("Invalid Value of Bank name")
        }
        return this.bankName=newValue
    }
    #updateAbbrevation(newValue)
    {
        if(typeof newValue != 'string')
        {
            throw new Error("Invalid Value of Abbrevation")
        }
        return this.abbrevation=newValue
    }
    updateBank(parameter,newValue)
    {
        if(typeof parameter != 'string')
        {
            throw new Error("Invalid Parameter")
        }
        switch (parameter) {
            case 'bankName':
                this.#updateBankName(newValue)
                break;
            case 'abbrevation' :
                this.#updateAbbrevation(newValue)
                break;
            default:
                throw new Error("Invalid Parameter")
        }
    }
    deleteBank(indexOfBankToBeDeleted)
    {
        return Bank.banksList.splice(indexOfBankToBeDeleted,1)
    }
    
}
module.exports=Bank