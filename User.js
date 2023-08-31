const Account = require("./Account")
const Bank = require("./Bank")
const Transactions = require("./Transaction")
class User {
    static id = 0
    static allUsers = []

    constructor(name, age, gender, isAdmin) {
        this.name = name
        this.age = age
        this.gender = gender
        this.isAdmin = isAdmin
        this.id = User.id++
        this.userAccounts = []
        

    }
    //create admin 
    static newAdmin(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error("Invalid value of Name parameter")
            }
            if (typeof age != 'number') {
                throw new Error("Invalid value of Age parameter")
            }
            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error("Invalid value of Gender parameter")
            }
            return new User(name, age, gender, true)
        } catch (error) {
            console.log(error.message)
        }
    }
    //admin can create users
    newUser(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error("Invalid value of Name parameter")
            }
            if (typeof age != 'number') {
                throw new Error("Invalid value of Age parameter")
            }
            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error("Invalid value of Gender parameter")
            }
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let newUser = new User(name, age, gender, false)
            User.allUsers.push(newUser)
            return newUser

        } catch (error) {
            console.log(error.message)
        }
    }
    //admin can get all users
    getAllUsers() {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            return User.allUsers
        } catch (error) {
            console.log(error.message)
        }
    }
    //admin find user by using user id 
    static #findUser(userId) {
        for (let index = 0; index < User.allUsers.length; index++) {
            if (userId == User.allUsers[index].id) {
                return [User.allUsers[index], index]
            }

        }
        return [null, -1]
    }
    //admin update user name parameter
    #updateName(newValue) {
        try {
            if (typeof newValue != 'string') {
                throw new Error("Invalid value of Name parameter")
            }
            return this.name = newValue
        }
        catch (error) {
            console.log(error.message)
        }
    }
    //admin update user age parameter
    #updateAge(newValue) {
        try {
            if (typeof newValue != 'number') {
                throw new Error("Invalid value of Age parameter")
            }
            return this.age = newValue
        }
        catch (error) {
            console.log(error.message)
        }
    }
    //admin update user gender parameter 
    #updateGender(newValue) {
        try {
            if (typeof newValue != 'string') {
                throw new Error("Invalid value of Gender parameter")
            }
            return this.gender = newValue
        }
        catch (error) {
            console.log(error.message)
        }
    }
    //admin can update user name age gender
    updateUser(userId, parameter, newValue) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let [userToBeUpdated, indexOfUserToBeUpdated] = User.#findUser(userId)
            if (userToBeUpdated == null) {
                throw new Error("User not found")
            }
            switch (parameter) {
                case 'name':
                    userToBeUpdated.#updateName(newValue)
                    break;

                case 'age':
                    userToBeUpdated.#updateAge(newValue)
                    break;

                case 'gender':
                    userToBeUpdated.#updateGender(newValue)
                default:
                    break;
            }
            return User.allUsers
        } catch (error) {
            console.log(error.message)
        }
    }

    //admin can delete user
    deleteUser(userId) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let [userToBeDeleted, indexOfUserToBeDeleted] = User.#findUser(userId)
            if (userToBeDeleted == null) {
                throw new Error("User not found")
            }
            //user.alluser splice
            User.allUsers.splice(indexOfUserToBeDeleted, 1)
        } catch (error) {
            console.log(error.message)
        }
    }
    //admin create banks
    createBank(bankName, abbrevation) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let newBank = Bank.newBank(bankName, abbrevation)
            return newBank
        } catch (error) {
            console.log(error.message)
        }
    }
    //admin get all bank
    getAllBanks() {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let allBankList = Bank.getAllBankList()
            return allBankList
        } catch (error) {
            console.log(error.message)
        }
    }
    
    //admin can update bank 
    updateBank(bankID, parameter, newValue) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let [foundBank, indexOFBankList] = Bank.findBank(bankID)
            //console.log(foundBank)
            if (foundBank == null) {
                throw new Error("Bank not found")
            }
            return foundBank.updateBank(parameter, newValue)

        } catch (error) {
            console.log(error.message)
        }
    }
    //admin can delete bank
    deleteBank(bankID)
    {
        try {
            if(!this.isAdmin)
            {
                throw new Error("Admin can't have access to Bank")
            }
            if(bankID < 0 || typeof bankID != 'number')
            {
                throw new Error("Invalid Bank ID")
            }
            let [bankToBeDeleted , indexOfBankToBeDeleted] = Bank.findBank(bankID)
            
            if (bankToBeDeleted == null) 
            {
                throw new Error("User not found")    
            }
            // foundContact.deleteContact(indexOfContactToBeDeleted)
            bankToBeDeleted.deleteBank(indexOfBankToBeDeleted)
            //this.contacts.splice(indexOfContactToBeDeleted,1)

        } catch (error) {
            console.log(error.message)
        }
    }

    //user create account
    createAccount(bankID,balance)
    {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot create accounts")
            }
            let newAccount = Account.newAccount(bankID,balance)
            this.userAccounts.push(newAccount)
            return newAccount
        } 
        catch (error) {
            console.log(error.message)
        }
    }

    //user read all accounts
    getAllAccounts()
    {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot accces users accounts")
            }
            return this.userAccounts
        } catch (error) {
            console.log(error.message)
        }
    }
    
    #findAccount(accountNo)
    {
        for (let index = 0; index < this.userAccounts.length; index++) {
            if(accountNo == this.userAccounts[index].accountNo)
            {
                return [this.userAccounts[index],index]
            }
            
        }
        return [null,-1]
    }
    //user deletes accounts
    deleteUserAccount(accountNo)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin cannot accces users accounts")
            }
            let [foundAccount,indexOFFoundAccount]=this.#findAccount(accountNo)
            console.log("Found Acocunt : ",foundAccount)
            if(foundAccount == null)
            {
                throw new Error("Account number not found!")
            }
            this.userAccounts.splice(indexOFFoundAccount,1)
            console.log("Account Sucessfully Deleted")
        } catch (error) {
            console.log(error.message)
        }
    }

    //user will deposit amount to account
    deposit(accountNo,amount)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin cannot accces users accounts")
            }
            
            let [foundAccountNo,indexOFFoundAccount] = this.#findAccount(accountNo)
            if(foundAccountNo == null)
            {
                throw new Error("Account number not found!")
            }
            let depoistedAmount=foundAccountNo.depositAmount(amount)
            let date = new Date()
            let senderID=null
            let receiverID=this.id
            let type='Credit'
            let transactAmount = amount
            let currentBalance = foundAccountNo.getBalance()
            let transactionDetails= Transactions.newTransaction(date,senderID,receiverID,type,transactAmount,currentBalance)
            let printPassbook=foundAccountNo.getPassbook()
            printPassbook.push(transactionDetails)
            return depoistedAmount
    
        } catch (error) {
            console.log(error.message)        
        }
    }
    withdraw(accountNo,amount)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin cannot access users account")
            }
            let [foundAccountNo,indexOFFoundAccount] = this.#findAccount(accountNo)
            if(foundAccountNo == null)
            {
                throw new Error("Account number not found!")
            }
            let withdrawalAmount=foundAccountNo.withdrawAmount(amount)

            let date = new Date()
            let senderID=this.id
            let receiverID=null
            let type='Debit'
            let transactAmount = amount
            let currentBalance = foundAccountNo.getBalance()
            let transactionDetails = Transactions.newTransaction(date,senderID,receiverID,type,transactAmount,currentBalance)
            //console.log("transactions details : ",transactionDetails)
            
            let printPassbook=foundAccountNo.getPassbook()
            printPassbook.push(transactionDetails)
            return withdrawalAmount
        } catch (error) {
            console.log(error.message)
        }
    }
    getPassbook(accountID){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot See Passbook')
            }
            let [foundAccount,indexOfFoundAccount] = this.#findAccount(accountID)
            if(foundAccount == null){
                throw new Error('Account Not Found')
            }
            //console.log("found account --<",foundAccount)
            return foundAccount.getPassbook()
        } catch (error) {
            console.log(error.message);
        }
    }
    getTransactions()
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to transactions")
            }
            return Transactions.getAllTransaction()
        } catch (error) {
            console.log(error.message)
        }
    }
//user can transfer
    transfer(senderID,senderAccountNo,receiverID,receiverAccountNo,amount)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to user account")
            }
            

            //find sender account and withdraw amount and also add transaction 
            let [foundSenderAccount,indexOFSenderAccount] = this.#findAccount(senderAccountNo)
            //console.log("found sender account ",foundSenderAccount)
            if(foundSenderAccount == null)
            {
                throw new Error("Account number not found!")
            }
            foundSenderAccount.withdrawAmount(amount)
            let date = new Date()
            let senderType='Debit'
            let transactAmount = amount
            let senderCurrentBalance = foundSenderAccount.getBalance()
            let senderTransactionDetails = Transactions.newTransaction(date,senderID,null,senderType,transactAmount,senderCurrentBalance)
            let senderPassbook = foundSenderAccount.getPassbook()
            senderPassbook.push(senderTransactionDetails)

            // //find receiver account and deposit amount and add transaction
            let [receiver,receiverid] = User.#findUser(receiverID)
            //console.log("REceiver ",receiver)
            
            let [foundReceiverAccount,indexOFReceiverAccount] = receiver.#findAccount(receiverAccountNo)
            //console.log("found receiver account ",foundReceiverAccount)
            if(foundReceiverAccount == null)
            {
                throw new Error("Account number not found!")
            }
            foundReceiverAccount.depositAmount(amount)
            let receiverType='Credit'
            let receiverCurrentBalance=foundReceiverAccount.getBalance()
            let receiverTransactionsDetails = Transactions.newTransaction(date,senderID,receiverID,receiverType,transactAmount,receiverCurrentBalance)
            let receiverPassbook=foundReceiverAccount.getPassbook()
            receiverPassbook.push(receiverTransactionsDetails)
        } catch (error) {
            console.log(error.message)
        }
    }

}
module.exports = User