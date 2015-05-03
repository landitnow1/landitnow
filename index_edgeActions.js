/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fb}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('fbgo');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gomaps}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('map');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7096, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7935, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8904, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_volta1}", "click", function(sym, e) {
         sym.play('map');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5066, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Land_It_Now_Link-06}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('land');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Up_It_Link}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('up');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_map}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('up');
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'fb'
   (function(symbolName) {   
   
   })("fb");
   //Edge symbol end:'fb'

   //=========================================================
   
   //Edge symbol: 'gomaps'
   (function(symbolName) {   
   
   })("gomaps");
   //Edge symbol end:'gomaps'

   //=========================================================
   
   //Edge symbol: 'map'
   (function(symbolName) {   
   
   })("map");
   //Edge symbol end:'map'

   //=========================================================
   
   //Edge symbol: 'volta1'
   (function(symbolName) {   
   
   })("volta1");
   //Edge symbol end:'volta1'

})(jQuery, AdobeEdge, "EDGE-5630612");