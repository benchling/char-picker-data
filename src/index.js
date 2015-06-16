/*global goog, bnch*/
goog.provide('bnch.CharPickerData');

goog.require('goog.i18n.CharPickerData');
goog.require('goog.i18n.CharListDecompressor');

bnch.CharPickerData = goog.i18n.CharPickerData;

var decompressor = new goog.i18n.CharListDecompressor();
bnch.CharPickerData.prototype.toCharList = function(str) {
  'use strict';
  return decompressor.toCharList(str);
};

goog.exportSymbol('bnch.CharPickerData', bnch.CharPickerData);
