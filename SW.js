'use strict';


var c = [];
var ctx = [];
var timer = [];
var Lc = [];
var L = [];
var best = [];
var gap = [];
var met;

function Lap()
{
this.S = 0;
this.M = 0;
this.Used = false;
}

c[1] = document.getElementById("But1");
c[2] = document.getElementById("But2");
c[3] = document.getElementById("But3");
c[4] = document.getElementById("But4");

function StartData()
{
for(var i=1; i<5; i++)
{
    ctx[i] = c[i].getContext("2d");
      ctx[i].fillText ("00.000",200,20);
            timer[i] = 0;
            ctx[i].font = "50px Comic Sans MS";
            ctx[i].fillStyle="#FF0000";
            ctx[i].fillText(i,10,60);
              L[i]=[];
                Lc[i] = 0;
                  best[i] = 1;
                    gap[i] = [];
                //  Names.n[i] = i;
}
}

StartData();

function GetBest(a,b)
{
  if((L[a][b].S + 60*L[a][b].M)<=(L[a][best[a]].S + 60*L[a][best[a]].M))
  best[a] = b;
  if(b>=2)
  gap[a][b] = (L[a][b-1].S + 60*L[a][b-1].M) - (L[a][b].S + 60*L[a][b].M);
}


function Names()
{
  met=true;
  if(!confirm('Have been data saved?'))
  {return;}
  StartData();
  Stop();
Names.n = [];
for(var i=1; i<5; i++)
{
  Names.n[i] = prompt("Enter number:", i);
  if(i>99)
  ctx[i].font = "50px Comic Sans MS";
  else {
    ctx[i].font = "70px Comic Sans MS";
  }
  ctx[i].fillStyle="white";
  ctx[i].fillRect(0,0,400,200);
  ctx[i].fillStyle="#FF0000";
  ctx[i].fillText(Names.n[i],10,60);
}
}

function Stop()
{for(var i=1;i<5;i++)timer[i]=0;}


function FillData(n){


ctx[n].fillStyle="yellow";
ctx[n].fillRect(200,5,100,17);
ctx[n].fillStyle="black";
ctx[n].font = "12px Comic Sans MS";
  ctx[n].fillText (L[n][Lc[n]].M + ":" + L[n][Lc[n]].S,210,20);
    ctx[n].fillText ("["+ (Lc[n]) +"]",270,19)

if(Lc[n]>1){
ctx[n].fillStyle="yellow";
ctx[n].fillRect(200,24,100,17);
ctx[n].fillStyle="black";
ctx[n].font = "12px Comic Sans MS";
  ctx[n].fillText (L[n][Lc[n]-1].M + ":" + L[n][Lc[n]-1].S,210,39);
    ctx[n].fillText ("["+ (Lc[n]-1) +"]",280,38)
}
if(Lc[n]>2){
ctx[n].fillStyle="yellow";
ctx[n].fillRect(200,43,100,17);
ctx[n].fillStyle="black";
ctx[n].font = "12px Comic Sans MS";
  ctx[n].fillText (L[n][Lc[n]-2].M + ":" + L[n][Lc[n]-2].S,210,58);
    ctx[n].fillText ("["+ (Lc[n]-2) +"]",280,57)
}
if(Lc[n]>3){
ctx[n].fillStyle="yellow";
ctx[n].fillRect(200,62,100,17);
ctx[n].fillStyle="black";
ctx[n].font = "12px Comic Sans MS";
  ctx[n].fillText (L[n][Lc[n]-3].M + ":" + L[n][Lc[n]-3].S,210,77);
    ctx[n].fillText ("["+ (Lc[n]-3) +"]",280,76)
}
if(Lc[n]>4){
ctx[n].fillStyle="yellow";
ctx[n].fillRect(200,81,100,17);
ctx[n].fillStyle="black";
ctx[n].font = "12px Comic Sans MS";
  ctx[n].fillText (L[n][Lc[n]-4].M + ":" + L[n][Lc[n]-4].S,210,96);
    ctx[n].fillText ("["+ (Lc[n]-4) +"]",280,95)
}
ctx[n].fillStyle="green";
ctx[n].fillRect(200,130,90,17);
ctx[n].fillStyle="black";
ctx[n].font = "12px Comic Sans MS";
  ctx[n].fillText (L[n][best[n]].M + ":" + L[n][best[n]].S,210,143);
  ctx[n].fillText ("["+ best[n] +"]",270,142)
}


function Push1()
{
  if(Lc[1]==0)
  {Lc[1]++; L[1][Lc[1]] = new Lap;}
  else{
  L[1][Lc[1]].Used = true;
  GetBest(1,Lc[1]);
  Lc[1]++;
  L[1][Lc[1]] = new Lap;
}
timer1();
}
function timer1(){timer[1] = new Date().getTime()}
var interval1 = setInterval(function(){
  if (timer[1]==0) return;
      L[1][Lc[1]].S = ((new Date().getTime()-timer[1])/1000);
        if(L[1][Lc[1]].S>=60)
        {L[1][Lc[1]].S=0; L[1][Lc[1]].M++; timer1();}
          FillData(1); },100);




          function Push2()
          {
            if(Lc[2]==0)
            {Lc[2]++; L[2][Lc[2]] = new Lap;}
            else{
            L[2][Lc[2]].Used = true;
            GetBest(2,Lc[2]);
            Lc[2]++;
            L[2][Lc[2]] = new Lap;
          }
          timer2();
          }
function timer2(){timer[2] = new Date().getTime()}
var interval2 = setInterval(function(){
  if (timer[2]==0) return;
      L[2][Lc[2]].S = ((new Date().getTime()-timer[2])/1000);
        if(L[2][Lc[2]].S>=60)
        {L[2][Lc[2]].S=0; L[2][Lc[2]].M++; timer2();}
          FillData(2); },100);

          function Push3()
          {
            if(Lc[3]==0)
            {Lc[3]++; L[3][Lc[3]] = new Lap;}
            else{
            L[3][Lc[3]].Used = true;
            GetBest(3,Lc[3]);
            Lc[3]++;
            L[3][Lc[3]] = new Lap;
          }
          timer3();
          }
function timer3(){timer[3] = new Date().getTime()}
var interval3 = setInterval(function(){
  if (timer[3]==0) return;
      L[3][Lc[3]].S = ((new Date().getTime()-timer[3])/1000);
        if(L[3][Lc[3]].S>=60)
        {L[3][Lc[3]].S=0; L[3][Lc[3]].M++; timer3();}
          FillData(3); },100);


          function Push4()
          {
            if(Lc[4]==0)
            {Lc[4]++; L[4][Lc[4]] = new Lap;}
            else{
            L[4][Lc[4]].Used = true;
            GetBest(4,Lc[4]);
            Lc[4]++;
            L[4][Lc[4]] = new Lap;
          }
          timer4();
          }
function timer4(){timer[4] = new Date().getTime()}
var interval4 = setInterval(function(){
  if (timer[4]==0) return;
      L[4][Lc[4]].S = ((new Date().getTime()-timer[4])/1000);
        if(L[4][Lc[4]].S>=60)
        {L[4][Lc[4]].S=0; L[4][Lc[4]].M++; timer4();}
          FillData(4); } ,100);


                function statAll()
                {
                  if(met)
                  {
                    stat();

                }
                else {
                  for(var j=1; j<5; j++)
                  FillData(j);

                    if(Names.n[j]>99)
                    ctx[j].font = "50px Comic Sans MS";
                    else {
                      ctx[j].font = "70px Comic Sans MS";
                    }
                    ctx[j].fillStyle="white";
                    ctx[j].fillRect(0,0,400,200);
                    ctx[j].fillStyle="#FF0000";
                    ctx[j].fillText(Names.n[j],10,60);

                  met=true;
                }
              }

                    function stat()
                    {
                      var s,m, stab, di, b;
                      met=false;
                      s=[];
                      m=[];
                      stab = 0.00;
                      di = 0.00;

                      for(var i=1; i<Lc[1]; i++)
                        {
                          s[i]=L[1][i].S;
                           m[i]=L[1][i].M;
                           if(i==best[1])
                           b = s[i] + 60*m[i];
                           di+= (s[i] + (60*m[i]));
                           if(i>1)
                           if(((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))>0)
                           stab+=((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))
                           else stab+=((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))*(-1.00)
                           }
                           di = 40*(1.00-stab/di);
                          stab = stab/Lc[1];
                      ctx[1].fillStyle="white";
                      ctx[1].fillRect(1,1,400,200);
                      ctx[1].fillStyle="red";
                      ctx[1].font = "20px Comic Sans MS";
                        ctx[1].fillText (Names.n[1],200,70);

                      var step;
                      step = (400-400%Lc[1])/Lc[1];

                      for(var i=2; i<Lc[1]; i++)
                      {
                        ctx[1].moveTo(step*(i-2),(130-((s[i-1] + 60*m[i-1])-b)*di));
                          ctx[1].lineTo(step*(i-1),(130-((s[i] + 60*m[i])-b)*di));
                          ctx[1].stroke();

                    }
                    ctx[1].fillStyle="blue";
                ctx[1].fillRect(((best[1]-1)*step),130,3,3);

                stab = 0.00;
                di = 0.00;

                for(var i=1; i<Lc[2]; i++)
                  {
                    s[i]=L[2][i].S;
                     m[i]=L[2][i].M;
                     if(i==best[2])
                     b = s[i] + 60*m[i];
                     di+= (s[i] + (60*m[i]));
                     if(i>1)
                     if(((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))>0)
                     stab+=((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))
                     else stab+=((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))*(-1.00)
                     }
                     di = 40*(1.00-stab/di);
                    stab = stab/Lc[2];
                ctx[2].fillStyle="white";
                ctx[2].fillRect(1,1,400,200);
                ctx[2].fillStyle="red";
                ctx[2].font = "20px Comic Sans MS";
                  ctx[2].fillText (Names.n[2],200,70);

                var step;
                step = (400-400%Lc[2])/Lc[2];

                for(var i=2; i<Lc[2]; i++)
                {
                  ctx[2].moveTo(step*(i-2),(130-((s[i-1] + 60*m[i-1])-b)*di));
                    ctx[2].lineTo(step*(i-1),(130-((s[i] + 60*m[i])-b)*di));
                    ctx[2].stroke();

              }
              ctx[2].fillStyle="blue";
          ctx[2].fillRect(((best[2]-1)*step),130,3,3);

          stab = 0.00;
          di = 0.00;

          for(var i=1; i<Lc[3]; i++)
            {
              s[i]=L[3][i].S;
               m[i]=L[3][i].M;
               if(i==best[3])
               b = s[i] + 60*m[i];
               di+= (s[i] + (60*m[i]));
               if(i>1)
               if(((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))>0)
               stab+=((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))
               else stab+=((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))*(-1.00)
               }
               di = 40*(1.00-stab/di);
              stab = stab/Lc[3];
          ctx[3].fillStyle="white";
          ctx[3].fillRect(1,1,400,200);
          ctx[3].fillStyle="red";
          ctx[3].font = "20px Comic Sans MS";
            ctx[3].fillText (Names.n[3],200,70);

          var step;
          step = (400-400%Lc[3])/Lc[3];

          for(var i=2; i<Lc[3]; i++)
          {
            ctx[3].moveTo(step*(i-2),(130-((s[i-1] + 60*m[i-1])-b)*di));
              ctx[3].lineTo(step*(i-1),(130-((s[i] + 60*m[i])-b)*di));
              ctx[3].stroke();

        }
        ctx[3].fillStyle="blue";
    ctx[3].fillRect(((best[3]-1)*step),130,3,3);

    stab = 0.00;
    di = 0.00;

    for(var i=1; i<Lc[4]; i++)
      {
        s[i]=L[4][i].S;
         m[i]=L[4][i].M;
         if(i==best[4])
         b = s[i] + 60*m[i];
         di+= (s[i] + (60*m[i]));
         if(i>1)
         if(((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))>0)
         stab+=((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))
         else stab+=((s[i] + (60*m[i])) - (s[i-1] + (60*m[i-1])))*(-1.00)
         }
         di = 40*(1.00-stab/di);
        stab = stab/Lc[4];
    ctx[4].fillStyle="white";
    ctx[4].fillRect(1,1,400,200);
    ctx[4].fillStyle="red";
    ctx[4].font = "20px Comic Sans MS";
      ctx[4].fillText (Names.n[4],200,70);

    var step;
    step = (400-400%Lc[4])/Lc[4];

    for(var i=2; i<Lc[4]; i++)
    {
      ctx[4].moveTo(step*(i-2),(130-((s[i-1] + 60*m[i-1])-b)*di));
        ctx[4].lineTo(step*(i-1),(130-((s[i] + 60*m[i])-b)*di));
        ctx[4].stroke();

  }
  ctx[4].fillStyle="blue";
ctx[4].fillRect(((best[4]-1)*step),130,3,3);
                    }
