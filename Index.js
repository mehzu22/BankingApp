const User = require("./User");

//create admin
console.log("Admin --->")
let admin = User.newAdmin("Mehzu",22,'F')
console.log(admin)

//admin create user1
console.log("Admin create user1 -->")
let user1=admin.newUser("Jakes",20,'M')
console.log(user1)
console.log("Admin create user2 -->")
let user2=admin.newUser("Cubby",20,'M')
console.log(user2)

console.log("All users-->")
console.log(admin.getAllUsers())
//admin create bank
console.log("Admin create banks")
admin.createBank("Canara","CNA")
admin.createBank("Indian Bank","IB")
//console.log(bank1)

//amdin have all bank list
console.log("All banks--->",admin.getAllBanks())

// //admin can update bank
// admin.updateBank(1,"bankName","Canada Bank")
// console.log(bank1)

//admin can delete bank
// admin.deleteBank(1)
// console.log(admin.getAllBanks())


//user create account and user get all of its accounts
console.log("User1 create account")
user1.createAccount(10,10000)
user1.createAccount(11,20000)
console.log("User1's all acount")
console.log(user1.getAllAccounts())


console.log("User2 create account")
user2.createAccount(10,50000)
user2.createAccount(10,54670)
console.log("User2's all acount")
console.log(user2.getAllAccounts())



// // user can  delete its account
// user1.deleteUserAccount(202)
// console.log(user1.getAllAccounts())

// user deposit amount to account
console.log("User1 deposite amount")
user1.deposit(201,300)
console.log(user1.getAllAccounts())

//user withdraw amount
console.log("User1 withdraw amount")
user1.withdraw(201,800)
console.log(user1.getAllAccounts())

// //user get all transactions
// console.log(user1.getTransactions())

//user transfer
console.log("User1 tranfer amount to user2")
user1.transfer(1,201,2,203,500)
console.log(user1.getTransactions())

console.log("User1 get its account1 passbook : ")
console.log(user1.getPassbook(201))
console.log("User2 get its account1 passbook : ")
console.log(user2.getPassbook(203))

//user1 deposit amount to its 2nd account
console.log("User2 get its account2 passbook")
user1.deposit(202,450)
console.log(user1.getPassbook(202))
