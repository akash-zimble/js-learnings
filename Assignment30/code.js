// A Singleton ensures that only one instance of a class or object exists during the lifetime of the application.
// It’s useful for things like configuration managers, database connections, or global caches.

class DatabaseConnection {
    static instance = null;

    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        
        this.connectionId = Math.floor(Math.random() * 1000);
        DatabaseConnection.instance = this;
    }

    connect() {
        console.log(`Connected with ID ${this.connectionId}`);
    }

    static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

db1.connect();
db2.connect();

console.log(db1 === db2); 


// Factory Design Pattern: A Factory is responsible for creating objects based on conditions, configurations, or types. 
// It’s useful when you need to create different types of objects but want to hide the creation logic behind a common interface.

class User {
    constructor(role, permissions) {
        this.role = role;
        this.permissions = permissions;
    }

    describe() {
        console.log(`${this.role} with permissions: ${this.permissions.join(', ')}`);
    }
}

class Admin extends User {
    constructor() {
        super('admin', ['read', 'write', 'delete']);
    }
}

class Guest extends User {
    constructor() {
        super('guest', ['read']);
    }
}

class UserFactory {
    static createUser(role) {
        switch (role) {
            case 'admin':
                return new Admin();
            case 'guest':
                return new Guest();
            default:
                throw new Error('Invalid role');
        }
    }
}

// Usage
const admin = UserFactory.createUser('admin');
const guest = UserFactory.createUser('guest');

admin.describe();
guest.describe();