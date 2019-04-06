
var count = 0;
document.addEventListener("DOMContentLoaded", function(){
                          document.getElementById("on").onclick = function() {
                          count = 1;
                          document.getElementById("inputArea").innerHTML = "0.0";
                          };
                          
                          document.getElementById("off").onclick = function() {
                          count = 0;
                          document.getElementById("inputArea").innerHTML = "";
                          };
                          
                          document.getElementById("zero").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "0";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '0';
                          }
                          }
                          
                          };
                          
                          document.getElementById("one").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "1";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '1';
                          }
                          }
                          };
                          
                          document.getElementById("two").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "2";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '2';
                          }
                          }
                          };
                          
                          document.getElementById("three").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "3";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '3';
                          }
                          }
                          };
                          
                          document.getElementById("four").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "4";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '4';
                          }
                          }
                          };
                          
                          document.getElementById("five").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "5";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '5';
                          }
                          }
                          };
                          
                          document.getElementById("six").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "6";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '6';
                          }
                          }
                          };
                          
                          document.getElementById("seven").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "7";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '7';
                          }
                          }
                          };
                          
                          document.getElementById("eight").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "8";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '8';
                          }
                          }
                          };
                          
                          document.getElementById("nine").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "9";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '9';
                          }
                          }
                          };
                          
                          document.getElementById("dot").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = ".";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '.';
                          }
                          }
                          };
                          
                          document.getElementById("open").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "(";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '(';
                          }
                          }
                          };
                          
                          document.getElementById("close").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = ")";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += ')';
                          }
                          }
                          };
                          
                          document.getElementById("plus").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "+";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '+';
                          }
                          }
                          };
                          
                          document.getElementById("minus").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "-";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '-';
                          }
                          }
                          };
                          
                          document.getElementById("multiply").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "*";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '*';
                          }
                          }
                          };
                          
                          document.getElementById("divide").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          if(count == 1){
                          if(inputExpression == "0.0"){
                          document.getElementById("inputArea").innerHTML = "/";
                          }
                          else{
                          document.getElementById("inputArea").innerHTML += '/';
                          }
                          }
                          };
                          
                          document.getElementById("clear").onclick = function() {
                          if(count == 1){
                          document.getElementById("inputArea").innerHTML = "0.0";
                          }
                          };
                          
                          document.getElementById("equal").onclick = function() {
                          var inputExpression = document.getElementById("inputArea").innerHTML;
                          var evaluatedResult = eval(inputExpression);
                          if(count == 1){
                          document.getElementById("inputArea").innerHTML = evaluatedResult;
                          }
                          };
                          
                          });
