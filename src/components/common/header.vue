<template>
    <div class="header">
        <el-row :gutter="10"><!--gutter属性来调整布局之间的宽度-->
            <!--Logo响应式布局-->
            <el-col :xs="12" :sm="12" :md="4">
                <div class="logo">
                    <span class="logo_prefix">JSPan</span><span class="logo_suffix">Admin</span>
                </div>
            </el-col>

            <!--Search-->
            <el-col :xs="12" :sm="12" :md="8">
                <div class="search">
                    <el-input 
                        size="small"
                        placeholder="Search for...">
                        <el-button slot="append" icon="search"/>
                    </el-input>
                </div>
            </el-col>

            <!--网址，可以搞个跑马灯通知消息-->
            <el-col :xs="24" :sm="12" :md="4">
                <div class="website">
                    <span>Website:</span>
                    <span>www.jspan.com</span>
                </div>
            </el-col>

            <el-col :xs="8" :sm="8" :md="{span:2,offset:4}">
                <div class="header-right">
                    <el-col :span="10">
                        <!--消息下拉列表-->
                        <el-dropdown menu-align="start">
                            <span>
                                <el-badge :value="5" class="item">
                                    <i class="el-icon-message"/>
                                </el-badge>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <span class="pop-title">You hava new meaages! </span>
                                </el-dropdown-item>

                                <el-dropdown-item v-for="dialog in dialogs" :key="dialog.time" divided>
                                    <div class="pop-div">
                                        <span class="pop-image">
                                            <image :src="dialog.header" width="50px"/>
                                        </span>
                                        <span class="pop-content">
                                            {{dialog.content}}
                                        </span>
                                        <span class="pop-time">
                                            {{dialog.tome}}分钟前
                                        </span>
                                    </div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    <el-col :span="8">
                        <el-dropdown menu-align="start">
                            <span>
                                <el-badge :value="3" class="item">
                                    <i class="el-icon-date"/>
                                </el-badge>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <span>You have new tasks! </span>
                                </el-dropdown-item>

                                <el-dropdown-item v-for="task in tasks" :key="task.id" divided>
                                    <div class="task-div">
                                        <span class="task-span task-tag">
                                            <el-tag type="danger" v-if="task.rank==1">紧急</el-tag>
                                            <el-tag type="warning" v-if="task.rank==2">重要</el-tag>
                                            <el-tag type="success" v-if="task.rank==3">正常</el-tag>
                                        </span>
                                        <span class="task-span task-content">
                                            {{task.content}}<br/>
                                        </span>
                                        <span class="task-time">
                                            截止:{{task.overtime}}
                                        </span>
                                        <span class="task-span task-btn">
                                            <el-button type="primary" size="mini">完成</el-button>
                                        </span>
                                    </div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialogs:[
                {header:'../../static/images/b_header2.jpg',content:'我有一个Style样式需要您帮忙处理以下。',time:'3'},
                {header:'../../static/images/b_header3.jpg',content:'中午一起吃个饭吧，我请客。',time:'15'},
                {header:'../../static/images/b_header.jpg',content:'需要处理一下POP展示的白边样式。',time:'18'},
                {header:'../../static/images/b_header2.jpg',content:'下午3点开需求会议，准时参加。',time:'24'},
                {header:'../../static/images/b_header3.jpg',content:'晚上我开车送你回家，你请我吃晚饭。',time:'3'},
            ],
            tasks:[
                {id:1,rank:1,content:'完成JSPangAdmin头部头部组件的编写。',overtime:'2019/12/12'},
                {id:2,rank:2,content:'完成GitHub仓库的初始化工作。',overtime:'2019/12/22'},
                {id:3,rank:3,content:'在阿里云进行网站备案，完成后通知组长。',overtime:'2019/12/25'},
            ]
        }
    }
}
</script>

<style scoped>
    .header{
        position: fixed;/**绝对定位 */
        box-sizing: border-box;
        width: 100%;
        height: 66px;        
        font-size: 14px;
        line-height: 66px;/**设置行高*/
        background-color: #324157;
        box-shadow: 2px 0 3px rgba(0, 0, 0, .5);/**设置阴影 */
        z-index: 1000;/**设置元素的堆叠顺序拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面 */
        padding: 0 32px 0 40px;
        overflow: hidden;
    }
    .header .logo{
        float: left;/**元素向左浮动 */
        cursor: pointer;/**光标呈现为指示链接的指针 */
        font-size: 22px;
    }
    .logo_prefix{
        color: #209e91;
    }
    .logo_suffix{
        color: #fff;
    }
    .header .search{
        float: left;
        color: #fff;
        font-size: 14px;
    }
    .website span{
        display: inline-block;
        color: #209e91
    }
    .website span:first-child{
        color:#fff
    }
    .header-right{
        padding-top: 25px;
        line-height: 10px;
    }
    .header-right span{
        display: inline-block;
        margin-left: 14px;
        font-size: 18px;
        color: #fff;
        line-height: 1px;
        height: 18px;
        cursor: pointer;
    }
    .header-right span:hover{
        color:#209e91;
    }
    .pop-title{
        font-size: 12px;
        color:#209e91;
    }
    .pop-image{
        display: block;
        float: left;
    }
    .pop-image img{
        border-radius: 50%;
    }
    .pop-div{
        height: 55px;
        clear:both;
    }
    .pop-content{
        display: block;
        font-size: 12px;
        line-height: 14px;
        padding-top: 15px;
        margin-left: 60px;
    }
    .pop-time{
        display: block;
        float: right;
        font-size: 10px;
        color:#ccc;
    }
    .task-div{
        clear: both;
        height: 55px;
    }
    .task-span{
        display: block;
        float: left;
        font-size: 12px;
    }
    .task-content{
        width:160px;
        line-height: 16px;
        margin-left: 10px;
        padding:5px;
    }
    .task-time{
        clear: both;
        float: right;
        color:#ccc;
    }

</style>