import bullet from './bullet'
/**
 * 坦克的控制类。
 * @param {string} 目标坦克.
 */
export default class tank{
    constructor({life,dir,id,parent,className,status,x,y,t,r,b,l}) {
        this.life = life;
        this.dir = dir;
        this.status = status;
        this.t = t;
        this.r = r;
        this.b = b;
        this.l = l;
        this.oParent = document.querySelector(`#${parent}`);
        this.obj = this.created(id,className,x,y);
        this.speed = 2; //移动速度
        this.animation = null;
        this.bulletNum = 1;
    };
    /**
     * 创建坦克元素，
     * @param {string} id 元素标识
     * @param {string} className 元素样式
     * @param {number} x 坐标
     * @param {number} y 坐标
     * @return {object} 返回坦克dom对象
     */
    created(id,className,x,y){
        let obj = document.createElement('div');
        obj.id = id;
        obj.className = className;
        obj.style.top = y + 'px';
        obj.style.left = x + 'px';
        this.oParent.appendChild(obj);
        return obj;
    };
    bullets(){
      setTimeout(()=>{
        console.log(this.bullet++)
      },100)
    };
    /**
     * 移动
     * @param {string} 移动方向
     */
    move(dir) {
        switch (dir) {
            case 'up':
                this.moveUp();
                break;
            case 'right':
                this.moveRight();
                break;
            case 'down':
                this.moveDown();
                break;
            case 'left':
                this.moveLeft();
                break;
            default:
                break;
        }
        if(this.animation == null){
            this.animationStar();
        }else {
            this.animationStop();
        }
    }

    /**
     * 坦克移动方向动画
     */
    animationStar(){
        let positions;
        let index = 0;

        switch (this.dir){
            case 'left':
                positions = this.l[this.status];
                break;
            case 'right':
                positions = this.r[this.status];
                break;
            case 'up':
                positions = this.t[this.status];
                break;
            case 'down':
                positions = this.b[this.status];
                break;
        }

        let run = () => {
            this.obj.style.backgroundPosition = `${positions[index]}px 0`;
            index++;
            if(index >= positions.length){
                index = 0;
            }
            this.animation = setTimeout(run,2);
        };
        run();
    }
    /**
     * 清空坦克移动动画
     */
    animationStop(){
        clearInterval(this.animation);
        this.animation = null;
    }
    /**
     * 左移动
     */
    moveLeft() {
        if (this.obj.offsetLeft <= 0) {
            this.obj.style.left = 0;
        } else {
            this.obj.style.left = this.obj.offsetLeft - this.speed + 'px';
            if (this.axis()) {
                this.obj.style.left = this.obj.offsetLeft + this.speed + 'px';
            }
        }
        this.dir = 'left';
    }

    /**
     * 右移动
     */
    moveRight() {
        if (this.obj.offsetLeft >= this.oParent.offsetWidth - this.obj.offsetWidth) {
            this.obj.style.left = this.oParent.offsetWidth - this.obj.offsetWidth + 'px';
        } else {
            this.obj.style.left = this.obj.offsetLeft + this.speed + 'px';
            if (this.axis()) {
                this.obj.style.left = this.obj.offsetLeft - this.speed + 'px';
            }
        }
        this.dir = 'right';
    }

    /**
     * 上移动
     */
    moveUp() {
        if (this.obj.offsetTop <= 0) {
            this.obj.style.top = 0;
        } else {
            this.obj.style.top = this.obj.offsetTop - this.speed + 'px';
            if (this.axis()) {
                this.obj.style.top = this.obj.offsetTop + this.speed + 'px';
            }
        }
        this.dir = 'up';
    }

    /**
     * 下移动
     */
    moveDown() {
        if (this.obj.offsetTop >= this.oParent.offsetHeight - this.obj.offsetHeight) {
            this.obj.style.top = this.oParent.offsetHeight - this.obj.offsetHeight + 'px';
        } else {
            this.obj.style.top = this.obj.offsetTop + this.speed + 'px';
            if (this.axis()) {
                this.obj.style.top = this.obj.offsetTop - this.speed + 'px';
            }
        }
        this.dir = 'down';
    }

    /**
     * 坦克与墙的碰撞检测。
     * @return {Boolean} true 碰上 false 没碰
     */
    axis() {
        const wall = document.querySelectorAll('.wall');
        const iron = document.querySelectorAll('.iron');
        const allWall = [...wall, ...iron];
        for (let item of allWall) {
            if (this.casks(item)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 碰撞检测。
     * @return {Boolean}
     */
    casks(obj1) {
        const L1 = obj1.offsetLeft;
        const T1 = obj1.offsetTop;
        const R1 = L1 + obj1.offsetWidth;
        const B1 = T1 + obj1.offsetHeight;

        const L2 = this.obj.offsetLeft;
        const T2 = this.obj.offsetTop;
        const R2 = L2 + this.obj.offsetWidth;
        const B2 = T2 + this.obj.offsetHeight;

        if (L1 >= R2 || T1 >= B2 || R1 <= L2 || B1 <= T2) {
            return false;
        }
        return true;
    }


}
