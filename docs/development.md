# Development

Memos is built with a curated tech stack. It is optimized for developer experience and is very easy to start working on the code:

1. It has no external dependency.
2. It requires zero config.
3. 1 command to start backend and 1 command to start frontend, both with live reload support.

## Prerequisites

- [Go](https://golang.org/doc/install)
- [Air](https://github.com/cosmtrek/air#installation) for backend live reload
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)

## Steps

1. pull source code

   ```bash
   mkdir -p ~/RemoteWorking/
   cd ~/RemoteWorking/

   git clone 某个仓库的地址 ./22.wmsrc_memos

   mkdir -p ~/RemoteWorking/08.文件备份
   mkdir -p ~/RemoteWorking/11.可以删除

   cp -r ~/RemoteWorking/22.wmsrc_memos ~/RemoteWorking/20.wmsrc_memos_wmraw_原始文件/

   ```

2. start backend using air(with live reload)

   ```bash
   # 01_先构建_前端_生成前端的目标文件夹
   [[ -f workspace.yml ]] && cd web && npm install && npm run build && touch ./dist/02_web构建时间_$(date '+%Y-%m-%d日_%H:%M:%S秒').md && ls -lah ./dist && cd ..
   # 02_把上面构建好的_前端目标文件夹_拷贝一份到_后端的./server/dist目录下
   # 03_上述覆盖了./server/dist中原有内容
   [[ -f workspace.yml ]] && [[ -d ./server/dist/ ]] && rm -rf ./server/dist/ && cp -r ./web/dist/ ./server/ && touch ./server/dist/03_从web前端dist拷贝时间_$(date '+%Y-%m-%d日_%H:%M:%S秒').md && ls -lah ./server/dist/

   # 05_为构建后端的go代码做准备
   [[ -f workspace.yml ]] && go mod download -x
   # 06_为了放置memos后端服务正在运行_运用下述命令_先把memos尝试停止运行_真实查找的是_"air -c scripts/.air.toml"
   [[ -f workspace.yml ]] && kill $(ps -ef | grep "air -c scripts/.air.toml" | grep -v grep | awk '{print $2}')
   # 07_构建后端的go代码_并且放入到./.air/目录下
   [[ -f workspace.yml ]] && [[ -f ./.air/memos ]] && rm -f ./.air/memos && go build -o ./.air/memos ./main.go && touch ./.air/07_go_build_memos_构建时间_$(date '+%Y-%m-%d日_%H:%M:%S秒').md && ls -lah ./.air
   # 09_调用刚刚生成的go后端可执行文件_设置用户名称是_root_密码是_a123456
   [[ -f workspace.yml ]] && ./.air/memos setup --host-username=root --host-password=a123456 --mode dev
   # 11_此时应该位于本git仓库的顶层目录下_类似_绝对目录为_/root/RemoteWorking/22.wmsrc_memos
   # 15_执行如下的命令_以dev_开发模式_启动后台
   # 16_缺省的后台服务端口是_8081
   [[ -f workspace.yml ]] && air -c scripts/.air.toml
   ```

3. 在浏览器中登录
- cloudstudio 会自动打开一个链接地址
- 类似于 https://ohbott-buwkox-8081.preview.myide.io/
- 每个学生打开的链接都不相同
- 选择中文语言
- 用户名称: root
- 用户密码: a123456

4. 尝试构建docker镜像
   ```bash
   # 01_下拉构建过程中需要用的镜像
   [[ -f workspace.yml ]] && docker pull golang:1.19.3-alpine3.16
   # 03_尝试构建镜像
   [[ -f workspace.yml ]] && docker build -f ./Dockerfile -t neosmemo/memos:latest .
   # 05_尝试在上面新构建的镜像_运行一个临时容器
   [[ -f workspace.yml ]] && docker run -it --rm --name m12_cloudstudio_memos -p 8118:8118 neosmemo/memos:latest
   # 07_尝试停止上面运行起来的m12_cloudstudio_memos容器
   [[ -f workspace.yml ]] && docker stop m12_cloudstudio_memos
   # 09_尝试使用docker-compose运行起来
   [[ -f workspace.yml ]] && docker-compose up -d 
   # 11_尝试停止docker-compose启动容器
   [[ -f workspace.yml ]] && docker-compose down
   ```

6. start frontend dev server
- 特别提示_在cloudstudio不需要执行这些步骤
- 原因是已经把生成的前端目标文件内容都拷贝到后端的相应目录中
- 后端已经能够找到那些目标文件

   ```bash
   <!-- cd web && pnpm i && pnpm dev -->
   cd web && npm install && npm run build && cd ..
   cp -r ./web/dist/ ./server/
   cd web && npm run dev
   ```



Memos should now be running at [http://localhost:3001](http://localhost:3001) and change either frontend or backend code would trigger live reload.
