(this["webpackJsonpmern-exercise-tracker"]=this["webpackJsonpmern-exercise-tracker"]||[]).push([[0],{156:function(e,t,n){"use strict";n.r(t);var c,s,a,r,o,i,u,l,d,h,j,b,p,O,m,f=n(1),x=n.n(f),v=n(34),g=n.n(v),C=(n(81),n(39)),k=(n.p,n(82),n(83),n(17)),y=n(9),S=n(13),N=n(14),_=n(6),w=n(16),A=n(15),D=n(7),H=n.n(D),L=n(8),I=n(0),R=function(){var e=Object(L.b)().loginWithRedirect;return Object(I.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){return e()},children:"Log In"})},z=function(){var e=Object(L.b)().logout;return Object(I.jsx)("button",{className:"btn btn-danger btn-block",onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},M=function(){return Object(L.b)().isAuthenticated?Object(I.jsx)(z,{}):Object(I.jsx)(R,{})},P=function(){return Object(I.jsx)("div",{className:"outer_container",children:Object(I.jsxs)("div",{className:"center_horz_vert",children:[Object(I.jsx)("div",{className:"center_div_vert",children:Object(I.jsx)("h1",{children:"Please log in to view this page!"})}),Object(I.jsx)("div",{className:"center_button",children:Object(I.jsx)(M,{className:"center"})})]})})},q=n.p+"static/media/hourglass1.06cccd29.jfif",T=function(){return Object(I.jsx)("div",{className:"outer_container",children:Object(I.jsxs)("div",{className:"loading",children:[Object(I.jsx)("h2",{children:"LOADING..."}),Object(I.jsx)("div",{className:"loading_image",children:Object(I.jsx)("img",{src:q,width:"100",height:"100"})})]})})},B=function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:e.scorecard.username}),Object(I.jsx)("td",{children:e.scorecard.course}),Object(I.jsxs)("td",{children:[e.scorecard.score," / ",e.scorecard.par]}),Object(I.jsx)("td",{children:e.scorecard.date.substring(0,10)}),Object(I.jsxs)("td",{children:[Object(I.jsx)(k.b,{to:"/editscorecard/"+e.scorecard._id,children:"edit"})," | ",Object(I.jsx)("a",{href:"#",onClick:function(){e.deleteScorecard(e.scorecard._id)},children:"delete"})]})]})},F=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).state={scorecards:[]},c.deleteScorecard=c.deleteScorecard.bind(Object(_.a)(c)),c}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;H.a.get("https://birdie-tracker.herokuapp.com/scorecards/").then((function(t){e.setState({scorecards:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteScorecard",value:function(e){H.a.delete("https://birdie-tracker.herokuapp.com/scorecards/"+e).then((function(e){return console.log(e.data)})),this.setState({scorecards:this.state.scorecards.filter((function(t){return t._id!==e}))})}},{key:"scorecardList",value:function(){var e=this,t=this.props.auth0,n=t.isAuthenticated,c=t.user.nickname;if(n)return this.state.scorecards.map((function(t){if(t.username==c)return Object(I.jsx)(B,{scorecard:t,deleteScorecard:e.deleteScorecard},t._id)}))}},{key:"render",value:function(){var e=this.props.auth0,t=e.isLoading,n=e.isAuthenticated;return t?Object(I.jsx)(T,{}):n?Object(I.jsxs)("div",{className:"white_background",children:[Object(I.jsx)("h3",{children:"Logged Scorecards"}),Object(I.jsxs)("table",{className:"table",children:[Object(I.jsx)("thead",{className:"thead-light",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Username"}),Object(I.jsx)("th",{children:"Course"}),Object(I.jsx)("th",{children:"Score"}),Object(I.jsx)("th",{children:"Date"}),Object(I.jsx)("th",{children:"Actions"})]})}),Object(I.jsx)("tbody",{children:this.scorecardList()})]})]}):Object(I.jsx)("div",{children:Object(I.jsx)(P,{})})}}]),n}(f.Component),E=Object(L.c)(F),W=n(5),G=n(30),U=n.n(G),J=(n(40),function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(e){var c;Object(S.a)(this,n),(c=t.call(this,e)).onChangeScores=function(e){return function(t){var n=c.state.scores.map((function(n,c){return e!==c?n:Object(W.a)(Object(W.a)({},n),{},{par:t.target.value})}));c.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{scores:n})}),(function(){}))}},c.onChangeCourse=c.onChangeCourse.bind(Object(_.a)(c)),c.onChangeDate=c.onChangeDate.bind(Object(_.a)(c)),c.onSubmit=c.onSubmit.bind(Object(_.a)(c)),c.updateScores=c.updateScores.bind(Object(_.a)(c)),c.onChangeScores=c.onChangeScores.bind(Object(_.a)(c));var s=c.props.auth0.isAuthenticated;return c.state={username:"",course:"",score:0,par:0,scores:[],date:new Date,users:[],courses:[],isAuth:s,userAccount:null},c}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.state.isAuth&&(H.a.get("https://birdie-tracker.herokuapp.com/users/").then((function(t){if(t.data.length>0)for(var n=function(n){if(t.data[n].username==e.state.username)return console.log("Match found"),e.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{userAccount:t.data[n]})})),!0,"break"},c=0;c<t.data.length;c++){if("break"===n(c))break}})),H.a.get("https://birdie-tracker.herokuapp.com/scorecards/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,course:t.data.course,score:t.data.score,scores:t.data.scores,date:new Date(t.data.date),par:t.data.par})})).catch((function(e){console.log(e)})),H.a.get("https://birdie-tracker.herokuapp.com/courses/").then((function(t){t.data.length>0&&e.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{courses:t.data})}),(function(){}))})))}},{key:"updateScores",value:function(){for(var e=this,t=function(t){e.state.courses[t].name==e.state.course&&e.setState((function(n){return Object(W.a)(Object(W.a)({},n),{},{scores:e.state.courses[t].holes,par:e.state.courses[t].par})}),(function(){}))},n=0;n<this.state.courses.length;n++)t(n)}},{key:"onChangeCourse",value:function(e){var t=this;this.setState((function(t){return Object(W.a)(Object(W.a)({},t),{},{course:e.target.value})}),(function(){t.updateScores()}))}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();for(var n=0,c=0;c<this.state.scores.length;c++)n+=parseInt(this.state.scores[c].par);if(this.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{score:n})}),(function(){var e={username:t.state.username,course:t.state.course,score:t.state.score,date:t.state.date,scores:t.state.scores,par:t.state.par};H.a.post("https://birdie-tracker.herokuapp.com/scorecards/update/"+t.props.match.params.id,e).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)}))})),null!=this.state.userAccount){var s=this.state.userAccount.best_score,a=this.state.userAccount.worst_score,r=n-this.state.par;r<this.state.userAccount.best_score&&(s=r),r>this.state.userAccount.worst_score&&(a=r);var o={username:this.state.userAccount.username,rounds_played:this.state.userAccount.rounds_played,best_score:s,worst_score:a};console.log(o),H.a.post("https://birdie-tracker.herokuapp.com/users/update/"+this.state.userAccount._id,o).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)}))}window.location="https://dreamy-mcnulty-8d46e1.netlify.app/scorecardlist"}},{key:"render",value:function(){var e=this;return Object(I.jsxs)("div",{className:"scorecard_elements",children:[Object(I.jsx)("div",{className:"profile_header",children:Object(I.jsx)("h3",{children:"Edit Scorecard"})}),Object(I.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{children:"Course: "}),Object(I.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.course,onChange:this.onChangeCourse,children:this.state.courses.map((function(e){return Object(I.jsx)("option",{value:e.name,children:e.name},e.name)}))})]}),Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{children:"Date: "}),Object(I.jsx)("div",{children:Object(I.jsx)(U.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(I.jsx)("div",{className:"score_boxes",children:this.state.scores.map((function(t,n){return Object(I.jsxs)("div",{className:"score",children:[Object(I.jsxs)("label",{children:["Hole ",n+1," score: "]}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{type:"number",value:t.par,onChange:e.onChangeScores(n)})})]},t._id)}))}),Object(I.jsx)("div",{className:"form-group",children:Object(I.jsx)("input",{type:"submit",value:"Submit Changes",className:"btn btn-primary"})})]})]})}}]),n}(f.Component)),V=Object(L.c)(J),Y=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(e){var c;Object(S.a)(this,n),(c=t.call(this,e)).onChangeScores=function(e){return function(t){var n=c.state.scores.map((function(n,c){return e!==c?n:Object(W.a)(Object(W.a)({},n),{},{par:t.target.value})}));c.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{scores:n})}),(function(){}))}},c.onChangeCourse=c.onChangeCourse.bind(Object(_.a)(c)),c.onChangeDate=c.onChangeDate.bind(Object(_.a)(c)),c.onSubmit=c.onSubmit.bind(Object(_.a)(c)),c.updateScores=c.updateScores.bind(Object(_.a)(c)),c.onChangeScores=c.onChangeScores.bind(Object(_.a)(c));var s=c.props.auth0.isAuthenticated;if(s){var a=c.props.auth0.user,r=a.nickname;a.email;c.state={username:r,course:"",score:0,par:0,scores:[],date:new Date,users:[],courses:[],isAuth:s,userAccount:null}}else c.state={username:"",course:"",score:0,par:0,scores:[],date:new Date,users:[],courses:[],isAuth:!1,userAccount:null};return c}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.state.isAuth&&(H.a.get("https://birdie-tracker.herokuapp.com/users/").then((function(t){if(t.data.length>0)for(var n=function(n){if(t.data[n].username==e.state.username)return console.log("Match found"),e.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{userAccount:t.data[n]})})),!0,"break"},c=0;c<t.data.length;c++){if("break"===n(c))break}})),H.a.get("https://birdie-tracker.herokuapp.com/courses/").then((function(t){t.data.length>0&&e.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{courses:t.data,course:t.data[0].name,scores:t.data[0].holes,holes:t.data[0].holes,par:t.data[0].par})}),(function(){}))})))}},{key:"updateScores",value:function(){for(var e=this,t=function(t){e.state.courses[t].name==e.state.course&&e.setState((function(n){return Object(W.a)(Object(W.a)({},n),{},{scores:e.state.courses[t].holes,par:e.state.courses[t].par})}),(function(){}))},n=0;n<this.state.courses.length;n++)t(n)}},{key:"onChangeCourse",value:function(e){var t=this;this.setState((function(t){return Object(W.a)(Object(W.a)({},t),{},{course:e.target.value})}),(function(){t.updateScores()}))}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();for(var n=0,c=0;c<this.state.scores.length;c++)n+=parseInt(this.state.scores[c].par);if(this.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{score:n})}),(function(){var e={username:t.state.username,course:t.state.course,score:t.state.score,date:t.state.date,scores:t.state.scores,par:t.state.par};H.a.post("https://birdie-tracker.herokuapp.com/scorecards/add",e).then((function(e){return console.log(e.data)}))})),null!=this.state.userAccount){var s=this.state.userAccount.best_score,a=this.state.userAccount.worst_score,r=n-this.state.par;r<this.state.userAccount.best_score&&(s=r),r>this.state.userAccount.worst_score&&(a=r);var o={username:this.state.userAccount.username,rounds_played:this.state.userAccount.rounds_played+1,best_score:s,worst_score:a};console.log(o),H.a.post("https://birdie-tracker.herokuapp.com/users/update/"+this.state.userAccount._id,o).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)}))}window.location="https://dreamy-mcnulty-8d46e1.netlify.app/scorecardlist"}},{key:"render",value:function(){var e=this;return this.state.isAuth?Object(I.jsxs)("div",{className:"scorecard_elements",children:[Object(I.jsx)("div",{className:"profile_header",children:Object(I.jsx)("h3",{children:"Create Scorecard"})}),Object(I.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{children:"Course: "}),Object(I.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.course,onChange:this.onChangeCourse,children:this.state.courses.map((function(e){return Object(I.jsx)("option",{value:e.name,children:e.name},e.name)}))})]}),Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{children:"Date: "}),Object(I.jsx)("div",{children:Object(I.jsx)(U.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(I.jsx)("div",{className:"score_boxes",children:this.state.scores.map((function(t,n){return Object(I.jsxs)("div",{className:"score",children:[Object(I.jsxs)("label",{children:["Hole ",n+1," score: "]}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{type:"number",value:t.par,onChange:e.onChangeScores(n)})})]},t._id)}))}),Object(I.jsx)("div",{className:"form-group",children:Object(I.jsx)("input",{type:"submit",value:"Create Scorecard",className:"btn btn-primary"})})]})]}):Object(I.jsx)("div",{children:Object(I.jsx)(P,{})})}}]),n}(f.Component),Z=Object(L.c)(Y),$=(f.Component,function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(e){var c;Object(S.a)(this,n),(c=t.call(this,e)).onAddHole=function(){c.setState({holes:c.state.holes.concat([{par:3}])})},c.onRemoveHole=function(e){return function(){c.setState({holes:c.state.holes.filter((function(t,n){return e!==n}))})}},c.onChangeHoles=function(e){return function(t){var n=c.state.holes.map((function(n,c){return e!==c?n:Object(W.a)(Object(W.a)({},n),{},{par:t.target.value})}));c.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{holes:n})}),(function(){}))}},c.onChangeName=c.onChangeName.bind(Object(_.a)(c)),c.onChangeLocation=c.onChangeLocation.bind(Object(_.a)(c)),c.onChangeHoles=c.onChangeHoles.bind(Object(_.a)(c)),c.onAddHole=c.onAddHole.bind(Object(_.a)(c)),c.onRemoveHole=c.onRemoveHole.bind(Object(_.a)(c)),c.onSubmit=c.onSubmit.bind(Object(_.a)(c));var s=c.props.auth0.isAuthenticated;if(s){var a=c.props.auth0.user;a.nickname,a.email;c.state={name:"",location:"",holes:[],par:0,isAuth:s}}else c.state={name:"",location:"",holes:[],par:0,isAuth:!1};return c}return Object(N.a)(n,[{key:"componentDidMount",value:function(){}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeLocation",value:function(e){this.setState({location:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();for(var n=0,c=0;c<this.state.holes.length;c++)n+=parseInt(this.state.holes[c].par);this.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{par:n})}),(function(){var e={name:t.state.name,location:t.state.location,holes:t.state.holes,par:t.state.par};H.a.post("https://birdie-tracker.herokuapp.com/courses/add",e).then((function(e){return console.log(e.data)})),window.location="https://dreamy-mcnulty-8d46e1.netlify.app/courselist"}))}},{key:"render",value:function(){var e=this;return this.state.isAuth?Object(I.jsxs)("div",{className:"scorecard_elements",children:[Object(I.jsx)("div",{className:"profile_header",children:Object(I.jsx)("h3",{children:"Create Course"})}),Object(I.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{children:"Name: "}),Object(I.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.name,onChange:this.onChangeName})]}),Object(I.jsx)("div",{}),Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{children:"Location: "}),Object(I.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.location,onChange:this.onChangeLocation})]}),Object(I.jsxs)("div",{className:"score_boxes",children:[this.state.holes.map((function(t,n){return Object(I.jsxs)("div",{className:"hole",children:[Object(I.jsx)("input",{type:"number",value:t.par,onChange:e.onChangeHoles(n)}),Object(I.jsx)("button",{type:"button",onClick:e.onRemoveHole(n),className:"small",children:"-"})]},t._id)})),Object(I.jsx)("button",{type:"button",onClick:this.onAddHole,className:"small",children:"Add Hole"})]}),Object(I.jsx)("div",{className:"form-group",children:Object(I.jsx)("input",{type:"submit",value:"Create Course",className:"btn btn-primary"})})]})]}):Object(I.jsx)("div",{children:Object(I.jsx)(P,{})})}}]),n}(f.Component)),K=Object(L.c)($),Q=function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:e.course.name}),Object(I.jsx)("td",{children:e.course.location}),Object(I.jsx)("td",{children:e.course.holes.length}),Object(I.jsxs)("td",{children:[Object(I.jsx)(k.b,{to:"/editcourse/"+e.course._id,children:"edit"})," | ",Object(I.jsx)("a",{href:"#",onClick:function(){e.deleteCourse(e.course._id)},children:"delete"})]})]})},X=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).deleteCourse=c.deleteCourse.bind(Object(_.a)(c)),c.state={courses:[]},c}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;H.a.get("https://birdie-tracker.herokuapp.com/courses/").then((function(t){e.setState({courses:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteCourse",value:function(e){H.a.delete("https://birdie-tracker.herokuapp.com/courses/"+e).then((function(e){return console.log(e.data)})),this.setState({courses:this.state.courses.filter((function(t){return t._id!==e}))})}},{key:"courseList",value:function(){var e=this;return this.state.courses.map((function(t){return Object(I.jsx)(Q,{course:t,deleteCourse:e.deleteCourse},t._id)}))}},{key:"render",value:function(){return Object(I.jsxs)("div",{className:"white_background",children:[Object(I.jsx)("h3",{children:"Course List"}),Object(I.jsxs)("table",{className:"table",children:[Object(I.jsx)("thead",{className:"thead-light",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Name"}),Object(I.jsx)("th",{children:"Location"}),Object(I.jsx)("th",{children:"Holes"}),Object(I.jsx)("th",{children:"Actions"})]})}),Object(I.jsx)("tbody",{children:this.courseList()})]})]})}}]),n}(f.Component),ee=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).onAddHole=function(){c.setState({holes:c.state.holes.concat([{par:3}])})},c.onRemoveHole=function(e){return function(){c.setState({holes:c.state.holes.filter((function(t,n){return e!==n}))})}},c.onChangeHoles=function(e){return function(t){var n=c.state.holes.map((function(n,c){return e!==c?n:Object(W.a)(Object(W.a)({},n),{},{par:t.target.value})}));c.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{holes:n})}),(function(){}))}},c.onChangeName=c.onChangeName.bind(Object(_.a)(c)),c.onChangeLocation=c.onChangeLocation.bind(Object(_.a)(c)),c.onChangeHoles=c.onChangeHoles.bind(Object(_.a)(c)),c.onAddHole=c.onAddHole.bind(Object(_.a)(c)),c.onRemoveHole=c.onRemoveHole.bind(Object(_.a)(c)),c.onSubmit=c.onSubmit.bind(Object(_.a)(c)),c.state={name:"",location:"",holes:[],par:0},c}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;H.a.get("https://birdie-tracker.herokuapp.com/courses/"+this.props.match.params.id).then((function(t){e.setState({name:t.data.name,location:t.data.location,holes:t.data.holes,par:t.data.par})})).catch((function(e){console.log(e)}))}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeLocation",value:function(e){this.setState({location:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();for(var n=0,c=0;c<this.state.holes.length;c++)n+=parseInt(this.state.holes[c].par);this.setState((function(e){return Object(W.a)(Object(W.a)({},e),{},{par:n})}),(function(){var e={name:t.state.name,location:t.state.location,holes:t.state.holes,par:t.state.par};H.a.post("https://birdie-tracker.herokuapp.com/courses/update/"+t.props.match.params.id,e).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)})),window.location="https://dreamy-mcnulty-8d46e1.netlify.app/courselist"}))}},{key:"render",value:function(){var e=this;return Object(I.jsxs)("div",{children:[Object(I.jsx)("h3",{children:"Change Courses"}),Object(I.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{children:"Name: "}),Object(I.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.name,onChange:this.onChangeName})]}),Object(I.jsx)("div",{}),Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{children:"Location: "}),Object(I.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.location,onChange:this.onChangeLocation})]}),this.state.holes.map((function(t,n){return Object(I.jsxs)("div",{className:"hole",children:[Object(I.jsx)("input",{type:"number",value:t.par,onChange:e.onChangeHoles(n)}),Object(I.jsx)("button",{type:"button",onClick:e.onRemoveHole(n),className:"small",children:"-"})]},t._id)})),Object(I.jsx)("button",{type:"button",onClick:this.onAddHole,className:"small",children:"Add Hole"}),Object(I.jsx)("div",{className:"form-group",children:Object(I.jsx)("input",{type:"submit",value:"Submit Changes",className:"btn btn-primary"})})]})]})}}]),n}(f.Component),te=n.p+"static/media/dgbasket.d8fcc474.jpg",ne=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(e){var c;return Object(S.a)(this,n),(c=t.call(this,e)).state={},c}return Object(N.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{children:Object(I.jsx)("h3",{className:"header_centered",children:"Welcome to BirdieTracker!"})}),Object(I.jsx)("img",{src:te,width:"600",height:"600",className:"center_div_horz"}),Object(I.jsx)("div",{className:"profile_message",children:Object(I.jsx)("h2",{children:"Your personal disc golf score tracking assistant"})})]})}}]),n}(f.Component),ce=n(46),se=n(11),ae=n(12),re=ae.a.nav(c||(c=Object(se.a)(["\n    background: #000;\n    height: 80px;\n    display: flex;\n    font-size: 22px;\n    top: 0;\n    justify-content: space-between;\n    padding: 0px 0px;\n    z-index: 10;\n"]))),oe=ae.a.div(s||(s=Object(se.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 80px;\n    z-index: 1;\n    width: 100%;\n    padding: 0 24px;\n    width: 2100px;\n"]))),ie=Object(ae.a)(k.c)(a||(a=Object(se.a)(["\n    color: #fff;\n    display: inline-block;\n    text-align: center; \n    vertical-align: middle;\n    line-height: 80px;\n\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n    width: fit-content;\n\n    &.active{\n        color: #15cdfc;\n    }\n"]))),ue=ae.a.div(r||(r=Object(se.a)(["\n    display: none;\n    color: #fff;\n\n    @media screen and (max-width: 1250px) {\n        display: flex;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        cursor: pointer;\n\n    }\n"]))),le=ae.a.div(o||(o=Object(se.a)(["\n    display: flex;\n    align-items: space-between;\n    margin-right: -24px;\n    height: 100%;\n\n    @media screen and (max-width: 1250px) {\n        display: none;\n    }\n"]))),de=ae.a.nav(i||(i=Object(se.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: 34px;\n    margin-left: 34px;\n\n    @media screen and (max-width: 1250px) {\n        display: none;\n    }\n"]))),he=(Object(ae.a)(k.c)(u||(u=Object(se.a)(["\n    border-radius: 4px;\n    background: #256ce1;\n    padding: 10px 22px;\n    color: #fff;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition all 0.2s ease-in-out;\n        background: #fff;\n        color: #010606;\n    }\n"]))),function(e){var t=e.toggle;return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(re,{children:Object(I.jsxs)(oe,{children:[Object(I.jsx)(ie,{to:"/",children:"BirdieTracker"}),Object(I.jsx)(ue,{onClick:t,children:Object(I.jsx)(ce.a,{})}),Object(I.jsxs)(le,{children:[Object(I.jsx)(ie,{to:"/scorecardlist",activeStyle:!0,children:"Scorecards"}),Object(I.jsx)(ie,{to:"/createscorecard",activeStyle:!0,children:"Create Scorecard"}),Object(I.jsx)(ie,{to:"/createcourse",activeStyle:!0,children:"Create Course"}),Object(I.jsx)(ie,{to:"/courselist",activeStyle:!0,children:"Courses"}),Object(I.jsx)(ie,{to:"/profile",activeStyle:!0,children:"Profile"})]}),Object(I.jsx)(de,{children:Object(I.jsx)(M,{})})]})})})}),je=ae.a.aside(l||(l=Object(se.a)(["\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    background: #0d0d0d;\n    display: grid;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-in-out;\n    opacity: ",";\n    top: ",";\n"])),(function(e){return e.isOpen?"100":"0"}),(function(e){return e.isOpen?"0":"-100%"})),be=Object(ae.a)(ce.b)(d||(d=Object(se.a)(["\n    color: #fff;\n"]))),pe=ae.a.div(h||(h=Object(se.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-size: 2rem;\n    cursor: pointer;\n    outline: none;\n"]))),Oe=ae.a.div(j||(j=Object(se.a)(["\n    color: #fff;\n"]))),me=ae.a.ul(b||(b=Object(se.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(7,80px);\n    text-align: center;\n\n    @media screen and (max-width: 480px) {\n        grid-template-rows: repeat(7, 60px);\n    }\n"]))),fe=Object(ae.a)(k.c)(p||(p=Object(se.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-deceoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n\n    $:hover {\n        color: #01bf71;\n        transition: 0.2s ease-in-out;\n    }\n"]))),xe=ae.a.div(O||(O=Object(se.a)(["\n    display: flex;\n    justify-content: center;\n"]))),ve=(Object(ae.a)(k.c)(m||(m=Object(se.a)(["\n    border-radius: 4px;\n    background: #256ce1;\n    padding: 10px 22px;\n    color: #fff;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition all 0.2s ease-in-out;\n        background: #fff;\n        color: #010606;\n    }\n"]))),function(e){var t=e.isOpen,n=e.toggle;return Object(I.jsxs)(je,{isOpen:t,onClick:n,children:[Object(I.jsx)(pe,{onClick:n,children:Object(I.jsx)(be,{})}),Object(I.jsx)(Oe,{children:Object(I.jsxs)(me,{children:[Object(I.jsx)(fe,{to:"/scorecardlist",activeStyle:!0,children:"Scorecards"}),Object(I.jsx)(fe,{to:"/createscorecard",activeStyle:!0,children:"Create Scorecard"}),Object(I.jsx)(fe,{to:"/createcourse",activeStyle:!0,children:"Create Course"}),Object(I.jsx)(fe,{to:"/courselist",activeStyle:!0,children:"Courses"}),Object(I.jsx)(fe,{to:"/profile",activeStyle:!0,children:"Profile"}),Object(I.jsx)(xe,{children:Object(I.jsx)(M,{})})]})})]})}),ge=function(){var e=Object(L.b)(),t=e.isAuthenticated,n=e.user,c=Object(f.useState)(!1),s=Object(C.a)(c,2),a=s[0],r=s[1],o=Object(f.useState)(0),i=Object(C.a)(o,2),u=i[0],l=i[1];Object(f.useEffect)((function(){if(!a&&t){var e=n.nickname;H.a.get("https://birdie-tracker.herokuapp.com/users/").then((function(t){var n=!1;if(t.data.length>0){for(var c=0;c<t.data.length;c++)if(t.data[c].username==e){console.log("Player found in DB"),console.log(t.data[c]._id),n=!0,l(t.data[c]);break}if(!n){var s={username:e,rounds_played:0,best_score:999,worst_score:-999};l(s),H.a.post("https://birdie-tracker.herokuapp.com/users/add",s).then((function(e){return console.log(e.data)})),n=!0}}else{var o={username:e,rounds_played:0,best_score:999,worst_score:-999};l(o),H.a.post("https://birdie-tracker.herokuapp.com/users/add",o).then((function(e){return console.log(e.data)})),n=!0}r(n),console.log(a)}))}}));if(t){var d=n.nickname,h=n.email;n.last_login;return Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"profile_header",children:Object(I.jsx)("h2",{children:"Personal Information:"})}),Object(I.jsxs)("div",{className:"personal_info",children:[Object(I.jsxs)("h3",{children:["Username: ",d]}),Object(I.jsxs)("h3",{children:["Email: ",h]})]}),Object(I.jsx)("div",{className:"profile_header",children:Object(I.jsx)("h2",{children:"Stats:"})}),Object(I.jsxs)("div",{className:"statistics",children:[Object(I.jsxs)("h3",{children:["Rounds Played: ",u.rounds_played]}),Object(I.jsxs)("h3",{children:["Best Score: ",u.best_score]}),Object(I.jsxs)("h3",{children:["Worst Score: ",u.worst_score]}),Object(I.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),0!=u){var t={username:u.username,rounds_played:0,best_score:999,worst_score:-999};console.log(t),H.a.post("https://birdie-tracker.herokuapp.com/users/update/"+u._id,t).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)})),r(!1)}},children:Object(I.jsx)("div",{className:"top_margin",children:Object(I.jsx)("input",{type:"submit",value:"Reset Player Stats",className:"btn btn-primary"})})})]})]})}return Object(I.jsx)("div",{children:Object(I.jsx)(P,{})})},Ce=function(e){var t=e.children,n=Object(y.e)();return Object(I.jsx)(L.a,{domain:"dev-tfkoqibw.us.auth0.com",clientId:"TVOkoGWq3lfwD1OhBZr5GsTzya1Dn7Fu",redirectUri:window.location.origin,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})};n(74);var ke=function(){var e=Object(f.useState)(!1),t=Object(C.a)(e,2),n=t[0],c=t[1],s=function(){c(!n)};return Object(I.jsx)(k.a,{children:Object(I.jsx)(Ce,{children:Object(I.jsxs)("div",{className:"container",children:[Object(I.jsx)(ve,{isOpen:n,toggle:s}),Object(I.jsx)(he,{toggle:s}),Object(I.jsx)("br",{}),Object(I.jsx)(y.a,{path:"/",exact:!0,component:ne}),Object(I.jsx)(y.a,{path:"/scorecardlist",component:E}),Object(I.jsx)(y.a,{path:"/editscorecard/:id",component:V}),Object(I.jsx)(y.a,{path:"/createscorecard",component:Z}),Object(I.jsx)(y.a,{path:"/createcourse",component:K}),Object(I.jsx)(y.a,{path:"/courselist",component:X}),Object(I.jsx)(y.a,{path:"/editcourse/:id",component:ee}),Object(I.jsx)(y.a,{path:"/profile",component:ge})]})})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};g.a.render(Object(I.jsx)(x.a.StrictMode,{children:Object(I.jsx)(ke,{})}),document.getElementById("root")),ye()},81:function(e,t,n){},82:function(e,t,n){}},[[156,1,2]]]);
//# sourceMappingURL=main.0bdfe941.chunk.js.map