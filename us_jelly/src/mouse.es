export default class Mouse {
    constructor(canvas) {
        this.canvas = canvas;
        this.rect = this.canvas.getBoundingClientRect();
        this.x = 0;
        this.y = 0;
        this.bind();
    }

    bind() {
        this.canvas.removeEventListener('mousemove', this.handleMove);
        this.canvas.addEventListener('mousemove', this.handleMove);
    }

    handleMove = (e) => {
        this.x = e.clientX - this.rect.left;
        this.y = e.clientY - this.rect.top;
    };
}
