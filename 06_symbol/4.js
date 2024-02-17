class Cache {
    static data = {}
    static set(name, value) {
        return (this.data[name] = value)
    }

    static get(name) {
        return this.data[name]
    }
}

Cache.set('ys', 'yurushi');

console.log(Cache.get('ys'));

let user = {
    name: 'apple',
    desc: 'user info',
    key: Symbol('user')
}

let cart = {
    name: 'apple',
    desc: 'cart info',
    key: Symbol('cart')
}

Cache.set(user.key, user)
Cache.set(cart.key, cart)
console.log(Cache.get(user.key));