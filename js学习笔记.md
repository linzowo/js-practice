#JavaScript学习笔记
---
---
##练习
- [x] div加宽
- [x] div移动到指定位置
---
##练习流程图   
###div变宽动画效果
```flow
st=>start: 开始
in1=>inputoutput: start按钮
in2=>inputoutput: end按钮
out=>inputoutput: div变宽
op=>operation: 是否存在interval
cond=>condition: yes or no?
sub1=>subroutine: clearinterval
sub2=>subroutine: start interval
e=>end

st->in1->sub1->sub2->out->in2->sub2->e
```
###div移动到指定位置
- 流程-》点击按钮-》启动定时器-》间隔固定时间移动一定距离，形成一种动画效果-》移动到指定位置-》清理定时器。停止移动

```flow
st=>start: start
in1=>inputoutput: element,target
op0=>operation: element.timeid=interval
op1=>operation: var step=10,current=element.offsetLeft
sub1=>subroutine: step = step
sub2=>subroutine: step = -step
op3=>operation: current += step
cond1=>condition: current>target
cond2=>condition: |current-target|>|step|
out1=>operation: element.offsetLeft = target
e=>end

st->in1->op0->op1->cond1
cond1(yes)->sub2->op3->cond2
cond1(no)->sub1->op3
cond2(no)->out1->e
cond2(yes)->op1
```