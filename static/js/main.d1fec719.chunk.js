(this["webpackJsonpmindfullness-prompts"]=this["webpackJsonpmindfullness-prompts"]||[]).push([[0],{23:function(e,o,t){},39:function(e,o,t){"use strict";t.r(o);var a=t(2),i=t.n(a),s=t(11),n=t.n(s),r=(t(23),t(18)),l=t(7),d=t(4),c=t(17),m=t.n(c),I=t(12),h=t(13),y=t(0),u=function(e){return Object(y.jsx)("div",{children:Object(y.jsxs)(m.a,{isOpen:e.data.modalIsOpen,onRequestClose:e.data.closeModal,ariaHideApp:!1,contentLabel:"Prompt History",closeTimeoutMS:300,children:[Object(y.jsx)("div",{className:"modalScroll",children:Object(y.jsx)("ul",{children:e.data.history.slice(0).reverse().slice(0,15).map((function(e){return Object(y.jsx)("li",{children:e},Math.random())}))})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{className:"modalBtn",onClick:e.data.closeModal,children:Object(y.jsx)(I.a,{icon:h.a})})})]})})},f=function(){var e=Object(a.useState)(!1),o=Object(l.a)(e,2),t=o[0],i=o[1],s=Object(a.useState)(d[Math.floor(Math.random()*d.length)]),n=Object(l.a)(s,2),c=n[0],m=n[1],I=Object(a.useState)(localStorage.mindfullnessPrompts?JSON.parse(localStorage.mindfullnessPrompts):[]),h=Object(l.a)(I,2),f=h[0],w=h[1];Object(a.useEffect)((function(){localStorage.setItem("mindfullnessPrompts",JSON.stringify(f))}),[f]),Object(a.useEffect)((function(){w([].concat(Object(r.a)(f),[c]))}),[c]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"promptArea card",children:[Object(y.jsx)("div",{className:"promptText",children:Object(y.jsx)("p",{children:c})}),Object(y.jsx)("button",{onClick:function(){return m(d[Math.floor(Math.random()*d.length)])},children:"New Prompt"}),Object(y.jsx)("button",{onClick:function(){i(!0)},children:"Recent Prompts"})]}),Object(y.jsx)(u,{data:{modalIsOpen:t,setIsOpen:i,closeModal:function(){i(!1)},history:f}})]})},w=function(){return Object(y.jsx)("footer",{children:Object(y.jsxs)("p",{children:["Made with \u2764\ufe0f by ",Object(y.jsx)("a",{href:"https://ghall.dev",children:"Graham Hall"})]})})};var b=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{children:"Mindfulness Prompts"}),Object(y.jsx)(w,{}),Object(y.jsx)(f,{})]})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,o){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(b,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mindfulness-prompts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var o="".concat("/mindfulness-prompts","/service-worker.js");p?(!function(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,o)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):g(o,e)}))}}()},4:function(e){e.exports=JSON.parse('["I am most proud of myself for\u2026","I forgive myself for\u2026","I am most happy when I am\u2026","My three favorite people are ___ because\u2026","If I could change one thing about my life, I would change\u2026","I forgive myself for\u2026","If my body could speak, it would tell me to\u2026","I feel the strongest when I am\u2026","I love myself because\u2026","I am capable of\u2026","I feel joy when I\u2026","I am most inspired by\u2026","I can practice more patience when\u2026","I was courageous this week when I \u2026","I am most energized when I\u2026","I am becoming more inspired by\u2026","I appreciate my family because\u2026","I listened best to my intuition when I\u2026","I could take better care of myself by\u2026","I am grateful for my job because\u2026","I am so blessed to be able to\u2026","I can\u2019t wait to\u2026","I can follow my passion by\u2026","I am going to try to be better at\u2026","I am able to let go of\u2026","I am most in tune with\u2026","I allow myself to feel\u2026about\u2026","I see my value in\u2026","I need to be truthful with myself about\u2026","I believe in\u2026","My goals for today are\u2026","My goals for this week are\u2026","My goals for this month are\u2026","My goals for this year are\u2026","My favorite movies are\u2026","I can strengthen my resolve by\u2026","I no longer believe in\u2026","I want to improve my\u2026","My favorite books are\u2026","I wish my children could know\u2026","I would tell my teenage self\u2026","My perfect day would consist of\u2026","My dream vacation is\u2026","I want to learn how to\u2026","Tomorrow, I want to accomplish\u2026","I have changed by\u2026","My favorite mantra is\u2026","My vision for my life is\u2026","When I picture my future, I see\u2026","When I close my eyes at night, I think about\u2026","I can make better use of my time by\u2026","Instead of looking at my phone today, I will\u2026","My favorite quote is\u2026","I want to be remembered for\u2026","My favorite song is\u2026","I can enjoy nature today by\u2026","If money was no object, I would\u2026","I love myself because\u2026","Before I die, I want to\u2026","I love my body because\u2026","I prioritize my family by\u2026","I am worried about\u2026","I forgive ______ because\u2026","I can strengthen my faith by\u2026","I am most anxious about\u2026","Last night, I dreamt about\u2026","I felt sad today because\u2026","5 things I love about myself are\u2026","My favorite body part is\u2026","My childhood hero is\u2026","I look up to\u2026","My best quality is\u2026","If I could tell my parents one thing, I would say\u2026","I wish my spouse/significant other knew\u2026","I am most productive when\u2026","I feel most creative when\u2026","My favorite social gathering is\u2026","If I had an extra hour in the day, I would\u2026","My biggest regret is\u2026","If I could relive one day in my life, I would redo\u2026","The best part about being with me is\u2026","If I could be friends with a celebrity, I would choose\u2026","If I came with a warning label, it would say\u2026","I could show someone I love them by\u2026","My vision board would include\u2026","I wish someone I love would show me by\u2026","If I could know one thing about my future, it would be\u2026","I could get rid of this unhealthy habit\u2026","To make myself healthier, I could start\u2026","Being confident means\u2026","I will stop telling myself\u2026","I can simplify my life today by\u2026","I find fulfillment in\u2026","My favorite meal is\u2026","Today I will find time to\u2026","My best childhood memory is\u2026","As a child, I loved to\u2026","I can be more childlike by\u2026","Today I can have more fun by\u2026","This time next year, I will be\u2026","I want to read\u2026","My favorite part about my home is\u2026","If I could change one thing about my house, I would change\u2026","My favorite recipe is\u2026","When I go to my favorite restaurant, I always order\u2026","Today, I will try something new by\u2026","My dream home would have\u2026","I can describe myself with these four words\u2026","If I could live inside one movie, I would choose\u2026","My ideal morning routine would include\u2026","I need my best friend to know\u2026","I can show my kids I love them today by\u2026","The past experience I learned the most from is\u2026","I smiled yesterday because\u2026","I need to say goodbye to\u2026because\u2026","My ideal nighttime routine would include\u2026","I can show myself love today by\u2026","My favorite memory from yesterday is\u2026","I should stop putting off\u2026","I want my future self to be\u2026","The most inspirational place I\u2019ve ever been is\u2026","I feel I\u2019m at my best when\u2026","I can show my kids I\u2019m proud of them by\u2026","I always put off\u2026because\u2026","I might be over-exaggerating my fear of\u2026","My favorite smell is\u2026","I am most relaxed when I\u2026","I wish I didn\u2019t have to\u2026","If I could live inside on television show, I would choose\u2026","The favorite thing in my closet is\u2026","I always feel rushed when I\u2026","The future excites me because\u2026","My word for this month is\u2026","I love my life right now because\u2026","I would benefit from slowing down and enjoying\u2026","People annoy me when they\u2026","I can show my partner I love them today by\u2026","I could be more tolerant of\u2026","I could open myself to new opportunities by\u2026","I could improve this aspect of my life\u2026","I am living my best life right now by\u2026","The best thing I did this week was\u2026","I am focusing my attention on\u2026","If I could live inside one book, I would choose\u2026","The future scares me because\u2026","I need to consider this opportunity\u2026","I should ask for help with\u2026","This person could help me reach my goals\u2026by\u2026","I could put more effort into\u2026","I got through today thanks to\u2026","I can take better care of myself by\u2026","My top three priorities right now are\u2026","I should give myself more credit for\u2026","It\u2019s a privilege to know me because\u2026","I wish I knew more about\u2026","I have been worrying too much about\u2026","I\u2019m so proud of accomplishing\u2026","My style icon is\u2026","I wish I lived in\u2026","My favorite app is\u2026","I could be more organized by\u2026","I can spend more quality time with my family by\u2026","I feel fulfilled in my career by\u2026","I could improve my mindset by\u2026","The strongest emotion I felt today was\u2026","I could better express my feelings by\u2026","I can show my partner I\u2019m proud of them today by \u2026","Today, I will relax by\u2026","I can spend more time with my friends by\u2026","If I had unlimited resources, I would give to\u2026","If I could manifest one thing, it would be\u2026","I should spend more time with\u2026","If I could improve one thing about today it would be\u2026","I could surpass my expectations of today by\u2026","My relationship with my phone is\u2026","I always get pumped up when I\u2026","I undervalue myself when I\u2026","I need to forgive myself for\u2026","The biggest thing holding me back is\u2026","I always feel happy when I\u2026","The biggest stressor in my life is\u2026","I can better serve my community by\u2026","If I could pick a song to describe my mood it would be\u2026","Today\u2019s affirmation will be\u2026","The five biggest life lessons I\u2019ve learned so far are\u2026","The most important items on my to-do list today are\u2026","My favorite way to start the day is\u2026","I can better manage my stress by\u2026","If I had a million dollars, I would\u2026","My strongest personality trait is\u2026","If I could have a meal with anyone, I would eat with\u2026","I need to feel more uncomfortable because\u2026","I appreciate my parents because\u2026","If I could write a letter to my younger self, I would say\u2026","My dream job would be\u2026","My biggest priority right now is\u2026","I could be more spontaneous by\u2026","I sometimes undervalue myself because\u2026","I can do better at my current job by\u2026","If I could live anywhere in the world, I would move to\u2026","My biggest nightmare is\u2026","If I was an animal, I would be a\u2026","In five years, I will be\u2026","If I could live in a different decade, I would live in\u2026","I became stronger when I\u2026.","I might be sabotaging my goals by\u2026","I can\u2019t go a day without\u2026","My best talent is\u2026","I appreciate my siblings because\u2026","The best compliment I\u2019ve ever received is\u2026","I can make tomorrow better by\u2026","If I wrote a thank you note to myself, it would say\u2026","The easiest part of my day was\u2026","I can be more confident in myself by\u2026","I am special because\u2026","The best compliment I\u2019ve ever given was\u2026","The person I admire most has these qualities\u2026","These three features define me\u2026","I am unique because\u2026","These 20 things make me happiest\u2026","The hardest part of my day was\u2026","I was most afraid when I\u2026","When I do _____, I feel strong.","The hardest I have ever worked was when\u2026","I can help someone today by\u2026","I feel most confident when I\u2019m with\u2026","Other people see me as\u2026","I know I\u2019m successful because\u2026","Today, I can encourage someone to\u2026","When I look in the mirror, I see\u2026","I am intelligent because\u2026","When I feel confident, I can\u2026.","I can inspire someone by\u2026","My ultimate goal is\u2026","I get most anxious when I\u2026","The most stressful part of my day is\u2026","I can achieve my life goal by\u2026","My biggest success was\u2026","I wish people saw me as\u2026","Today was meaningful because\u2026","My favorite 25 things are\u2026","When I meditate, my mind wanders to\u2026","I feel most alive when I\u2026","To me, self-care means\u2026","I need to declutter my\u2026","My happy place is\u2026","If I could start a new job, I would\u2026","My calm space looks like\u2026","My favorite part of nature is\u2026","I always love doing\u2026","If I could have one superpower, I would\u2026.","These people make me feel the most loved\u2026","My favorite household chore is\u2026","I most similar to my parents in\u2026","My most unrealistic worry is\u2026","My philosophy of life is\u2026","I always hate doing\u2026","If I could thank one person who inspired me, I would tell them\u2026","I\u2019m not honest with myself about\u2026","The most peaceful part of my day is\u2026","If I found a puppy in the street, I would\u2026","Today, I learned\u2026","If I could redo one decision, I would change\u2026","I felt frustrated today because\u2026","If I was in charge, I would change\u2026","I\u2019m most optimistic about\u2026","If I could start a new hobby, I would learn to\u2026","In one year, my life will be different because\u2026","If I could get rid of one bad habit, I would\u2026","When I was a child, I wanted\u2026","If I lost all my possessions, I would\u2026","My life is different than I imagined because\u2026","If I could go back to college, I would major in\u2026","My dream weekend would include\u2026","I\u2019m pessimistic about\u2026","I\u2019m often distracted by\u2026","My favorite spring activity is\u2026","If I had all the money I need, I would\u2026","If I could rewrite a conversation from today, I would change\u2026","I felt empowered today because\u2026","My favorite daily ritual is\u2026","If I could speak with one person who I\u2019ve lost, I would tell them\u2026","The best gift I\u2019ve ever received was\u2026","I can make the world a better place by\u2026","My best year was\u2026","I loved doing this with my childhood best friend\u2026","My parents taught me\u2026","The most fun I\u2019ve had was when\u2026","I\u2019m feeling these emotions right now\u2026","I can use these talents and skills to improve someone\u2019s life\u2026","Today I have been craving\u2026","The most outrageous thing I\u2019ve done is\u2026","I wish I knew the answer to these questions\u2026","This isn\u2019t working in my life right now\u2026","I miss ____ because\u2026","My ideal day would look like\u2026","I wanted to be a ___ when I grew up\u2026","My favorite fall activity is\u2026","My life needs more\u2026.","If failure wasn\u2019t an issue, I would\u2026","If I only had one year to live, I would\u2026","My secret desire is\u2026","I wish others knew that I\u2026.","The qualities I admire most in others are\u2026","I envy ___ because\u2026","Today\u2019s plan is\u2026","I believe in (or don\u2019t believe in) soul mates because\u2026","I deal with worry by\u2026","My favorite place to visit is\u2026","I thought I could never\u2026.","My next adventure will be\u2026","If I had to leave my home immediately, I would bring\u2026","My favorite summer activity is\u2026","The biggest problem I\u2019ve ever solved was\u2026","My favorite dessert is\u2026","I love my significant other because\u2026","My biggest pet peeve is\u2026","I could earn more money by\u2026","I wasted time worrying about\u2026","One simple thing that makes me happy is\u2026","The most important life lesson I\u2019ve learned is\u2026","I could improve my biggest weakness by\u2026","If I weren\u2019t so afraid, I would\u2026","My favorite holiday tradition is\u2026","I loved doing ____ with my parents as a child\u2026.","My most positive habit is\u2026","Nobody knows that I\u2026","The biggest lie I have ever told was\u2026","My most vivid childhood memory is\u2026","I was most surprised when\u2026","My favorite book character is\u2026","I feel guilty because\u2026","My first memory is\u2026","As a child, my favorite toy was\u2026","If I could develop one positive habit, it would be\u2026","I could donate money to\u2026","My best age was\u2026","If I was an expert in any subject, it would be\u2026","I was most disappointed when\u2026","I can\u2019t go without\u2026","If I could meet a fictional character, I would meet\u2026","My celebrity crush is\u2026","The first time I felt independent was\u2026","I feel lost when\u2026","As a child, my favorite subject in school was\u2026","The biggest mistake I made this week was\u2026","I moved closer to my goals today by\u2026","This week, I had fun\u2026.","I need to forgive\u2026because\u2026","My first job was\u2026","If I had a magic genie, I would wish for\u2026.","I stand out from the crowd because\u2026","My best friend would say I am\u2026","The biggest character flaw I need to work on is\u2026","My favorite winter activity is\u2026","I indulge myself by\u2026","My biggest win this year was\u2026","When others meet me for the first time, they probably think\u2026","My ideal partner is\u2026","My best friend should be\u2026","The funniest thing to happen to me this week was\u2026","My biggest challenge this year was\u2026","I achieved these goals this year\u2026","This year, I am most grateful for\u2026","Next year, I want to be more\u2026","My goals for next year are\u2026","I will achieve my goals by\u2026"]')}},[[39,1,2]]]);
//# sourceMappingURL=main.d1fec719.chunk.js.map