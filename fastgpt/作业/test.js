function main( {data1}) {
//简单的 Markdown 到 HTML 转换函数
function simpleMarkdownToHtml(markdown) {
//替换标题
markdown = markdown. replace(/^# (.*$) /gm, '<h1>$1</h1>');
markdown = markdown. replace (/^## (.*$) /gm, '<h2>$1</h2>');
markdown = markdown.replace(/^林林#（.*$)/gm,'<h3>$1</h3>');
// 替换粗体
markdown = markdown. replace (/\*\* (.*?)\*\*/g,'«strong>$1</strong>');
markdown = markdown. replace (/__ (.*?) _/g,'«strong>$1</strong>');
//替换斜体
markdown = markdown. replace (/\* (.*?)\*/g,'<em>$1</em>');
markdown = markdown. replace(/_(.*?)_/g,'<em>$1</em>');
//替换链接
markdown = markdown.replace(/\[(.*?)\]1((.*\)1)/g,“sa href="$2">$1</a>")：
//替换图片
markdown = markdown. replace(/!1IC.*7)1J1(（.*7)1)/9, “<img src="$2" alt="$1">)：
1/替换无序列表
markdown = markdown. replace (/a1s*1*1s1-*$)/gm, “<11>$1</11>"):
markdown = markdown. replace(/^1s*-1s1 •*$)/9m，‘<1i=$1</1i-);
markdown = markdown. replace(/<li>.*<\/li>/g, function (match) {
return '<ul>' + match + '</ul>';
});
1/替换段落
markdown = markdown. replace (/^(?!<[a-z]) (.*$) /gm, function (match) {
if (match.trim() === '') return " return '<p>' + match + '</p>';
});
1/ 替换换行符为
markdown = markdown. replace (/\n/g, '«br»');
return markdown;
}
const htmlContent = simpleMarkdownToHtml(data1) ;
return {
markdown_content: datal, html content: htmlContent
}
}