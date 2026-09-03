使用方法：
1. 把你的照片复制到 images 文件夹，并命名为：01.jpg、02.jpg、03.jpg、04.jpg、05.jpg
2. 把你的 BGM 复制到 music 文件夹，并命名为：bgm.mp3
3. 不建议直接双击 index.html。请在这个文件夹里启动一个本地服务器：

   方法 A（电脑已安装 Python）：
   python -m http.server 8080

   然后浏览器打开：
   http://localhost:8080

4. 手机测试：让手机和电脑在同一 Wi-Fi 下，然后用电脑局域网 IP 打开，例如：
   http://192.168.1.10:8080

说明：iPhone Safari / 部分安卓浏览器会禁止网页在没有用户操作时自动播放有声音的音乐。所以页面带“轻触屏幕开始”，点击后 BGM 会稳定播放。
