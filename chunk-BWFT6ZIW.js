import{a as vt}from"./chunk-DNHSL4C7.js";import{a as fe}from"./chunk-2YREXAWY.js";import{a as gt}from"./chunk-QDX6EJ63.js";import"./chunk-LN63MKQE.js";import{a as yt}from"./chunk-WAAH7U2N.js";import{a as ot}from"./chunk-FCF2PGKC.js";import{a as ft}from"./chunk-27TU3MAK.js";import"./chunk-2PL7BUUN.js";import{c as rt,d as ct,f as dt,g as _t}from"./chunk-2MY5IAA3.js";import{a as ut}from"./chunk-AG5Z22TK.js";import"./chunk-6FV7RYO4.js";import{a as ht}from"./chunk-3IXORVCT.js";import{a as Ze,b as pt,f as st}from"./chunk-VLQFDYTN.js";import{a as mt}from"./chunk-CH23D5YL.js";import"./chunk-EMWDSAVM.js";import{a as qe,b as $e,e as He,g as Qe,l as Ge,o as tt,r as nt,s as it}from"./chunk-75QNKLG7.js";import{g as at}from"./chunk-JMSHZTES.js";import{a as lt}from"./chunk-HDFHD5IT.js";import"./chunk-557DU2LX.js";import{b as Je}from"./chunk-GY5RTA2W.js";import{a as Ke,b as ge,c as Ue,h as We,i as P,j as je,n as Ye,o as Xe,q as et}from"./chunk-TIF2MXSB.js";import"./chunk-JEG2DLEX.js";import{Q as Te,T as j,U as Z,V as Y,X as Se,ka as Re,ma as J,na as me,oa as _e,u as de,ua as he,v as q}from"./chunk-V7ORDRQJ.js";import{i as ze}from"./chunk-V6FMB5K2.js";import{Aa as be,Ab as A,Bb as B,Cb as L,Db as le,Ea as U,Eb as Pe,Fb as z,G as Me,Gb as re,H as te,Hb as Ie,Ia as ie,Ja as oe,K as ne,Ka as h,M as O,Mb as K,Nb as R,Pb as H,Qa as v,R as m,S as _,T as Q,Ta as F,Tb as D,Ua as N,Xa as s,Xb as we,Y as T,Ya as c,Z as Ve,Za as u,_a as E,ba as S,cb as M,cc as y,db as V,dc as G,eb as k,fa as X,fb as I,hb as f,ib as l,jb as Ae,kb as Be,lb as ae,mb as Le,mc as pe,nb as x,nc as Fe,ob as b,oc as se,pc as Ne,qa as ke,qc as ue,rb as ee,rc as ce,sa as p,sb as De,ub as W,vb as g,wb as d,xb as w,yb as $,zb as Ce}from"./chunk-BL3FYRJ7.js";import{a as ve,b as xe}from"./chunk-7CGTOI24.js";var xt=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var Dt=["removeicon"],Pt=["*"];function Ft(i,a){if(i&1){let e=I();c(0,"img",4),f("error",function(n){m(e);let o=l();return _(o.imageError(n))}),u()}if(i&2){let e=l();g(e.cx("image")),s("pBind",e.ptm("image"))("src",e.image,ke)("alt",e.alt)}}function Nt(i,a){if(i&1&&E(0,"span",6),i&2){let e=l(2);g(e.icon),s("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function zt(i,a){if(i&1&&h(0,Nt,1,4,"span",5),i&2){let e=l();s("ngIf",e.icon)}}function Kt(i,a){if(i&1&&(c(0,"div",7),d(1),u()),i&2){let e=l();g(e.cx("label")),s("pBind",e.ptm("label")),p(),w(e.label)}}function Rt(i,a){if(i&1){let e=I();c(0,"span",11),f("click",function(n){m(e);let o=l(3);return _(o.close(n))})("keydown",function(n){m(e);let o=l(3);return _(o.onKeydown(n))}),u()}if(i&2){let e=l(3);g(e.removeIcon),s("pBind",e.ptm("removeIcon"))("ngClass",e.cx("removeIcon")),v("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function qt(i,a){if(i&1){let e=I();Q(),c(0,"svg",12),f("click",function(n){m(e);let o=l(3);return _(o.close(n))})("keydown",function(n){m(e);let o=l(3);return _(o.onKeydown(n))}),u()}if(i&2){let e=l(3);g(e.cx("removeIcon")),s("pBind",e.ptm("removeIcon")),v("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function $t(i,a){if(i&1&&(M(0),h(1,Rt,1,6,"span",9)(2,qt,1,5,"svg",10),V()),i&2){let e=l(2);p(),s("ngIf",e.removeIcon),p(),s("ngIf",!e.removeIcon)}}function Ht(i,a){}function Qt(i,a){i&1&&h(0,Ht,0,0,"ng-template")}function Gt(i,a){if(i&1){let e=I();c(0,"span",13),f("click",function(n){m(e);let o=l(2);return _(o.close(n))})("keydown",function(n){m(e);let o=l(2);return _(o.onKeydown(n))}),h(1,Qt,1,0,null,14),u()}if(i&2){let e=l(2);g(e.cx("removeIcon")),s("pBind",e.ptm("removeIcon")),v("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel),p(),s("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Ut(i,a){if(i&1&&(M(0),h(1,$t,3,2,"ng-container",3)(2,Gt,2,6,"span",8),V()),i&2){let e=l();p(),s("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),p(),s("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Wt={root:({instance:i})=>({display:!i.visible&&"none"})},jt={root:({instance:i})=>["p-chip p-component",{"p-disabled":i.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},bt=(()=>{class i extends he{name="chip";style=xt;classes=jt;inlineStyles=Wt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=X(i)))(n||i)}})();static \u0275prov=te({token:i,factory:i.\u0275fac})}return i})();var Ct=new ne("CHIP_INSTANCE"),wt=(()=>{class i extends Ue{componentName="Chip";$pcChip=O(Ct,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=O(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new T;onImageError=new T;visible=!0;get removeAriaLabel(){return this.config.getTranslation(_e.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([t,n])=>this[`_${t}`]!==n&&(this[`_${t}`]=n))}_chipProps;_componentStyle=O(bt);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="removeicon"?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:t}=e.chipProps;t.label!==void 0&&(this.label=t.label),t.icon!==void 0&&(this.icon=t.icon),t.image!==void 0&&(this.image=t.image),t.alt!==void 0&&(this.alt=t.alt),t.styleClass!==void 0&&(this.styleClass=t.styleClass),t.removable!==void 0&&(this.removable=t.removable),t.removeIcon!==void 0&&(this.removeIcon=t.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.removable})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=X(i)))(n||i)}})();static \u0275cmp=U({type:i,selectors:[["p-chip"]],contentQueries:function(t,n,o){if(t&1&&ae(o,Dt,4)(o,J,4),t&2){let r;x(r=b())&&(n.removeIconTemplate=r.first),x(r=b())&&(n.templates=r)}},hostVars:6,hostBindings:function(t,n){t&2&&(v("aria-label",n.label)("data-p",n.dataP),W(n.sx("root")),g(n.cn(n.cx("root"),n.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",y],removable:[2,"removable","removable",y],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[le([bt,{provide:Ct,useExisting:i},{provide:ge,useExisting:i}]),ie([P]),oe],ngContentSelectors:Pt,decls:6,vars:4,consts:[["iconTemplate",""],[3,"pBind","class","src","alt","error",4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"],[4,"ngIf"],[3,"error","pBind","src","alt"],[3,"pBind","class","ngClass",4,"ngIf"],[3,"pBind","ngClass"],[3,"pBind"],["role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"pBind","class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","pBind","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown","pBind"],["role","button",3,"click","keydown","pBind"],[4,"ngTemplateOutlet"]],template:function(t,n){if(t&1&&(Ae(),Be(0),h(1,Ft,1,5,"img",1)(2,zt,1,1,"ng-template",null,0,H)(4,Kt,2,4,"div",2)(5,Ut,3,2,"ng-container",3)),t&2){let o=ee(3);p(),s("ngIf",n.image)("ngIfElse",o),p(3),s("ngIf",n.label),p(),s("ngIf",n.removable)}},dependencies:[ce,pe,se,ue,fe,me,P],encapsulation:2,changeDetection:0})}return i})();var Tt=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled):hover {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('autocomplete.disabled.background');
        color: dt('autocomplete.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`;var Yt=["item"],Jt=["empty"],Xt=["header"],en=["footer"],tn=["selecteditem"],nn=["group"],on=["loader"],an=["removeicon"],ln=["loadingicon"],rn=["clearicon"],pn=["dropdownicon"],sn=["focusInput"],un=["multiIn"],cn=["multiContainer"],dn=["ddBtn"],mn=["items"],_n=["scroller"],hn=["overlay"],gn=i=>({i}),Et=i=>({$implicit:i}),fn=(i,a,e)=>({removeCallback:i,index:a,class:e}),ye=i=>({height:i}),Mt=(i,a)=>({$implicit:i,options:a}),yn=i=>({options:i}),vn=()=>({}),xn=(i,a,e)=>({option:i,i:a,scrollerOptions:e}),bn=(i,a)=>({$implicit:i,index:a});function Cn(i,a){if(i&1){let e=I();c(0,"input",18,2),f("input",function(n){m(e);let o=l();return _(o.onInput(n))})("keydown",function(n){m(e);let o=l();return _(o.onKeyDown(n))})("change",function(n){m(e);let o=l();return _(o.onInputChange(n))})("focus",function(n){m(e);let o=l();return _(o.onInputFocus(n))})("blur",function(n){m(e);let o=l();return _(o.onInputBlur(n))})("paste",function(n){m(e);let o=l();return _(o.onInputPaste(n))})("keyup",function(n){m(e);let o=l();return _(o.onInputKeyUp(n))}),u()}if(i&2){let e=l();g(e.cn(e.cx("pcInputText"),e.inputStyleClass)),s("pAutoFocus",e.autofocus)("pt",e.ptm("pcInputText"))("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid)("pInputTextUnstyled",e.unstyled()),v("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function In(i,a){if(i&1){let e=I();Q(),c(0,"svg",21),f("click",function(){m(e);let n=l(2);return _(n.clear())}),u()}if(i&2){let e=l(2);g(e.cx("clearIcon")),s("pBind",e.ptm("clearIcon")),v("aria-hidden",!0)}}function wn(i,a){}function Tn(i,a){i&1&&h(0,wn,0,0,"ng-template")}function Sn(i,a){if(i&1){let e=I();c(0,"span",22),f("click",function(){m(e);let n=l(2);return _(n.clear())}),h(1,Tn,1,0,null,23),u()}if(i&2){let e=l(2);g(e.cx("clearIcon")),s("pBind",e.ptm("clearIcon")),v("aria-hidden",!0),p(),s("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function On(i,a){if(i&1&&(M(0),h(1,In,1,4,"svg",19)(2,Sn,2,5,"span",20),V()),i&2){let e=l();p(),s("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),p(),s("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function En(i,a){i&1&&k(0)}function Mn(i,a){if(i&1){let e=I();c(0,"span",22),f("click",function(n){m(e);let o=l(2).index,r=l(2);return _(!r.readonly&&!r.$disabled()?r.removeOption(n,o):"")}),Q(),E(1,"svg",31),u()}if(i&2){let e=l(4);g(e.cx("chipIcon")),s("pBind",e.ptm("chipIcon")),p(),g(e.cx("chipIcon")),v("aria-hidden",!0)}}function Vn(i,a){}function kn(i,a){i&1&&h(0,Vn,0,0,"ng-template")}function An(i,a){if(i&1&&(c(0,"span",32),h(1,kn,1,0,null,29),u()),i&2){let e=l(2).index,t=l(2);s("pBind",t.ptm("chipIcon")),v("aria-hidden",!0),p(),s("ngTemplateOutlet",t.removeIconTemplate||t._removeIconTemplate)("ngTemplateOutletContext",Ie(4,fn,t.removeOption.bind(t),e,t.cx("chipIcon")))}}function Bn(i,a){if(i&1&&h(0,Mn,2,6,"span",20)(1,An,2,8,"span",30),i&2){let e=l(3);s("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),p(),s("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function Ln(i,a){if(i&1){let e=I();c(0,"li",26,5)(2,"p-chip",28),f("onRemove",function(n){let o=m(e).index,r=l(2);return _(r.readonly?"":r.removeOption(n,o))}),h(3,En,1,0,"ng-container",29)(4,Bn,2,2,"ng-template",null,6,H),u()()}if(i&2){let e=a.$implicit,t=a.index,n=l(2);g(n.cx("chipItem",z(17,gn,t))),s("pBind",n.ptm("chipItem")),v("id",n.id+"_multiple_option_"+t)("aria-label",n.getOptionLabel(e))("aria-setsize",n.modelValue().length)("aria-posinset",t+1)("aria-selected",!0),p(2),g(n.cx("pcChip")),s("pt",n.ptm("pcChip"))("label",!n.selectedItemTemplate&&!n._selectedItemTemplate&&n.getOptionLabel(e))("disabled",n.$disabled())("removable",!0)("unstyled",n.unstyled()),p(),s("ngTemplateOutlet",n.selectedItemTemplate||n._selectedItemTemplate)("ngTemplateOutletContext",z(19,Et,e))}}function Dn(i,a){if(i&1){let e=I();c(0,"ul",24,3),f("focus",function(n){m(e);let o=l();return _(o.onMultipleContainerFocus(n))})("blur",function(n){m(e);let o=l();return _(o.onMultipleContainerBlur(n))})("keydown",function(n){m(e);let o=l();return _(o.onMultipleContainerKeyDown(n))}),h(2,Ln,6,21,"li",25),c(3,"li",26)(4,"input",27,4),f("input",function(n){m(e);let o=l();return _(o.onInput(n))})("keydown",function(n){m(e);let o=l();return _(o.onKeyDown(n))})("change",function(n){m(e);let o=l();return _(o.onInputChange(n))})("focus",function(n){m(e);let o=l();return _(o.onInputFocus(n))})("blur",function(n){m(e);let o=l();return _(o.onInputBlur(n))})("paste",function(n){m(e);let o=l();return _(o.onInputPaste(n))})("keyup",function(n){m(e);let o=l();return _(o.onInputKeyUp(n))}),u()()()}if(i&2){let e=l();g(e.cx("inputMultiple")),s("pBind",e.ptm("inputMultiple"))("tabindex",-1),v("data-p",e.inputMultipleDataP)("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),p(2),s("ngForOf",e.modelValue()),p(),g(e.cx("inputChip")),s("pBind",e.ptm("inputChip")),p(),g(e.cx("pcInputText")),s("pAutoFocus",e.autofocus)("pBind",e.ptm("input"))("ngStyle",e.inputStyle),v("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Pn(i,a){if(i&1&&(Q(),E(0,"svg",35)),i&2){let e=l(2);g(e.cx("loader")),s("pBind",e.ptm("loader"))("spin",!0),v("aria-hidden",!0)}}function Fn(i,a){}function Nn(i,a){i&1&&h(0,Fn,0,0,"ng-template")}function zn(i,a){if(i&1&&(c(0,"span",32),h(1,Nn,1,0,null,23),u()),i&2){let e=l(2);g(e.cx("loader")),s("pBind",e.ptm("loader")),v("aria-hidden",!0),p(),s("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Kn(i,a){if(i&1&&(M(0),h(1,Pn,1,5,"svg",33)(2,zn,2,5,"span",34),V()),i&2){let e=l();p(),s("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),p(),s("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Rn(i,a){if(i&1&&E(0,"span",38),i&2){let e=l(2);s("ngClass",e.dropdownIcon),v("aria-hidden",!0)}}function qn(i,a){if(i&1&&(Q(),E(0,"svg",40)),i&2){let e=l(3);s("pBind",e.ptm("dropdown"))}}function $n(i,a){}function Hn(i,a){i&1&&h(0,$n,0,0,"ng-template")}function Qn(i,a){if(i&1&&(M(0),h(1,qn,1,1,"svg",39)(2,Hn,1,0,null,23),V()),i&2){let e=l(2);p(),s("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),p(),s("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Gn(i,a){if(i&1){let e=I();c(0,"button",36,7),f("click",function(n){m(e);let o=l();return _(o.handleDropdownClick(n))}),h(2,Rn,1,2,"span",37)(3,Qn,3,2,"ng-container",14),u()}if(i&2){let e=l();g(e.cx("dropdown")),s("pBind",e.ptm("dropdown"))("disabled",e.$disabled()),v("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),p(2),s("ngIf",e.dropdownIcon),p(),s("ngIf",!e.dropdownIcon)}}function Un(i,a){i&1&&k(0)}function Wn(i,a){i&1&&k(0)}function jn(i,a){if(i&1&&h(0,Wn,1,0,"ng-container",29),i&2){let e=a.$implicit,t=a.options;l(2);let n=ee(6);s("ngTemplateOutlet",n)("ngTemplateOutletContext",re(2,Mt,e,t))}}function Zn(i,a){i&1&&k(0)}function Yn(i,a){if(i&1&&h(0,Zn,1,0,"ng-container",29),i&2){let e=a.options,t=l(4);s("ngTemplateOutlet",t.loaderTemplate||t._loaderTemplate)("ngTemplateOutletContext",z(2,yn,e))}}function Jn(i,a){i&1&&(M(0),h(1,Yn,1,4,"ng-template",null,10,H),V())}function Xn(i,a){if(i&1){let e=I();c(0,"p-scroller",45,9),f("onLazyLoad",function(n){m(e);let o=l(2);return _(o.onLazyLoad.emit(n))}),h(2,jn,1,5,"ng-template",null,1,H)(4,Jn,3,0,"ng-container",14),u()}if(i&2){let e=l(2);W(z(10,ye,e.scrollHeight)),s("tabindex",-1)("pt",e.ptm("virtualScroller"))("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),p(4),s("ngIf",e.loaderTemplate||e._loaderTemplate)}}function ei(i,a){i&1&&k(0)}function ti(i,a){if(i&1&&(M(0),h(1,ei,1,0,"ng-container",29),V()),i&2){l();let e=ee(6),t=l();p(),s("ngTemplateOutlet",e)("ngTemplateOutletContext",re(3,Mt,t.visibleOptions(),Pe(2,vn)))}}function ni(i,a){if(i&1&&(c(0,"span"),d(1),u()),i&2){let e=l(2).$implicit,t=l(3);p(),w(t.getOptionGroupLabel(e.optionGroup))}}function ii(i,a){i&1&&k(0)}function oi(i,a){if(i&1&&(M(0),c(1,"li",49),h(2,ni,2,1,"span",14)(3,ii,1,0,"ng-container",29),u(),V()),i&2){let e=l(),t=e.$implicit,n=e.index,o=l().options,r=l(2);p(),g(r.cx("optionGroup")),s("pBind",r.ptm("optionGroup"))("ngStyle",z(8,ye,o.itemSize+"px")),v("id",r.id+"_"+r.getOptionIndex(n,o)),p(),s("ngIf",!r.groupTemplate),p(),s("ngTemplateOutlet",r.groupTemplate)("ngTemplateOutletContext",z(10,Et,t.optionGroup))}}function ai(i,a){if(i&1&&(c(0,"span"),d(1),u()),i&2){let e=l(2).$implicit,t=l(3);p(),w(t.getOptionLabel(e))}}function li(i,a){i&1&&k(0)}function ri(i,a){if(i&1){let e=I();M(0),c(1,"li",50),f("click",function(n){m(e);let o=l().$implicit,r=l(3);return _(r.onOptionSelect(n,o))})("mouseenter",function(n){m(e);let o=l().index,r=l().options,C=l(2);return _(C.onOptionMouseEnter(n,C.getOptionIndex(o,r)))}),h(2,ai,2,1,"span",14)(3,li,1,0,"ng-container",29),u(),V()}if(i&2){let e=l(),t=e.$implicit,n=e.index,o=l().options,r=l(2);p(),g(r.cx("option",Ie(15,xn,t,n,o))),s("pBind",r.getPTOptions(t,o,n,"option"))("ngStyle",z(19,ye,o.itemSize+"px")),v("id",r.id+"_"+r.getOptionIndex(n,o))("aria-label",r.getOptionLabel(t))("aria-selected",r.isSelected(t))("data-p-selected",r.isSelected(t))("aria-disabled",r.isOptionDisabled(t))("data-p-focused",r.focusedOptionIndex()===r.getOptionIndex(n,o))("aria-setsize",r.ariaSetSize)("aria-posinset",r.getAriaPosInset(r.getOptionIndex(n,o))),p(),s("ngIf",!r.itemTemplate&&!r._itemTemplate),p(),s("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",re(21,bn,t,o.getOptions?o.getOptions(n):n))}}function pi(i,a){if(i&1&&h(0,oi,4,12,"ng-container",14)(1,ri,4,24,"ng-container",14),i&2){let e=a.$implicit,t=l(3);s("ngIf",t.isOptionGroup(e)),p(),s("ngIf",!t.isOptionGroup(e))}}function si(i,a){if(i&1&&(M(0),d(1),V()),i&2){let e=l(4);p(),$(" ",e.searchResultMessageText," ")}}function ui(i,a){i&1&&k(0,null,12)}function ci(i,a){if(i&1&&(c(0,"li",49),h(1,si,2,1,"ng-container",51)(2,ui,2,0,"ng-container",23),u()),i&2){let e=l().options,t=l(2);g(t.cx("emptyMessage")),s("pBind",t.ptm("emptyMessage"))("ngStyle",z(7,ye,e.itemSize+"px")),p(),s("ngIf",!t.emptyTemplate&&!t._emptyTemplate)("ngIfElse",t.empty),p(),s("ngTemplateOutlet",t.emptyTemplate||t._emptyTemplate)}}function di(i,a){if(i&1&&(c(0,"ul",46,11),h(2,pi,2,2,"ng-template",47)(3,ci,3,9,"li",48),u()),i&2){let e=a.$implicit,t=a.options,n=l(2);W(t.contentStyle),g(n.cn(n.cx("list"),t.contentStyleClass)),s("pBind",n.ptm("list")),v("id",n.id+"_list")("aria-label",n.listLabel),p(2),s("ngForOf",e),p(),s("ngIf",!e||e&&e.length===0&&n.showEmptyMessage)}}function mi(i,a){i&1&&k(0)}function _i(i,a){if(i&1&&(c(0,"div",41),h(1,Un,1,0,"ng-container",23),c(2,"div",42),h(3,Xn,5,12,"p-scroller",43)(4,ti,2,6,"ng-container",14),u(),h(5,di,4,9,"ng-template",null,8,H)(7,mi,1,0,"ng-container",23),u(),c(8,"span",44),d(9),u()),i&2){let e=l();g(e.cn(e.cx("overlay"),e.panelStyleClass)),s("pBind",e.ptm("overlay"))("ngStyle",e.panelStyle),p(),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),p(),g(e.cx("listContainer")),De("max-height",e.virtualScroll?"auto":e.scrollHeight),s("pBind",e.ptm("listContainer"))("tabindex",-1),p(),s("ngIf",e.virtualScroll),p(),s("ngIf",!e.virtualScroll),p(3),s("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),p(2),$(" ",e.selectedMessageText," ")}}var hi=`
${Tt}

/* For PrimeNG */
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.invalid.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: dt('autocomplete.focus.border.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}

p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: dt('autocomplete.invalid.placeholder.color');
}
`,gi={root:{position:"relative"}},fi={root:({instance:i})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":i.invalid(),"p-focus":i.focused,"p-inputwrapper-filled":i.$filled(),"p-inputwrapper-focus":i.focused&&!i.$disabled()||i.autofocus||i.overlayVisible,"p-autocomplete-open":i.overlayVisible,"p-autocomplete-clearable":i.showClear&&!i.$disabled(),"p-autocomplete-fluid":i.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:i})=>["p-autocomplete-input-multiple",{"p-disabled":i.$disabled(),"p-variant-filled":i.$variant()==="filled"}],chipItem:({instance:i,i:a})=>["p-autocomplete-chip-item",{"p-focus":i.focusedMultipleOptionIndex()===a}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:i})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":i.$variant()==="filled","p-ripple-disabled":i.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:i,option:a,i:e,scrollerOptions:t})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":i.isSelected(a),"p-focus":i.focusedOptionIndex()===i.getOptionIndex(e,t),"p-disabled":i.isOptionDisabled(a)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},St=(()=>{class i extends he{name="autocomplete";style=hi;classes=fi;inlineStyles=gi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=X(i)))(n||i)}})();static \u0275prov=te({token:i,factory:i.\u0275fac})}return i})();var Ot=new ne("AUTOCOMPLETE_INSTANCE"),yi={provide:qe,useExisting:Me(()=>Oe),multi:!0},Oe=(()=>{class i extends nt{overlayService;zone;componentName="AutoComplete";$pcAutoComplete=O(Ot,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=O(P,{self:!0});minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;addOnTab=!1;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;addOnBlur=!1;separator;appendTo=we(void 0);motionOptions=we(void 0);completeMethod=new T;onSelect=new T;onUnselect=new T;onAdd=new T;onFocus=new T;onBlur=new T;onDropdownClick=new T;onClear=new T;onInputKeydown=new T;onKeyUp=new T;onShow=new T;onHide=new T;onLazyLoad=new T;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}value;_suggestions=S(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=S(-1);focusedOptionIndex=S(-1);_componentStyle=O(St);$appendTo=D(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=D(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=D(()=>{let e=this.modelValue(),t=this.optionValueSelected?(this.suggestions||[]).find(n=>Y(n,e,this.equalityKey())):e;if(j(e))if(typeof e=="object"||this.optionValueSelected){let n=this.getOptionLabel(t);return n??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return j(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(_e.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,t){super(),this.overlayService=e,this.zone=t}onInit(){this.id=this.id||Ke("pn_id_"),this.cd.detectChanges()}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((t,n,o)=>{t.push({optionGroup:n,group:!0,index:o});let r=this.getOptionGroupChildren(n);return r&&r.forEach(C=>t.push(C)),t},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return Se(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let t=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return t>-1?t+e+1:e}findPrevOptionIndex(e){let t=e>0?Se(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return t>-1?t:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?Z(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.some(t=>Y(t,e,this.equalityKey())):!1:Y(this.modelValue(),e,this.equalityKey())}isOptionMatched(e,t){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===t.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL?.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.optionValue?void 0:this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&q(this.inputEL?.nativeElement)}handleDropdownClick(e){let t;this.overlayVisible?this.hide(!0):(q(this.inputEL?.nativeElement),t=this.inputEL?.nativeElement?.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,t,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:t})}onInput(e){if(this.typeahead){let t=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let n=e.target.value;this.maxlength()!==null&&(n=n.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(n),n.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):n.length>=t?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,n,"input")},this.delay)):this.hide()}}onInputChange(e){this.updateInputWithForceSelection(e)}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){if(this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.addOnBlur&&this.multiple&&!this.typeahead){let t=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="")}this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){if(this.separator&&this.multiple&&!this.typeahead){let t=(e.clipboardData||window.clipboardData)?.getData("Text");if(t){let n=t.split(this.separator),o=[...this.modelValue()||[]];if(n.forEach(r=>{let C=r.trim();C&&!this.isSelected(C)&&o.push(C)}),o.length>(this.modelValue()||[]).length){let r=o.slice((this.modelValue()||[]).length);this.updateModel(o),r.forEach(C=>{this.onAdd.emit({originalEvent:e,value:C})}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault()}}}else this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(this.onInputKeydown.emit(e),e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:this.handleSeparatorKey(e);break}}handleSeparatorKey(e){if(this.separator&&this.multiple&&!this.typeahead&&(this.separator===e.key||typeof this.separator=="string"&&e.key===this.separator||this.separator instanceof RegExp&&e.key.match(this.separator))){let t=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault())}}onArrowDownKey(e){if(!this.overlayVisible)return;let t=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let t=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let t=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(Te(t.value)&&this.hasSelectedOption()?(q(this.multiContainerEL?.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:t}=e,n=t.value.length;t.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:t}=e,n=t.value.length;t.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(!this.typeahead&&!this.forceSelection&&this.multiple){let t=e.target.value?.trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""))}if(this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionIndex()!==-1){this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]);return}if(this.multiple&&!this.typeahead){let t=(this.multiInputEl?.nativeElement?.value||this.inputEL?.nativeElement?.value||"").trim();if(this.addOnTab&&t&&!this.isSelected(t)){this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.updateInputValue(),e.preventDefault(),this.overlayVisible&&this.hide();return}}this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(j(this.modelValue())&&!this.inputEL?.nativeElement?.value){let t=this.modelValue()[this.modelValue().length-1],n=this.modelValue().slice(0,-1);this.updateModel(n),this.onUnselect.emit({originalEvent:e,value:t})}e.stopPropagation()}}onArrowLeftKeyOnMultiple(e){let t=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(t)}onArrowRightKeyOnMultiple(e){let t=this.focusedMultipleOptionIndex();t++,this.focusedMultipleOptionIndex.set(t),t>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),q(this.inputEL?.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,t,n=!0){this.multiple?(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.isSelected(t)||this.updateModel([...this.modelValue()||[],t])):this.updateModel(t),this.onSelect.emit({originalEvent:e,value:t}),n&&this.hide(!0)}onOptionMouseEnter(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)}search(e,t,n){t!=null&&(n==="input"&&t.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:t})))}removeOption(e,t){e.stopPropagation();let n=this.modelValue()[t],o=this.modelValue().filter((r,C)=>C!==t);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:n}),q(this.inputEL?.nativeElement)}updateModel(e){let t=null;e&&(t=this.multiple?e.map(n=>this.getOptionValue(n)):this.getOptionValue(e)),this.value=t,this.writeModelValue(e),this.onModelChange(t),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}updateInputWithForceSelection(e){let t=this.inputEL?.nativeElement,n=!t?.value&&j(this.modelValue());if(!this.forceSelection||this.overlayVisible||!t?.value&&!n)return;let o=this.minQueryLength??this.minLength;if(!n&&t.value.length<o)return;let r=this.visibleOptions()?.find(C=>this.isOptionMatched(C,t.value));if(!r){t.value="",this.multiple||this.clear();return}r&&!this.isSelected(r)&&this.onOptionSelect(e,r)}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=de(this.itemsViewChild.nativeElement,`li[id="${t}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,t){this.focusedOptionIndex()!==t&&(this.focusedOptionIndex.set(t),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[t],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),e&&q(this.inputEL?.nativeElement),e&&q(this.inputEL?.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let t=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&q(this.inputEL?.nativeElement),this.onHide.emit(),this.updateInputWithForceSelection(null),this.cd.markForCheck()};setTimeout(()=>{t()},0)}clear(){this.updateModel(null),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.onClear.emit()}hasSelectedOption(){return j(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1}getOptionLabel(e){return this.optionLabel?Z(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Z(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?Z(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?Z(e,this.optionGroupChildren):e.items}getPTOptions(e,t,n,o){return this.ptm(o,{context:{option:e,index:this.getOptionIndex(n,t),selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(n,t),disabled:this.isOptionDisabled(e)}})}onOverlayBeforeEnter(){if(this.itemsWrapper=de(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?'[data-pc-name="virtualscroller"]':'[data-pc-name="pcoverlay"]'),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller?.viewInit()),this.visibleOptions()&&this.visibleOptions().length)if(this.virtualScroll){let e=this.modelValue()?this.focusedOptionIndex():-1;e!==-1&&this.scroller?.scrollToIndex(e)}else{let e=de(this.itemsWrapper,'[data-pc-section="option"][data-p-selected="true"]');e&&e.scrollIntoView({block:"nearest",inline:"center"})}}get containerDataP(){return this.cn({fluid:this.hasFluid})}get overlayDataP(){return this.cn({[`overlay-${this.$appendTo()}`]:!0})}get inputMultipleDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",empty:!this.$filled(),[this.size()]:this.size()})}writeControlValue(e,t){let n=this.multiple?this.visibleOptions().filter(o=>e?.some(r=>Y(r,o,this.equalityKey()))):this.visibleOptions().find(o=>Y(e,o,this.equalityKey()));this.value=e,t(Te(n)?e:n),this.updateInputValue(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(t){return new(t||i)(be(Re),be(Ve))};static \u0275cmp=U({type:i,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(t,n,o){if(t&1&&ae(o,Yt,5)(o,Jt,5)(o,Xt,5)(o,en,5)(o,tn,5)(o,nn,5)(o,on,5)(o,an,5)(o,ln,5)(o,rn,5)(o,pn,5)(o,J,4),t&2){let r;x(r=b())&&(n.itemTemplate=r.first),x(r=b())&&(n.emptyTemplate=r.first),x(r=b())&&(n.headerTemplate=r.first),x(r=b())&&(n.footerTemplate=r.first),x(r=b())&&(n.selectedItemTemplate=r.first),x(r=b())&&(n.groupTemplate=r.first),x(r=b())&&(n.loaderTemplate=r.first),x(r=b())&&(n.removeIconTemplate=r.first),x(r=b())&&(n.loadingIconTemplate=r.first),x(r=b())&&(n.clearIconTemplate=r.first),x(r=b())&&(n.dropdownIconTemplate=r.first),x(r=b())&&(n.templates=r)}},viewQuery:function(t,n){if(t&1&&Le(sn,5)(un,5)(cn,5)(dn,5)(mn,5)(_n,5)(hn,5),t&2){let o;x(o=b())&&(n.inputEL=o.first),x(o=b())&&(n.multiInputEl=o.first),x(o=b())&&(n.multiContainerEL=o.first),x(o=b())&&(n.dropdownButton=o.first),x(o=b())&&(n.itemsViewChild=o.first),x(o=b())&&(n.scroller=o.first),x(o=b())&&(n.overlayViewChild=o.first)}},hostVars:5,hostBindings:function(t,n){t&1&&f("click",function(r){return n.onHostClick(r)}),t&2&&(v("data-p",n.containerDataP),W(n.sx("root")),g(n.cn(n.cx("root"),n.styleClass)))},inputs:{minLength:[2,"minLength","minLength",G],minQueryLength:[2,"minQueryLength","minQueryLength",G],delay:[2,"delay","delay",G],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",y],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",y],virtualScroll:[2,"virtualScroll","virtualScroll",y],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",G],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",y],forceSelection:[2,"forceSelection","forceSelection",y],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",G],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",y],group:[2,"group","group",y],completeOnFocus:[2,"completeOnFocus","completeOnFocus",y],showClear:[2,"showClear","showClear",y],dropdown:[2,"dropdown","dropdown",y],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",y],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",y],addOnTab:[2,"addOnTab","addOnTab",y],tabindex:[2,"tabindex","tabindex",G],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",y],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",y],selectOnFocus:[2,"selectOnFocus","selectOnFocus",y],searchLocale:[2,"searchLocale","searchLocale",y],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",y],typeahead:[2,"typeahead","typeahead",y],addOnBlur:[2,"addOnBlur","addOnBlur",y],separator:"separator",appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onAdd:"onAdd",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onInputKeydown:"onInputKeydown",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[le([yi,St,{provide:Ot,useExisting:i},{provide:ge,useExisting:i}]),ie([P]),oe],decls:9,vars:14,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["focusInput","","multiIn",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","pt","class","ngStyle","variant","invalid","pSize","fluid","pInputTextUnstyled","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"pBind","class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"pBind","class","disabled","click",4,"ngIf"],[3,"visibleChange","onBeforeEnter","onHide","hostAttrSelector","visible","options","target","appendTo","unstyled","pt","motionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pt","ngStyle","variant","invalid","pSize","fluid","pInputTextUnstyled"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","pBind","tabindex"],["role","option",3,"pBind","class",4,"ngFor","ngForOf"],["role","option",3,"pBind"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pBind","ngStyle"],[3,"onRemove","pt","label","disabled","removable","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind",4,"ngIf"],["data-p-icon","times-circle"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","class","spin",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["data-p-icon","spinner",3,"pBind","spin"],["type","button","pRipple","",3,"click","pBind","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"],[3,"pBind","ngStyle"],[3,"pBind","tabindex"],[3,"tabindex","pt","items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","tabindex","pt","items","itemSize","autoSize","lazy","options"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"pBind","class","ngStyle",4,"ngIf"],["role","option",3,"pBind","ngStyle"],["pRipple","","role","option",3,"click","mouseenter","pBind","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(t,n){if(t&1){let o=I();h(0,Cn,2,32,"input",13)(1,On,3,2,"ng-container",14)(2,Dn,7,37,"ul",15)(3,Kn,3,2,"ng-container",14)(4,Gn,4,8,"button",16),c(5,"p-overlay",17,0),L("visibleChange",function(C){return m(o),B(n.overlayVisible,C)||(n.overlayVisible=C),_(C)}),f("onBeforeEnter",function(){return n.onOverlayBeforeEnter()})("onHide",function(){return n.hide()}),h(7,_i,10,15,"ng-template",null,1,H),u()}t&2&&(s("ngIf",!n.multiple),p(),s("ngIf",n.$filled()&&!n.$disabled()&&n.showClear&&!n.loading),p(),s("ngIf",n.multiple),p(),s("ngIf",n.loading),p(),s("ngIf",n.dropdown),p(),s("hostAttrSelector",n.$attrSelector),A("visible",n.overlayVisible),s("options",n.overlayOptions)("target","@parent")("appendTo",n.$appendTo())("unstyled",n.unstyled())("pt",n.ptm("pcOverlay"))("motionOptions",n.motionOptions()),v("data-p",n.overlayDataP))},dependencies:[ce,pe,Fe,se,ue,Ne,it,tt,Xe,st,We,fe,Ye,Ze,wt,me,Je,je,P],encapsulation:2,changeDetection:0})}return i})();function vi(i,a){if(i&1&&(c(0,"span",35),d(1),K(2,"currencyFormat"),u()),i&2){let e=l().$implicit;p(),w(R(2,1,e.currentBalance))}}function xi(i,a){if(i&1&&(c(0,"div",32)(1,"div")(2,"div",33),d(3),u(),c(4,"div",34),d(5),u()(),F(6,vi,3,3,"span",35),u()),i&2){let e=a.$implicit;p(3),w(e.name),p(2),Ce("",e.phone," \u2022 ",e.city),p(),N(e.currentBalance>0?6:-1)}}function bi(i,a){if(i&1&&(c(0,"div",35),d(1),K(2,"currencyFormat"),u()),i&2){let e=l();p(),$("\u0631\u0635\u064A\u062F \u0633\u0627\u0628\u0642: ",R(2,1,e.currentBalance))}}function Ci(i,a){if(i&1&&(c(0,"div",8),E(1,"i",36),c(2,"div",37)(3,"div",38),d(4),u(),c(5,"div",39),d(6),u()(),F(7,bi,3,3,"div",35),u()),i&2){let e=a;p(4),w(e.name),p(2),w(e.phone),p(),N(e.currentBalance>0?7:-1)}}function Ii(i,a){if(i&1&&(c(0,"span",41),d(1),u()),i&2){let e=l().$implicit;g(e.stockQuantity===0?"bg-rose-100 text-rose-700":"bg-slate-100 text-slate-700"),p(),$(" ",e.stockQuantity===0?"\u0646\u0641\u062F":e.stockQuantity+" "+e.unit," ")}}function wi(i,a){if(i&1&&(c(0,"div",32)(1,"div")(2,"div",33),d(3),u(),c(4,"div",34),d(5),K(6,"currencyFormat"),u()(),F(7,Ii,2,3,"span",40),u()),i&2){let e=a.$implicit;p(3),w(e.name),p(2),Ce("",e.code," \u2022 ",R(6,4,e.salePrice)),p(2),N(e.type==="stocked"?7:-1)}}function Ti(i,a){i&1&&(c(0,"div",14),E(1,"i",42),d(2," \u0644\u0645 \u064A\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062A\u062C\u0627\u062A \u0628\u0639\u062F "),u())}function Si(i,a){i&1&&(c(0,"tr")(1,"th"),d(2,"\u0627\u0644\u0645\u0646\u062A\u062C"),u(),c(3,"th",45),d(4,"\u0627\u0644\u0643\u0645\u064A\u0629"),u(),c(5,"th",46),d(6,"\u0627\u0644\u0633\u0639\u0631"),u(),c(7,"th",45),d(8,"\u0627\u0644\u062E\u0635\u0645"),u(),c(9,"th",46),d(10,"\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"),u(),E(11,"th",47),u())}function Oi(i,a){if(i&1){let e=I();c(0,"tr")(1,"td")(2,"div",48),d(3),u(),c(4,"div",34),d(5),u()(),c(6,"td")(7,"p-inputnumber",49),f("ngModelChange",function(n){let o=m(e).$implicit,r=l(2);return _(r.updateItem(o,"quantity",n))}),u()(),c(8,"td")(9,"p-inputnumber",50),f("ngModelChange",function(n){let o=m(e).$implicit,r=l(2);return _(r.updateItem(o,"unitPrice",n))}),u()(),c(10,"td")(11,"p-inputnumber",50),f("ngModelChange",function(n){let o=m(e).$implicit,r=l(2);return _(r.updateItem(o,"discount",n))}),u()(),c(12,"td",22),d(13),K(14,"currencyFormat"),u(),c(15,"td")(16,"p-button",51),f("onClick",function(){let n=m(e).rowIndex,o=l(2);return _(o.removeItem(n))}),u()()()}if(i&2){let e=a.$implicit,t=l(2);p(3),w(e.productName),p(2),w(e.productCode),p(2),s("ngModel",e.quantity)("min",1)("showButtons",!0),p(2),s("ngModel",e.unitPrice)("min",0),p(2),s("ngModel",e.discount)("min",0),p(2),w(R(14,12,t.rowTotal(e))),p(3),s("text",!0)("rounded",!0)}}function Ei(i,a){if(i&1&&(c(0,"p-table",15),h(1,Si,12,0,"ng-template",43)(2,Oi,17,14,"ng-template",44),u()),i&2){let e=l();s("value",e.items())}}function Mi(i,a){if(i&1&&(c(0,"div",20)(1,"span",21),d(2),u(),c(3,"span",22),d(4),K(5,"currencyFormat"),u()()),i&2){let e=l();p(2),$("\u0627\u0644\u0636\u0631\u064A\u0628\u0629 (",e.taxRate(),"%):"),p(2),w(R(5,2,e.taxAmount()))}}function Vi(i,a){if(i&1){let e=I();c(0,"div")(1,"label",23),d(2,"\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062F\u0641\u0648\u0639:"),u(),c(3,"p-inputnumber",52),L("ngModelChange",function(n){m(e);let o=l();return B(o.amountPaid,n)||(o.amountPaid=n),_(n)}),u(),c(4,"div",53)(5,"span",21),d(6,"\u0627\u0644\u0645\u062A\u0628\u0642\u064A:"),u(),c(7,"span",54),d(8),K(9,"currencyFormat"),u()()()}if(i&2){let e=l();p(3),A("ngModel",e.amountPaid),s("min",0)("max",e.total())("suffix"," "+e.currencySymbol()),p(5),w(R(9,5,e.amountDue()))}}function ki(i,a){if(i&1){let e=I();c(0,"div")(1,"label",23),d(2,"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642:"),u(),c(3,"p-datepicker",55),L("ngModelChange",function(n){m(e);let o=l();return B(o.dueDate,n)||(o.dueDate=n),_(n)}),u()()}if(i&2){let e=l();p(3),A("ngModel",e.dueDate)}}var Vt=class i{customersStore=O(ht);productsStore=O(gt);invoicesStore=O(ft);settingsStore=O(lt);router=O(ze);notify=O(ot);customerInput=null;customerSuggestions=S([]);selectedCustomer=S(null);productInput=null;productSuggestions=S([]);items=S([]);_bumper=S(0);invoiceDiscount=S(0);amountPaid=S(0);paymentType=S("cash");dueDate=S(null);notes=S("");saving=S(!1);paymentOptions=[...at];subtotal=D(()=>(this._bumper(),this.items().reduce((a,e)=>a+this.rowTotal(e),0)));taxRate=D(()=>this.settingsStore.settings().enableTax?this.settingsStore.settings().taxRate:0);taxAmount=D(()=>(this.subtotal()-this.invoiceDiscount())*(this.taxRate()/100));total=D(()=>Math.max(0,this.subtotal()-this.invoiceDiscount()+this.taxAmount()));amountDue=D(()=>Math.max(0,this.total()-this.amountPaid()));currencySymbol(){return this.settingsStore.settings().currencySymbol}ngOnInit(){this.customersStore.loadAll(),this.productsStore.loadAll()}searchCustomers(a){let e=a.query.toLowerCase().trim(),t=this.customersStore.activeCustomers().filter(n=>!e||n.name.toLowerCase().includes(e)||n.phone.includes(e));this.customerSuggestions.set(t.slice(0,10))}selectCustomer(a){this.selectedCustomer.set(a.value)}searchProducts(a){let e=a.query.toLowerCase().trim(),t=this.productsStore.activeProducts().filter(n=>!e||n.name.toLowerCase().includes(e)||n.code.toLowerCase().includes(e));this.productSuggestions.set(t.slice(0,10))}addProduct(a){let e=a.value,t=this.items().findIndex(n=>n.productId===e.id);if(t!==-1)this.items.update(n=>n.map((o,r)=>r===t?xe(ve({},o),{quantity:o.quantity+1,total:(o.quantity+1)*o.unitPrice-o.discount}):o));else{let n={productId:e.id,productName:e.name,productCode:e.code,unit:e.unit,quantity:1,unitPrice:e.salePrice,purchasePrice:e.purchasePrice,discount:0,total:e.salePrice};this.items.update(o=>[...o,n])}setTimeout(()=>{this.productInput=null},0)}rowTotal(a){return Math.max(0,a.quantity*a.unitPrice-a.discount)}updateItem(a,e,t){a[e]=t??0,this._bumper.update(n=>n+1)}removeItem(a){this.items.update(e=>e.filter((t,n)=>n!==a))}canSave(){return!!this.selectedCustomer()&&this.items().length>0&&!this.saving()}async save(){if(!this.canSave())return;let a=this.selectedCustomer();this.saving.set(!0);let e=this.paymentType()==="cash"?this.total():this.paymentType()==="partial"?this.amountPaid():0,t=e>=this.total()?"paid":e>0?"partial":"unpaid",n={type:"sale",paymentType:this.paymentType(),status:t,customerId:a.id,customerName:a.name,items:this.items().map(o=>xe(ve({},o),{total:this.rowTotal(o)})),subtotal:this.subtotal(),discount:this.invoiceDiscount(),taxRate:this.taxRate(),taxAmount:this.taxAmount(),total:this.total(),amountPaid:e,amountDue:Math.max(0,this.total()-e),dueDate:this.dueDate(),notes:this.notes()};try{let o=await this.invoicesStore.create(n);for(let C of this.items()){let Ee=this.productsStore.getById(C.productId);Ee&&Ee.type==="stocked"&&this.productsStore.adjustStockLocal(C.productId,-C.quantity)}let r=n.amountDue;r>0?await this.customersStore.update(a.id,{currentBalance:a.currentBalance+r,totalPurchases:a.totalPurchases+n.total,invoicesCount:a.invoicesCount+1,lastPurchaseAt:new Date}):await this.customersStore.update(a.id,{totalPurchases:a.totalPurchases+n.total,invoicesCount:a.invoicesCount+1,lastPurchaseAt:new Date}),this.notify.success(`\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629 ${o.invoiceNumber}`),this.router.navigate(["/invoices",o.id])}catch{this.notify.error("\u0641\u0634\u0644 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629"),this.saving.set(!1)}}cancel(){this.router.navigate(["/invoices"])}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=U({type:i,selectors:[["app-invoice-builder-page"]],decls:57,vars:27,consts:[["title","\u0641\u0627\u062A\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629","subtitle","\u0623\u0646\u0634\u0626 \u0641\u0627\u062A\u0648\u0631\u0629 \u0628\u064A\u0639 \u062C\u062F\u064A\u062F\u0629"],["label","\u0625\u0644\u063A\u0627\u0621","severity","secondary",3,"onClick","text"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-6"],[1,"lg:col-span-2","space-y-6"],[1,"app-card","p-6"],[1,"text-lg","font-semibold","text-slate-800","mb-4","m-0"],["placeholder","\u0627\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0647\u0627\u062A\u0641...","optionLabel","name","styleClass","w-full","inputStyleClass","w-full",3,"ngModelChange","completeMethod","onSelect","ngModel","suggestions","forceSelection"],["pTemplate","item"],[1,"mt-3","p-3","bg-indigo-50","rounded-lg","flex","items-center","gap-3"],[1,"flex","items-center","justify-between","mb-4"],[1,"text-lg","font-semibold","text-slate-800","m-0"],[1,"text-sm","text-slate-500"],[1,"mb-4"],["placeholder","\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u0646\u062A\u062C \u0644\u0625\u0636\u0627\u0641\u062A\u0647...","optionLabel","name","styleClass","w-full","inputStyleClass","w-full",3,"ngModelChange","completeMethod","onSelect","ngModel","suggestions","forceSelection"],[1,"text-center","py-8","text-slate-400","text-sm"],["styleClass","p-datatable-sm",3,"value"],["pTextarea","","rows","3","placeholder","\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629...",1,"w-full",3,"ngModelChange","ngModel"],[1,"lg:col-span-1"],[1,"app-card","p-6","sticky","top-20"],[1,"space-y-3","mb-4"],[1,"flex","justify-between","text-sm"],[1,"text-slate-600"],[1,"font-semibold"],[1,"text-sm","text-slate-600","mb-1","block"],["styleClass","w-full","inputStyleClass","w-full",3,"ngModelChange","ngModel","min","suffix"],["styleClass","my-2"],[1,"flex","justify-between","text-base","font-bold"],[1,"text-indigo-700"],[1,"space-y-3"],[1,"text-sm","font-medium","text-slate-700","mb-1.5","block"],["optionLabel","label","optionValue","value","styleClass","w-full",3,"ngModelChange","ngModel","options"],["type","button","label","\u062D\u0641\u0638 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629","icon","pi pi-save","styleClass","w-full mt-6",3,"onClick","loading","disabled"],[1,"flex","justify-between","items-center","w-full"],[1,"font-medium"],[1,"text-xs","text-slate-500"],[1,"text-xs","text-rose-600","font-semibold"],[1,"pi","pi-user-check","text-indigo-600","text-xl"],[1,"flex-1","min-w-0"],[1,"font-semibold","text-slate-800","truncate"],[1,"text-xs","text-slate-600"],[1,"text-xs","px-2","py-1","rounded",3,"class"],[1,"text-xs","px-2","py-1","rounded"],[1,"pi","pi-shopping-cart","text-3xl","mb-2","block"],["pTemplate","header"],["pTemplate","body"],[1,"w-28"],[1,"w-32"],[1,"w-12"],[1,"font-medium","text-sm"],["buttonLayout","horizontal","inputStyleClass","!w-16 text-center","styleClass","!w-full","decrementButtonClass","!w-7","incrementButtonClass","!w-7",3,"ngModelChange","ngModel","min","showButtons"],["inputStyleClass","!w-full","styleClass","!w-full",3,"ngModelChange","ngModel","min"],["icon","pi pi-trash","severity","danger","size","small",3,"onClick","text","rounded"],["styleClass","w-full","inputStyleClass","w-full",3,"ngModelChange","ngModel","min","max","suffix"],[1,"flex","justify-between","text-sm","mt-2"],[1,"font-semibold","text-rose-600"],["dateFormat","dd/mm/yy","styleClass","w-full","inputStyleClass","w-full","appendTo","body",3,"ngModelChange","ngModel"]],template:function(e,t){if(e&1&&(c(0,"app-page-header",0)(1,"p-button",1),f("onClick",function(){return t.cancel()}),u()(),c(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),d(6,"\u0627\u0644\u0639\u0645\u064A\u0644"),u(),c(7,"p-autocomplete",6),L("ngModelChange",function(o){return B(t.customerInput,o)||(t.customerInput=o),o}),f("completeMethod",function(o){return t.searchCustomers(o)})("onSelect",function(o){return t.selectCustomer(o)}),h(8,xi,7,4,"ng-template",7),u(),F(9,Ci,8,3,"div",8),u(),c(10,"div",4)(11,"div",9)(12,"h3",10),d(13,"\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A"),u(),c(14,"span",11),d(15),u()(),c(16,"div",12)(17,"p-autocomplete",13),L("ngModelChange",function(o){return B(t.productInput,o)||(t.productInput=o),o}),f("completeMethod",function(o){return t.searchProducts(o)})("onSelect",function(o){return t.addProduct(o)}),h(18,wi,8,6,"ng-template",7),u()(),F(19,Ti,3,0,"div",14)(20,Ei,3,1,"p-table",15),u(),c(21,"div",4)(22,"h3",5),d(23,"\u0645\u0644\u0627\u062D\u0638\u0627\u062A"),u(),c(24,"textarea",16),L("ngModelChange",function(o){return B(t.notes,o)||(t.notes=o),o}),u()()(),c(25,"div",17)(26,"div",18)(27,"h3",5),d(28,"\u0645\u0644\u062E\u0635 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629"),u(),c(29,"div",19)(30,"div",20)(31,"span",21),d(32,"\u0627\u0644\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064A:"),u(),c(33,"span",22),d(34),K(35,"currencyFormat"),u()(),c(36,"div")(37,"label",23),d(38,"\u062E\u0635\u0645 \u0639\u0644\u0649 \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629:"),u(),c(39,"p-inputnumber",24),L("ngModelChange",function(o){return B(t.invoiceDiscount,o)||(t.invoiceDiscount=o),o}),u()(),F(40,Mi,6,4,"div",20),E(41,"p-divider",25),c(42,"div",26)(43,"span"),d(44,"\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A:"),u(),c(45,"span",27),d(46),K(47,"currencyFormat"),u()()(),E(48,"p-divider"),c(49,"div",28)(50,"div")(51,"label",29),d(52,"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639"),u(),c(53,"p-selectbutton",30),L("ngModelChange",function(o){return B(t.paymentType,o)||(t.paymentType=o),o}),u()(),F(54,Vi,10,7,"div"),F(55,ki,4,1,"div"),u(),c(56,"p-button",31),f("onClick",function(){return t.save()}),u()()()()),e&2){let n;p(),s("text",!0),p(6),A("ngModel",t.customerInput),s("suggestions",t.customerSuggestions())("forceSelection",!0),p(2),N((n=t.selectedCustomer())?9:-1,n),p(6),$("",t.items().length," \u0645\u0646\u062A\u062C"),p(2),A("ngModel",t.productInput),s("suggestions",t.productSuggestions())("forceSelection",!0),p(2),N(t.items().length===0?19:20),p(5),A("ngModel",t.notes),p(10),w(R(35,23,t.subtotal())),p(5),A("ngModel",t.invoiceDiscount),s("min",0)("suffix"," "+t.currencySymbol()),p(),N(t.taxRate()>0?40:-1),p(6),w(R(47,25,t.total())),p(7),A("ngModel",t.paymentType),s("options",t.paymentOptions),p(),N(t.paymentType()==="partial"?54:-1),p(),N(t.paymentType()==="credit"||t.paymentType()==="partial"?55:-1),p(),s("loading",t.saving())("disabled",!t.canSave())}},dependencies:[Ge,$e,He,Qe,et,pt,ut,yt,dt,ct,J,Oe,rt,vt,mt,_t],encapsulation:2})};export{Vt as InvoiceBuilderPage};
