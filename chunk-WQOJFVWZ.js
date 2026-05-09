import{b as F,c as w,i as t}from"./chunk-TIF2MXSB.js";import{na as B,ua as E}from"./chunk-V7ORDRQJ.js";import{Db as M,Ea as p,Gb as C,H as y,Ia as v,Ja as S,K as h,M as s,Qa as g,T as k,Xa as u,Xb as N,Ya as a,Za as c,_a as l,fa as f,rc as I,sa as o,sb as b,ub as D,vb as d}from"./chunk-BL3FYRJ7.js";var P=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var z={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},x=(()=>{class e extends E{name="progressspinner";style=P;classes=z;static \u0275fac=(()=>{let r;return function(n){return(r||(r=f(e)))(n||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var j=new h("PROGRESSSPINNER_INSTANCE"),L=(()=>{class e extends w{componentName="ProgressSpinner";$pcProgressSpinner=s(j,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(t,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=s(x);static \u0275fac=(()=>{let r;return function(n){return(r||(r=f(e)))(n||e)}})();static \u0275cmp=p({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(i,n){i&2&&(g("aria-label",n.ariaLabel)("role","progressbar")("aria-busy",!0),d(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[M([x,{provide:j,useExisting:e},{provide:F,useExisting:e}]),v([t]),S],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(i,n){i&1&&(k(),a(0,"svg",0),l(1,"circle",1),c()),i&2&&(d(n.cx("spin")),b("animation-duration",n.animationDuration),u("pBind",n.ptm("spin")),o(),d(n.cx("circle")),u("pBind",n.ptm("circle")),g("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[I,B,t],encapsulation:2,changeDetection:0})}return e})();var A=(e,m)=>({width:e,height:m}),R=class e{size=N("40px");static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["app-loading-spinner"]],inputs:{size:[1,"size"]},decls:2,vars:5,consts:[[1,"flex","items-center","justify-center","py-10"],["strokeWidth","4"]],template:function(r,i){r&1&&(a(0,"div",0),l(1,"p-progressspinner",1),c()),r&2&&(o(),D(C(2,A,i.size(),i.size())))},dependencies:[L],encapsulation:2})};export{R as a};
