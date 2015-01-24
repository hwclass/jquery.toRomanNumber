/*!
 * jquery.toRomanNumber. A number conversion script to roman number as string.
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : December 2014
 * Version : 1.0.0
 * Released: December 2nd, 2014
 * jQuery Availability : >= 1.7.0
 *
 *
 */
 (function ($) {
    $.fn.toRomanNumber = function (hinduArabicNumber) {
      var romanValues = new Array(1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1);
      var romanStrings = new Array("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I");
      var numb = parseInt(hinduArabicNumber);
      if (!isNaN(numb)) {
        if ( numb <= 9999 || numb > 1) {
          var stringFormatOfTheGivenNumberInRoman = '';
          var tempNumb = numb;
          while (tempNumb > 0) {
            var i;
            for (i=0; i < romanValues.length; i++) {
              if ( tempNumb >= romanValues[i] ) {
                stringFormatOfTheGivenNumberInRoman += romanStrings[i];
                tempNumb -= romanValues[i];
                break;
              }
            }
          }
          return stringFormatOfTheGivenNumberInRoman;
        }
      } else {
        console.log('Please be sure that you have entered a valid digit.');
      }
   };
 })(jQuery);