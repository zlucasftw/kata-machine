export default class ArrayList<T> {
    public length: number;
    private array = [];
    

    constructor() {
        this.length = 0;
        this.array = [];
    }

    prepend(item: T): void {

    }

    insertAt(item: T, idx: number): void {

    }

    append(item: T): void {
        this.length++;
        this.array[this.length] = item;
    }

    remove(item: T): T | undefined {
        const removedItem = undefined;
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === item) {
                
            }
        }
        this.length--;
    }
    get(idx: number): T | undefined {
        if (idx >= 0 && idx < this.length) {
            return this.array[idx];
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 && idx >= this.length) {
            return undefined;
        }

        const tmpArray = [];
        for (let i = 0; i <= idx; i++) {
            tmpArray[i] = this.array[i];
        }
        this.array = tmpArray;

        const removedItem = this.array[idx];
        return removedItem;
    }
}