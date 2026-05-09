import{a as Ce}from"./chunk-WAAH7U2N.js";import{a as me}from"./chunk-FCF2PGKC.js";import{a as ve}from"./chunk-WQOJFVWZ.js";import{b as be,h as we}from"./chunk-VLQFDYTN.js";import{a as ye}from"./chunk-CH23D5YL.js";import{a as ee,b as te,c as g,e as ie,f as ne,h as oe,i as le,j as re,k as ae,m as ue,o as pe,q as he}from"./chunk-75QNKLG7.js";import{a as fe}from"./chunk-HDFHD5IT.js";import"./chunk-557DU2LX.js";import"./chunk-GY5RTA2W.js";import{b as se,h as de,i as y,j as ce,q as ge}from"./chunk-TIF2MXSB.js";import{b as N}from"./chunk-JEG2DLEX.js";import{ma as K,na as X,ua as Z}from"./chunk-V7ORDRQJ.js";import{Db as Q,Ea as k,Fb as $,G as I,H as P,Ia as L,Ja as O,K as B,Ka as R,M as p,Qa as b,R as v,S as C,Ta as S,Ua as _,Xa as s,Xb as U,Y as M,Ya as l,Za as n,_a as a,cc as F,da as D,dc as W,eb as G,fa as A,fb as H,hb as h,ib as m,lb as q,mb as j,nb as x,ob as T,qc as Y,rc as J,sa as d,ub as z,vb as w,wb as r}from"./chunk-BL3FYRJ7.js";import{a as E}from"./chunk-7CGTOI24.js";var ke=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var Ee=["handle"],Ae=["input"],Fe=i=>({checked:i});function Ne(i,u){i&1&&G(0)}function Ve(i,u){if(i&1&&R(0,Ne,1,0,"ng-container",3),i&2){let t=m();s("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",$(2,Fe,t.checked()))}}var Ie=`
    ${ke}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,Pe={root:{position:"relative"}},Be={root:({instance:i})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":i.checked(),"p-disabled":i.$disabled(),"p-invalid":i.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Se=(()=>{class i extends Z{name="toggleswitch";style=Ie;classes=Be;inlineStyles=Pe;static \u0275fac=(()=>{let t;return function(e){return(t||(t=A(i)))(e||i)}})();static \u0275prov=P({token:i,factory:i.\u0275fac})}return i})();var _e=new B("TOGGLESWITCH_INSTANCE"),Me={provide:ee,useExisting:I(()=>V),multi:!0},V=(()=>{class i extends he{componentName="ToggleSwitch";$pcToggleSwitch=p(_e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=U();ariaLabelledBy;autofocus;onChange=new M;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=p(Se);templates;onHostClick(t){this.onClick(t)}onAfterContentInit(){this.templates.forEach(t=>{t.getType()==="handle"?this._handleTemplate=t.template:this._handleTemplate=t.template})}onClick(t){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:t,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(t,o){o(t),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let t;return function(e){return(t||(t=A(i)))(e||i)}})();static \u0275cmp=k({type:i,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,e,c){if(o&1&&q(c,Ee,4)(c,K,4),o&2){let f;x(f=T())&&(e.handleTemplate=f.first),x(f=T())&&(e.templates=f)}},viewQuery:function(o,e){if(o&1&&j(Ae,5),o&2){let c;x(c=T())&&(e.input=c.first)}},hostVars:7,hostBindings:function(o,e){o&1&&h("click",function(f){return e.onHostClick(f)}),o&2&&(b("data-p-checked",e.checked())("data-p-disabled",e.$disabled())("data-p",e.dataP),z(e.sx("root")),w(e.cn(e.cx("root"),e.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",W],inputId:"inputId",readonly:[2,"readonly","readonly",F],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",F]},outputs:{onChange:"onChange"},features:[Q([Me,Se,{provide:_e,useExisting:i},{provide:se,useExisting:i}]),L([y]),O],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,e){o&1&&(l(0,"input",1,0),h("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()}),n(),l(2,"div",2)(3,"div",2),S(4,Ve,1,4,"ng-container"),n()()),o&2&&(w(e.cx("input")),s("checked",e.checked())("pAutoFocus",e.autofocus)("pBind",e.ptm("input")),b("id",e.inputId)("required",e.required()?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-checked",e.checked())("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("name",e.name())("tabindex",e.tabindex),d(2),w(e.cx("slider")),s("pBind",e.ptm("slider")),b("data-p",e.dataP),d(),w(e.cx("handle")),s("pBind",e.ptm("handle")),b("data-p",e.dataP),d(),_(e.handleTemplate||e._handleTemplate?4:-1))},dependencies:[J,Y,de,X,ce,y],encapsulation:2,changeDetection:0})}return i})();function De(i,u){i&1&&a(0,"app-loading-spinner")}function Le(i,u){if(i&1){let t=H();l(0,"form",2),h("ngSubmit",function(){v(t);let e=m();return C(e.save())}),l(1,"div",3)(2,"div",4)(3,"h3",5),r(4,"\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0646\u0634\u0627\u0637"),n(),l(5,"div",6)(6,"div",7)(7,"label",8),r(8,"\u0627\u0633\u0645 \u0627\u0644\u0646\u0634\u0627\u0637 *"),n(),a(9,"input",9),n(),l(10,"div")(11,"label",8),r(12,"\u0627\u0644\u0647\u0627\u062A\u0641"),n(),a(13,"input",10),n(),l(14,"div")(15,"label",8),r(16,"\u0628\u0627\u062F\u0626\u0629 \u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631"),n(),a(17,"input",11),n(),l(18,"div",7)(19,"label",8),r(20,"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),n(),a(21,"textarea",12),n()()(),l(22,"div",13)(23,"h3",5),r(24,"\u0627\u0644\u0639\u0645\u0644\u0629"),n(),l(25,"div",14)(26,"div")(27,"label",8),r(28,"\u0627\u0644\u0639\u0645\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629"),n(),l(29,"p-select",15),h("onChange",function(e){v(t);let c=m();return C(c.onCurrencyChange(e))}),n()(),l(30,"div")(31,"label",8),r(32,"\u0631\u0645\u0632 \u0627\u0644\u0639\u0645\u0644\u0629"),n(),a(33,"input",16),n()()(),l(34,"div",4)(35,"h3",5),r(36,"\u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0648\u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646"),n(),l(37,"div",6)(38,"div",17),a(39,"p-toggle-switch",18),l(40,"label",19),r(41,"\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0636\u0631\u0627\u0626\u0628"),n()(),l(42,"div")(43,"label",8),r(44,"\u0646\u0633\u0628\u0629 \u0627\u0644\u0636\u0631\u064A\u0628\u0629 (%)"),n(),a(45,"p-inputnumber",20),n(),l(46,"div")(47,"label",8),r(48,"\u0627\u0644\u062D\u062F \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646\u064A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A"),n(),a(49,"p-inputnumber",21),n()()(),l(50,"div",13)(51,"h3",5),r(52,"\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0623\u062E\u0631\u0649"),n(),l(53,"div",14)(54,"div")(55,"label",8),r(56,"\u0628\u0627\u062F\u0626\u0629 \u0633\u0646\u062F\u0627\u062A \u0627\u0644\u0642\u0628\u0636"),n(),a(57,"input",22),n()()(),l(58,"div",23)(59,"p-button",24),h("onClick",function(){v(t);let e=m();return C(e.reset())}),n(),a(60,"p-button",25),n()()()}if(i&2){let t=m();s("formGroup",t.form),d(29),s("options",t.currencyOptions),d(16),s("min",0)("max",100)("maxFractionDigits",2),d(4),s("min",0),d(10),s("text",!0),d(),s("loading",t.store.loading())("disabled",t.form.invalid||!t.form.dirty)}}var xe=class i{fb=p(ae);store=p(fe);notify=p(me);currencyOptions=[...N];form=this.fb.nonNullable.group({businessName:["",g.required],businessPhone:[""],businessAddress:[""],currency:["SYP",g.required],currencySymbol:["\u0644.\u0633",g.required],taxRate:[0,[g.min(0),g.max(100)]],defaultCreditLimit:[0,g.min(0)],invoicePrefix:["INV",g.required],receiptPrefix:["RCP",g.required],enableTax:[!1]});constructor(){D(()=>{let u=this.store.settings();u&&!this.form.dirty&&this.form.patchValue(u,{emitEvent:!1})})}ngOnInit(){this.store.load()}onCurrencyChange(u){let t=N.find(o=>o.value===u.value);t&&this.form.patchValue({currencySymbol:t.symbol})}async save(){if(this.form.invalid)return;let u=this.form.getRawValue(),t=this.store.settings();try{await this.store.save(E(E({},t),u)),this.form.markAsPristine(),this.notify.success("\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0628\u0646\u062C\u0627\u062D")}catch{this.notify.error("\u0641\u0634\u0644 \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A")}}reset(){this.form.patchValue(this.store.settings()),this.form.markAsPristine()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["app-settings-page"]],decls:3,vars:1,consts:[["title","\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","subtitle","\u0625\u062F\u0627\u0631\u0629 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0648\u0627\u0644\u0639\u0645\u0644\u0629 \u0648\u0627\u0644\u0636\u0631\u0627\u0626\u0628"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-6"],[1,"app-card","p-6","lg:col-span-2"],[1,"text-lg","font-semibold","text-slate-800","mb-4","m-0"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],[1,"md:col-span-2"],[1,"block","text-sm","font-medium","text-slate-700","mb-1.5"],["pInputText","","formControlName","businessName",1,"w-full"],["pInputText","","formControlName","businessPhone",1,"w-full"],["pInputText","","formControlName","invoicePrefix",1,"w-full"],["pTextarea","","formControlName","businessAddress","rows","2",1,"w-full"],[1,"app-card","p-6"],[1,"space-y-4"],["formControlName","currency","optionLabel","label","optionValue","value","styleClass","w-full",3,"onChange","options"],["pInputText","","formControlName","currencySymbol",1,"w-full"],[1,"flex","items-center","gap-3","md:col-span-2"],["formControlName","enableTax","inputId","enableTax"],["for","enableTax",1,"text-sm","font-medium","text-slate-700","cursor-pointer"],["formControlName","taxRate","styleClass","w-full","inputStyleClass","w-full",3,"min","max","maxFractionDigits"],["formControlName","defaultCreditLimit","styleClass","w-full","inputStyleClass","w-full",3,"min"],["pInputText","","formControlName","receiptPrefix",1,"w-full"],[1,"lg:col-span-3","flex","flex-col","sm:flex-row","justify-end","gap-2"],["type","button","severity","secondary","label","\u0625\u0644\u063A\u0627\u0621",3,"onClick","text"],["type","submit","label","\u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A","icon","pi pi-check",3,"loading","disabled"]],template:function(t,o){t&1&&(a(0,"app-page-header",0),S(1,De,1,0,"app-loading-spinner")(2,Le,61,9,"form",1)),t&2&&(d(),_(o.store.loading()&&!o.form.dirty?1:2))},dependencies:[ue,oe,te,ie,ne,re,le,ge,pe,be,we,Ce,V,ye,ve],encapsulation:2})};export{xe as SettingsPage};
