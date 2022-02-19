export default class HailstoneSequence {
    constructor() {
        this.cache = {};
    }
    
    getSequence(start) {
        const sequence = [start];
        let lastValue = start;
        
        while (lastValue > 1) {
            lastValue = HailstoneSequence.getNext(lastValue);
            sequence.push(lastValue);
        }
        
        return new Uint32Array(sequence);
    }
    
    static getNext(n) {
        const isEven = n % 2 === 0;
    
        if (isEven) return n / 2;
        return 3 * n + 1;
    }
}