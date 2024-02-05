class Foo {
    static #count = 0;
 
    get count() {
        return Foo.#count;
    }
 
    static {
        console.log('Static block');
        try {
            const lastInstances = Foo.loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
    static loadLastInstances()
    {
        return "hello";
    }
}