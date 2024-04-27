import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BxoeOxxJ.js";const c=JSON.parse('{"title":"MySQL","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/mysql.md","filePath":"guide/mysql.md"}'),h={name:"guide/mysql.md"},l=n(`<h1 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h1><h2 id="存储过程" tabindex="-1">存储过程 <a class="header-anchor" href="#存储过程" aria-label="Permalink to &quot;存储过程&quot;">​</a></h2><h3 id="循环执行" tabindex="-1">循环执行 <a class="header-anchor" href="#循环执行" aria-label="Permalink to &quot;循环执行&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 定义分页数量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @pageSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 定义变量 总数量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DECLARE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 赋值总数量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">into</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delete_standard_id;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 循环开始</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHILE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (rn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) DO</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 清除中间表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TRUNCATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delete_s_id;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 赋值中间表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delete_s_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delete_standard_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LIMIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @pageSize;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 关联中间表执行删除逻辑</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DELETE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bbs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b_business_standard bbs</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INNER JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delete_s_id d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bbs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 清除主表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DELETE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delete_standard_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LIMIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @pageSize;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 递减数量 提交执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@pageSize;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">commit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 循环结束</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">END</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WHILE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,4),k=[l];function t(p,e,d,E,r,g){return a(),i("div",null,k)}const D=s(h,[["render",t]]);export{c as __pageData,D as default};
