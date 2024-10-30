const { regClass, property } = Laya;
import { CaiPre } from "./CaiPre";
import { Main } from "./Main";
import { tan_chuang } from "./tan_chuang";
@regClass()
export class MainController extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    @property({type:[Laya.Prefab]})
    public  pres:[Laya.Prefab]


    @property({type:Laya.Box})
    public cai_liao:Laya.Box

    @property(Laya.Sprite)
    public hen_xian:Laya.Sprite

    @property(Laya.Prefab)
    public li_zhi:Laya.Prefab

    @property(Laya.Sprite)
    public neibu:Laya.Sprite

    @property(Laya.FontClip)
    public fen_label:Laya.FontClip

    @property(Laya.Prefab)
    public lianjiPre:Laya.Prefab

    @property(Laya.Image)
    public yinyue:Laya.Image

    private funo:Laya.Box

    private width:number

    private height:number

    private preImg:Laya.Image

    private isAnXia:boolean = false

    public static  gameState:number = 1//1-游戏开始，2-游戏结束,0-未开始
    public static  yinState:number = 1//

    private dia:Laya.Dialog

    private zui:Laya.Dialog

    private fen_list: number[] = []

    private last_hb_time:number = 0 //最后一次合并的时间

    private total_fen: number = 0 //总共多少分

    private last_hb_pos:number[] = []


    
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        // Laya.loader.load("resources/mp3/diao.mp3").then(res=>{
        //     console.log("加载完成")
        // })
    //调用性能统计面板方法，(0,0)为面板位置坐标
       //Laya.Stat.show(0, 0);
        this.width = Laya.stage.width
        this.height = Laya.stage.height
        
        this.neibu.width = this.width
        this.neibu.height = this.height

        this.createFuno()
        console.log("宽高",this.width,this.height)
        // Laya.SoundManager.setSoundVolume(0,"resources/mp3/bing.mp3")
        // Laya.SoundManager.setSoundVolume(1,"resources/mp3/diao.mp3")
        //Laya.SoundManager.setSoundVolume(0,"resources/mp3/diao.mp3")

        Laya.stage.on("showXian",()=>{
            //监听位置超线
            if(!this.hen_xian.visible){
                this.hen_xian.visible = true
            }
            
        })
        Laya.loader.load("resources/preb/gmo.lh").then(res => {
            let dlg: Laya.Dialog = res.create();
            
            dlg.width = this.width
            dlg.height = this.height
            this.dia = dlg
            
        });

        Laya.loader.load("resources/preb/zuihou.lh").then(res=>{
            this.zui = res.create();
            this.zui.isPopupCenter = true    
        })


        Laya.stage.on("gameOver",()=>{
            //游戏解释
            this.gameOver()
        })
        Laya.stage.on("gameStart",()=>{
            //游戏开始
            this.gameStart()
        })

        this.yinyue.on(Laya.Event.CLICK,(e:any)=>{
            
            if(MainController.yinState == 1){
                MainController.yinState = 0
                //下面开启
                this.yinyue.skin = "resources/img/bg/yinyue.png"
            }else{
                MainController.yinState = 1
                 this.yinyue.skin = "resources/img/bg/yinyue1.png"
            }
            

            e.stopPropagation();
           
            
        })
        this.yinyue.on(Laya.Event.MOUSE_DOWN,(e:any)=>{
            
            e.stopPropagation();
        })

        this.hen_xian.width = this.width
        this.hen_xian.getComponent(Laya.BoxCollider).width = this.width
        console.log(this.hen_xian.y,"线")
        
        
        let kuan = 20
        let spa = 10
        for(let i =0; i < 200; i++){
            let aw = (i+1) * (kuan + spa)
            if (aw > this.width + kuan){
                break
            }
            let x0 = i * (kuan + spa)
            let x1 = x0 + kuan
            this.hen_xian.graphics.drawLine(x0,0,x1,0,"#ff0000",4)

        }
        

        this.randMake()
        Laya.stage.on("randMake",()=>{
            this.randMake()
        })

        Laya.stage.on("heBing",(pox:number,poy:number,labelIndex:number)=>{
            this.heBing(pox,poy,labelIndex)
        })
    
    }

    createFuno():void{
        this.funo = new Laya.Box()
        this.funo.width = this.width
        this.funo.height = this.height
        this.neibu.addChild(this.funo)
    }

    showDialog():void{
      let tac =  this.dia.getComponent(Laya.Script) as tan_chuang
      tac.startShow(this.total_fen)
    }

    getAllChild():void{
        
    }

    gameOver():void{
        if(MainController.gameState == 2){
            return
        }
        MainController.gameState = 2
        Laya.SoundManager.playSound("resources/mp3/jieshu.mp3", 1, null)
        this.removeXia()
        this.showDialog()

    }

    removeXia():void{
        this.preImg = null
        this.isAnXia = false
        this.funo.destroyChildren()
        this.funo.removeSelf()
        this.funo.destroy(true)
        this.funo = null

    }

    gameStart():void{
        
        setTimeout(()=>{
            
            this.createFuno()
            MainController.gameState = 1
            this.hen_xian.visible = true
            this.total_fen = 0
            this.fen_list = []
            this.fen_label.value = "0"
            this.randMake()
        },500)
       
    }

    
    heBing(pox:number,poy:number,labelIndex:number):void{
        if(labelIndex == this.pres.length - 1){
            return
        }
        if(MainController.yinState == 1){
            Laya.SoundManager.playSound("resources/mp3/bing.mp3", 1, null)
        }
        //加分数
        
        this.fen_list.push((labelIndex + 1) * 2)
        this.last_hb_time = Date.now()
    

        let xinImg = this.pres[labelIndex + 1].create() as Laya.Image
        xinImg.anchorX = 0.5
        xinImg.anchorY = 0.5
        xinImg.pos(pox,poy)
        this.funo.addChild(xinImg)
        
        let caiJs = xinImg.getComponent(Laya.Script) as CaiPre
        caiJs.startPol(2)
        //创建粒子

        let liUi = this.li_zhi.create() as Laya.Sprite
        liUi.pos(pox,poy)
        liUi.width = xinImg.width + 100
        liUi.height = xinImg.height + 100
        this.funo.addChild(liUi)
        this.last_hb_pos = [pox,poy,-(xinImg.width / 2)-100]

        if(labelIndex == 8){
            this.zui.popup()
        }

    }

    //随机创建材料
     randMake(): void{
        if(MainController.gameState != 1){
            return
        }
        if (this.preImg){
            console.log("还有")
            return
        }
        let rindex = Math.floor(Math.random() * 5)
        
        this.preImg =  this.pres[rindex].create() as Laya.Image
        this.preImg.anchorX = 0.5
        this.preImg.anchorY = 0.5

        let rigid =  this.preImg.getComponent(Laya.RigidBody)
        rigid.enabled = false

        this.preImg.pos(this.width / 2, 80 + this.preImg.height / 2)
        this.funo.addChild(this.preImg)

    }

    onMouseDown(evt: Laya.Event): void {
        
        if(MainController.gameState != 1){
            return 
        }
        if(!this.preImg){
            return
        }
        this.isAnXia = true
        this.imgMove()
    }

    onMouseMove(evt: Laya.Event): void {
        if(MainController.gameState != 1){
            return 
        }
        if (this.isAnXia){
            this.imgMove()
        }
        
    }

    onMouseOut(evt: Laya.Event): void {
        if(MainController.gameState != 1){
            return 
        }
        this.imgOut()

    }
    onMouseUp(evt: Laya.Event): void {
        if(MainController.gameState != 1){
            return 
        }
        this.imgOut()
    }

    imgOut():void{
        if(MainController.gameState != 1){
            return 
        }
        if(!this.isAnXia){
            return
        }
        if(!this.preImg){
            this.isAnXia = false
            return;
        }
        this.isAnXia = false
        //this.preImg.getComponent(Laya.RigidBody).gravityScale = 3
        let caiJs = this.preImg.getComponent(Laya.Script) as CaiPre
        caiJs.startPol(1)
        this.preImg = null
        setTimeout(()=>{
            
            this.randMake()
        },1000)
        
    }

    imgMove():void{
        if(MainController.gameState != 1){
            return 
        }
        if(!this.preImg){
            this.isAnXia = false

            return;
        }
        let x = Laya.stage.mouseX
        let imgCen = this.preImg.width / 2
        if(imgCen + x >= this.width - 10){
            x = this.width - 10 - imgCen
        }else if(x - imgCen <= 10){
            x = 10 + imgCen
        }

        this.preImg.pos(x,this.preImg.y)
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
        let have_time = Date.now() - this.last_hb_time
        if(this.fen_list.length > 0 && have_time > 500){
            //过了半秒了
            let lian_ji = this.fen_list.length //连击次数 
            if(lian_ji >= 2){
                //console.log(`连击次数:${lian_ji}`)
                let lianTt:Laya.FontClip = this.lianjiPre.create() as Laya.FontClip
               
                let x = this.last_hb_pos[0]
                if (x <= 200){
                    x = 200
                }else if(x >= this.width - 200){
                    x = this.width - 200
                }
                lianTt.pos(x,this.last_hb_pos[1] - 200)
                lianTt.value = `${lian_ji}连击`
                this.owner.addChild(lianTt)
               
                Laya.Tween.to(lianTt,{scaleX:2.5,scaleY:2.5},1000,Laya.Ease.backIn)

                Laya.timer.once(1500,lianTt,()=>{
                    lianTt.removeSelf()
                })

            }
            let all_fen = 0
            this.fen_list.forEach(fen=>{
                all_fen += fen
            })
            this.fen_list = []
            this.total_fen += all_fen
            this.fen_label.value = this.total_fen.toString()
        }
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}