import sys
import os
import pyperclip
import shutil
from urllib import parse
import time

if len(sys.argv) < 2:
    print("你需要拖入一个文件")
    for i in range(3):
        time.sleep(1)
        print("%d秒后退出" % (3-i))
    time.sleep(1)
    sys.exit()


# 如果为真则复制markdown格式的url，反之则是普通格式
url_markdown = True

repoPath = "F:\\C_program\\PracticeWeb\\issueRoot\\resource\\img\\"
customUrl = "https://cdn.jsdelivr.net/gh/btkrc/resource@main/img/"

imgPath = sys.argv[1]
imgFileName = parse.quote(imgPath.split("\\", -1)[-1])

shutil.move(imgPath, repoPath)

os.system("F:\\C_program\\PracticeWeb\\issueRoot\\resource\\push.sh")

if(url_markdown):
    pyperclip.copy("![]("+customUrl+imgFileName+")")
else:
    pyperclip.copy(customUrl+imgFileName)
