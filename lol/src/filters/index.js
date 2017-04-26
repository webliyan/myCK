const GAME_TYPE = {
  '3':'匹配赛',
  '4': '排位赛',
  '5': '战队赛',
  '6': '大乱斗',
  '7': '人机'
}

const WIN = {
  '0':'',
  '1':'失败',
  '2':'胜利'
}

const AREAS = [
  {
    'id': 1,
    'isp': '电信一',
    'name': '艾欧尼亚'
  },
  {
    'id': 2,
    'isp': '网通一',
    'name': '比尔吉沃特'
  },
  {
    'id': 3,
    'isp': '电信二',
    'name': '祖安'
  },
  {
    'id': 4,
    'isp': '电信三',
    'name': '诺克萨斯'
  },
  {
    'id': 5,
    'isp': '电信四',
    'name': '班德尔城'
  },
  {
    'id': 6,
    'isp': '网通二',
    'name': '德玛西亚'
  },
  {
    'id': 7,
    'isp': '电信五',
    'name': '皮尔特沃夫'
  },
  {
    'id': 8,
    'isp': '电信六',
    'name': '战争学院'
  },
  {
    'id': 9,
    'isp': '网通三',
    'name': '弗雷尔卓德'
  },
  {
    'id': 10,
    'isp': '电信七',
    'name': '巨神峰'
  },
  {
    'id': 11,
    'isp': '电信八',
    'name': '雷瑟守备'
  },
  {
    'id': 12,
    'isp': '网通四',
    'name': '无畏先锋'
  },
  {
    'id': 13,
    'isp': '电信九',
    'name': '裁决之地'
  },
  {
    'id': 14,
    'isp': '电信十',
    'name': '黑色玫瑰'
  },
  {
    'id': 15,
    'isp': '电信十一',
    'name': '暗影岛'
  },
  {
    'id': 16,
    'isp': '网通五',
    'name': '恕瑞玛'
  },
  {
    'id': 17,
    'isp': '电信十二',
    'name': '钢铁烈阳'
  },
  {
    'id': 18,
    'isp': '电信十三',
    'name': '水晶之痕'
  },
  {
    'id': 19,
    'isp': '电信十四',
    'name': '均衡教派'
  },
  {
    'id': 20,
    'isp': '网通六',
    'name': '扭曲丛林'
  },
  {
    'id': 21,
    'isp': '教育网',
    'name': '教育网专区'
  },
  {
    'id': 22,
    'isp': '电信十五',
    'name': '影流'
  },
  {
    'id': 23,
    'isp': '电信十六',
    'name': '守望之海'
  },
  {
    'id': 24,
    'isp': '电信十七',
    'name': '征服之海'
  },
  {
    'id': 25,
    'isp': '电信十八',
    'name': '卡拉曼达'
  },
  {
    'id': 26,
    'isp': '网通七',
    'name': '巨龙之巢'
  },
  {
    'id': 27,
    'isp': '电信十九',
    'name': '皮城警备'
  }
]

 const hType = {
  'Tank': '坦克',
  'Mage': '法师',
  'Assassin': '刺客',
  'Fighter': '战士',
  'Support': '辅助',
  'Marksman': '射手'
}
 const dianType = {
  'fz': '辅助',
  'zd': '中单',
  'dy': '打野',
  'sd': '上单',
  'adc': 'ADC'
}
//返回英雄的可以打的位置
export const getDianType = function(dtype){
    return dianType[dtype];
}
//获取英雄的类型
export const getHeroType = function(htype){
    return hType[htype];
}

export  const getAreaName = function(id){
  for(var i in AREAS){
    if(AREAS[i].id==id){
      return AREAS[i].name;
    }
  }
}

export  const getGameType = function(type){
   return GAME_TYPE[type];
  
}
export  const getWin = function(win){
    return WIN[win];
}
export  const PlayerUrl = function(id){
  return "http://cdn.tgp.qq.com/lol/images/resources/usericon/"+id+".png";
}
export const headUrl = function(id){
  return 'http://cdn.tgp.qq.com/lol/images/resources/usericon/'+id+'.png';
}
//召唤师详情页 对战所用英雄头像地址
export const duizhanUrl = function(id){
  return "http://cdn.tgp.qq.com/pallas/images/champions_id/"+id+'.png';
}

//皮肤
export const pfUrl = function(obj){
  return "http://cdn.tgp.qq.com/pallas/images/skins/original/"+obj.num+"-"+obj.id+".jpg";
}



// 装备图片地址
export const jnUrl = function(jnid){
   return "http://ddragon.leagueoflegends.com/cdn/6.21.1/img/item/"+jnid+".png"
}

//时分秒转换
export const formatSeconds =function(time){
        var theTime = parseInt(time);// 秒  
    var theTime1 = 0;// 分  
    var theTime2 = 0;// 小时  
    if(theTime > 60) {  
        theTime1 = parseInt(theTime/60);  
        theTime = parseInt(theTime%60);  
            if(theTime1 > 60) {  
            theTime2 = parseInt(theTime1/60);  
            theTime1 = parseInt(theTime1%60);  
            }  
    }  
        var result = ""+parseInt(theTime)+"秒";  
        if(theTime1 > 0) {  
        result = ""+parseInt(theTime1)+"分"+result;  
        }  
        if(theTime2 > 0) {  
        result = ""+parseInt(theTime2)+"小时"+result;  
        }  
    return result;  
}  
