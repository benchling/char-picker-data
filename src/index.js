/*global goog, bnch*/
goog.provide('bnch.CharPickerData');

goog.require('goog.i18n.CharPickerData');
goog.require('goog.i18n.CharListDecompressor');
goog.require('goog.i18n.uChar');

bnch.CharPickerData = goog.i18n.CharPickerData;

var decompressor = new goog.i18n.CharListDecompressor();
bnch.CharPickerData.helpers = {
    toCharList: function(str) {
      'use strict';
      return decompressor.toCharList(str);
    },
    toHexString: goog.i18n.uChar.toHexString
};

goog.exportSymbol('bnch.CharPickerData', bnch.CharPickerData);
