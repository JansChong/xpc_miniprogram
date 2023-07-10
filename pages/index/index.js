// 导入模块
import {
    getTabs, // 标签页
    recommend, // 推荐列表
} from "../../api/home";

// 导入Toast模块
import Toast from '@vant/weapp/toast/toast';


// index.js
Page({
    // 模块功能
    getTabs,
    recommend,

    // 页面初始数据
    data: {
        // tab默认索引
        active: 1,
        // 是否显示分享面板
        showShare: false,
        // 分享面板配置选项
        options: [
            [{
                    name: '微信',
                    icon: 'wechat',
                    openType: 'share'
                },
                {
                    name: '朋友圈',
                    icon: 'wechat-moments'
                },
                {
                    name: '微博',
                    icon: 'weibo'
                },
                {
                    name: 'QQ',
                    icon: 'qq'
                }
            ],
            [{
                    name: '复制链接',
                    icon: 'link'
                },
                {
                    name: '分享海报',
                    icon: 'poster'
                },
                {
                    name: '二维码',
                    icon: 'qrcode'
                },
                {
                    name: '小程序码',
                    icon: 'weapp-qrcode'
                }
            ]
        ],
    },

    /**
     * 自定义方法, 分享按钮
     */
    share() {
        // 显示分享面板
        this.setData({
            showShare: true
        })
    },
    /**
     * 自定义方法, 取消分享
     */
    onClose() {
        // 隐藏分享面板
        this.setData({
            showShare: false
        })
    },

    /**
     * 自定义方法, 选择分享方式
     */
    onSelect(event) {
        Toast(event.detail.name);
        // 关闭分享面板
        this.onClose();
      },

    // 页面加载
    onLoad() {
        // 获取标签页
        this.getTabs();
        // 获取推荐列表
        this.recommend();
    }


})