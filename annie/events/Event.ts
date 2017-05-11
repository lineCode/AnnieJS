/**
 * @module annie
 */
namespace annie {
    /**
     * 事件类,annie引擎中一切事件的基类
     * @class annie.Event
     * @extends annie.AObject
     * @public
     * @since 1.0.0
     */
    export class Event extends AObject {
        /**
         * 舞台尺寸发生变化时触发
         * @Event
         * @property RESIZE
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static RESIZE:string = "onResize";
        /**
         * annie.Media相关媒体类的播放刷新事件。像annie.Sound annie.Video都可以捕捉这种事件。
         * @property ON_PLAY_UPDATE
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_PLAY_UPDATE="onPlayUpdate";
        /**
         * annie.Media相关媒体类的播放完成事件。像annie.Sound annie.Video都可以捕捉这种事件。
         * @property ON_PLAY_END
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_PLAY_END="onPlayEnd";
        /**
         * annie.Media相关媒体类的开始播放事件。像annie.Sound annie.Video都可以捕捉这种事件。
         * @property ON_PLAY_START
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_PLAY_START="onPlayStart";
        /**
         * annieUI.FlipBook组件翻页开始事件
         * @property ON_FLIP_START
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_FLIP_START="onFlipStart";
        /**
         * annieUI.FlipBook组件翻页结束事件
         * @property ON_FLIP_End
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_FLIP_End="onFlipEnd";
        /**
         * annieUI.ScrollPage组件滑动到开始位置事件
         * @property ON_SCROLL_TO_START
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_SCROLL_TO_START="onScrollToStart";
        /**
         * annieUI.ScrollPage组件滑动到结束位置事件
         * @property ON_SCROLL_TO_END
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_SCROLL_TO_END="onScrollToEnd";
        /**
         * annieUI.Slide 组件开始滑动事件
         * @property ON_SLIDE_START
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_SLIDE_START="onSlideStart";
        /**
         * annieUI.Slide 组件结束滑动事件
         * @property ON_SLIDE_END
         * @static
         * @since 1.1.0
         * @type {string}
         */
        public static ON_SLIDE_END="onSlideEnd";
        /**
         * 舞台初始化完成后会触发的事件
         * @Event
         * @property ON_STAGE_INIT
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static INIT_TO_STAGE:string = "onInitStage";
        /**
         * 显示对象加入到舞台事件
         * @Event
         * @property ADD_TO_STAGE
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static ADD_TO_STAGE:string = "onAddToStage";
        /**
         * 显示对象从舞台移出事件
         * @Event
         * @property REMOVE_TO_STAGE
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static REMOVE_TO_STAGE:string = "onRemoveToStage";
        /**
         * 显示对象 循环帧事件
         * @Event
         * @property ENTER_FRAME
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static ENTER_FRAME:string = "onEnterFrame";
        /**
         * MovieClip 播放完成事件
         * @Event
         * @property END_FRAME
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static END_FRAME:string = "onEndFrame";
        /**
         * MovieClip 帧标签事件
         * @Event
         * @property CALL_FRAME
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static CALL_FRAME:string = "onCallFrame";
        /**
         * 完成事件
         * @Event
         * @property COMPLETE
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static COMPLETE:string = "onComplete";
        /**
         * 加载过程事件
         * @Event
         * @property PROGRESS
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static PROGRESS:string = "onProgress";
        /**
         * 出错事件
         * @Event
         * @property ERROR
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static ERROR:string = "onError";
        /**
         * 中断事件
         * @Event
         * @property ABORT
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static ABORT:string = "onAbort";
        /**
         * 开始事件
         * @Event
         * @property START
         * @type {string}
         * @static
         * @public
         * @since 1.0.0
         */
        public static START:string = "onStart";
        /**
         * 定时器触发事件
         * @property TIMER
         * @static
         * @since 1.0.9
         * @public
         * @type {string}
         */
        public static TIMER:string="onTimer";
        /**
         * 定时器完成事件
         * @property TIMER_COMPLETE
         * @since 1.0.9
         * @static
         * @public
         * @type {string}
         */
        public static TIMER_COMPLETE:string="onTimerComplete";
        /**
         * 事件类型名
         * @property type
         * @type {string}
         * @public
         * @since 1.0.0
         */
        public type:string="";
        /**
         * 触发此事件的对象
         * @property target
         * @public
         * @since 1.0.0
         * @type {any}
         */
        public target:any=null;
        /**
         * 随着事件一起附带的信息对象
         * 所有需要随事件一起发送的信息都可以放在此对象中
         * @property data
         * @public
         * @since 1.0.0
         * @type {any}
         * @default null
         */
        public data:any=null;

        /**
         * @method Event
         * @param {string} type 事件类型
         */
        public constructor(type:string) {
            super();
            this._instanceType="annie.Event";
            this.type = type;
        }
        /**
         * 阻止向下冒泡事件,如果在接收到事件后调用事件的这个方法,那么这个事件将不会再向显示对象的子级派送
         * @method preventDefault
         * @public
         * @since 1.0.0
         */
        public preventDefault(){
            this._pd=true;
        }

        /**
         * 是否阻止事件向下冒泡
         * @property _pd
         * @type {boolean}
         * @private
         * @since 1.0.0
         */
        private _pd:boolean=false;
    }
}