const { regClass } = Laya;
import { StartSceneBase } from "./StartScene.generated";

@regClass()
export class StartScene extends StartSceneBase {
    onAwake(): void {
        Laya.loader.load([
            "resources/mp3/diao.mp3",
            "resources/mp3/bing.mp3",
            "resources/cai/baozhi_1.png",
            "resources/cai/biaoqian.png",
            "resources/cai/dz.jpg",
            "resources/cai/guan.png",
            "resources/cai/hg_10.png",
            "resources/cai/honbei.png",
            "resources/cai/ji_8.png",
            "resources/cai/jiaozhi_3.png",
            "resources/cai/kourou_6.png",
            "resources/cai/lianji.png",
            "resources/cai/pgt_7.png",
            "resources/cai/qzy_5.png",
            "resources/cai/rwan_4.png",
            "resources/cai/sucai_2.png",
            "resources/cai/xbj.jpg",
            "resources/cai/xia_9.png",
            "resources/cai/xian.png",

            "resources/img/bg/biaoqian.png",
            "resources/img/bg/btn1.png",
            "resources/img/bg/tanb.png",
            "resources/img/bg/yinyue.png",
            "resources/img/bg/yinyue1.png",
            "resources/img/bg/hcnyf.png",

            "resources/preb/chanzuo6.lh",
            "resources/preb/chuang7.lh",
            "resources/preb/chufang10.lh",
            "resources/preb/dami4.lh",
            "resources/preb/dengju5.lh",
            "resources/preb/diban3.lh",
            "resources/preb/gmo.lh",
            "resources/preb/keting11.lh",
            "resources/preb/lianjitxt.lh",
            "resources/preb/lizhi.lh",
            "resources/preb/muchai2.lh",
            "resources/preb/shafa8.lh",
            "resources/preb/woshi9.lh",
            "resources/preb/zuihou.lh"

        ], null, Laya.Handler.create(this, this.onProgress, null, false)
        ).then(res => {
            setTimeout(()=>{
                Laya.Scene.open("Scene.ls")
            },2000)
            
        })
    }
    onProgress(jd: number): void {
        this.progress.value = jd
        
    }
}