



class Manager {

    @watchChange
    someProperty: string;

}

const manager: Manager = new Manager();

manager.someProperty = '123';
manager.someProperty = '456';

function watchChange(target: any, key: string) {
     
    let property = target[key];
    
    const getter = () => {
        return property;
    }

    const setter = (newVal) => {
        property = newVal;
        console.log(`${key as string} changed from ${property} to ${newVal}`);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true
    })
}