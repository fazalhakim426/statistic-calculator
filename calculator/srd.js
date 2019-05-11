function check() {
input=document.getElementById("commainput").value; 
inputArr=input.split(",");
document.getElementById("result").innerHTML="startingPoint"+startingPointUpperlimit(inputArr)+"<br>c w"+classWidth1(inputArr);
console.log("min:"+min(inputArr));
console.log("max:"+max(inputArr));
console.log("range:"+range(inputArr));
console.log("numberOfClasses:"+numberOfClasses(inputArr));
console.log("classWidth:"+classWidth(inputArr));
console.log("classWidth1:"+classWidth1(inputArr));
console.log("startingPointLowerlimit:"+startingPointLowerlimit(inputArr));
console.log("startingPointUpperlimit:"+startingPointUpperlimit(inputArr));

 classesX=classes(inputArr);
for(t in classesX)
{
  console.log(classesX[t].lb+" "+classesX[t].ub);
}

}

// var srdPIP="YES";






//1. Find the largest and smallest values
//min
function min(arr) {
  // var len = arr.length;
  // var min = Infinity;
  // while (len--) {
  //   if (arr[len] < min) {
  //     min = arr[len];
  //   }
  // }
  // return min;
  return Math.min.apply(null,arr)
}
//mix
function max(arr) {
  // var len = arr.length;
  // var max = -Infinity;
  // while (len--) {
  //   if (arr[len] > max) {
  //     max = arr[len];
  //   }
  // }
  // return max;
  return Math.max.apply(null,arr);
}

//2.Compute the Range = Maximum - Minimum
function range(arr) {
  return max(arr)-min(arr);
}
// 3.Select the number of classes desired. This is usually between 5 and 20.
function numberOfClasses(arr){
//using formula 2k>n

for(let i=1;i<=20;i++){
if((2**i)>arr.length)
{
  return i;

}
}

}


//3end

// 4.Find the class width by dividing the range by the number of classes and rounding up
//base on range
function classWidth(arr){
  return range(arr)/numberOfClasses(arr);

}

//base on max-starting point
function classWidth1(arr)
{
  let w=Math.ceil((max(arr)-startingPoint(arr))/numberOfClasses(arr));
  return w%2==0?++w:w;
}
//4end

// 5.Pick a suitable starting point less than or equal to the minimum value. You will be able to cover: "the class width times the number of classes" values. You need to cover one more value than the range. Follow this rule and you'll be okay: The starting point plus the number of classes times the class width must be greater than the maximum value. Your starting point is the lower limit of the first class. Continue to add the class width to this lower limit to get the rest of the lower limits.
function startingPoint(arr){
  if(min(arr)%5==0)
  {
    return min(arr);
  }
  else
  {
   for(let i=1;i<5;i++) 
   {
if((min(arr)-i)%5==0)
     return min(arr)-i;
   }
  }
}
// or
// lower limit 
function startingPointLowerlimit(arr){
  if(min(arr)%5==0)
  {
    return min(arr);
  }
  else
  {
   for(let i=1;i<5;i++) 
   {
if((min(arr)-i)%5==0)
     return min(arr)-i;
   }
  }
}
// 6.To find the upper limit of the first class, subtract one from the lower limit of the second class. Then continue to add the class width to this upper limit to find the rest of the upper limits.
// upper limit 
function startingPointUpperlimit(arr){
 return Number(startingPointLowerlimit(arr))+classWidth1(arr)-1;
}
    
//6end

//7.
function boundaries(arr)
{
      return Number(startingPointUpperlimit(arr))+0.5;
}
// 7end
//classes
class Classs
{
  constructor(lb,ub)
  {
   this.lb=lb;
   this.ub=ub;
 }
}
//construction
function classes(arr){
  var classesArr=[];
  for(let c=0;c<numberOfClasses(arr);c++)
  {
    var u=Number(startingPointLowerlimit(arr))+(c*classWidth1(arr));
    var l=Number(startingPointUpperlimit(arr))+((c)*classWidth1(arr));
    var ctemp=new Classs(u,l);
   classesArr[c]=ctemp;
  }
 
  return classesArr;
  // console.log(classesArr);
}
//construction

//sort array
function sortAsc(points) {
 return points.sort(function(a, b){return a - b});

}



//
// N
//  sum x
// class width   --number of class
//maximum ---min ---rang
//sumation

//tips
// array interation create new array by arr.filter(); will usefull for frequency distribution



//1.Find the largest and smallest values


//sumation 
function sumx(arr) {
 return arr.reduce(myFunction);
  function myFunction(total, value, index, array) {
   return Number(total) + Number(value);
 }
}
//length
function n(arr) {
	return arr.length;
}






//ungroup  require data

//mode ungroup
function  modeInArray(arr){
    var numMapping = {};
    for(var i = 0; i < arr.length; i++){
        if(numMapping[arr[i]] === undefined){
            numMapping[arr[i]] = 0;
        }        
            numMapping[arr[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for(var prop in numMapping){
        if(numMapping[prop] > greatestFreq){
            greatestFreq = numMapping[prop];
            mode = prop;
        }
    }
    return parseInt(mode);
}


//group  require data

//under construction class

//
// function classes(arr) {
// 	if(arr.length<=10)
//     {

//     }else if(arr.length<=20){
      
//     }else if(arr.length<=30){
      
//     }else if(arr.length<=40){
      
//     }else if(arr.length<=50){
      
//     }else if(arr.length<=60){
      
//     }else if(arr.length<=0){
      
//     }


//   }
    


//construstion

function getReady(){
   x=document.getElementById("commainput").value;
return x.split(",");

}

//ungroup data 
//mode
function mode() {

document.getElementById("result").innerHTML="Mode = "+modeInArray(getReady())+"<br><hr>The most frequent value is called mode";
}

function  modeInArray(arr){

    var numMapping = {};
    for(var i = 0; i < arr.length; i++){
        if(numMapping[arr[i]] === undefined){
            numMapping[arr[i]] = 0;
        }        
            numMapping[arr[i]] += 1;
    }
    var greatestFreq = 0;
    var mode;
    for(var prop in numMapping){
        if(numMapping[prop] > greatestFreq){
            greatestFreq = numMapping[prop];
            mode = prop;
        }
    }
    return parseInt(mode);
}

//mode end

//median

function median()
{
  let inArr=getReady();
  given="<span style=margin-left: 0;>GIVEN</span><br>"+inArr.toString();
  
  req="<hr><span style=margin-left:0>REQUIRE</span><br>"+"<b>median=?<hr>";
  let ans="";

  let no=n(inArr);

   let arrange=sortAsc(inArr);
  if(no%2==0)
  {

        let nth=Number(no/2-1),nth1=Number(no/2);
    highlight="";

    for(a in arrange)
    {

      if(a==Number(no/2-1)||a==Number(no/2))
      {
        highlight+="<span style=color:red>"+arrange[a]+"</span>"+"  ";
      }
      else
      {
      highlight+=arrange[a]+"  ";
      }
    }
   ans="<b>SOLUTION</b><br>First of all arrange data <br>\
   "+arrange+"<br>N ="+no+"<br>N/2 ("+no/2+") is integer"+"<br>\
   so median = (  (n/2)<sup>th</sup> + (n/2+1)<sup>th</sup> )/2 <br>\
   "+highlight+"\
   "+"<br>Median =("+arrange[nth]+"+"+arrange[nth1]+")/"+2+"<br>\
   "+"Median="+((Number(arrange[nth])+Number(arrange[nth1]))/2).toFixed(2)+"<br>";
   
  }
  else
  {
      let nth=Number(Number(no+1)/2)-Number(1);
    highlight="";

    for(a in arrange)
    {

      if(a==nth)
      {
        highlight+="<span style=color:red>"+arrange[a]+"</span>"+"  ";
      }
      else
      {
      highlight+=arrange[a]+"  ";
      }
    }
   ans="<b>SOLUTION</b><br>First of all arrange data <br>\
   "+arrange+"<br>N ="+no+"<br>N/2 ("+no/2+") is not integer"+"<br>\
   so median =  ( n + 1 ) / 2 )<sup>th</sup> <br>\
   "+highlight+"\
   "+"<br>Median="+Number(arrange[nth])+"<br>";
   
  }

 hint="<hr><b>hint<b><br>medien is the middle value in a data."

 document.getElementById("result").innerHTML=given+req+ans+hint;

}
//medien end


// mean
$('#mean').click(function ()
{
  given="<span style=margin-left: 0;>GIVEN</span><br>"+getReady().toString();
  
  req="<hr><span style=margin-left:0>REQUIRE</span><br>"+"<b>mean=?<hr>";
  ans="<b>SOLUTION<b><br>mean=(sum of observation)/(number of observation)<br>mean="+sumx(getReady())+"/"+n(getReady())+"<br>\
  mean = "+(sumx(getReady())/n(getReady())).toFixed(2);
 hint="<hr><b>hint<b><br>mean is also called arithmetic mean and average."
 $("#result").html(given+req+ans+hint);

});

//mean
//ungroup data end


 