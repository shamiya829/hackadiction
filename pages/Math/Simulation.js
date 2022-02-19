import Walker from './Walker.js'
import HailstoneSequence from './HailstoneSequence.js'
import Vector2 from './Vector2.js'

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
export default class Simulation {
	constructor() {
        if (typeof window !== "undefined") {
            this.canvas = document.createElement('canvas');
		    this.context = this.canvas.getContext('2d');
        }
		
		this.loop = this.animate.bind(this);
		
		this.sequence = new HailstoneSequence();
		this.sequenceWalker = new Walker();
	}
	
	setSize(width, height) {
		const pixelRatio = window.devicePixelRatio || 1;
		
		this.canvas.height = height * pixelRatio;
		this.canvas.width = width * pixelRatio;
	}
	
	start() {
		const { width, height } = this.canvas;
		
		this.context.clearRect(0, 0, width, height);
		
		this.sequenceStart = 1;
		this.sequenceMax = 1e4;
		
		this.animate();
	}
	
	stop() {
		if (this.raf) {
			cancelAnimationFrame(this.raf);
			this.raf = null;
		}
	}
	
	animate() {
		this.raf = requestAnimationFrame(this.loop);
		
		const iterations = Math.min(64, this.sequenceMax - this.sequenceStart);
		
		for (let i = 0; i < iterations; i++) {
			this.render();
		}
	}
	
	render() {
		if (this.sequenceStart >= this.sequenceMax) {
			this.stop();
			return;
		}
		

		
		this.sequenceWalker.reset();
		this.sequenceWalker.position.add(new Vector2(
			this.canvas.width * .6,
			this.canvas.height * .65,
		));
		
		this.context.beginPath();
		
		const sequence = this.sequence.getSequence(++this.sequenceStart);
		const sequenceLength = sequence.length;
		
		sequence.reverse().forEach((n, i, seq) => {
			const isEven = (n % 2) === 0;
			const angleDelta = isEven ? -1 : 1;
			
			this.sequenceWalker.angle += angleDelta;
			this.sequenceWalker.velocity = 8;
			this.sequenceWalker.update();
			
			this.context.lineTo(
				this.sequenceWalker.position.x,
				this.sequenceWalker.position.y
			);
		});
		
		this.context.lineCap = 'round';
		
		this.context.globalAlpha = .1;
		this.context.globalCompositeOperation = 'source-over';
		if(getRandomInt(2)==1)
		{
			this.context.strokeStyle = 'hsl(0, 100%, 50%)';
		}
		else
		{
			this.context.strokeStyle = 'hsl(240, 100%, 50%)';
		}
		this.context.lineWidth = 1;
		this.context.stroke();
		
	}
};
