import { MainController } from "./MainController";

//
const { regClass, property } = Laya;

@regClass()
export class CaiPre extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    public activeState: number = 0
    private labels: { [key: string]: any } = { "c2": 0, "c3": 1, "c4": 2, "c5": 3, "c6": 4, "c7": 5, "c8": 6, "c9": 7, "c10": 8, "c11": 9 }

    private myLable = ""

    private zhi_text: Laya.Label

    private haveShang = 0 //是否有向上的速度

    startPol(activeState: number = 1): void {
        
        this.activeState = 1
        let rigid = this.owner.getComponent(Laya.RigidBody)
        rigid.enabled = true

        let bo:Laya.CircleCollider = this.owner.getComponent(Laya.CircleCollider)
        bo.enabled = true

        rigid.gravityScale = 3
        this.myLable = rigid.label

        
    }

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        // this.zhi_text = new Laya.Label(this.activeState.toString())
        // this.zhi_text.pos(50,50)
        // this.owner.addChild(this.zhi_text)

        let rigid = this.owner.getComponent(Laya.RigidBody)
        rigid.enabled = false

        let bo:Laya.CircleCollider = this.owner.getComponent(Laya.CircleCollider)
        bo.enabled = false

    }

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        
        if ( this.activeState == 2 && MainController.gameState == 1) {
            let uia = this.owner as Laya.Sprite
            if (uia.y - (uia.height / 2) < 400) {
                
                //游戏结束
                let gt = uia.getComponent(Laya.RigidBody) as Laya.RigidBody
                let gty = gt.linearVelocity.y
                // if(gty < 0){
                //     if(this.activeState == 2 && this.haveShang == 0){
                //         this.haveShang = 1
                //         return
                //     }
                
                // }
                if(gty == 0 ){
                    
                    console.log("游戏结束 位置变化",gty);
                    Laya.stage.event("gameOver")
                    
                }
            }
        }
        // if(this.zhi_text){
        //     this.zhi_text.text = this.activeState.toString()
        // }
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}

    playDiaoMp3(): void {
        if(MainController.yinState == 1){
            Laya.SoundManager.playSound("resources/mp3/diao.mp3", 1, null)
       
        }
       
    }


    showXian(): void {
        //检测当前是否超过700
        let uia = this.owner as Laya.Sprite
        if (uia.y <= 1200) {

            Laya.stage.event("showXian")
        }
    }


    onTriggerEnter(other: Laya.PhysicsColliderComponent | Laya.ColliderBase, self?: Laya.ColliderBase, contact?: any): void {
        //console.log(other);
        if (MainController.gameState != 1) {
            return
        }
        let xin: any = other
        let gang_ti = xin.rigidBody as Laya.RigidBody
        let label = gang_ti.label as string
      

        if (label == "henxian") {
            if (this.activeState == 2 && MainController.gameState == 1) {
                let wgt:Laya.RigidBody = this.owner.getComponent(Laya.RigidBody)
                Laya.stage.event("gameOver")
                console.log("游戏结束 线",wgt.linearVelocity.y,this.myLable);

            }
        }

        if (label == "di_qiang") {
            if (this.activeState == 1) {
                this.activeState = 2
                //Laya.stage.event("randMake")
                this.playDiaoMp3()

            }

        }
        else if (label in this.labels) {




            let a1 = this.labels[label]
            let a2 = this.labels[this.myLable]
            if (this.activeState == 1) {
                let ojs = other.owner.getComponent(Laya.Script) as CaiPre
                // if (ojs.activeState == 1) {
                //     Laya.stage.event("gameOver")
                //     console.log("游戏结束 同state1");
                //     return
                // }

                this.activeState = 2
                this.playDiaoMp3()
                this.showXian()

                //Laya.stage.event("randMake")
            }
            if (a1 == a2 && this.id > other.id && a1 != 9) {
                //合并
                
                let x1 = other.owner.x
                let y1 = other.owner.y
                let x2 = this.owner.x
                let y2 = this.owner.y

                let x = (x1 + x2) / 2
                let y = (y1 + y2) / 2

                Laya.stage.event("heBing", [x, y, a2])
                this.owner.removeSelf()
                this.owner.destroy(true)
                other.owner.removeSelf()
                other.owner.destroy(true)

            }



        }

    }

}