# deviceManage
科研设备共享平台

## 背景

从20世纪90年代开始，在“211工程”、 “985工程”等一批高校建设过程中，国家投入了大量经费用于仪器设备的建设。但是就利用率而言，有资料显示，目前国外一些发达国家大型仪器设备的利用率高达 170%～200%，而我国高校大型仪器设备的利用率仅为15%左右。重大科研基础设施和大型科学仪器（以下简称科研设施与仪器）作为国家和区域重要的战略资源，对科技创新及技术进步具有重大意义。目前，高校及科研单位在大型仪器的使用和共享中，存在利用率低，管理封闭，共享程度差的问题。建立完善的科研设施与仪器开放共享体系，能够使科技资源得以充分利用，为科技创新和社会需求服务，为实施创新驱动发展战略提供有效支撑。

## 后台项目启动

1.打开**api**路径下deviceManage问价夹下的**pom.xml**文件，以工程的方式打开（open as a project)

2.启动项目

3.后台基础访问路径为：**localhost:8080/api**

各个实体的基础接口路径，在repository包中进行对应查找，crud完全按照restful的路径访问方式


## 前台启动

进入**web**目录下，打开命令行，输入：

```
npm install -g grunt-cli yo generator-karma generator-angular
```

上面的命令安装项目所需要的工具。

然后，输入：

```
yo angular test
```

成功完成后，使用命令：grunt serve启动项目
