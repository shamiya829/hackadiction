import Vector2 from './Vector2'

export default class Walker {
    constructor() {
        this.position = new Vector2;
        this.velocity = 1;
        
        this.reset();
    }
    
    update() {
        const velocity = Vector2.fromPolar(this.angle, this.velocity);
        
        this.position.add(velocity);
    }
    
    reset() {
        this.angle = 0;
        this.position.x = screen.width - 3000;
        this.position.y = screen.height - 1800;
    }
}

