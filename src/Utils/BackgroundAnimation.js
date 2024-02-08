class Field{
    constructor(x,y,velocity_x,velocity_y,side,color,scaling_speed,rand){
        this.x=x;
        this.y=y;
        this.y_pos = 5;
        this.adder = velocity_x
        this.velocity_x=0;
        this.velocity_y=velocity_y;
        this.multiplier=side;
        this.scaling =  rand ? Math.random() : 1;
        this.scaling_speed = scaling_speed;
        this.color=color;
        this.created = Date.now();
    }

    render(ctx){
        const now = Date.now();
        const x_pos = this.x + this.velocity_x*this.scaling*0.9 + (Math.sin((now - this.created)/200)*15*this.multiplier)*(this.scaling*0.9);
        this.y_pos = this.y- ((now - this.created)/12)*this.velocity_y;
        this.velocity_x += this.adder;
        this.scaling += this.scaling_speed;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x_pos,this.y_pos,Math.abs(1.7 * this.scaling),0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}


class BackgroundAnimation{
    static colors = ['#C2CAE8','#8789C0','#8380B6','#1e11D4A'];
    /**
     * Konstruktor bierze za argument ctx, szerokosc okna, wysokosc okna
     * @param {CanvasRenderingContext2D} ctx 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(ctx,width,height,random){
        this.ctx=ctx;
        this.width=width;
        this.height=height;
        this.blocks = [];
        this.intervals= [];
        this.animation = 0;
        this.random = random;
    }

    /**
     * Metoda create tworzy w miejscu x_pos, y_pos nowa animacje
     * @param {number} x_pos 
     * @param {number} y_pos 
     */
    create(x_pos,y_pos,scaling_speed,pallete=null){
        const velocity_y = Math.random() > 0.5 ? 1:1; 
        const velocity_x = Math.random()*3  * (Math.random() > 0.5 ? 1:-1); 
        const interval_id = setInterval(()=>{
            const color_one = Math.floor(Math.random()*2);
            if(pallete){
                this.blocks.push(new Field(x_pos,y_pos,velocity_x,velocity_y,1,pallete[color_one],scaling_speed,this.random));
                this.blocks.push(new Field(x_pos,y_pos,velocity_x,velocity_y,-1,pallete[color_one+2],scaling_speed,this.random));
            }else{
                this.blocks.push(new Field(x_pos,y_pos,velocity_x,velocity_y,1,BackgroundAnimation.colors[color_one],scaling_speed,this.random));
                this.blocks.push(new Field(x_pos,y_pos,velocity_x,velocity_y,-1,BackgroundAnimation.colors[color_one+2],scaling_speed,this.random));
            }
        },100);

        setTimeout(()=>{
            clearInterval(interval_id);
        },Math.floor(Math.random()*3000 + 1000))
    }

    /**
     * Rozpoczyna animacje
     */
    startAnimation(){
        const animate = () =>{
            this.ctx.clearRect(0,0,this.width,this.height);
            const newBlocks = [];
            this.blocks.forEach((block)=>{
                block.render(this.ctx);
                if(block.y_pos >0){
                    newBlocks.push(block);
                }
            })
            this.blocks = newBlocks;
            this.animation = window.requestAnimationFrame(animate);
        }
        this.animation = window.requestAnimationFrame(animate)
    }

    setHeight(height){
        this.height = height;
    }
    setWidth(width){
        this.width = width;
    }
    getWidth(){
        return this.width;
    }

    isAnimation_on(){
        return this.animation !== 0;
    }

    /**
     * Zatrzymuje animacje
     */
    stopAnimation(){
        this.animation = window.cancelAnimationFrame(this.animation)
    }
}

export default BackgroundAnimation;