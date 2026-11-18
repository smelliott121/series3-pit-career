"""Build index.html from template + question files. Output is pure ASCII so it survives any encoding."""
import re, os
here=os.path.dirname(os.path.abspath(__file__))
t=open(os.path.join(here,'template.html'),encoding='utf-8').read()
qd=os.path.join(here,'questions')
qs=''.join(open(os.path.join(qd,f'ch{i}.js'),encoding='utf-8').read() for i in range(1,11))+open(os.path.join(qd,'style.js'),encoding='utf-8').read()
s=t.replace('/*QUESTIONS*/',qs)
parts=re.split(r'(<script>|</script>|<style>|</style>)',s);out=[];mode='html'
for p in parts:
    if p in('<script>','<style>'):mode='js' if p=='<script>' else 'css';out.append(p);continue
    if p in('</script>','</style>'):mode='html';out.append(p);continue
    def f(m):
        o=ord(m.group(0))
        if mode=='js':
            if o>0xFFFF:o-=0x10000;return '\\u%04x\\u%04x'%(0xD800+(o>>10),0xDC00+(o&0x3FF))
            return '\\u%04x'%o
        return '\\%x '%o if mode=='css' else '&#%d;'%o
    out.append(re.sub(r'[^\x00-\x7f]',f,p))
open(os.path.join(here,'..','index.html'),'w',encoding='ascii').write(''.join(out))
print('built index.html')
