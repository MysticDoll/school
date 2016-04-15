# ReportBuilder
レポートをMarkdownで書くときのリアルタイムビューワーみたいなもんです。
gulpfileをいじくっていい感じにカスタマイズしてください。
## TODO
PDF出力は日本語対応してません。日本語対応したかったら自分でPhantomJSをビルドしなおすのをお勧めします。
# Usage
## Installation
clone repository and run `npm install`
## Build
run `npm run build` then build report.md into dest/index.html and dest/report.pdf.  
run `npm run watch` then create server with live-reload(distoribute `dest` directory) and watch `src` directory.(if `src/*.md`is changed, rebuild html(and pdf)-file)

# License
MIT see LICENSE
