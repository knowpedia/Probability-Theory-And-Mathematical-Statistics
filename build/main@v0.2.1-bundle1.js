
/*************************** [bundle] ****************************/
// Original file:./src/random-events-and-probability.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('34');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('35');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-47c45f6f":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-47c45f6f":""},[createElement('header',{"id":"fixed-top","data-quickpaper-47c45f6f":""},["随机事件与概率"]),createElement('h1',{"id":"fixed-sjsjjqys","data-quickpaper-47c45f6f":""},["随机事件及其运算"]),createElement('h3',{"id":"fixed-sjxx","data-quickpaper-47c45f6f":""},["随机现象"]),createElement('p',{"data-quickpaper-47c45f6f":""},["概率论与数理统计研究的对象是随机现象。",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["概率论"]),"是研究随机现象的模型（即概率分布），",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["数理统计"]),"是研究随机现象的数据收集与处理。"]),createElement('p',{"data-quickpaper-47c45f6f":""},["在一定的条件下，并不总是出现相同结果的现象称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["随机现象"]),"（在大量重复的实验中，结果具有统计规律的现象）。"]),createElement('p',{"data-quickpaper-47c45f6f":""},["对在相同条件下可以重复的随机现象的观察、记录、实验称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["随机试验"]),"。"]),createElement('h3',{"id":"fixed-ybkj","data-quickpaper-47c45f6f":""},["样本空间"]),createElement('p',{"data-quickpaper-47c45f6f":""},["随机现象的一切可能基础结果组成的集合称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["样本空间"]),"，记为Ω={ω}，其中ω表示基本结果，又称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["样本点"]),"。样本点是今后抽样的最基本单元。"]),createElement('p',{"data-quickpaper-47c45f6f":""},["将样本点的个数为有限个或可列个的情况归为一类，称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["离散样本空间"]),"；将样本点的个数为不可列无限个的情况归为另一类，称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["连续样本空间"]),"。这两类样本空间有着本质上的差异。"]),createElement('h3',{"id":"fixed-sjsj","data-quickpaper-47c45f6f":""},["随机事件"]),createElement('p',{"data-quickpaper-47c45f6f":""},["随机现象的某些样本点组成的集合称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["随机事件"]),"，简称",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["事件"]),"，常用大写字母A，B，C，...表示。"]),createElement('h3',{"id":"fixed-sjbl","data-quickpaper-47c45f6f":""},["随机变量"]),createElement('p',{"data-quickpaper-47c45f6f":""},["用来表示随机现象结果的变量称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["随机变量"]),"，常用大写字母X，Y，Z表示。"]),createElement('h3',{"id":"fixed-sjy","data-quickpaper-47c45f6f":""},["事件域"]),createElement('p',{"data-quickpaper-47c45f6f":""},["所谓的\"事件域\"从直观上讲就是一个样本空间中某些子集及其运算（并、交、差、对立）结果而组件的集合类，记事件域为ℱ。"]),createElement('h2',{"data-quickpaper-47c45f6f":""},["定义"]),createElement('p',{"data-quickpaper-47c45f6f":""},["设Ω为一样本空间，ℱ为Ω的某些子集所组成的集合类。如果ℱ满足："]),createElement('ul',{"data-quickpaper-47c45f6f":""},[createElement('li',{"data-quickpaper-47c45f6f":""},["（1）Ω∈ℱ，"]),createElement('li',{"data-quickpaper-47c45f6f":""},["（2）若A∈ℱ，则对立事件",createElement('span',{"kp-math-formula":"mathFormulas[0]","data-quickpaper-47c45f6f":""},[]),"∈ℱ，"]),createElement('li',{"data-quickpaper-47c45f6f":""},["（3）若A",createElement('sub',{"data-quickpaper-47c45f6f":""},["n"]),"∈ℱ，n=1，2，...，则可列并",createElement('span',{"kp-math-formula":"mathFormulas[1]","data-quickpaper-47c45f6f":""},[])])]),createElement('p',{"data-quickpaper-47c45f6f":""},["则称ℱ为一个",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["事件域"]),"，又称为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["σ域"]),"或",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["σ代数"]),"。"]),createElement('p',{"data-quickpaper-47c45f6f":""},["在概率论中，又称（Ω，ℱ）为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["可测空间"]),"，这里\"可测\"是指ℱ中都是有概率可言的事件。"]),createElement('h1',{"id":"fixed-glddyjqqdff","data-quickpaper-47c45f6f":""},["概率的定义及其确定方法"]),createElement('h2',{"data-quickpaper-47c45f6f":""},["定义"]),createElement('p',{"data-quickpaper-47c45f6f":""},["设Ω为一个样本空间，ℱ为Ω的某些子集组成的一个事件域。如果对任一事件A∈ℱ，定义在ℱ上的一个实值函数P(A)满足："]),createElement('ul',{"data-quickpaper-47c45f6f":""},[createElement('li',{"data-quickpaper-47c45f6f":""},["（1）",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["非负性公理"]),"若A∈ℱ，则P(A)≥0，"]),createElement('li',{"data-quickpaper-47c45f6f":""},["（2）",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["正则性公理"]),"P(Ω)=1，"]),createElement('li',{"data-quickpaper-47c45f6f":""},["（3）",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["可列可加性公理"]),"若A",createElement('sub',{"data-quickpaper-47c45f6f":""},["1"]),"，A",createElement('sub',{"data-quickpaper-47c45f6f":""},["2"]),"，...，A",createElement('sub',{"data-quickpaper-47c45f6f":""},["n"]),"，...互不相容，则",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[2]","data-quickpaper-47c45f6f":""},[])])]),createElement('p',{"data-quickpaper-47c45f6f":""},["则称P(A)为事件A的",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["概率"]),"，称三元素（Ω，ℱ，P）为",createElement('span',{"class":"important","data-quickpaper-47c45f6f":""},["概率空间"]),"。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/random-events-and-probability.paper?QuickPaper&type=script&lang=js&hash=47c45f6f
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                mathFormulas: {}
            };
        },
        mounted() {

            this.mathFormulas = [
                this.$mathFormula.upLine('A'),
                this.$mathFormula.join(this.$mathFormula.listedOr('n=1', '∞'), '∈ℱ'),
                this.$mathFormula.join("P", this.$mathFormula.bracket(this.$mathFormula.join(this.$mathFormula.listedOr('i=1', '∞'), this.$mathFormula.rightBottom('A', 'i')), 'small'), '=', this.$mathFormula.sum('i=1', '∞', this.$mathFormula.join('P', this.$mathFormula.bracket(this.$mathFormula.rightBottom('A', 'i'), 'small'))))
            ];
        },
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/random-events-and-probability.paper?QuickPaper&type=style&lang=css&hash=47c45f6f
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
