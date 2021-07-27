//In its core, it restricts a class to have just one instance and ensures that it is globally accessible.
// It might come in handy when you need to manage something from across your whole application.

// E.g. Redis

class Singleton {
    // must be private so that only Singleton can call singleton
    private static instance?: Singleton;

    // by making this private, we can then only call this with getInstance
    private constructor() {
        // your logic here
    }
    static getInstance() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = new Singleton();
        return Singleton.instance;

        // Alternative way to writing
        //   Singleton.instance = this;
    }
}

// Now, every time we call  Singleton.getInstance(), we get the same object.

// NOTE : Singletons have a lot in common with global variables. This is also why they often are discouraged because they share their disadvantages as it might make your application less readable. Whether we consider singletons good or bad, they are one of the fundamental design patterns.
// Understanding them might one day come in handy. Even if you don’t decide to write them yourself, you might encounter them in some applications.