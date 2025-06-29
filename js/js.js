//
 // Типів транзацкій всього два.
 // Можна покласти або зняти гроші з рахунку.
 //
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

//
 // Кожна транзакція - це об'єкт з властивостями: id, type і amount
 //


const account = {

    id: 1,

    //Поточний баланс рахунку

    balance: 0,

    // Історія транзакцій

    transactions: [],
    //
     // Метод створює і повертає об'єкт транзакції.
     // Приймає суму і тип транзакції.
     //

    createTransaction(amount, type) {
        const newTransaction = {
            amount: amount,
            type: type,
            id: this.id,
        }
        this.id += 1;
        return newTransaction;
    },
     //
     // Метод відповідає за додавання суми до балансу.
     // Приймає суму танзакції.
     // Викликає createTransaction для створення об'єкта транзакції
     // після чого додає його в історію транзакцій
     //
    deposit(amount) {
        this.balance += amount;
        const transaction =  this.createTransaction(amount, "deposit");
        this.transactions.push(transaction);


    },

    //
     // Метод відповідає за зняття суми з балансу.
     // Приймає суму танзакції.
     // Викликає createTransaction для створення об'єкта транзакції
     // після чого додає його в історію транзакцій.
     //
     // Якщо amount більше, ніж поточний баланс, виводь повідомлення
     // про те, що зняття такої суми не можливо, недостатньо коштів.
    //
    withdraw(amount) {
        if (amount  < this.balance ){
            this.balance -=  amount
            const transaction = this.createTransaction(amount,"withdraaw")
            this.transactions.push (transaction);
        } else {

            alert("Недостатьно коштів");
        
        }
    },

    //
     // Метод повертає поточний баланс
     //
    getBalance() {
        return this.balance
    },
    //
     // Метод шукає і повертає об'єкт транзакції по id
    //
    getTransactionDetails(id) {
        for (const element  of this.transactions){

            // console.log(element);

            if (element.id === id ){
                return element
            }
        }

        return null;
    },

    //
  
     // Метод повертає кількість коштів
     // певного типу транзакції з усієї історії транзакцій
     
    getTransactionTotal(type){
        console.log(type)
        let total = 0
        for (const element of this.transactions){
            if (element.type === type){
                total += element.amount
            }
        }
        return total
    },
};


account.deposit(100000000000000)
account.deposit(100)
account.deposit(300)
account.deposit(600)
account.deposit(51000)
account.deposit(100)
account.deposit(800)
account.deposit(100)
account.withdraw(1000000000000)
account.withdraw(1000)
account.withdraw(10)
account.withdraw(1050)
account.withdraw(1)
account.withdraw(15)
account.withdraw(35)
account.withdraw(140)
account.withdraw(10)
account.withdraw(10)
account.withdraw(10)

console.log(account.getBalance());

console.log(account.getTransactionDetails(1));

console.log(account.getTransactionDetails(4));

console.log(account.getTransactionDetails(5));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account.getTransactionTotal("withdraw"));

console.log(account.getTransactionTotal("deposit"));

console.log(account);