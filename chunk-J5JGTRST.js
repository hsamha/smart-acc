import{a as Wt}from"./chunk-6HHJW7NW.js";import{a as Vt}from"./chunk-W2T7GP4H.js";import{a as Qt}from"./chunk-2JXJ25BU.js";import{a as Kt}from"./chunk-27TU3MAK.js";import"./chunk-SXTE32IR.js";import"./chunk-2PL7BUUN.js";import{a as jt}from"./chunk-MOYQCJWU.js";import{a as zt}from"./chunk-CYQRAVOQ.js";import"./chunk-7MGQRNDI.js";import{a as Nt,b as Mt,d as Lt,f as Ot,g as Ht}from"./chunk-2MY5IAA3.js";import"./chunk-AG5Z22TK.js";import"./chunk-6FV7RYO4.js";import{a as qt}from"./chunk-WQOJFVWZ.js";import{a as $t}from"./chunk-3IXORVCT.js";import"./chunk-VLQFDYTN.js";import{a as Rt}from"./chunk-CH23D5YL.js";import"./chunk-EMWDSAVM.js";import"./chunk-75QNKLG7.js";import{c as Pt}from"./chunk-JMSHZTES.js";import"./chunk-HDFHD5IT.js";import"./chunk-557DU2LX.js";import"./chunk-GY5RTA2W.js";import{a as At,b as j,c as H,i as h,j as $,o as dt,p as kt,q as Ft}from"./chunk-TIF2MXSB.js";import"./chunk-JEG2DLEX.js";import{C as lt,F as J,V as ut,k as st,ma as it,n as It,na as ct,u as St,ua as z,v as wt,w as G}from"./chunk-V7ORDRQJ.js";import{g as Dt,i as Bt,j as Et}from"./chunk-V6FMB5K2.js";import{Db as V,Ea as E,Fb as rt,G as K,H as M,Ia as P,Ja as L,K as k,Ka as I,M as c,Mb as T,Nb as C,Pb as xt,Qa as w,R as Q,S as q,T as at,Ta as y,Tb as b,Ua as _,Xa as d,Xb as S,Ya as a,Yb as Tt,Za as o,Zb as tt,_a as f,ba as F,cc as N,da as bt,dc as Ct,eb as Z,fa as x,fb as W,gb as vt,ha as mt,hb as A,ib as m,jb as O,kb as R,lb as ft,mb as gt,nb as D,ob as B,pb as ht,qb as yt,qc as et,rb as _t,rc as U,sa as s,vb as g,wb as u,wc as nt,xb as v,yb as ot}from"./chunk-BL3FYRJ7.js";import"./chunk-7CGTOI24.js";var Ut=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var X=["*"],pe=["previcon"],be=["nexticon"],oe=["content"],me=["prevButton"],ve=["nextButton"],fe=["inkbar"],ge=["tabs"];function he(e,r){e&1&&Z(0)}function ye(e,r){if(e&1&&I(0,he,1,0,"ng-container",11),e&2){let t=m(2);d("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function _e(e,r){e&1&&(at(),f(0,"svg",10))}function xe(e,r){if(e&1){let t=W();a(0,"button",9,3),A("click",function(){Q(t);let n=m();return q(n.onPrevButtonClick())}),y(2,ye,1,1,"ng-container")(3,_e,1,0,":svg:svg",10),o()}if(e&2){let t=m();g(t.cx("prevButton")),d("pBind",t.ptm("prevButton")),w("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),s(2),_(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Te(e,r){e&1&&Z(0)}function Ce(e,r){if(e&1&&I(0,Te,1,0,"ng-container",11),e&2){let t=m(2);d("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function De(e,r){e&1&&(at(),f(0,"svg",12))}function Be(e,r){if(e&1){let t=W();a(0,"button",9,4),A("click",function(){Q(t);let n=m();return q(n.onNextButtonClick())}),y(2,Ce,1,1,"ng-container")(3,De,1,0,":svg:svg",12),o()}if(e&2){let t=m();g(t.cx("nextButton")),d("pBind",t.ptm("nextButton")),w("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),s(2),_(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function Ee(e,r){e&1&&R(0)}function Ie(e,r){e&1&&Z(0)}function Se(e,r){if(e&1&&I(0,Ie,1,0,"ng-container",1),e&2){let t=m(),i=_t(1);d("ngTemplateOutlet",t.content()?t.content():i)}}var we={root:({instance:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable()}]},Gt=(()=>{class e extends z{name="tabs";style=Ut;classes=we;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Jt=new k("TABS_INSTANCE"),Y=(()=>{class e extends H{componentName="Tabs";$pcTabs=c(Jt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=tt(void 0);scrollable=S(!1,{transform:N});lazy=S(!1,{transform:N});selectOnFocus=S(!1,{transform:N});showNavigators=S(!0,{transform:N});tabindex=S(0,{transform:Ct});id=F(At("pn_id_"));_componentStyle=c(Gt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=E({type:e,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(w("id",n.id()),g(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[V([Gt,{provide:Jt,useExisting:e},{provide:j,useExisting:e}]),P([h]),L],ngContentSelectors:X,decls:1,vars:0,template:function(i,n){i&1&&(O(),R(0))},dependencies:[U,$],encapsulation:2,changeDetection:0})}return e})(),Ae={root:({instance:e})=>["p-tab",{"p-tab-active":e.active(),"p-disabled":e.disabled()}]},Xt=(()=>{class e extends z{name="tab";classes=Ae;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ne={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Yt=(()=>{class e extends z{name="tablist";classes=Ne;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Zt=new k("TABLIST_INSTANCE"),pt=(()=>{class e extends H{componentName="TabList";$pcTabList=c(Zt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=c(K(()=>Y));isPrevButtonEnabled=F(!1);isNextButtonEnabled=F(!1);resizeObserver;showNavigators=b(()=>this.pcTabs.showNavigators());tabindex=b(()=>this.pcTabs.tabindex());scrollable=b(()=>this.pcTabs.scrollable());_componentStyle=c(Yt);constructor(){super(),bt(()=>{this.pcTabs.value(),nt(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&nt(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=J(t),n=Math.abs(t.scrollLeft)-i,l=n<=0?0:n;t.scrollLeft=st(t)?-1*l:l}onNextButtonClick(){let t=this.content.nativeElement,i=J(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,l=t.scrollWidth-i,p=n>=l?l:n;t.scrollLeft=st(t)?-1*p:p}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:l}=t,p=Math.abs(t.scrollLeft),ce=J(t);this.isPrevButtonEnabled.set(p!==0),this.isNextButtonEnabled.set(i.offsetWidth>=l&&Math.abs(p-n+ce)>1)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,l=St(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=It(l)+"px",i.style.left=lt(l).left-lt(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,l)=>l?n+J(l):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=E({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,l){if(i&1&&ft(l,pe,4)(l,be,4)(l,it,4),i&2){let p;D(p=B())&&(n.prevIconTemplate=p.first),D(p=B())&&(n.nextIconTemplate=p.first),D(p=B())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&gt(oe,5)(me,5)(ve,5)(fe,5)(ge,5),i&2){let l;D(l=B())&&(n.content=l.first),D(l=B())&&(n.prevButton=l.first),D(l=B())&&(n.nextButton=l.first),D(l=B())&&(n.inkbar=l.first),D(l=B())&&(n.tabs=l.first)}},hostVars:2,hostBindings:function(i,n){i&2&&g(n.cx("root"))},features:[V([Yt,{provide:Zt,useExisting:e},{provide:j,useExisting:e}]),P([h]),L],ngContentSelectors:X,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){i&1&&(O(),y(0,xe,4,7,"button",5),a(1,"div",6,0),A("scroll",function(p){return n.onScroll(p)}),a(3,"div",7,1),R(5),f(6,"span",8,2),o()(),y(8,Be,4,7,"button",5)),i&2&&(_(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),s(),g(n.cx("content")),d("pBind",n.ptm("content")),s(2),g(n.cx("tabList")),d("pBind",n.ptm("tabList")),s(3),g(n.cx("activeBar")),d("pBind",n.ptm("activeBar")),s(2),_(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[U,et,Nt,Mt,kt,dt,ct,$,h],encapsulation:2,changeDetection:0})}return e})(),te=new k("TAB_INSTANCE"),re=(()=>{class e extends H{componentName="Tab";$pcTab=c(te,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=tt();disabled=S(!1,{transform:N});pcTabs=c(K(()=>Y));pcTabList=c(K(()=>pt));el=c(mt);_componentStyle=c(Xt);ripple=b(()=>this.config.ripple());id=b(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=b(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=b(()=>ut(this.pcTabs.value(),this.value()));tabindex=b(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.disabled()||this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.disabled()||this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?G(n,"data-p-disabled")||G(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?G(n,"data-p-disabled")||G(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){wt(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){nt(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=E({type:e,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&A("focus",function(p){return n.onFocus(p)})("click",function(p){return n.onClick(p)})("keydown",function(p){return n.onKeyDown(p)}),i&2&&(w("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),g(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[V([Xt,{provide:te,useExisting:e},{provide:j,useExisting:e}]),P([dt,h]),L],ngContentSelectors:X,decls:1,vars:0,template:function(i,n){i&1&&(O(),R(0))},dependencies:[U,ct,$],encapsulation:2,changeDetection:0})}return e})(),Me={root:({instance:e})=>["p-tabpanel",{"p-tabpanel-active":e.active()}]},ee=(()=>{class e extends z{name="tabpanel";classes=Me;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var ne=new k("TABPANEL_INSTANCE"),se=(()=>{class e extends H{componentName="TabPanel";$pcTabPanel=c(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});pcTabs=c(K(()=>Y));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=S(!1,{transform:N});value=tt(void 0);content=Tt("content");id=b(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=b(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=b(()=>ut(this.pcTabs.value(),this.value()));isLazyEnabled=b(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=b(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=c(ee);static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=E({type:e,selectors:[["p-tabpanel"]],contentQueries:function(i,n,l){i&1&&ht(l,n.content,oe,5),i&2&&yt()},hostVars:7,hostBindings:function(i,n){i&2&&(vt("hidden",!n.active()),w("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),g(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[V([ee,{provide:ne,useExisting:e},{provide:j,useExisting:e}]),P([h]),L],ngContentSelectors:X,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(O(),I(0,Ee,1,0,"ng-template",null,0,xt),y(2,Se,1,1,"ng-container")),i&2&&(s(2),_(n.shouldRender()?2:-1))},dependencies:[et,$],encapsulation:2,changeDetection:0})}return e})(),ke={root:"p-tabpanels"},ie=(()=>{class e extends z{name="tabpanels";classes=ke;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var ae=new k("TABPANELS_INSTANCE"),le=(()=>{class e extends H{componentName="TabPanels";$pcTabPanels=c(ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(h,{self:!0});_componentStyle=c(ie);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=E({type:e,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(i,n){i&2&&(w("role","presentation"),g(n.cx("root")))},features:[V([ie,{provide:ae,useExisting:e},{provide:j,useExisting:e}]),P([h]),L],ngContentSelectors:X,decls:1,vars:0,template:function(i,n){i&1&&(O(),R(0))},dependencies:[U,$],encapsulation:2,changeDetection:0})}return e})();var Fe=e=>["/customers",e,"edit"],Pe=e=>["/debts",e];function Le(e,r){e&1&&f(0,"app-loading-spinner")}function Oe(e,r){if(e&1&&(a(0,"div")(1,"dt",12),u(2,"\u0645\u0644\u0627\u062D\u0638\u0627\u062A"),o(),a(3,"dd",22),u(4),o()()),e&2){let t=m(2);s(4),v(t.customer().notes)}}function Re(e,r){e&1&&f(0,"app-empty-state",19)}function Ve(e,r){e&1&&(a(0,"tr")(1,"th"),u(2,"\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629"),o(),a(3,"th"),u(4,"\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),o(),a(5,"th"),u(6,"\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"),o(),a(7,"th"),u(8,"\u0627\u0644\u0645\u062A\u0628\u0642\u064A"),o(),a(9,"th"),u(10,"\u0627\u0644\u062D\u0627\u0644\u0629"),o()())}function ze(e,r){if(e&1){let t=W();a(0,"tr",25),A("click",function(){let n=Q(t).$implicit,l=m(3);return q(l.viewInvoice(n.id))}),a(1,"td",26),u(2),o(),a(3,"td"),u(4),T(5,"arabicDate"),o(),a(6,"td"),u(7),T(8,"currencyFormat"),o(),a(9,"td")(10,"span"),u(11),T(12,"currencyFormat"),o()(),a(13,"td"),f(14,"app-status-badge",27),o()()}if(e&2){let t=r.$implicit;s(2),v(t.invoiceNumber),s(2),v(C(5,7,t.createdAt)),s(3),v(C(8,9,t.total)),s(3),g(t.amountDue>0?"text-rose-600 font-semibold":"text-emerald-600"),s(),v(C(12,11,t.amountDue)),s(3),d("value",t.status)}}function je(e,r){if(e&1&&(a(0,"p-table",20),I(1,Ve,11,0,"ng-template",23)(2,ze,15,13,"ng-template",24),o()),e&2){let t=m(2);d("value",t.customerInvoices())}}function He(e,r){e&1&&f(0,"app-empty-state",21)}function $e(e,r){e&1&&(a(0,"tr")(1,"th"),u(2,"\u0631\u0642\u0645 \u0627\u0644\u0633\u0646\u062F"),o(),a(3,"th"),u(4,"\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),o(),a(5,"th"),u(6,"\u0627\u0644\u0645\u0628\u0644\u063A"),o(),a(7,"th"),u(8,"\u0627\u0644\u0637\u0631\u064A\u0642\u0629"),o(),a(9,"th"),u(10,"\u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629"),o()())}function Ke(e,r){if(e&1&&(a(0,"tr")(1,"td",26),u(2),o(),a(3,"td"),u(4),T(5,"arabicDate"),o(),a(6,"td",28),u(7),T(8,"currencyFormat"),o(),a(9,"td"),u(10),o(),a(11,"td",29),u(12),o()()),e&2){let t=r.$implicit,i=m(3);s(2),v(t.receiptNumber),s(2),v(C(5,5,t.date)),s(3),v(C(8,7,t.amount)),s(3),v(i.paymentMethodLabel(t.method)),s(2),v(t.invoiceNumber||"\u062F\u0641\u0639\u0629 \u0639\u0644\u0649 \u0627\u0644\u062D\u0633\u0627\u0628")}}function Qe(e,r){if(e&1&&(a(0,"p-table",20),I(1,$e,11,0,"ng-template",23)(2,Ke,13,9,"ng-template",24),o()),e&2){let t=m(2);d("value",t.customerPayments())}}function qe(e,r){if(e&1&&(a(0,"app-page-header",0),f(1,"p-button",1)(2,"p-button",2),o(),a(3,"div",3),f(4,"app-stat-card",4),T(5,"currencyFormat"),f(6,"app-stat-card",5),T(7,"currencyFormat"),f(8,"app-stat-card",6)(9,"app-stat-card",7),T(10,"currencyFormat"),o(),a(11,"div",8)(12,"div",9)(13,"h3",10),u(14,"\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644"),o(),a(15,"dl",11)(16,"div")(17,"dt",12),u(18,"\u0627\u0644\u0647\u0627\u062A\u0641"),o(),a(19,"dd",13),u(20),o()(),a(21,"div")(22,"dt",12),u(23,"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),o(),a(24,"dd",13),u(25),o()(),a(26,"div")(27,"dt",12),u(28,"\u0627\u0644\u0645\u062F\u064A\u0646\u0629"),o(),a(29,"dd",13),u(30),o()(),a(31,"div")(32,"dt",12),u(33,"\u0627\u0644\u062D\u0627\u0644\u0629"),o(),a(34,"dd",14),f(35,"app-status-badge",15),o()(),a(36,"div")(37,"dt",12),u(38,"\u0622\u062E\u0631 \u0639\u0645\u0644\u064A\u0629"),o(),a(39,"dd",13),u(40),T(41,"arabicDate"),o()(),y(42,Oe,5,1,"div"),o()(),a(43,"div",16)(44,"p-tabs",17)(45,"p-tablist")(46,"p-tab",17),u(47),o(),a(48,"p-tab",18),u(49),o()(),a(50,"p-tabpanels")(51,"p-tabpanel",17),y(52,Re,1,0,"app-empty-state",19)(53,je,3,1,"p-table",20),o(),a(54,"p-tabpanel",18),y(55,He,1,0,"app-empty-state",21)(56,Qe,3,1,"p-table",20),o()()()()()),e&2){let t=m();d("title",t.customer().name)("subtitle",t.categoryLabel()+" \u2022 "+(t.customer().city||"\u0628\u062F\u0648\u0646 \u0645\u062F\u064A\u0646\u0629")),s(),d("routerLink",rt(27,Fe,t.customer().id)),s(),d("routerLink",rt(29,Pe,t.customer().id)),s(2),d("value",C(5,19,t.customer().currentBalance))("tone",t.customer().currentBalance>0?"danger":"success"),s(2),d("value",C(7,21,t.customer().totalPurchases)),s(2),d("value",t.customer().invoicesCount.toString()),s(),d("value",C(10,23,t.customer().creditLimit)),s(11),v(t.customer().phone||"-"),s(5),v(t.customer().address||"-"),s(5),v(t.customer().city||"-"),s(5),d("value",t.customer().status),s(5),v(C(41,25,t.customer().lastPurchaseAt)),s(2),_(t.customer().notes?42:-1),s(5),ot("\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631 (",t.customerInvoices().length,")"),s(2),ot("\u0627\u0644\u0645\u062F\u0641\u0648\u0639\u0627\u062A (",t.customerPayments().length,")"),s(3),_(t.customerInvoices().length===0?52:53),s(3),_(t.customerPayments().length===0?55:56)}}var ue=class e{route=c(Dt);router=c(Bt);store=c($t);invoicesStore=c(Kt);paymentsStore=c(Qt);customerId=F("");customer=b(()=>{let r=this.customerId();return r?this.store.getById(r):void 0});customerInvoices=b(()=>{let r=this.customerId();return r?this.invoicesStore.getByCustomer(r):[]});customerPayments=b(()=>{let r=this.customerId();return r?this.paymentsStore.getByCustomer(r):[]});ngOnInit(){let r=this.route.snapshot.paramMap.get("id")??"";this.customerId.set(r),this.store.loadAll(),this.invoicesStore.loadAll(),this.paymentsStore.loadAll()}categoryLabel(){let r=this.customer();return r?Pt.find(t=>t.value===r.category)?.label??r.category:""}paymentMethodLabel(r){return{cash:"\u0646\u0642\u062F\u0627\u064B",bank_transfer:"\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A",check:"\u0634\u064A\u0643"}[r]??r}viewInvoice(r){this.router.navigate(["/invoices",r])}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-customer-detail-page"]],decls:2,vars:1,consts:[[3,"title","subtitle"],["label","\u062A\u0639\u062F\u064A\u0644","icon","pi pi-pencil","severity","secondary",3,"routerLink"],["label","\u0643\u0634\u0641 \u0627\u0644\u062D\u0633\u0627\u0628","icon","pi pi-wallet",3,"routerLink"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-4","gap-4","mb-6"],["label","\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u062D\u0627\u0644\u064A","icon","pi pi-wallet",3,"value","tone"],["label","\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A","icon","pi pi-chart-line","tone","primary",3,"value"],["label","\u0639\u062F\u062F \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631","icon","pi pi-file","tone","info",3,"value"],["label","\u0627\u0644\u062D\u062F \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A","icon","pi pi-credit-card","tone","warn",3,"value"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-6","mb-6"],[1,"app-card","p-6","lg:col-span-1"],[1,"text-base","font-semibold","text-slate-800","mb-4","m-0"],[1,"space-y-3"],[1,"text-xs","text-slate-500"],[1,"text-sm","font-medium","text-slate-800","mt-0.5"],[1,"mt-1"],["kind","customer",3,"value"],[1,"app-card","p-6","lg:col-span-2"],["value","0"],["value","1"],["icon","pi pi-file","title","\u0644\u0627 \u062A\u0648\u062C\u062F \u0641\u0648\u0627\u062A\u064A\u0631 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644"],["styleClass","p-datatable-sm",3,"value"],["icon","pi pi-wallet","title","\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u062F\u0641\u0648\u0639\u0627\u062A \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644"],[1,"text-sm","text-slate-700","mt-0.5"],["pTemplate","header"],["pTemplate","body"],[1,"cursor-pointer","hover:bg-slate-50",3,"click"],[1,"font-medium"],["kind","invoice",3,"value"],[1,"text-emerald-600","font-semibold"],[1,"text-slate-500"]],template:function(t,i){t&1&&y(0,Le,1,0,"app-loading-spinner")(1,qe,57,31),t&2&&_(i.customer()?1:0)},dependencies:[Et,Ot,Lt,it,Ft,Y,pt,re,se,le,Rt,zt,qt,jt,Vt,Ht,Wt],encapsulation:2})};export{ue as CustomerDetailPage};
