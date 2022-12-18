//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
    "url(https://lxiaol.oss-cn-beijing.aliyuncs.com/pictures/fluid_banner.png)",
    "url(https://lxiaol.oss-cn-beijing.aliyuncs.com/pictures/%E8%8A%88%E6%9C%88-%E7%99%BD%E6%99%B6%E6%99%B6.jpg)", // 芈月-白晶晶
    "url(https://lxiaol.oss-cn-beijing.aliyuncs.com/pictures/%E5%85%AC%E5%9B%AD.png)",
    "url(https://lxiaol.oss-cn-beijing.aliyuncs.com/pictures/bg14.jpg)",
    "url(https://pic.imgdb.cn/item/6108ac4d5132923bf8ca61c3.png)", //小狐狸
    "url(https://pic.imgdb.cn/item/6126fbbd44eaada739d33cad.jpg)", //大桥白鹤梁
    "url(https://pic.downk.cc/item/5fdab63e3ffa7d37b30d320e.png)", //宇航员
    "url(https://p6.toutiaoimg.com/img/tos-cn-i-siecs4i2o7/49741d64ee9f4d24bf4c1c2406832fa7~noop.image)", //游戏机
    "url(https://p6.toutiaoimg.com/img/tos-cn-i-siecs4i2o7/c4bdd673c30147a290a8dc1f25ad1e62~noop.image)", //INTER NET
    "url(https://pic.imgdb.cn/item/609e0186d1a9ae528ffff80c.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex = Math.floor(Math.random() * (backimg.length));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];


// //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var bannerimg = [
//     "url(https://lxiaol.oss-cn-beijing.aliyuncs.com/pictures/bg17.jpg)",
//     "url(https://lxiaol.oss-cn-beijing.aliyuncs.com/pictures/fluid_banner.png)"
// ];
// //获取banner图片总数，生成随机数
// var bannerindex = Math.ceil(Math.random() * (bannerimg.length - 1));
// //重设banner图片
// document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];