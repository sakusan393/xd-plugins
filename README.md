# XDプラグイン

* windowsでしか動作確認してません。

#### 使い方

* まるっとdevelopフォルダに置く
    * (メニューから、プラグイン > 開発版 > 開発フォルダーを表示で表示される場所)
    * https://adobexdplatform.com/plugin-docs/reference/structure/location.html

## create_separate_group

* 複数選択したオブジェクトを個別でグループ化
    * グループ化したいオブジェクトを選択後、実行
    * https://gyazo.com/78930d4c03346541d701323c16079885
* ショートカット：
    * win: ctrl + alt + shift + dキー
    * mac: cmd + opt + shift + dキー

## export_bounds_to_json

* 選択したグループに含まれるオブジェクトの情報を_props.jsonファイルとして書き出し
    * 書き出ししたいオブジェクトを含むグループを選択して実行
    * https://gyazo.com/4f6fc4dd65d2bb4e1ac612a6b4a51863
    * 選択したグループの直下に配置されたオブジェクトに対応
    * 対象オブジェクト情報：x, y, width, height, name
    * example:
        ```
        {
         "items": [
          {
           "x": 176,
           "y": 568,
           "width": 192,
           "height": 188,
           "name": "rect_2"
          },
          {
           "x": 648,
           "y": 448,
           "width": 440,
           "height": 120,
           "name": "rect_1"
          },
          {
           "x": 428,
           "y": 232,
           "width": 192,
           "height": 476,
           "name": "rect_0"
          }
         ]
        }
        ```
* ショートカット：
    * win: ctrl + alt + shift + aキー
    * mac: cmd + opt + shift + aキー

## set_position_y

* 選択したオブジェクトのY座標を25000px以上に設定
    * 移動したいオブジェクトを選択後、実行
    * https://gyazo.com/76f547cb6b51042c58bc79991b64116a
    * 通常の変形パネルでのY座標の操作は、25000以上の数値を入力に対応していないため
        * Y:40000と入力しても25000に付近の数値に上書きされる
        * https://gyazo.com/bbc39b7d9a5470cfaf91ca38f986bb9b
    * 入力欄での四則演算も可
        * ex. 24000+1000 , 3000*1000 etc..   
* ショートカット：
    * win: ctrl + alt + 0キー
    * mac: cmd + opt + 0キー

