#!/usr/bin/env sh

# ����������ʱ��ֹ�ű�
set -e

# ����
npm run build

# cd �����������Ŀ¼�� 
cd dist

# �����Զ���������
# echo 'www.nianshao.xyz' > CNAME

git init
git add -A
git commit -m 'deploy'

# ���� https://nianshao1997.github.io
# git push -f git@github.com:nianshao1997/nianshao1997.github.io.git master

# ���� https://nianshao1997.github.io/nianshao1997.github.io
# git push -f git@github.com:nianshao1997/nianshao1997.github.io.git master:gh-pages

cd -