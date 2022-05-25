class Java {

    constructor(){
        this.velocity = createVector(0, -2)
        this.image = img("assets/java.png", 3)
        this.position = createVector(parseInt(this.image.style.left, 10), parseInt(this.image.style.top, 10))
        this.image.style.width = "500px"
        this.image.style.height = "314px"

        this.mass = 1

        this.center = createVector(window.innerWidth / 2, window.innerHeight / 2)
    }


    draw(){
        this.image.style.left = this.position.x + "px";
        this.image.style.top  = this.position.y + "px";
        

    }
    
    gravity() {
        // F = G * (m1*m2) / r^2
        let force = 123; // magnitude
        let overall = createVector();

        const m = this.mass * 10;
        const r2 = this.position.dist(this.center);

        force = 0.01 * ((m / r2) * r2);

        let direction = p5.Vector.sub(this.center, this.position).normalize();
        direction.mult(force);
        overall = this.sumVector(overall, direction);

        this.velocity = this.sumVector(this.velocity, overall);
    }

    updatePosition() {
        this.position = p5.Vector.add (
            this.position,
            this.velocity.copy().div(this.mass)
        );
    }

    sumVector(vector1, vector2) {
        // console.log(vector1)
        let x = vector1.x + vector2.x;
        let y = vector1.y + vector2.y;
        return createVector(x, y);
    }

}