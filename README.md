# char-picker-data
Exports goog.i18n.CharPickerData for non-closure use.

```
var CharPickerData = require('char-picker-data');

var charPickerData = new CharPickerData();
// charPickerData.categories
// charPickerData.charList
// charPickerData.subcategories
charPickerData.toCharList(charPickerData.charList[0][0]);
```
