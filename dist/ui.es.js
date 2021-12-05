var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop2 in b || (b = {}))
    if (__hasOwnProp.call(b, prop2))
      __defNormalProp(a2, prop2, b[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop2))
        __defNormalProp(a2, prop2, b[prop2]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target2 = {};
  for (var prop2 in source)
    if (__hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
      target2[prop2] = source[prop2];
  if (source != null && __getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop2) < 0 && __propIsEnum.call(source, prop2))
        target2[prop2] = source[prop2];
    }
  return target2;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { openBlock, createBlock, Transition, withCtx, createElementBlock, createElementVNode, renderSlot, createCommentVNode, defineComponent, Fragment, normalizeClass, pushScopeId, popScopeId, ref, computed, onMounted, mergeProps, watch, resolveComponent, renderList, createVNode, resolveDynamicComponent, createTextVNode, toDisplayString, withDirectives, vShow, normalizeStyle, withKeys, withModifiers, resolveDirective, vModelDynamic, normalizeProps, nextTick, TransitionGroup, toRef, onBeforeUnmount, vModelText, reactive, render as render$C } from "vue";
import Draggable from "vuedraggable";
var common = "";
const _hoisted_1$w = {
  key: 0,
  class: "bottom-bar"
};
const _hoisted_2$r = { class: "bottom-bar__title" };
const _hoisted_3$n = { class: "bottom-bar__buttons" };
function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "slide-top" }, {
    default: withCtx(() => [
      _ctx.opened ? (openBlock(), createElementBlock("div", _hoisted_1$w, [
        createElementVNode("div", _hoisted_2$r, [
          renderSlot(_ctx.$slots, "title", {}, void 0, true)
        ]),
        createElementVNode("div", _hoisted_3$n, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ])) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
var BottomBar_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target2 = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target2[key] = val;
  }
  return target2;
};
const _sfc_main$A = defineComponent({
  name: "BottomBar",
  components: {},
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  }
});
var BottomBar = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", render$B], ["__scopeId", "data-v-db06b442"]]);
const _withScopeId$4 = (n2) => (pushScopeId("data-v-37a9e7e7"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$v = {
  class: "fixed-bottom-bar-anchor",
  ref: "bottomBarAnchorRef"
};
const _hoisted_2$q = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("div", { class: "fixed-bottom-bar-holder" }, null, -1));
function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", _hoisted_1$v, null, 512),
    createElementVNode("div", {
      class: normalizeClass(["fixed-bottom-bar", _ctx.bottomBarClasses])
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 2),
    _hoisted_2$q
  ], 64);
}
var FixedBottomBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$z = defineComponent({
  name: "FixedBottomBar",
  props: {
    isStick: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:isStick"],
  setup(props, { emit }) {
    const bottomBarAnchorRef = ref(null);
    const bottomBarClasses = computed(() => {
      return { stick: props.isStick };
    });
    onMounted(() => {
      const target2 = bottomBarAnchorRef.value;
      if (!target2)
        return;
      const observer = new IntersectionObserver((entries) => {
        emit("update:isStick", !entries[0].isIntersecting);
      }, { threshold: [0.99] });
      observer.observe(target2);
    });
    return { bottomBarAnchorRef, bottomBarClasses };
  }
});
var FixedBottomBar = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", render$A], ["__scopeId", "data-v-37a9e7e7"]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lib$5 = {};
var Parser$1 = {};
var Tokenizer$1 = {};
var decode_codepoint = {};
var require$$0$1 = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};
var __importDefault$6 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(decode_codepoint, "__esModule", { value: true });
var decode_json_1 = __importDefault$6(require$$0$1);
var fromCodePoint = String.fromCodePoint || function(codePoint) {
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
function decodeCodePoint(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return "\uFFFD";
  }
  if (codePoint in decode_json_1.default) {
    codePoint = decode_json_1.default[codePoint];
  }
  return fromCodePoint(codePoint);
}
decode_codepoint.default = decodeCodePoint;
const Aacute$1 = "\xC1";
const aacute$1 = "\xE1";
const Abreve = "\u0102";
const abreve = "\u0103";
const ac = "\u223E";
const acd = "\u223F";
const acE = "\u223E\u0333";
const Acirc$1 = "\xC2";
const acirc$1 = "\xE2";
const acute$1 = "\xB4";
const Acy = "\u0410";
const acy = "\u0430";
const AElig$1 = "\xC6";
const aelig$1 = "\xE6";
const af = "\u2061";
const Afr = "\u{1D504}";
const afr = "\u{1D51E}";
const Agrave$1 = "\xC0";
const agrave$1 = "\xE0";
const alefsym = "\u2135";
const aleph = "\u2135";
const Alpha = "\u0391";
const alpha = "\u03B1";
const Amacr = "\u0100";
const amacr = "\u0101";
const amalg = "\u2A3F";
const amp$2 = "&";
const AMP$1 = "&";
const andand = "\u2A55";
const And = "\u2A53";
const and = "\u2227";
const andd = "\u2A5C";
const andslope = "\u2A58";
const andv = "\u2A5A";
const ang = "\u2220";
const ange = "\u29A4";
const angle = "\u2220";
const angmsdaa = "\u29A8";
const angmsdab = "\u29A9";
const angmsdac = "\u29AA";
const angmsdad = "\u29AB";
const angmsdae = "\u29AC";
const angmsdaf = "\u29AD";
const angmsdag = "\u29AE";
const angmsdah = "\u29AF";
const angmsd = "\u2221";
const angrt = "\u221F";
const angrtvb = "\u22BE";
const angrtvbd = "\u299D";
const angsph = "\u2222";
const angst = "\xC5";
const angzarr = "\u237C";
const Aogon = "\u0104";
const aogon = "\u0105";
const Aopf = "\u{1D538}";
const aopf = "\u{1D552}";
const apacir = "\u2A6F";
const ap = "\u2248";
const apE = "\u2A70";
const ape = "\u224A";
const apid = "\u224B";
const apos$1 = "'";
const ApplyFunction = "\u2061";
const approx = "\u2248";
const approxeq = "\u224A";
const Aring$1 = "\xC5";
const aring$1 = "\xE5";
const Ascr = "\u{1D49C}";
const ascr = "\u{1D4B6}";
const Assign = "\u2254";
const ast = "*";
const asymp = "\u2248";
const asympeq = "\u224D";
const Atilde$1 = "\xC3";
const atilde$1 = "\xE3";
const Auml$1 = "\xC4";
const auml$1 = "\xE4";
const awconint = "\u2233";
const awint = "\u2A11";
const backcong = "\u224C";
const backepsilon = "\u03F6";
const backprime = "\u2035";
const backsim = "\u223D";
const backsimeq = "\u22CD";
const Backslash = "\u2216";
const Barv = "\u2AE7";
const barvee = "\u22BD";
const barwed = "\u2305";
const Barwed = "\u2306";
const barwedge = "\u2305";
const bbrk = "\u23B5";
const bbrktbrk = "\u23B6";
const bcong = "\u224C";
const Bcy = "\u0411";
const bcy = "\u0431";
const bdquo = "\u201E";
const becaus = "\u2235";
const because = "\u2235";
const Because = "\u2235";
const bemptyv = "\u29B0";
const bepsi = "\u03F6";
const bernou = "\u212C";
const Bernoullis = "\u212C";
const Beta = "\u0392";
const beta = "\u03B2";
const beth = "\u2136";
const between = "\u226C";
const Bfr = "\u{1D505}";
const bfr = "\u{1D51F}";
const bigcap = "\u22C2";
const bigcirc = "\u25EF";
const bigcup = "\u22C3";
const bigodot = "\u2A00";
const bigoplus = "\u2A01";
const bigotimes = "\u2A02";
const bigsqcup = "\u2A06";
const bigstar = "\u2605";
const bigtriangledown = "\u25BD";
const bigtriangleup = "\u25B3";
const biguplus = "\u2A04";
const bigvee = "\u22C1";
const bigwedge = "\u22C0";
const bkarow = "\u290D";
const blacklozenge = "\u29EB";
const blacksquare = "\u25AA";
const blacktriangle = "\u25B4";
const blacktriangledown = "\u25BE";
const blacktriangleleft = "\u25C2";
const blacktriangleright = "\u25B8";
const blank = "\u2423";
const blk12 = "\u2592";
const blk14 = "\u2591";
const blk34 = "\u2593";
const block = "\u2588";
const bne = "=\u20E5";
const bnequiv = "\u2261\u20E5";
const bNot = "\u2AED";
const bnot = "\u2310";
const Bopf = "\u{1D539}";
const bopf = "\u{1D553}";
const bot = "\u22A5";
const bottom$1 = "\u22A5";
const bowtie = "\u22C8";
const boxbox = "\u29C9";
const boxdl = "\u2510";
const boxdL = "\u2555";
const boxDl = "\u2556";
const boxDL = "\u2557";
const boxdr = "\u250C";
const boxdR = "\u2552";
const boxDr = "\u2553";
const boxDR = "\u2554";
const boxh = "\u2500";
const boxH = "\u2550";
const boxhd = "\u252C";
const boxHd = "\u2564";
const boxhD = "\u2565";
const boxHD = "\u2566";
const boxhu = "\u2534";
const boxHu = "\u2567";
const boxhU = "\u2568";
const boxHU = "\u2569";
const boxminus = "\u229F";
const boxplus = "\u229E";
const boxtimes = "\u22A0";
const boxul = "\u2518";
const boxuL = "\u255B";
const boxUl = "\u255C";
const boxUL = "\u255D";
const boxur = "\u2514";
const boxuR = "\u2558";
const boxUr = "\u2559";
const boxUR = "\u255A";
const boxv = "\u2502";
const boxV = "\u2551";
const boxvh = "\u253C";
const boxvH = "\u256A";
const boxVh = "\u256B";
const boxVH = "\u256C";
const boxvl = "\u2524";
const boxvL = "\u2561";
const boxVl = "\u2562";
const boxVL = "\u2563";
const boxvr = "\u251C";
const boxvR = "\u255E";
const boxVr = "\u255F";
const boxVR = "\u2560";
const bprime = "\u2035";
const breve = "\u02D8";
const Breve = "\u02D8";
const brvbar$1 = "\xA6";
const bscr = "\u{1D4B7}";
const Bscr = "\u212C";
const bsemi = "\u204F";
const bsim = "\u223D";
const bsime = "\u22CD";
const bsolb = "\u29C5";
const bsol = "\\";
const bsolhsub = "\u27C8";
const bull = "\u2022";
const bullet = "\u2022";
const bump = "\u224E";
const bumpE = "\u2AAE";
const bumpe = "\u224F";
const Bumpeq = "\u224E";
const bumpeq = "\u224F";
const Cacute = "\u0106";
const cacute = "\u0107";
const capand = "\u2A44";
const capbrcup = "\u2A49";
const capcap = "\u2A4B";
const cap = "\u2229";
const Cap = "\u22D2";
const capcup = "\u2A47";
const capdot = "\u2A40";
const CapitalDifferentialD = "\u2145";
const caps = "\u2229\uFE00";
const caret = "\u2041";
const caron = "\u02C7";
const Cayleys = "\u212D";
const ccaps = "\u2A4D";
const Ccaron = "\u010C";
const ccaron = "\u010D";
const Ccedil$1 = "\xC7";
const ccedil$1 = "\xE7";
const Ccirc = "\u0108";
const ccirc = "\u0109";
const Cconint = "\u2230";
const ccups = "\u2A4C";
const ccupssm = "\u2A50";
const Cdot = "\u010A";
const cdot = "\u010B";
const cedil$1 = "\xB8";
const Cedilla = "\xB8";
const cemptyv = "\u29B2";
const cent$1 = "\xA2";
const centerdot = "\xB7";
const CenterDot = "\xB7";
const cfr = "\u{1D520}";
const Cfr = "\u212D";
const CHcy = "\u0427";
const chcy = "\u0447";
const check = "\u2713";
const checkmark = "\u2713";
const Chi = "\u03A7";
const chi = "\u03C7";
const circ = "\u02C6";
const circeq = "\u2257";
const circlearrowleft = "\u21BA";
const circlearrowright = "\u21BB";
const circledast = "\u229B";
const circledcirc = "\u229A";
const circleddash = "\u229D";
const CircleDot = "\u2299";
const circledR = "\xAE";
const circledS = "\u24C8";
const CircleMinus = "\u2296";
const CirclePlus = "\u2295";
const CircleTimes = "\u2297";
const cir = "\u25CB";
const cirE = "\u29C3";
const cire = "\u2257";
const cirfnint = "\u2A10";
const cirmid = "\u2AEF";
const cirscir = "\u29C2";
const ClockwiseContourIntegral = "\u2232";
const CloseCurlyDoubleQuote = "\u201D";
const CloseCurlyQuote = "\u2019";
const clubs = "\u2663";
const clubsuit = "\u2663";
const colon = ":";
const Colon = "\u2237";
const Colone = "\u2A74";
const colone = "\u2254";
const coloneq = "\u2254";
const comma = ",";
const commat = "@";
const comp = "\u2201";
const compfn = "\u2218";
const complement = "\u2201";
const complexes = "\u2102";
const cong = "\u2245";
const congdot = "\u2A6D";
const Congruent = "\u2261";
const conint = "\u222E";
const Conint = "\u222F";
const ContourIntegral = "\u222E";
const copf = "\u{1D554}";
const Copf = "\u2102";
const coprod = "\u2210";
const Coproduct = "\u2210";
const copy$1 = "\xA9";
const COPY$1 = "\xA9";
const copysr = "\u2117";
const CounterClockwiseContourIntegral = "\u2233";
const crarr = "\u21B5";
const cross = "\u2717";
const Cross = "\u2A2F";
const Cscr = "\u{1D49E}";
const cscr = "\u{1D4B8}";
const csub = "\u2ACF";
const csube = "\u2AD1";
const csup = "\u2AD0";
const csupe = "\u2AD2";
const ctdot = "\u22EF";
const cudarrl = "\u2938";
const cudarrr = "\u2935";
const cuepr = "\u22DE";
const cuesc = "\u22DF";
const cularr = "\u21B6";
const cularrp = "\u293D";
const cupbrcap = "\u2A48";
const cupcap = "\u2A46";
const CupCap = "\u224D";
const cup = "\u222A";
const Cup = "\u22D3";
const cupcup = "\u2A4A";
const cupdot = "\u228D";
const cupor = "\u2A45";
const cups = "\u222A\uFE00";
const curarr = "\u21B7";
const curarrm = "\u293C";
const curlyeqprec = "\u22DE";
const curlyeqsucc = "\u22DF";
const curlyvee = "\u22CE";
const curlywedge = "\u22CF";
const curren$1 = "\xA4";
const curvearrowleft = "\u21B6";
const curvearrowright = "\u21B7";
const cuvee = "\u22CE";
const cuwed = "\u22CF";
const cwconint = "\u2232";
const cwint = "\u2231";
const cylcty = "\u232D";
const dagger = "\u2020";
const Dagger = "\u2021";
const daleth = "\u2138";
const darr = "\u2193";
const Darr = "\u21A1";
const dArr = "\u21D3";
const dash = "\u2010";
const Dashv = "\u2AE4";
const dashv = "\u22A3";
const dbkarow = "\u290F";
const dblac = "\u02DD";
const Dcaron = "\u010E";
const dcaron = "\u010F";
const Dcy = "\u0414";
const dcy = "\u0434";
const ddagger = "\u2021";
const ddarr = "\u21CA";
const DD = "\u2145";
const dd = "\u2146";
const DDotrahd = "\u2911";
const ddotseq = "\u2A77";
const deg$1 = "\xB0";
const Del = "\u2207";
const Delta = "\u0394";
const delta = "\u03B4";
const demptyv = "\u29B1";
const dfisht = "\u297F";
const Dfr = "\u{1D507}";
const dfr = "\u{1D521}";
const dHar = "\u2965";
const dharl = "\u21C3";
const dharr = "\u21C2";
const DiacriticalAcute = "\xB4";
const DiacriticalDot = "\u02D9";
const DiacriticalDoubleAcute = "\u02DD";
const DiacriticalGrave = "`";
const DiacriticalTilde = "\u02DC";
const diam = "\u22C4";
const diamond = "\u22C4";
const Diamond = "\u22C4";
const diamondsuit = "\u2666";
const diams = "\u2666";
const die = "\xA8";
const DifferentialD = "\u2146";
const digamma = "\u03DD";
const disin = "\u22F2";
const div = "\xF7";
const divide$1 = "\xF7";
const divideontimes = "\u22C7";
const divonx = "\u22C7";
const DJcy = "\u0402";
const djcy = "\u0452";
const dlcorn = "\u231E";
const dlcrop = "\u230D";
const dollar = "$";
const Dopf = "\u{1D53B}";
const dopf = "\u{1D555}";
const Dot = "\xA8";
const dot = "\u02D9";
const DotDot = "\u20DC";
const doteq = "\u2250";
const doteqdot = "\u2251";
const DotEqual = "\u2250";
const dotminus = "\u2238";
const dotplus = "\u2214";
const dotsquare = "\u22A1";
const doublebarwedge = "\u2306";
const DoubleContourIntegral = "\u222F";
const DoubleDot = "\xA8";
const DoubleDownArrow = "\u21D3";
const DoubleLeftArrow = "\u21D0";
const DoubleLeftRightArrow = "\u21D4";
const DoubleLeftTee = "\u2AE4";
const DoubleLongLeftArrow = "\u27F8";
const DoubleLongLeftRightArrow = "\u27FA";
const DoubleLongRightArrow = "\u27F9";
const DoubleRightArrow = "\u21D2";
const DoubleRightTee = "\u22A8";
const DoubleUpArrow = "\u21D1";
const DoubleUpDownArrow = "\u21D5";
const DoubleVerticalBar = "\u2225";
const DownArrowBar = "\u2913";
const downarrow = "\u2193";
const DownArrow = "\u2193";
const Downarrow = "\u21D3";
const DownArrowUpArrow = "\u21F5";
const DownBreve = "\u0311";
const downdownarrows = "\u21CA";
const downharpoonleft = "\u21C3";
const downharpoonright = "\u21C2";
const DownLeftRightVector = "\u2950";
const DownLeftTeeVector = "\u295E";
const DownLeftVectorBar = "\u2956";
const DownLeftVector = "\u21BD";
const DownRightTeeVector = "\u295F";
const DownRightVectorBar = "\u2957";
const DownRightVector = "\u21C1";
const DownTeeArrow = "\u21A7";
const DownTee = "\u22A4";
const drbkarow = "\u2910";
const drcorn = "\u231F";
const drcrop = "\u230C";
const Dscr = "\u{1D49F}";
const dscr = "\u{1D4B9}";
const DScy = "\u0405";
const dscy = "\u0455";
const dsol = "\u29F6";
const Dstrok = "\u0110";
const dstrok = "\u0111";
const dtdot = "\u22F1";
const dtri = "\u25BF";
const dtrif = "\u25BE";
const duarr = "\u21F5";
const duhar = "\u296F";
const dwangle = "\u29A6";
const DZcy = "\u040F";
const dzcy = "\u045F";
const dzigrarr = "\u27FF";
const Eacute$1 = "\xC9";
const eacute$1 = "\xE9";
const easter = "\u2A6E";
const Ecaron = "\u011A";
const ecaron = "\u011B";
const Ecirc$1 = "\xCA";
const ecirc$1 = "\xEA";
const ecir = "\u2256";
const ecolon = "\u2255";
const Ecy = "\u042D";
const ecy = "\u044D";
const eDDot = "\u2A77";
const Edot = "\u0116";
const edot = "\u0117";
const eDot = "\u2251";
const ee = "\u2147";
const efDot = "\u2252";
const Efr = "\u{1D508}";
const efr = "\u{1D522}";
const eg = "\u2A9A";
const Egrave$1 = "\xC8";
const egrave$1 = "\xE8";
const egs = "\u2A96";
const egsdot = "\u2A98";
const el = "\u2A99";
const Element$2 = "\u2208";
const elinters = "\u23E7";
const ell = "\u2113";
const els = "\u2A95";
const elsdot = "\u2A97";
const Emacr = "\u0112";
const emacr = "\u0113";
const empty = "\u2205";
const emptyset = "\u2205";
const EmptySmallSquare = "\u25FB";
const emptyv = "\u2205";
const EmptyVerySmallSquare = "\u25AB";
const emsp13 = "\u2004";
const emsp14 = "\u2005";
const emsp = "\u2003";
const ENG = "\u014A";
const eng = "\u014B";
const ensp = "\u2002";
const Eogon = "\u0118";
const eogon = "\u0119";
const Eopf = "\u{1D53C}";
const eopf = "\u{1D556}";
const epar = "\u22D5";
const eparsl = "\u29E3";
const eplus = "\u2A71";
const epsi = "\u03B5";
const Epsilon = "\u0395";
const epsilon = "\u03B5";
const epsiv = "\u03F5";
const eqcirc = "\u2256";
const eqcolon = "\u2255";
const eqsim = "\u2242";
const eqslantgtr = "\u2A96";
const eqslantless = "\u2A95";
const Equal = "\u2A75";
const equals = "=";
const EqualTilde = "\u2242";
const equest = "\u225F";
const Equilibrium = "\u21CC";
const equiv = "\u2261";
const equivDD = "\u2A78";
const eqvparsl = "\u29E5";
const erarr = "\u2971";
const erDot = "\u2253";
const escr = "\u212F";
const Escr = "\u2130";
const esdot = "\u2250";
const Esim = "\u2A73";
const esim = "\u2242";
const Eta = "\u0397";
const eta = "\u03B7";
const ETH$1 = "\xD0";
const eth$1 = "\xF0";
const Euml$1 = "\xCB";
const euml$1 = "\xEB";
const euro = "\u20AC";
const excl = "!";
const exist = "\u2203";
const Exists = "\u2203";
const expectation = "\u2130";
const exponentiale = "\u2147";
const ExponentialE = "\u2147";
const fallingdotseq = "\u2252";
const Fcy = "\u0424";
const fcy = "\u0444";
const female = "\u2640";
const ffilig = "\uFB03";
const fflig = "\uFB00";
const ffllig = "\uFB04";
const Ffr = "\u{1D509}";
const ffr = "\u{1D523}";
const filig = "\uFB01";
const FilledSmallSquare = "\u25FC";
const FilledVerySmallSquare = "\u25AA";
const fjlig = "fj";
const flat = "\u266D";
const fllig = "\uFB02";
const fltns = "\u25B1";
const fnof = "\u0192";
const Fopf = "\u{1D53D}";
const fopf = "\u{1D557}";
const forall = "\u2200";
const ForAll = "\u2200";
const fork = "\u22D4";
const forkv = "\u2AD9";
const Fouriertrf = "\u2131";
const fpartint = "\u2A0D";
const frac12$1 = "\xBD";
const frac13 = "\u2153";
const frac14$1 = "\xBC";
const frac15 = "\u2155";
const frac16 = "\u2159";
const frac18 = "\u215B";
const frac23 = "\u2154";
const frac25 = "\u2156";
const frac34$1 = "\xBE";
const frac35 = "\u2157";
const frac38 = "\u215C";
const frac45 = "\u2158";
const frac56 = "\u215A";
const frac58 = "\u215D";
const frac78 = "\u215E";
const frasl = "\u2044";
const frown = "\u2322";
const fscr = "\u{1D4BB}";
const Fscr = "\u2131";
const gacute = "\u01F5";
const Gamma = "\u0393";
const gamma = "\u03B3";
const Gammad = "\u03DC";
const gammad = "\u03DD";
const gap = "\u2A86";
const Gbreve = "\u011E";
const gbreve = "\u011F";
const Gcedil = "\u0122";
const Gcirc = "\u011C";
const gcirc = "\u011D";
const Gcy = "\u0413";
const gcy = "\u0433";
const Gdot = "\u0120";
const gdot = "\u0121";
const ge = "\u2265";
const gE = "\u2267";
const gEl = "\u2A8C";
const gel = "\u22DB";
const geq = "\u2265";
const geqq = "\u2267";
const geqslant = "\u2A7E";
const gescc = "\u2AA9";
const ges = "\u2A7E";
const gesdot = "\u2A80";
const gesdoto = "\u2A82";
const gesdotol = "\u2A84";
const gesl = "\u22DB\uFE00";
const gesles = "\u2A94";
const Gfr = "\u{1D50A}";
const gfr = "\u{1D524}";
const gg = "\u226B";
const Gg = "\u22D9";
const ggg = "\u22D9";
const gimel = "\u2137";
const GJcy = "\u0403";
const gjcy = "\u0453";
const gla = "\u2AA5";
const gl = "\u2277";
const glE = "\u2A92";
const glj = "\u2AA4";
const gnap = "\u2A8A";
const gnapprox = "\u2A8A";
const gne = "\u2A88";
const gnE = "\u2269";
const gneq = "\u2A88";
const gneqq = "\u2269";
const gnsim = "\u22E7";
const Gopf = "\u{1D53E}";
const gopf = "\u{1D558}";
const grave = "`";
const GreaterEqual = "\u2265";
const GreaterEqualLess = "\u22DB";
const GreaterFullEqual = "\u2267";
const GreaterGreater = "\u2AA2";
const GreaterLess = "\u2277";
const GreaterSlantEqual = "\u2A7E";
const GreaterTilde = "\u2273";
const Gscr = "\u{1D4A2}";
const gscr = "\u210A";
const gsim = "\u2273";
const gsime = "\u2A8E";
const gsiml = "\u2A90";
const gtcc = "\u2AA7";
const gtcir = "\u2A7A";
const gt$2 = ">";
const GT$1 = ">";
const Gt = "\u226B";
const gtdot = "\u22D7";
const gtlPar = "\u2995";
const gtquest = "\u2A7C";
const gtrapprox = "\u2A86";
const gtrarr = "\u2978";
const gtrdot = "\u22D7";
const gtreqless = "\u22DB";
const gtreqqless = "\u2A8C";
const gtrless = "\u2277";
const gtrsim = "\u2273";
const gvertneqq = "\u2269\uFE00";
const gvnE = "\u2269\uFE00";
const Hacek = "\u02C7";
const hairsp = "\u200A";
const half = "\xBD";
const hamilt = "\u210B";
const HARDcy = "\u042A";
const hardcy = "\u044A";
const harrcir = "\u2948";
const harr = "\u2194";
const hArr = "\u21D4";
const harrw = "\u21AD";
const Hat = "^";
const hbar = "\u210F";
const Hcirc = "\u0124";
const hcirc = "\u0125";
const hearts = "\u2665";
const heartsuit = "\u2665";
const hellip = "\u2026";
const hercon = "\u22B9";
const hfr = "\u{1D525}";
const Hfr = "\u210C";
const HilbertSpace = "\u210B";
const hksearow = "\u2925";
const hkswarow = "\u2926";
const hoarr = "\u21FF";
const homtht = "\u223B";
const hookleftarrow = "\u21A9";
const hookrightarrow = "\u21AA";
const hopf = "\u{1D559}";
const Hopf = "\u210D";
const horbar = "\u2015";
const HorizontalLine = "\u2500";
const hscr = "\u{1D4BD}";
const Hscr = "\u210B";
const hslash = "\u210F";
const Hstrok = "\u0126";
const hstrok = "\u0127";
const HumpDownHump = "\u224E";
const HumpEqual = "\u224F";
const hybull = "\u2043";
const hyphen = "\u2010";
const Iacute$1 = "\xCD";
const iacute$1 = "\xED";
const ic = "\u2063";
const Icirc$1 = "\xCE";
const icirc$1 = "\xEE";
const Icy = "\u0418";
const icy = "\u0438";
const Idot = "\u0130";
const IEcy = "\u0415";
const iecy = "\u0435";
const iexcl$1 = "\xA1";
const iff = "\u21D4";
const ifr = "\u{1D526}";
const Ifr = "\u2111";
const Igrave$1 = "\xCC";
const igrave$1 = "\xEC";
const ii = "\u2148";
const iiiint = "\u2A0C";
const iiint = "\u222D";
const iinfin = "\u29DC";
const iiota = "\u2129";
const IJlig = "\u0132";
const ijlig = "\u0133";
const Imacr = "\u012A";
const imacr = "\u012B";
const image = "\u2111";
const ImaginaryI = "\u2148";
const imagline = "\u2110";
const imagpart = "\u2111";
const imath = "\u0131";
const Im = "\u2111";
const imof = "\u22B7";
const imped = "\u01B5";
const Implies = "\u21D2";
const incare = "\u2105";
const infin = "\u221E";
const infintie = "\u29DD";
const inodot = "\u0131";
const intcal = "\u22BA";
const int$1 = "\u222B";
const Int = "\u222C";
const integers = "\u2124";
const Integral = "\u222B";
const intercal = "\u22BA";
const Intersection = "\u22C2";
const intlarhk = "\u2A17";
const intprod = "\u2A3C";
const InvisibleComma = "\u2063";
const InvisibleTimes = "\u2062";
const IOcy = "\u0401";
const iocy = "\u0451";
const Iogon = "\u012E";
const iogon = "\u012F";
const Iopf = "\u{1D540}";
const iopf = "\u{1D55A}";
const Iota = "\u0399";
const iota = "\u03B9";
const iprod = "\u2A3C";
const iquest$1 = "\xBF";
const iscr = "\u{1D4BE}";
const Iscr = "\u2110";
const isin = "\u2208";
const isindot = "\u22F5";
const isinE = "\u22F9";
const isins = "\u22F4";
const isinsv = "\u22F3";
const isinv = "\u2208";
const it = "\u2062";
const Itilde = "\u0128";
const itilde = "\u0129";
const Iukcy = "\u0406";
const iukcy = "\u0456";
const Iuml$1 = "\xCF";
const iuml$1 = "\xEF";
const Jcirc = "\u0134";
const jcirc = "\u0135";
const Jcy = "\u0419";
const jcy = "\u0439";
const Jfr = "\u{1D50D}";
const jfr = "\u{1D527}";
const jmath = "\u0237";
const Jopf = "\u{1D541}";
const jopf = "\u{1D55B}";
const Jscr = "\u{1D4A5}";
const jscr = "\u{1D4BF}";
const Jsercy = "\u0408";
const jsercy = "\u0458";
const Jukcy = "\u0404";
const jukcy = "\u0454";
const Kappa = "\u039A";
const kappa = "\u03BA";
const kappav = "\u03F0";
const Kcedil = "\u0136";
const kcedil = "\u0137";
const Kcy = "\u041A";
const kcy = "\u043A";
const Kfr = "\u{1D50E}";
const kfr = "\u{1D528}";
const kgreen = "\u0138";
const KHcy = "\u0425";
const khcy = "\u0445";
const KJcy = "\u040C";
const kjcy = "\u045C";
const Kopf = "\u{1D542}";
const kopf = "\u{1D55C}";
const Kscr = "\u{1D4A6}";
const kscr = "\u{1D4C0}";
const lAarr = "\u21DA";
const Lacute = "\u0139";
const lacute = "\u013A";
const laemptyv = "\u29B4";
const lagran = "\u2112";
const Lambda = "\u039B";
const lambda = "\u03BB";
const lang = "\u27E8";
const Lang = "\u27EA";
const langd = "\u2991";
const langle = "\u27E8";
const lap = "\u2A85";
const Laplacetrf = "\u2112";
const laquo$1 = "\xAB";
const larrb = "\u21E4";
const larrbfs = "\u291F";
const larr = "\u2190";
const Larr = "\u219E";
const lArr = "\u21D0";
const larrfs = "\u291D";
const larrhk = "\u21A9";
const larrlp = "\u21AB";
const larrpl = "\u2939";
const larrsim = "\u2973";
const larrtl = "\u21A2";
const latail = "\u2919";
const lAtail = "\u291B";
const lat = "\u2AAB";
const late = "\u2AAD";
const lates = "\u2AAD\uFE00";
const lbarr = "\u290C";
const lBarr = "\u290E";
const lbbrk = "\u2772";
const lbrace = "{";
const lbrack = "[";
const lbrke = "\u298B";
const lbrksld = "\u298F";
const lbrkslu = "\u298D";
const Lcaron = "\u013D";
const lcaron = "\u013E";
const Lcedil = "\u013B";
const lcedil = "\u013C";
const lceil = "\u2308";
const lcub = "{";
const Lcy = "\u041B";
const lcy = "\u043B";
const ldca = "\u2936";
const ldquo = "\u201C";
const ldquor = "\u201E";
const ldrdhar = "\u2967";
const ldrushar = "\u294B";
const ldsh = "\u21B2";
const le = "\u2264";
const lE = "\u2266";
const LeftAngleBracket = "\u27E8";
const LeftArrowBar = "\u21E4";
const leftarrow = "\u2190";
const LeftArrow = "\u2190";
const Leftarrow = "\u21D0";
const LeftArrowRightArrow = "\u21C6";
const leftarrowtail = "\u21A2";
const LeftCeiling = "\u2308";
const LeftDoubleBracket = "\u27E6";
const LeftDownTeeVector = "\u2961";
const LeftDownVectorBar = "\u2959";
const LeftDownVector = "\u21C3";
const LeftFloor = "\u230A";
const leftharpoondown = "\u21BD";
const leftharpoonup = "\u21BC";
const leftleftarrows = "\u21C7";
const leftrightarrow = "\u2194";
const LeftRightArrow = "\u2194";
const Leftrightarrow = "\u21D4";
const leftrightarrows = "\u21C6";
const leftrightharpoons = "\u21CB";
const leftrightsquigarrow = "\u21AD";
const LeftRightVector = "\u294E";
const LeftTeeArrow = "\u21A4";
const LeftTee = "\u22A3";
const LeftTeeVector = "\u295A";
const leftthreetimes = "\u22CB";
const LeftTriangleBar = "\u29CF";
const LeftTriangle = "\u22B2";
const LeftTriangleEqual = "\u22B4";
const LeftUpDownVector = "\u2951";
const LeftUpTeeVector = "\u2960";
const LeftUpVectorBar = "\u2958";
const LeftUpVector = "\u21BF";
const LeftVectorBar = "\u2952";
const LeftVector = "\u21BC";
const lEg = "\u2A8B";
const leg = "\u22DA";
const leq = "\u2264";
const leqq = "\u2266";
const leqslant = "\u2A7D";
const lescc = "\u2AA8";
const les = "\u2A7D";
const lesdot = "\u2A7F";
const lesdoto = "\u2A81";
const lesdotor = "\u2A83";
const lesg = "\u22DA\uFE00";
const lesges = "\u2A93";
const lessapprox = "\u2A85";
const lessdot = "\u22D6";
const lesseqgtr = "\u22DA";
const lesseqqgtr = "\u2A8B";
const LessEqualGreater = "\u22DA";
const LessFullEqual = "\u2266";
const LessGreater = "\u2276";
const lessgtr = "\u2276";
const LessLess = "\u2AA1";
const lesssim = "\u2272";
const LessSlantEqual = "\u2A7D";
const LessTilde = "\u2272";
const lfisht = "\u297C";
const lfloor = "\u230A";
const Lfr = "\u{1D50F}";
const lfr = "\u{1D529}";
const lg = "\u2276";
const lgE = "\u2A91";
const lHar = "\u2962";
const lhard = "\u21BD";
const lharu = "\u21BC";
const lharul = "\u296A";
const lhblk = "\u2584";
const LJcy = "\u0409";
const ljcy = "\u0459";
const llarr = "\u21C7";
const ll = "\u226A";
const Ll = "\u22D8";
const llcorner = "\u231E";
const Lleftarrow = "\u21DA";
const llhard = "\u296B";
const lltri = "\u25FA";
const Lmidot = "\u013F";
const lmidot = "\u0140";
const lmoustache = "\u23B0";
const lmoust = "\u23B0";
const lnap = "\u2A89";
const lnapprox = "\u2A89";
const lne = "\u2A87";
const lnE = "\u2268";
const lneq = "\u2A87";
const lneqq = "\u2268";
const lnsim = "\u22E6";
const loang = "\u27EC";
const loarr = "\u21FD";
const lobrk = "\u27E6";
const longleftarrow = "\u27F5";
const LongLeftArrow = "\u27F5";
const Longleftarrow = "\u27F8";
const longleftrightarrow = "\u27F7";
const LongLeftRightArrow = "\u27F7";
const Longleftrightarrow = "\u27FA";
const longmapsto = "\u27FC";
const longrightarrow = "\u27F6";
const LongRightArrow = "\u27F6";
const Longrightarrow = "\u27F9";
const looparrowleft = "\u21AB";
const looparrowright = "\u21AC";
const lopar = "\u2985";
const Lopf = "\u{1D543}";
const lopf = "\u{1D55D}";
const loplus = "\u2A2D";
const lotimes = "\u2A34";
const lowast = "\u2217";
const lowbar = "_";
const LowerLeftArrow = "\u2199";
const LowerRightArrow = "\u2198";
const loz = "\u25CA";
const lozenge = "\u25CA";
const lozf = "\u29EB";
const lpar = "(";
const lparlt = "\u2993";
const lrarr = "\u21C6";
const lrcorner = "\u231F";
const lrhar = "\u21CB";
const lrhard = "\u296D";
const lrm = "\u200E";
const lrtri = "\u22BF";
const lsaquo = "\u2039";
const lscr = "\u{1D4C1}";
const Lscr = "\u2112";
const lsh = "\u21B0";
const Lsh = "\u21B0";
const lsim = "\u2272";
const lsime = "\u2A8D";
const lsimg = "\u2A8F";
const lsqb = "[";
const lsquo = "\u2018";
const lsquor = "\u201A";
const Lstrok = "\u0141";
const lstrok = "\u0142";
const ltcc = "\u2AA6";
const ltcir = "\u2A79";
const lt$2 = "<";
const LT$1 = "<";
const Lt = "\u226A";
const ltdot = "\u22D6";
const lthree = "\u22CB";
const ltimes = "\u22C9";
const ltlarr = "\u2976";
const ltquest = "\u2A7B";
const ltri = "\u25C3";
const ltrie = "\u22B4";
const ltrif = "\u25C2";
const ltrPar = "\u2996";
const lurdshar = "\u294A";
const luruhar = "\u2966";
const lvertneqq = "\u2268\uFE00";
const lvnE = "\u2268\uFE00";
const macr$1 = "\xAF";
const male = "\u2642";
const malt = "\u2720";
const maltese = "\u2720";
const map = "\u21A6";
const mapsto = "\u21A6";
const mapstodown = "\u21A7";
const mapstoleft = "\u21A4";
const mapstoup = "\u21A5";
const marker = "\u25AE";
const mcomma = "\u2A29";
const Mcy = "\u041C";
const mcy = "\u043C";
const mdash = "\u2014";
const mDDot = "\u223A";
const measuredangle = "\u2221";
const MediumSpace = "\u205F";
const Mellintrf = "\u2133";
const Mfr = "\u{1D510}";
const mfr = "\u{1D52A}";
const mho = "\u2127";
const micro$1 = "\xB5";
const midast = "*";
const midcir = "\u2AF0";
const mid = "\u2223";
const middot$1 = "\xB7";
const minusb = "\u229F";
const minus = "\u2212";
const minusd = "\u2238";
const minusdu = "\u2A2A";
const MinusPlus = "\u2213";
const mlcp = "\u2ADB";
const mldr = "\u2026";
const mnplus = "\u2213";
const models = "\u22A7";
const Mopf = "\u{1D544}";
const mopf = "\u{1D55E}";
const mp = "\u2213";
const mscr = "\u{1D4C2}";
const Mscr = "\u2133";
const mstpos = "\u223E";
const Mu = "\u039C";
const mu = "\u03BC";
const multimap = "\u22B8";
const mumap = "\u22B8";
const nabla = "\u2207";
const Nacute = "\u0143";
const nacute = "\u0144";
const nang = "\u2220\u20D2";
const nap = "\u2249";
const napE = "\u2A70\u0338";
const napid = "\u224B\u0338";
const napos = "\u0149";
const napprox = "\u2249";
const natural = "\u266E";
const naturals = "\u2115";
const natur = "\u266E";
const nbsp$1 = "\xA0";
const nbump = "\u224E\u0338";
const nbumpe = "\u224F\u0338";
const ncap = "\u2A43";
const Ncaron = "\u0147";
const ncaron = "\u0148";
const Ncedil = "\u0145";
const ncedil = "\u0146";
const ncong = "\u2247";
const ncongdot = "\u2A6D\u0338";
const ncup = "\u2A42";
const Ncy = "\u041D";
const ncy = "\u043D";
const ndash = "\u2013";
const nearhk = "\u2924";
const nearr = "\u2197";
const neArr = "\u21D7";
const nearrow = "\u2197";
const ne = "\u2260";
const nedot = "\u2250\u0338";
const NegativeMediumSpace = "\u200B";
const NegativeThickSpace = "\u200B";
const NegativeThinSpace = "\u200B";
const NegativeVeryThinSpace = "\u200B";
const nequiv = "\u2262";
const nesear = "\u2928";
const nesim = "\u2242\u0338";
const NestedGreaterGreater = "\u226B";
const NestedLessLess = "\u226A";
const NewLine = "\n";
const nexist = "\u2204";
const nexists = "\u2204";
const Nfr = "\u{1D511}";
const nfr = "\u{1D52B}";
const ngE = "\u2267\u0338";
const nge = "\u2271";
const ngeq = "\u2271";
const ngeqq = "\u2267\u0338";
const ngeqslant = "\u2A7E\u0338";
const nges = "\u2A7E\u0338";
const nGg = "\u22D9\u0338";
const ngsim = "\u2275";
const nGt = "\u226B\u20D2";
const ngt = "\u226F";
const ngtr = "\u226F";
const nGtv = "\u226B\u0338";
const nharr = "\u21AE";
const nhArr = "\u21CE";
const nhpar = "\u2AF2";
const ni = "\u220B";
const nis = "\u22FC";
const nisd = "\u22FA";
const niv = "\u220B";
const NJcy = "\u040A";
const njcy = "\u045A";
const nlarr = "\u219A";
const nlArr = "\u21CD";
const nldr = "\u2025";
const nlE = "\u2266\u0338";
const nle = "\u2270";
const nleftarrow = "\u219A";
const nLeftarrow = "\u21CD";
const nleftrightarrow = "\u21AE";
const nLeftrightarrow = "\u21CE";
const nleq = "\u2270";
const nleqq = "\u2266\u0338";
const nleqslant = "\u2A7D\u0338";
const nles = "\u2A7D\u0338";
const nless = "\u226E";
const nLl = "\u22D8\u0338";
const nlsim = "\u2274";
const nLt = "\u226A\u20D2";
const nlt = "\u226E";
const nltri = "\u22EA";
const nltrie = "\u22EC";
const nLtv = "\u226A\u0338";
const nmid = "\u2224";
const NoBreak = "\u2060";
const NonBreakingSpace = "\xA0";
const nopf = "\u{1D55F}";
const Nopf = "\u2115";
const Not = "\u2AEC";
const not$1 = "\xAC";
const NotCongruent = "\u2262";
const NotCupCap = "\u226D";
const NotDoubleVerticalBar = "\u2226";
const NotElement = "\u2209";
const NotEqual = "\u2260";
const NotEqualTilde = "\u2242\u0338";
const NotExists = "\u2204";
const NotGreater = "\u226F";
const NotGreaterEqual = "\u2271";
const NotGreaterFullEqual = "\u2267\u0338";
const NotGreaterGreater = "\u226B\u0338";
const NotGreaterLess = "\u2279";
const NotGreaterSlantEqual = "\u2A7E\u0338";
const NotGreaterTilde = "\u2275";
const NotHumpDownHump = "\u224E\u0338";
const NotHumpEqual = "\u224F\u0338";
const notin = "\u2209";
const notindot = "\u22F5\u0338";
const notinE = "\u22F9\u0338";
const notinva = "\u2209";
const notinvb = "\u22F7";
const notinvc = "\u22F6";
const NotLeftTriangleBar = "\u29CF\u0338";
const NotLeftTriangle = "\u22EA";
const NotLeftTriangleEqual = "\u22EC";
const NotLess = "\u226E";
const NotLessEqual = "\u2270";
const NotLessGreater = "\u2278";
const NotLessLess = "\u226A\u0338";
const NotLessSlantEqual = "\u2A7D\u0338";
const NotLessTilde = "\u2274";
const NotNestedGreaterGreater = "\u2AA2\u0338";
const NotNestedLessLess = "\u2AA1\u0338";
const notni = "\u220C";
const notniva = "\u220C";
const notnivb = "\u22FE";
const notnivc = "\u22FD";
const NotPrecedes = "\u2280";
const NotPrecedesEqual = "\u2AAF\u0338";
const NotPrecedesSlantEqual = "\u22E0";
const NotReverseElement = "\u220C";
const NotRightTriangleBar = "\u29D0\u0338";
const NotRightTriangle = "\u22EB";
const NotRightTriangleEqual = "\u22ED";
const NotSquareSubset = "\u228F\u0338";
const NotSquareSubsetEqual = "\u22E2";
const NotSquareSuperset = "\u2290\u0338";
const NotSquareSupersetEqual = "\u22E3";
const NotSubset = "\u2282\u20D2";
const NotSubsetEqual = "\u2288";
const NotSucceeds = "\u2281";
const NotSucceedsEqual = "\u2AB0\u0338";
const NotSucceedsSlantEqual = "\u22E1";
const NotSucceedsTilde = "\u227F\u0338";
const NotSuperset = "\u2283\u20D2";
const NotSupersetEqual = "\u2289";
const NotTilde = "\u2241";
const NotTildeEqual = "\u2244";
const NotTildeFullEqual = "\u2247";
const NotTildeTilde = "\u2249";
const NotVerticalBar = "\u2224";
const nparallel = "\u2226";
const npar = "\u2226";
const nparsl = "\u2AFD\u20E5";
const npart = "\u2202\u0338";
const npolint = "\u2A14";
const npr = "\u2280";
const nprcue = "\u22E0";
const nprec = "\u2280";
const npreceq = "\u2AAF\u0338";
const npre = "\u2AAF\u0338";
const nrarrc = "\u2933\u0338";
const nrarr = "\u219B";
const nrArr = "\u21CF";
const nrarrw = "\u219D\u0338";
const nrightarrow = "\u219B";
const nRightarrow = "\u21CF";
const nrtri = "\u22EB";
const nrtrie = "\u22ED";
const nsc = "\u2281";
const nsccue = "\u22E1";
const nsce = "\u2AB0\u0338";
const Nscr = "\u{1D4A9}";
const nscr = "\u{1D4C3}";
const nshortmid = "\u2224";
const nshortparallel = "\u2226";
const nsim = "\u2241";
const nsime = "\u2244";
const nsimeq = "\u2244";
const nsmid = "\u2224";
const nspar = "\u2226";
const nsqsube = "\u22E2";
const nsqsupe = "\u22E3";
const nsub = "\u2284";
const nsubE = "\u2AC5\u0338";
const nsube = "\u2288";
const nsubset = "\u2282\u20D2";
const nsubseteq = "\u2288";
const nsubseteqq = "\u2AC5\u0338";
const nsucc = "\u2281";
const nsucceq = "\u2AB0\u0338";
const nsup = "\u2285";
const nsupE = "\u2AC6\u0338";
const nsupe = "\u2289";
const nsupset = "\u2283\u20D2";
const nsupseteq = "\u2289";
const nsupseteqq = "\u2AC6\u0338";
const ntgl = "\u2279";
const Ntilde$1 = "\xD1";
const ntilde$1 = "\xF1";
const ntlg = "\u2278";
const ntriangleleft = "\u22EA";
const ntrianglelefteq = "\u22EC";
const ntriangleright = "\u22EB";
const ntrianglerighteq = "\u22ED";
const Nu = "\u039D";
const nu = "\u03BD";
const num = "#";
const numero = "\u2116";
const numsp = "\u2007";
const nvap = "\u224D\u20D2";
const nvdash = "\u22AC";
const nvDash = "\u22AD";
const nVdash = "\u22AE";
const nVDash = "\u22AF";
const nvge = "\u2265\u20D2";
const nvgt = ">\u20D2";
const nvHarr = "\u2904";
const nvinfin = "\u29DE";
const nvlArr = "\u2902";
const nvle = "\u2264\u20D2";
const nvlt = "<\u20D2";
const nvltrie = "\u22B4\u20D2";
const nvrArr = "\u2903";
const nvrtrie = "\u22B5\u20D2";
const nvsim = "\u223C\u20D2";
const nwarhk = "\u2923";
const nwarr = "\u2196";
const nwArr = "\u21D6";
const nwarrow = "\u2196";
const nwnear = "\u2927";
const Oacute$1 = "\xD3";
const oacute$1 = "\xF3";
const oast = "\u229B";
const Ocirc$1 = "\xD4";
const ocirc$1 = "\xF4";
const ocir = "\u229A";
const Ocy = "\u041E";
const ocy = "\u043E";
const odash = "\u229D";
const Odblac = "\u0150";
const odblac = "\u0151";
const odiv = "\u2A38";
const odot = "\u2299";
const odsold = "\u29BC";
const OElig = "\u0152";
const oelig = "\u0153";
const ofcir = "\u29BF";
const Ofr = "\u{1D512}";
const ofr = "\u{1D52C}";
const ogon = "\u02DB";
const Ograve$1 = "\xD2";
const ograve$1 = "\xF2";
const ogt = "\u29C1";
const ohbar = "\u29B5";
const ohm = "\u03A9";
const oint = "\u222E";
const olarr = "\u21BA";
const olcir = "\u29BE";
const olcross = "\u29BB";
const oline = "\u203E";
const olt = "\u29C0";
const Omacr = "\u014C";
const omacr = "\u014D";
const Omega = "\u03A9";
const omega = "\u03C9";
const Omicron = "\u039F";
const omicron = "\u03BF";
const omid = "\u29B6";
const ominus = "\u2296";
const Oopf = "\u{1D546}";
const oopf = "\u{1D560}";
const opar = "\u29B7";
const OpenCurlyDoubleQuote = "\u201C";
const OpenCurlyQuote = "\u2018";
const operp = "\u29B9";
const oplus = "\u2295";
const orarr = "\u21BB";
const Or = "\u2A54";
const or = "\u2228";
const ord = "\u2A5D";
const order$1 = "\u2134";
const orderof = "\u2134";
const ordf$1 = "\xAA";
const ordm$1 = "\xBA";
const origof = "\u22B6";
const oror = "\u2A56";
const orslope = "\u2A57";
const orv = "\u2A5B";
const oS = "\u24C8";
const Oscr = "\u{1D4AA}";
const oscr = "\u2134";
const Oslash$1 = "\xD8";
const oslash$1 = "\xF8";
const osol = "\u2298";
const Otilde$1 = "\xD5";
const otilde$1 = "\xF5";
const otimesas = "\u2A36";
const Otimes = "\u2A37";
const otimes = "\u2297";
const Ouml$1 = "\xD6";
const ouml$1 = "\xF6";
const ovbar = "\u233D";
const OverBar = "\u203E";
const OverBrace = "\u23DE";
const OverBracket = "\u23B4";
const OverParenthesis = "\u23DC";
const para$1 = "\xB6";
const parallel = "\u2225";
const par = "\u2225";
const parsim = "\u2AF3";
const parsl = "\u2AFD";
const part = "\u2202";
const PartialD = "\u2202";
const Pcy = "\u041F";
const pcy = "\u043F";
const percnt = "%";
const period = ".";
const permil = "\u2030";
const perp = "\u22A5";
const pertenk = "\u2031";
const Pfr = "\u{1D513}";
const pfr = "\u{1D52D}";
const Phi = "\u03A6";
const phi = "\u03C6";
const phiv = "\u03D5";
const phmmat = "\u2133";
const phone = "\u260E";
const Pi = "\u03A0";
const pi = "\u03C0";
const pitchfork = "\u22D4";
const piv = "\u03D6";
const planck = "\u210F";
const planckh = "\u210E";
const plankv = "\u210F";
const plusacir = "\u2A23";
const plusb = "\u229E";
const pluscir = "\u2A22";
const plus = "+";
const plusdo = "\u2214";
const plusdu = "\u2A25";
const pluse = "\u2A72";
const PlusMinus = "\xB1";
const plusmn$1 = "\xB1";
const plussim = "\u2A26";
const plustwo = "\u2A27";
const pm = "\xB1";
const Poincareplane = "\u210C";
const pointint = "\u2A15";
const popf = "\u{1D561}";
const Popf = "\u2119";
const pound$1 = "\xA3";
const prap = "\u2AB7";
const Pr = "\u2ABB";
const pr = "\u227A";
const prcue = "\u227C";
const precapprox = "\u2AB7";
const prec = "\u227A";
const preccurlyeq = "\u227C";
const Precedes = "\u227A";
const PrecedesEqual = "\u2AAF";
const PrecedesSlantEqual = "\u227C";
const PrecedesTilde = "\u227E";
const preceq = "\u2AAF";
const precnapprox = "\u2AB9";
const precneqq = "\u2AB5";
const precnsim = "\u22E8";
const pre = "\u2AAF";
const prE = "\u2AB3";
const precsim = "\u227E";
const prime = "\u2032";
const Prime = "\u2033";
const primes = "\u2119";
const prnap = "\u2AB9";
const prnE = "\u2AB5";
const prnsim = "\u22E8";
const prod = "\u220F";
const Product = "\u220F";
const profalar = "\u232E";
const profline = "\u2312";
const profsurf = "\u2313";
const prop = "\u221D";
const Proportional = "\u221D";
const Proportion = "\u2237";
const propto = "\u221D";
const prsim = "\u227E";
const prurel = "\u22B0";
const Pscr = "\u{1D4AB}";
const pscr = "\u{1D4C5}";
const Psi = "\u03A8";
const psi = "\u03C8";
const puncsp = "\u2008";
const Qfr = "\u{1D514}";
const qfr = "\u{1D52E}";
const qint = "\u2A0C";
const qopf = "\u{1D562}";
const Qopf = "\u211A";
const qprime = "\u2057";
const Qscr = "\u{1D4AC}";
const qscr = "\u{1D4C6}";
const quaternions = "\u210D";
const quatint = "\u2A16";
const quest = "?";
const questeq = "\u225F";
const quot$2 = '"';
const QUOT$1 = '"';
const rAarr = "\u21DB";
const race = "\u223D\u0331";
const Racute = "\u0154";
const racute = "\u0155";
const radic = "\u221A";
const raemptyv = "\u29B3";
const rang = "\u27E9";
const Rang = "\u27EB";
const rangd = "\u2992";
const range = "\u29A5";
const rangle = "\u27E9";
const raquo$1 = "\xBB";
const rarrap = "\u2975";
const rarrb = "\u21E5";
const rarrbfs = "\u2920";
const rarrc = "\u2933";
const rarr = "\u2192";
const Rarr = "\u21A0";
const rArr = "\u21D2";
const rarrfs = "\u291E";
const rarrhk = "\u21AA";
const rarrlp = "\u21AC";
const rarrpl = "\u2945";
const rarrsim = "\u2974";
const Rarrtl = "\u2916";
const rarrtl = "\u21A3";
const rarrw = "\u219D";
const ratail = "\u291A";
const rAtail = "\u291C";
const ratio = "\u2236";
const rationals = "\u211A";
const rbarr = "\u290D";
const rBarr = "\u290F";
const RBarr = "\u2910";
const rbbrk = "\u2773";
const rbrace = "}";
const rbrack = "]";
const rbrke = "\u298C";
const rbrksld = "\u298E";
const rbrkslu = "\u2990";
const Rcaron = "\u0158";
const rcaron = "\u0159";
const Rcedil = "\u0156";
const rcedil = "\u0157";
const rceil = "\u2309";
const rcub = "}";
const Rcy = "\u0420";
const rcy = "\u0440";
const rdca = "\u2937";
const rdldhar = "\u2969";
const rdquo = "\u201D";
const rdquor = "\u201D";
const rdsh = "\u21B3";
const real = "\u211C";
const realine = "\u211B";
const realpart = "\u211C";
const reals = "\u211D";
const Re = "\u211C";
const rect = "\u25AD";
const reg$1 = "\xAE";
const REG$1 = "\xAE";
const ReverseElement = "\u220B";
const ReverseEquilibrium = "\u21CB";
const ReverseUpEquilibrium = "\u296F";
const rfisht = "\u297D";
const rfloor = "\u230B";
const rfr = "\u{1D52F}";
const Rfr = "\u211C";
const rHar = "\u2964";
const rhard = "\u21C1";
const rharu = "\u21C0";
const rharul = "\u296C";
const Rho = "\u03A1";
const rho = "\u03C1";
const rhov = "\u03F1";
const RightAngleBracket = "\u27E9";
const RightArrowBar = "\u21E5";
const rightarrow = "\u2192";
const RightArrow = "\u2192";
const Rightarrow = "\u21D2";
const RightArrowLeftArrow = "\u21C4";
const rightarrowtail = "\u21A3";
const RightCeiling = "\u2309";
const RightDoubleBracket = "\u27E7";
const RightDownTeeVector = "\u295D";
const RightDownVectorBar = "\u2955";
const RightDownVector = "\u21C2";
const RightFloor = "\u230B";
const rightharpoondown = "\u21C1";
const rightharpoonup = "\u21C0";
const rightleftarrows = "\u21C4";
const rightleftharpoons = "\u21CC";
const rightrightarrows = "\u21C9";
const rightsquigarrow = "\u219D";
const RightTeeArrow = "\u21A6";
const RightTee = "\u22A2";
const RightTeeVector = "\u295B";
const rightthreetimes = "\u22CC";
const RightTriangleBar = "\u29D0";
const RightTriangle = "\u22B3";
const RightTriangleEqual = "\u22B5";
const RightUpDownVector = "\u294F";
const RightUpTeeVector = "\u295C";
const RightUpVectorBar = "\u2954";
const RightUpVector = "\u21BE";
const RightVectorBar = "\u2953";
const RightVector = "\u21C0";
const ring = "\u02DA";
const risingdotseq = "\u2253";
const rlarr = "\u21C4";
const rlhar = "\u21CC";
const rlm = "\u200F";
const rmoustache = "\u23B1";
const rmoust = "\u23B1";
const rnmid = "\u2AEE";
const roang = "\u27ED";
const roarr = "\u21FE";
const robrk = "\u27E7";
const ropar = "\u2986";
const ropf = "\u{1D563}";
const Ropf = "\u211D";
const roplus = "\u2A2E";
const rotimes = "\u2A35";
const RoundImplies = "\u2970";
const rpar = ")";
const rpargt = "\u2994";
const rppolint = "\u2A12";
const rrarr = "\u21C9";
const Rrightarrow = "\u21DB";
const rsaquo = "\u203A";
const rscr = "\u{1D4C7}";
const Rscr = "\u211B";
const rsh = "\u21B1";
const Rsh = "\u21B1";
const rsqb = "]";
const rsquo = "\u2019";
const rsquor = "\u2019";
const rthree = "\u22CC";
const rtimes = "\u22CA";
const rtri = "\u25B9";
const rtrie = "\u22B5";
const rtrif = "\u25B8";
const rtriltri = "\u29CE";
const RuleDelayed = "\u29F4";
const ruluhar = "\u2968";
const rx = "\u211E";
const Sacute = "\u015A";
const sacute = "\u015B";
const sbquo = "\u201A";
const scap = "\u2AB8";
const Scaron = "\u0160";
const scaron = "\u0161";
const Sc = "\u2ABC";
const sc = "\u227B";
const sccue = "\u227D";
const sce = "\u2AB0";
const scE = "\u2AB4";
const Scedil = "\u015E";
const scedil = "\u015F";
const Scirc = "\u015C";
const scirc = "\u015D";
const scnap = "\u2ABA";
const scnE = "\u2AB6";
const scnsim = "\u22E9";
const scpolint = "\u2A13";
const scsim = "\u227F";
const Scy = "\u0421";
const scy = "\u0441";
const sdotb = "\u22A1";
const sdot = "\u22C5";
const sdote = "\u2A66";
const searhk = "\u2925";
const searr = "\u2198";
const seArr = "\u21D8";
const searrow = "\u2198";
const sect$1 = "\xA7";
const semi = ";";
const seswar = "\u2929";
const setminus = "\u2216";
const setmn = "\u2216";
const sext = "\u2736";
const Sfr = "\u{1D516}";
const sfr = "\u{1D530}";
const sfrown = "\u2322";
const sharp = "\u266F";
const SHCHcy = "\u0429";
const shchcy = "\u0449";
const SHcy = "\u0428";
const shcy = "\u0448";
const ShortDownArrow = "\u2193";
const ShortLeftArrow = "\u2190";
const shortmid = "\u2223";
const shortparallel = "\u2225";
const ShortRightArrow = "\u2192";
const ShortUpArrow = "\u2191";
const shy$1 = "\xAD";
const Sigma = "\u03A3";
const sigma = "\u03C3";
const sigmaf = "\u03C2";
const sigmav = "\u03C2";
const sim = "\u223C";
const simdot = "\u2A6A";
const sime = "\u2243";
const simeq = "\u2243";
const simg = "\u2A9E";
const simgE = "\u2AA0";
const siml = "\u2A9D";
const simlE = "\u2A9F";
const simne = "\u2246";
const simplus = "\u2A24";
const simrarr = "\u2972";
const slarr = "\u2190";
const SmallCircle = "\u2218";
const smallsetminus = "\u2216";
const smashp = "\u2A33";
const smeparsl = "\u29E4";
const smid = "\u2223";
const smile = "\u2323";
const smt = "\u2AAA";
const smte = "\u2AAC";
const smtes = "\u2AAC\uFE00";
const SOFTcy = "\u042C";
const softcy = "\u044C";
const solbar = "\u233F";
const solb = "\u29C4";
const sol = "/";
const Sopf = "\u{1D54A}";
const sopf = "\u{1D564}";
const spades = "\u2660";
const spadesuit = "\u2660";
const spar = "\u2225";
const sqcap = "\u2293";
const sqcaps = "\u2293\uFE00";
const sqcup = "\u2294";
const sqcups = "\u2294\uFE00";
const Sqrt = "\u221A";
const sqsub = "\u228F";
const sqsube = "\u2291";
const sqsubset = "\u228F";
const sqsubseteq = "\u2291";
const sqsup = "\u2290";
const sqsupe = "\u2292";
const sqsupset = "\u2290";
const sqsupseteq = "\u2292";
const square = "\u25A1";
const Square = "\u25A1";
const SquareIntersection = "\u2293";
const SquareSubset = "\u228F";
const SquareSubsetEqual = "\u2291";
const SquareSuperset = "\u2290";
const SquareSupersetEqual = "\u2292";
const SquareUnion = "\u2294";
const squarf = "\u25AA";
const squ = "\u25A1";
const squf = "\u25AA";
const srarr = "\u2192";
const Sscr = "\u{1D4AE}";
const sscr = "\u{1D4C8}";
const ssetmn = "\u2216";
const ssmile = "\u2323";
const sstarf = "\u22C6";
const Star = "\u22C6";
const star = "\u2606";
const starf = "\u2605";
const straightepsilon = "\u03F5";
const straightphi = "\u03D5";
const strns = "\xAF";
const sub = "\u2282";
const Sub = "\u22D0";
const subdot = "\u2ABD";
const subE = "\u2AC5";
const sube = "\u2286";
const subedot = "\u2AC3";
const submult = "\u2AC1";
const subnE = "\u2ACB";
const subne = "\u228A";
const subplus = "\u2ABF";
const subrarr = "\u2979";
const subset = "\u2282";
const Subset = "\u22D0";
const subseteq = "\u2286";
const subseteqq = "\u2AC5";
const SubsetEqual = "\u2286";
const subsetneq = "\u228A";
const subsetneqq = "\u2ACB";
const subsim = "\u2AC7";
const subsub = "\u2AD5";
const subsup = "\u2AD3";
const succapprox = "\u2AB8";
const succ = "\u227B";
const succcurlyeq = "\u227D";
const Succeeds = "\u227B";
const SucceedsEqual = "\u2AB0";
const SucceedsSlantEqual = "\u227D";
const SucceedsTilde = "\u227F";
const succeq = "\u2AB0";
const succnapprox = "\u2ABA";
const succneqq = "\u2AB6";
const succnsim = "\u22E9";
const succsim = "\u227F";
const SuchThat = "\u220B";
const sum = "\u2211";
const Sum = "\u2211";
const sung = "\u266A";
const sup1$1 = "\xB9";
const sup2$1 = "\xB2";
const sup3$1 = "\xB3";
const sup = "\u2283";
const Sup = "\u22D1";
const supdot = "\u2ABE";
const supdsub = "\u2AD8";
const supE = "\u2AC6";
const supe = "\u2287";
const supedot = "\u2AC4";
const Superset = "\u2283";
const SupersetEqual = "\u2287";
const suphsol = "\u27C9";
const suphsub = "\u2AD7";
const suplarr = "\u297B";
const supmult = "\u2AC2";
const supnE = "\u2ACC";
const supne = "\u228B";
const supplus = "\u2AC0";
const supset = "\u2283";
const Supset = "\u22D1";
const supseteq = "\u2287";
const supseteqq = "\u2AC6";
const supsetneq = "\u228B";
const supsetneqq = "\u2ACC";
const supsim = "\u2AC8";
const supsub = "\u2AD4";
const supsup = "\u2AD6";
const swarhk = "\u2926";
const swarr = "\u2199";
const swArr = "\u21D9";
const swarrow = "\u2199";
const swnwar = "\u292A";
const szlig$1 = "\xDF";
const Tab = "	";
const target = "\u2316";
const Tau = "\u03A4";
const tau = "\u03C4";
const tbrk = "\u23B4";
const Tcaron = "\u0164";
const tcaron = "\u0165";
const Tcedil = "\u0162";
const tcedil = "\u0163";
const Tcy = "\u0422";
const tcy = "\u0442";
const tdot = "\u20DB";
const telrec = "\u2315";
const Tfr = "\u{1D517}";
const tfr = "\u{1D531}";
const there4 = "\u2234";
const therefore = "\u2234";
const Therefore = "\u2234";
const Theta = "\u0398";
const theta = "\u03B8";
const thetasym = "\u03D1";
const thetav = "\u03D1";
const thickapprox = "\u2248";
const thicksim = "\u223C";
const ThickSpace = "\u205F\u200A";
const ThinSpace = "\u2009";
const thinsp = "\u2009";
const thkap = "\u2248";
const thksim = "\u223C";
const THORN$1 = "\xDE";
const thorn$1 = "\xFE";
const tilde = "\u02DC";
const Tilde = "\u223C";
const TildeEqual = "\u2243";
const TildeFullEqual = "\u2245";
const TildeTilde = "\u2248";
const timesbar = "\u2A31";
const timesb = "\u22A0";
const times$1 = "\xD7";
const timesd = "\u2A30";
const tint = "\u222D";
const toea = "\u2928";
const topbot = "\u2336";
const topcir = "\u2AF1";
const top$1 = "\u22A4";
const Topf = "\u{1D54B}";
const topf = "\u{1D565}";
const topfork = "\u2ADA";
const tosa = "\u2929";
const tprime = "\u2034";
const trade = "\u2122";
const TRADE = "\u2122";
const triangle = "\u25B5";
const triangledown = "\u25BF";
const triangleleft = "\u25C3";
const trianglelefteq = "\u22B4";
const triangleq = "\u225C";
const triangleright = "\u25B9";
const trianglerighteq = "\u22B5";
const tridot = "\u25EC";
const trie = "\u225C";
const triminus = "\u2A3A";
const TripleDot = "\u20DB";
const triplus = "\u2A39";
const trisb = "\u29CD";
const tritime = "\u2A3B";
const trpezium = "\u23E2";
const Tscr = "\u{1D4AF}";
const tscr = "\u{1D4C9}";
const TScy = "\u0426";
const tscy = "\u0446";
const TSHcy = "\u040B";
const tshcy = "\u045B";
const Tstrok = "\u0166";
const tstrok = "\u0167";
const twixt = "\u226C";
const twoheadleftarrow = "\u219E";
const twoheadrightarrow = "\u21A0";
const Uacute$1 = "\xDA";
const uacute$1 = "\xFA";
const uarr = "\u2191";
const Uarr = "\u219F";
const uArr = "\u21D1";
const Uarrocir = "\u2949";
const Ubrcy = "\u040E";
const ubrcy = "\u045E";
const Ubreve = "\u016C";
const ubreve = "\u016D";
const Ucirc$1 = "\xDB";
const ucirc$1 = "\xFB";
const Ucy = "\u0423";
const ucy = "\u0443";
const udarr = "\u21C5";
const Udblac = "\u0170";
const udblac = "\u0171";
const udhar = "\u296E";
const ufisht = "\u297E";
const Ufr = "\u{1D518}";
const ufr = "\u{1D532}";
const Ugrave$1 = "\xD9";
const ugrave$1 = "\xF9";
const uHar = "\u2963";
const uharl = "\u21BF";
const uharr = "\u21BE";
const uhblk = "\u2580";
const ulcorn = "\u231C";
const ulcorner = "\u231C";
const ulcrop = "\u230F";
const ultri = "\u25F8";
const Umacr = "\u016A";
const umacr = "\u016B";
const uml$1 = "\xA8";
const UnderBar = "_";
const UnderBrace = "\u23DF";
const UnderBracket = "\u23B5";
const UnderParenthesis = "\u23DD";
const Union = "\u22C3";
const UnionPlus = "\u228E";
const Uogon = "\u0172";
const uogon = "\u0173";
const Uopf = "\u{1D54C}";
const uopf = "\u{1D566}";
const UpArrowBar = "\u2912";
const uparrow = "\u2191";
const UpArrow = "\u2191";
const Uparrow = "\u21D1";
const UpArrowDownArrow = "\u21C5";
const updownarrow = "\u2195";
const UpDownArrow = "\u2195";
const Updownarrow = "\u21D5";
const UpEquilibrium = "\u296E";
const upharpoonleft = "\u21BF";
const upharpoonright = "\u21BE";
const uplus = "\u228E";
const UpperLeftArrow = "\u2196";
const UpperRightArrow = "\u2197";
const upsi = "\u03C5";
const Upsi = "\u03D2";
const upsih = "\u03D2";
const Upsilon = "\u03A5";
const upsilon = "\u03C5";
const UpTeeArrow = "\u21A5";
const UpTee = "\u22A5";
const upuparrows = "\u21C8";
const urcorn = "\u231D";
const urcorner = "\u231D";
const urcrop = "\u230E";
const Uring = "\u016E";
const uring = "\u016F";
const urtri = "\u25F9";
const Uscr = "\u{1D4B0}";
const uscr = "\u{1D4CA}";
const utdot = "\u22F0";
const Utilde = "\u0168";
const utilde = "\u0169";
const utri = "\u25B5";
const utrif = "\u25B4";
const uuarr = "\u21C8";
const Uuml$1 = "\xDC";
const uuml$1 = "\xFC";
const uwangle = "\u29A7";
const vangrt = "\u299C";
const varepsilon = "\u03F5";
const varkappa = "\u03F0";
const varnothing = "\u2205";
const varphi = "\u03D5";
const varpi = "\u03D6";
const varpropto = "\u221D";
const varr = "\u2195";
const vArr = "\u21D5";
const varrho = "\u03F1";
const varsigma = "\u03C2";
const varsubsetneq = "\u228A\uFE00";
const varsubsetneqq = "\u2ACB\uFE00";
const varsupsetneq = "\u228B\uFE00";
const varsupsetneqq = "\u2ACC\uFE00";
const vartheta = "\u03D1";
const vartriangleleft = "\u22B2";
const vartriangleright = "\u22B3";
const vBar = "\u2AE8";
const Vbar = "\u2AEB";
const vBarv = "\u2AE9";
const Vcy = "\u0412";
const vcy = "\u0432";
const vdash = "\u22A2";
const vDash = "\u22A8";
const Vdash = "\u22A9";
const VDash = "\u22AB";
const Vdashl = "\u2AE6";
const veebar = "\u22BB";
const vee = "\u2228";
const Vee = "\u22C1";
const veeeq = "\u225A";
const vellip = "\u22EE";
const verbar = "|";
const Verbar = "\u2016";
const vert = "|";
const Vert = "\u2016";
const VerticalBar = "\u2223";
const VerticalLine = "|";
const VerticalSeparator = "\u2758";
const VerticalTilde = "\u2240";
const VeryThinSpace = "\u200A";
const Vfr = "\u{1D519}";
const vfr = "\u{1D533}";
const vltri = "\u22B2";
const vnsub = "\u2282\u20D2";
const vnsup = "\u2283\u20D2";
const Vopf = "\u{1D54D}";
const vopf = "\u{1D567}";
const vprop = "\u221D";
const vrtri = "\u22B3";
const Vscr = "\u{1D4B1}";
const vscr = "\u{1D4CB}";
const vsubnE = "\u2ACB\uFE00";
const vsubne = "\u228A\uFE00";
const vsupnE = "\u2ACC\uFE00";
const vsupne = "\u228B\uFE00";
const Vvdash = "\u22AA";
const vzigzag = "\u299A";
const Wcirc = "\u0174";
const wcirc = "\u0175";
const wedbar = "\u2A5F";
const wedge = "\u2227";
const Wedge = "\u22C0";
const wedgeq = "\u2259";
const weierp = "\u2118";
const Wfr = "\u{1D51A}";
const wfr = "\u{1D534}";
const Wopf = "\u{1D54E}";
const wopf = "\u{1D568}";
const wp = "\u2118";
const wr = "\u2240";
const wreath = "\u2240";
const Wscr = "\u{1D4B2}";
const wscr = "\u{1D4CC}";
const xcap = "\u22C2";
const xcirc = "\u25EF";
const xcup = "\u22C3";
const xdtri = "\u25BD";
const Xfr = "\u{1D51B}";
const xfr = "\u{1D535}";
const xharr = "\u27F7";
const xhArr = "\u27FA";
const Xi = "\u039E";
const xi = "\u03BE";
const xlarr = "\u27F5";
const xlArr = "\u27F8";
const xmap = "\u27FC";
const xnis = "\u22FB";
const xodot = "\u2A00";
const Xopf = "\u{1D54F}";
const xopf = "\u{1D569}";
const xoplus = "\u2A01";
const xotime = "\u2A02";
const xrarr = "\u27F6";
const xrArr = "\u27F9";
const Xscr = "\u{1D4B3}";
const xscr = "\u{1D4CD}";
const xsqcup = "\u2A06";
const xuplus = "\u2A04";
const xutri = "\u25B3";
const xvee = "\u22C1";
const xwedge = "\u22C0";
const Yacute$1 = "\xDD";
const yacute$1 = "\xFD";
const YAcy = "\u042F";
const yacy = "\u044F";
const Ycirc = "\u0176";
const ycirc = "\u0177";
const Ycy = "\u042B";
const ycy = "\u044B";
const yen$1 = "\xA5";
const Yfr = "\u{1D51C}";
const yfr = "\u{1D536}";
const YIcy = "\u0407";
const yicy = "\u0457";
const Yopf = "\u{1D550}";
const yopf = "\u{1D56A}";
const Yscr = "\u{1D4B4}";
const yscr = "\u{1D4CE}";
const YUcy = "\u042E";
const yucy = "\u044E";
const yuml$1 = "\xFF";
const Yuml = "\u0178";
const Zacute = "\u0179";
const zacute = "\u017A";
const Zcaron = "\u017D";
const zcaron = "\u017E";
const Zcy = "\u0417";
const zcy = "\u0437";
const Zdot = "\u017B";
const zdot = "\u017C";
const zeetrf = "\u2128";
const ZeroWidthSpace = "\u200B";
const Zeta = "\u0396";
const zeta = "\u03B6";
const zfr = "\u{1D537}";
const Zfr = "\u2128";
const ZHcy = "\u0416";
const zhcy = "\u0436";
const zigrarr = "\u21DD";
const zopf = "\u{1D56B}";
const Zopf = "\u2124";
const Zscr = "\u{1D4B5}";
const zscr = "\u{1D4CF}";
const zwj = "\u200D";
const zwnj = "\u200C";
var require$$1$1 = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  Acy,
  acy,
  AElig: AElig$1,
  aelig: aelig$1,
  af,
  Afr,
  afr,
  Agrave: Agrave$1,
  agrave: agrave$1,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp: amp$2,
  AMP: AMP$1,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos: apos$1,
  ApplyFunction,
  approx,
  approxeq,
  Aring: Aring$1,
  aring: aring$1,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom: bottom$1,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar: brvbar$1,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil: cedil$1,
  Cedilla,
  cemptyv,
  cent: cent$1,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy$1,
  COPY: COPY$1,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren: curren$1,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg: deg$1,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute: Eacute$1,
  eacute: eacute$1,
  easter,
  Ecaron,
  ecaron,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave: Egrave$1,
  egrave: egrave$1,
  egs,
  egsdot,
  el,
  Element: Element$2,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12: frac12$1,
  frac13,
  frac14: frac14$1,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34: frac34$1,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$2,
  GT: GT$1,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute: Iacute$1,
  iacute: iacute$1,
  ic,
  Icirc: Icirc$1,
  icirc: icirc$1,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl: iexcl$1,
  iff,
  ifr,
  Ifr,
  Igrave: Igrave$1,
  igrave: igrave$1,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "\u2208",
  infin,
  infintie,
  inodot,
  intcal,
  int: int$1,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest: iquest$1,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml: Iuml$1,
  iuml: iuml$1,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo: laquo$1,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$2,
  LT: LT$1,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr: macr$1,
  male,
  malt,
  maltese,
  "Map": "\u2905",
  map,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro: micro$1,
  midast,
  midcir,
  mid,
  middot: middot$1,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp: nbsp$1,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute: Oacute$1,
  oacute: oacute$1,
  oast,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order: order$1,
  orderof,
  ordf: ordf$1,
  ordm: ordm$1,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash: Oslash$1,
  oslash: oslash$1,
  osol,
  Otilde: Otilde$1,
  otilde: otilde$1,
  otimesas,
  Otimes,
  otimes,
  Ouml: Ouml$1,
  ouml: ouml$1,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para: para$1,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn: plusmn$1,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound: pound$1,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot: quot$2,
  QUOT: QUOT$1,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range,
  rangle,
  raquo: raquo$1,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg: reg$1,
  REG: REG$1,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect: sect$1,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy: shy$1,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig: szlig$1,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN: THORN$1,
  thorn: thorn$1,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top: top$1,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute: Uacute$1,
  uacute: uacute$1,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml: uml$1,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml: Uuml$1,
  uuml: uuml$1,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute: Yacute$1,
  yacute: yacute$1,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen: yen$1,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml: yuml$1,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
const Aacute = "\xC1";
const aacute = "\xE1";
const Acirc = "\xC2";
const acirc = "\xE2";
const acute = "\xB4";
const AElig = "\xC6";
const aelig = "\xE6";
const Agrave = "\xC0";
const agrave = "\xE0";
const amp$1 = "&";
const AMP = "&";
const Aring = "\xC5";
const aring = "\xE5";
const Atilde = "\xC3";
const atilde = "\xE3";
const Auml = "\xC4";
const auml = "\xE4";
const brvbar = "\xA6";
const Ccedil = "\xC7";
const ccedil = "\xE7";
const cedil = "\xB8";
const cent = "\xA2";
const copy = "\xA9";
const COPY = "\xA9";
const curren = "\xA4";
const deg = "\xB0";
const divide = "\xF7";
const Eacute = "\xC9";
const eacute = "\xE9";
const Ecirc = "\xCA";
const ecirc = "\xEA";
const Egrave = "\xC8";
const egrave = "\xE8";
const ETH = "\xD0";
const eth = "\xF0";
const Euml = "\xCB";
const euml = "\xEB";
const frac12 = "\xBD";
const frac14 = "\xBC";
const frac34 = "\xBE";
const gt$1 = ">";
const GT = ">";
const Iacute = "\xCD";
const iacute = "\xED";
const Icirc = "\xCE";
const icirc = "\xEE";
const iexcl = "\xA1";
const Igrave = "\xCC";
const igrave = "\xEC";
const iquest = "\xBF";
const Iuml = "\xCF";
const iuml = "\xEF";
const laquo = "\xAB";
const lt$1 = "<";
const LT = "<";
const macr = "\xAF";
const micro = "\xB5";
const middot = "\xB7";
const nbsp = "\xA0";
const not = "\xAC";
const Ntilde = "\xD1";
const ntilde = "\xF1";
const Oacute = "\xD3";
const oacute = "\xF3";
const Ocirc = "\xD4";
const ocirc = "\xF4";
const Ograve = "\xD2";
const ograve = "\xF2";
const ordf = "\xAA";
const ordm = "\xBA";
const Oslash = "\xD8";
const oslash = "\xF8";
const Otilde = "\xD5";
const otilde = "\xF5";
const Ouml = "\xD6";
const ouml = "\xF6";
const para = "\xB6";
const plusmn = "\xB1";
const pound = "\xA3";
const quot$1 = '"';
const QUOT = '"';
const raquo = "\xBB";
const reg = "\xAE";
const REG = "\xAE";
const sect = "\xA7";
const shy = "\xAD";
const sup1 = "\xB9";
const sup2 = "\xB2";
const sup3 = "\xB3";
const szlig = "\xDF";
const THORN = "\xDE";
const thorn = "\xFE";
const times = "\xD7";
const Uacute = "\xDA";
const uacute = "\xFA";
const Ucirc = "\xDB";
const ucirc = "\xFB";
const Ugrave = "\xD9";
const ugrave = "\xF9";
const uml = "\xA8";
const Uuml = "\xDC";
const uuml = "\xFC";
const Yacute = "\xDD";
const yacute = "\xFD";
const yen = "\xA5";
const yuml = "\xFF";
var require$$1 = {
  Aacute,
  aacute,
  Acirc,
  acirc,
  acute,
  AElig,
  aelig,
  Agrave,
  agrave,
  amp: amp$1,
  AMP,
  Aring,
  aring,
  Atilde,
  atilde,
  Auml,
  auml,
  brvbar,
  Ccedil,
  ccedil,
  cedil,
  cent,
  copy,
  COPY,
  curren,
  deg,
  divide,
  Eacute,
  eacute,
  Ecirc,
  ecirc,
  Egrave,
  egrave,
  ETH,
  eth,
  Euml,
  euml,
  frac12,
  frac14,
  frac34,
  gt: gt$1,
  GT,
  Iacute,
  iacute,
  Icirc,
  icirc,
  iexcl,
  Igrave,
  igrave,
  iquest,
  Iuml,
  iuml,
  laquo,
  lt: lt$1,
  LT,
  macr,
  micro,
  middot,
  nbsp,
  not,
  Ntilde,
  ntilde,
  Oacute,
  oacute,
  Ocirc,
  ocirc,
  Ograve,
  ograve,
  ordf,
  ordm,
  Oslash,
  oslash,
  Otilde,
  otilde,
  Ouml,
  ouml,
  para,
  plusmn,
  pound,
  quot: quot$1,
  QUOT,
  raquo,
  reg,
  REG,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  THORN,
  thorn,
  times,
  Uacute,
  uacute,
  Ucirc,
  ucirc,
  Ugrave,
  ugrave,
  uml,
  Uuml,
  uuml,
  Yacute,
  yacute,
  yen,
  yuml
};
const amp = "&";
const apos = "'";
const gt = ">";
const lt = "<";
const quot = '"';
var require$$0 = {
  amp,
  apos,
  gt,
  lt,
  quot
};
var __importDefault$5 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Tokenizer$1, "__esModule", { value: true });
var decode_codepoint_1$1 = __importDefault$5(decode_codepoint);
var entities_json_1$2 = __importDefault$5(require$$1$1);
var legacy_json_1$1 = __importDefault$5(require$$1);
var xml_json_1$2 = __importDefault$5(require$$0);
function whitespace(c2) {
  return c2 === " " || c2 === "\n" || c2 === "	" || c2 === "\f" || c2 === "\r";
}
function isASCIIAlpha(c2) {
  return c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z";
}
function ifElseState(upper, SUCCESS, FAILURE) {
  var lower = upper.toLowerCase();
  if (upper === lower) {
    return function(t2, c2) {
      if (c2 === lower) {
        t2._state = SUCCESS;
      } else {
        t2._state = FAILURE;
        t2._index--;
      }
    };
  }
  return function(t2, c2) {
    if (c2 === lower || c2 === upper) {
      t2._state = SUCCESS;
    } else {
      t2._state = FAILURE;
      t2._index--;
    }
  };
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
  var lower = upper.toLowerCase();
  return function(t2, c2) {
    if (c2 === lower || c2 === upper) {
      t2._state = NEXT_STATE;
    } else {
      t2._state = 3;
      t2._index--;
    }
  };
}
var stateBeforeCdata1 = ifElseState("C", 24, 16);
var stateBeforeCdata2 = ifElseState("D", 25, 16);
var stateBeforeCdata3 = ifElseState("A", 26, 16);
var stateBeforeCdata4 = ifElseState("T", 27, 16);
var stateBeforeCdata5 = ifElseState("A", 28, 16);
var stateBeforeScript1 = consumeSpecialNameChar("R", 35);
var stateBeforeScript2 = consumeSpecialNameChar("I", 36);
var stateBeforeScript3 = consumeSpecialNameChar("P", 37);
var stateBeforeScript4 = consumeSpecialNameChar("T", 38);
var stateAfterScript1 = ifElseState("R", 40, 1);
var stateAfterScript2 = ifElseState("I", 41, 1);
var stateAfterScript3 = ifElseState("P", 42, 1);
var stateAfterScript4 = ifElseState("T", 43, 1);
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45);
var stateBeforeStyle2 = consumeSpecialNameChar("L", 46);
var stateBeforeStyle3 = consumeSpecialNameChar("E", 47);
var stateAfterStyle1 = ifElseState("Y", 49, 1);
var stateAfterStyle2 = ifElseState("L", 50, 1);
var stateAfterStyle3 = ifElseState("E", 51, 1);
var stateBeforeSpecialT = consumeSpecialNameChar("I", 54);
var stateBeforeTitle1 = consumeSpecialNameChar("T", 55);
var stateBeforeTitle2 = consumeSpecialNameChar("L", 56);
var stateBeforeTitle3 = consumeSpecialNameChar("E", 57);
var stateAfterSpecialTEnd = ifElseState("I", 58, 1);
var stateAfterTitle1 = ifElseState("T", 59, 1);
var stateAfterTitle2 = ifElseState("L", 60, 1);
var stateAfterTitle3 = ifElseState("E", 61, 1);
var stateBeforeEntity = ifElseState("#", 63, 64);
var stateBeforeNumericEntity = ifElseState("X", 66, 65);
var Tokenizer = function() {
  function Tokenizer2(options, cbs) {
    var _a;
    this._state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this._index = 0;
    this.bufferOffset = 0;
    this.baseState = 1;
    this.special = 1;
    this.running = true;
    this.ended = false;
    this.cbs = cbs;
    this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
    this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
  }
  Tokenizer2.prototype.reset = function() {
    this._state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this._index = 0;
    this.bufferOffset = 0;
    this.baseState = 1;
    this.special = 1;
    this.running = true;
    this.ended = false;
  };
  Tokenizer2.prototype.write = function(chunk) {
    if (this.ended)
      this.cbs.onerror(Error(".write() after done!"));
    this.buffer += chunk;
    this.parse();
  };
  Tokenizer2.prototype.end = function(chunk) {
    if (this.ended)
      this.cbs.onerror(Error(".end() after done!"));
    if (chunk)
      this.write(chunk);
    this.ended = true;
    if (this.running)
      this.finish();
  };
  Tokenizer2.prototype.pause = function() {
    this.running = false;
  };
  Tokenizer2.prototype.resume = function() {
    this.running = true;
    if (this._index < this.buffer.length) {
      this.parse();
    }
    if (this.ended) {
      this.finish();
    }
  };
  Tokenizer2.prototype.getAbsoluteIndex = function() {
    return this.bufferOffset + this._index;
  };
  Tokenizer2.prototype.stateText = function(c2) {
    if (c2 === "<") {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }
      this._state = 2;
      this.sectionStart = this._index;
    } else if (this.decodeEntities && c2 === "&" && (this.special === 1 || this.special === 4)) {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }
      this.baseState = 1;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.isTagStartChar = function(c2) {
    return isASCIIAlpha(c2) || this.xmlMode && !whitespace(c2) && c2 !== "/" && c2 !== ">";
  };
  Tokenizer2.prototype.stateBeforeTagName = function(c2) {
    if (c2 === "/") {
      this._state = 5;
    } else if (c2 === "<") {
      this.cbs.ontext(this.getSection());
      this.sectionStart = this._index;
    } else if (c2 === ">" || this.special !== 1 || whitespace(c2)) {
      this._state = 1;
    } else if (c2 === "!") {
      this._state = 15;
      this.sectionStart = this._index + 1;
    } else if (c2 === "?") {
      this._state = 17;
      this.sectionStart = this._index + 1;
    } else if (!this.isTagStartChar(c2)) {
      this._state = 1;
    } else {
      this._state = !this.xmlMode && (c2 === "s" || c2 === "S") ? 32 : !this.xmlMode && (c2 === "t" || c2 === "T") ? 52 : 3;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInTagName = function(c2) {
    if (c2 === "/" || c2 === ">" || whitespace(c2)) {
      this.emitToken("onopentagname");
      this._state = 8;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateBeforeClosingTagName = function(c2) {
    if (whitespace(c2))
      ;
    else if (c2 === ">") {
      this._state = 1;
    } else if (this.special !== 1) {
      if (this.special !== 4 && (c2 === "s" || c2 === "S")) {
        this._state = 33;
      } else if (this.special === 4 && (c2 === "t" || c2 === "T")) {
        this._state = 53;
      } else {
        this._state = 1;
        this._index--;
      }
    } else if (!this.isTagStartChar(c2)) {
      this._state = 20;
      this.sectionStart = this._index;
    } else {
      this._state = 6;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInClosingTagName = function(c2) {
    if (c2 === ">" || whitespace(c2)) {
      this.emitToken("onclosetag");
      this._state = 7;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateAfterClosingTagName = function(c2) {
    if (c2 === ">") {
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateBeforeAttributeName = function(c2) {
    if (c2 === ">") {
      this.cbs.onopentagend();
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c2 === "/") {
      this._state = 4;
    } else if (!whitespace(c2)) {
      this._state = 9;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInSelfClosingTag = function(c2) {
    if (c2 === ">") {
      this.cbs.onselfclosingtag();
      this._state = 1;
      this.sectionStart = this._index + 1;
      this.special = 1;
    } else if (!whitespace(c2)) {
      this._state = 8;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInAttributeName = function(c2) {
    if (c2 === "=" || c2 === "/" || c2 === ">" || whitespace(c2)) {
      this.cbs.onattribname(this.getSection());
      this.sectionStart = -1;
      this._state = 10;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateAfterAttributeName = function(c2) {
    if (c2 === "=") {
      this._state = 11;
    } else if (c2 === "/" || c2 === ">") {
      this.cbs.onattribend(void 0);
      this._state = 8;
      this._index--;
    } else if (!whitespace(c2)) {
      this.cbs.onattribend(void 0);
      this._state = 9;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateBeforeAttributeValue = function(c2) {
    if (c2 === '"') {
      this._state = 12;
      this.sectionStart = this._index + 1;
    } else if (c2 === "'") {
      this._state = 13;
      this.sectionStart = this._index + 1;
    } else if (!whitespace(c2)) {
      this._state = 14;
      this.sectionStart = this._index;
      this._index--;
    }
  };
  Tokenizer2.prototype.handleInAttributeValue = function(c2, quote) {
    if (c2 === quote) {
      this.emitToken("onattribdata");
      this.cbs.onattribend(quote);
      this._state = 8;
    } else if (this.decodeEntities && c2 === "&") {
      this.emitToken("onattribdata");
      this.baseState = this._state;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c2) {
    this.handleInAttributeValue(c2, '"');
  };
  Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c2) {
    this.handleInAttributeValue(c2, "'");
  };
  Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c2) {
    if (whitespace(c2) || c2 === ">") {
      this.emitToken("onattribdata");
      this.cbs.onattribend(null);
      this._state = 8;
      this._index--;
    } else if (this.decodeEntities && c2 === "&") {
      this.emitToken("onattribdata");
      this.baseState = this._state;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateBeforeDeclaration = function(c2) {
    this._state = c2 === "[" ? 23 : c2 === "-" ? 18 : 16;
  };
  Tokenizer2.prototype.stateInDeclaration = function(c2) {
    if (c2 === ">") {
      this.cbs.ondeclaration(this.getSection());
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateInProcessingInstruction = function(c2) {
    if (c2 === ">") {
      this.cbs.onprocessinginstruction(this.getSection());
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateBeforeComment = function(c2) {
    if (c2 === "-") {
      this._state = 19;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16;
    }
  };
  Tokenizer2.prototype.stateInComment = function(c2) {
    if (c2 === "-")
      this._state = 21;
  };
  Tokenizer2.prototype.stateInSpecialComment = function(c2) {
    if (c2 === ">") {
      this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateAfterComment1 = function(c2) {
    if (c2 === "-") {
      this._state = 22;
    } else {
      this._state = 19;
    }
  };
  Tokenizer2.prototype.stateAfterComment2 = function(c2) {
    if (c2 === ">") {
      this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c2 !== "-") {
      this._state = 19;
    }
  };
  Tokenizer2.prototype.stateBeforeCdata6 = function(c2) {
    if (c2 === "[") {
      this._state = 29;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInCdata = function(c2) {
    if (c2 === "]")
      this._state = 30;
  };
  Tokenizer2.prototype.stateAfterCdata1 = function(c2) {
    if (c2 === "]")
      this._state = 31;
    else
      this._state = 29;
  };
  Tokenizer2.prototype.stateAfterCdata2 = function(c2) {
    if (c2 === ">") {
      this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c2 !== "]") {
      this._state = 29;
    }
  };
  Tokenizer2.prototype.stateBeforeSpecialS = function(c2) {
    if (c2 === "c" || c2 === "C") {
      this._state = 34;
    } else if (c2 === "t" || c2 === "T") {
      this._state = 44;
    } else {
      this._state = 3;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateBeforeSpecialSEnd = function(c2) {
    if (this.special === 2 && (c2 === "c" || c2 === "C")) {
      this._state = 39;
    } else if (this.special === 3 && (c2 === "t" || c2 === "T")) {
      this._state = 48;
    } else
      this._state = 1;
  };
  Tokenizer2.prototype.stateBeforeSpecialLast = function(c2, special) {
    if (c2 === "/" || c2 === ">" || whitespace(c2)) {
      this.special = special;
    }
    this._state = 3;
    this._index--;
  };
  Tokenizer2.prototype.stateAfterSpecialLast = function(c2, sectionStartOffset) {
    if (c2 === ">" || whitespace(c2)) {
      this.special = 1;
      this._state = 6;
      this.sectionStart = this._index - sectionStartOffset;
      this._index--;
    } else
      this._state = 1;
  };
  Tokenizer2.prototype.parseFixedEntity = function(map2) {
    if (map2 === void 0) {
      map2 = this.xmlMode ? xml_json_1$2.default : entities_json_1$2.default;
    }
    if (this.sectionStart + 1 < this._index) {
      var entity = this.buffer.substring(this.sectionStart + 1, this._index);
      if (Object.prototype.hasOwnProperty.call(map2, entity)) {
        this.emitPartial(map2[entity]);
        this.sectionStart = this._index + 1;
      }
    }
  };
  Tokenizer2.prototype.parseLegacyEntity = function() {
    var start2 = this.sectionStart + 1;
    var limit = Math.min(this._index - start2, 6);
    while (limit >= 2) {
      var entity = this.buffer.substr(start2, limit);
      if (Object.prototype.hasOwnProperty.call(legacy_json_1$1.default, entity)) {
        this.emitPartial(legacy_json_1$1.default[entity]);
        this.sectionStart += limit + 1;
        return;
      }
      limit--;
    }
  };
  Tokenizer2.prototype.stateInNamedEntity = function(c2) {
    if (c2 === ";") {
      this.parseFixedEntity();
      if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) {
        this.parseLegacyEntity();
      }
      this._state = this.baseState;
    } else if ((c2 < "0" || c2 > "9") && !isASCIIAlpha(c2)) {
      if (this.xmlMode || this.sectionStart + 1 === this._index)
        ;
      else if (this.baseState !== 1) {
        if (c2 !== "=") {
          this.parseFixedEntity(legacy_json_1$1.default);
        }
      } else {
        this.parseLegacyEntity();
      }
      this._state = this.baseState;
      this._index--;
    }
  };
  Tokenizer2.prototype.decodeNumericEntity = function(offset2, base, strict) {
    var sectionStart = this.sectionStart + offset2;
    if (sectionStart !== this._index) {
      var entity = this.buffer.substring(sectionStart, this._index);
      var parsed = parseInt(entity, base);
      this.emitPartial(decode_codepoint_1$1.default(parsed));
      this.sectionStart = strict ? this._index + 1 : this._index;
    }
    this._state = this.baseState;
  };
  Tokenizer2.prototype.stateInNumericEntity = function(c2) {
    if (c2 === ";") {
      this.decodeNumericEntity(2, 10, true);
    } else if (c2 < "0" || c2 > "9") {
      if (!this.xmlMode) {
        this.decodeNumericEntity(2, 10, false);
      } else {
        this._state = this.baseState;
      }
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInHexEntity = function(c2) {
    if (c2 === ";") {
      this.decodeNumericEntity(3, 16, true);
    } else if ((c2 < "a" || c2 > "f") && (c2 < "A" || c2 > "F") && (c2 < "0" || c2 > "9")) {
      if (!this.xmlMode) {
        this.decodeNumericEntity(3, 16, false);
      } else {
        this._state = this.baseState;
      }
      this._index--;
    }
  };
  Tokenizer2.prototype.cleanup = function() {
    if (this.sectionStart < 0) {
      this.buffer = "";
      this.bufferOffset += this._index;
      this._index = 0;
    } else if (this.running) {
      if (this._state === 1) {
        if (this.sectionStart !== this._index) {
          this.cbs.ontext(this.buffer.substr(this.sectionStart));
        }
        this.buffer = "";
        this.bufferOffset += this._index;
        this._index = 0;
      } else if (this.sectionStart === this._index) {
        this.buffer = "";
        this.bufferOffset += this._index;
        this._index = 0;
      } else {
        this.buffer = this.buffer.substr(this.sectionStart);
        this._index -= this.sectionStart;
        this.bufferOffset += this.sectionStart;
      }
      this.sectionStart = 0;
    }
  };
  Tokenizer2.prototype.parse = function() {
    while (this._index < this.buffer.length && this.running) {
      var c2 = this.buffer.charAt(this._index);
      if (this._state === 1) {
        this.stateText(c2);
      } else if (this._state === 12) {
        this.stateInAttributeValueDoubleQuotes(c2);
      } else if (this._state === 9) {
        this.stateInAttributeName(c2);
      } else if (this._state === 19) {
        this.stateInComment(c2);
      } else if (this._state === 20) {
        this.stateInSpecialComment(c2);
      } else if (this._state === 8) {
        this.stateBeforeAttributeName(c2);
      } else if (this._state === 3) {
        this.stateInTagName(c2);
      } else if (this._state === 6) {
        this.stateInClosingTagName(c2);
      } else if (this._state === 2) {
        this.stateBeforeTagName(c2);
      } else if (this._state === 10) {
        this.stateAfterAttributeName(c2);
      } else if (this._state === 13) {
        this.stateInAttributeValueSingleQuotes(c2);
      } else if (this._state === 11) {
        this.stateBeforeAttributeValue(c2);
      } else if (this._state === 5) {
        this.stateBeforeClosingTagName(c2);
      } else if (this._state === 7) {
        this.stateAfterClosingTagName(c2);
      } else if (this._state === 32) {
        this.stateBeforeSpecialS(c2);
      } else if (this._state === 21) {
        this.stateAfterComment1(c2);
      } else if (this._state === 14) {
        this.stateInAttributeValueNoQuotes(c2);
      } else if (this._state === 4) {
        this.stateInSelfClosingTag(c2);
      } else if (this._state === 16) {
        this.stateInDeclaration(c2);
      } else if (this._state === 15) {
        this.stateBeforeDeclaration(c2);
      } else if (this._state === 22) {
        this.stateAfterComment2(c2);
      } else if (this._state === 18) {
        this.stateBeforeComment(c2);
      } else if (this._state === 33) {
        this.stateBeforeSpecialSEnd(c2);
      } else if (this._state === 53) {
        stateAfterSpecialTEnd(this, c2);
      } else if (this._state === 39) {
        stateAfterScript1(this, c2);
      } else if (this._state === 40) {
        stateAfterScript2(this, c2);
      } else if (this._state === 41) {
        stateAfterScript3(this, c2);
      } else if (this._state === 34) {
        stateBeforeScript1(this, c2);
      } else if (this._state === 35) {
        stateBeforeScript2(this, c2);
      } else if (this._state === 36) {
        stateBeforeScript3(this, c2);
      } else if (this._state === 37) {
        stateBeforeScript4(this, c2);
      } else if (this._state === 38) {
        this.stateBeforeSpecialLast(c2, 2);
      } else if (this._state === 42) {
        stateAfterScript4(this, c2);
      } else if (this._state === 43) {
        this.stateAfterSpecialLast(c2, 6);
      } else if (this._state === 44) {
        stateBeforeStyle1(this, c2);
      } else if (this._state === 29) {
        this.stateInCdata(c2);
      } else if (this._state === 45) {
        stateBeforeStyle2(this, c2);
      } else if (this._state === 46) {
        stateBeforeStyle3(this, c2);
      } else if (this._state === 47) {
        this.stateBeforeSpecialLast(c2, 3);
      } else if (this._state === 48) {
        stateAfterStyle1(this, c2);
      } else if (this._state === 49) {
        stateAfterStyle2(this, c2);
      } else if (this._state === 50) {
        stateAfterStyle3(this, c2);
      } else if (this._state === 51) {
        this.stateAfterSpecialLast(c2, 5);
      } else if (this._state === 52) {
        stateBeforeSpecialT(this, c2);
      } else if (this._state === 54) {
        stateBeforeTitle1(this, c2);
      } else if (this._state === 55) {
        stateBeforeTitle2(this, c2);
      } else if (this._state === 56) {
        stateBeforeTitle3(this, c2);
      } else if (this._state === 57) {
        this.stateBeforeSpecialLast(c2, 4);
      } else if (this._state === 58) {
        stateAfterTitle1(this, c2);
      } else if (this._state === 59) {
        stateAfterTitle2(this, c2);
      } else if (this._state === 60) {
        stateAfterTitle3(this, c2);
      } else if (this._state === 61) {
        this.stateAfterSpecialLast(c2, 5);
      } else if (this._state === 17) {
        this.stateInProcessingInstruction(c2);
      } else if (this._state === 64) {
        this.stateInNamedEntity(c2);
      } else if (this._state === 23) {
        stateBeforeCdata1(this, c2);
      } else if (this._state === 62) {
        stateBeforeEntity(this, c2);
      } else if (this._state === 24) {
        stateBeforeCdata2(this, c2);
      } else if (this._state === 25) {
        stateBeforeCdata3(this, c2);
      } else if (this._state === 30) {
        this.stateAfterCdata1(c2);
      } else if (this._state === 31) {
        this.stateAfterCdata2(c2);
      } else if (this._state === 26) {
        stateBeforeCdata4(this, c2);
      } else if (this._state === 27) {
        stateBeforeCdata5(this, c2);
      } else if (this._state === 28) {
        this.stateBeforeCdata6(c2);
      } else if (this._state === 66) {
        this.stateInHexEntity(c2);
      } else if (this._state === 65) {
        this.stateInNumericEntity(c2);
      } else if (this._state === 63) {
        stateBeforeNumericEntity(this, c2);
      } else {
        this.cbs.onerror(Error("unknown _state"), this._state);
      }
      this._index++;
    }
    this.cleanup();
  };
  Tokenizer2.prototype.finish = function() {
    if (this.sectionStart < this._index) {
      this.handleTrailingData();
    }
    this.cbs.onend();
  };
  Tokenizer2.prototype.handleTrailingData = function() {
    var data = this.buffer.substr(this.sectionStart);
    if (this._state === 29 || this._state === 30 || this._state === 31) {
      this.cbs.oncdata(data);
    } else if (this._state === 19 || this._state === 21 || this._state === 22) {
      this.cbs.oncomment(data);
    } else if (this._state === 64 && !this.xmlMode) {
      this.parseLegacyEntity();
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state === 65 && !this.xmlMode) {
      this.decodeNumericEntity(2, 10, false);
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state === 66 && !this.xmlMode) {
      this.decodeNumericEntity(3, 16, false);
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) {
      this.cbs.ontext(data);
    }
  };
  Tokenizer2.prototype.getSection = function() {
    return this.buffer.substring(this.sectionStart, this._index);
  };
  Tokenizer2.prototype.emitToken = function(name) {
    this.cbs[name](this.getSection());
    this.sectionStart = -1;
  };
  Tokenizer2.prototype.emitPartial = function(value) {
    if (this.baseState !== 1) {
      this.cbs.onattribdata(value);
    } else {
      this.cbs.ontext(value);
    }
  };
  return Tokenizer2;
}();
Tokenizer$1.default = Tokenizer;
var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Parser$1, "__esModule", { value: true });
Parser$1.Parser = void 0;
var Tokenizer_1 = __importDefault$4(Tokenizer$1);
var formTags = new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]);
var pTag = new Set(["p"]);
var openImpliesClose = {
  tr: new Set(["tr", "th", "td"]),
  th: new Set(["th"]),
  td: new Set(["thead", "th", "td"]),
  body: new Set(["head", "link", "script"]),
  li: new Set(["li"]),
  p: pTag,
  h1: pTag,
  h2: pTag,
  h3: pTag,
  h4: pTag,
  h5: pTag,
  h6: pTag,
  select: formTags,
  input: formTags,
  output: formTags,
  button: formTags,
  datalist: formTags,
  textarea: formTags,
  option: new Set(["option"]),
  optgroup: new Set(["optgroup", "option"]),
  dd: new Set(["dt", "dd"]),
  dt: new Set(["dt", "dd"]),
  address: pTag,
  article: pTag,
  aside: pTag,
  blockquote: pTag,
  details: pTag,
  div: pTag,
  dl: pTag,
  fieldset: pTag,
  figcaption: pTag,
  figure: pTag,
  footer: pTag,
  form: pTag,
  header: pTag,
  hr: pTag,
  main: pTag,
  nav: pTag,
  ol: pTag,
  pre: pTag,
  section: pTag,
  table: pTag,
  ul: pTag,
  rt: new Set(["rt", "rp"]),
  rp: new Set(["rt", "rp"]),
  tbody: new Set(["thead", "tbody"]),
  tfoot: new Set(["thead", "tbody"])
};
var voidElements = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var reNameEnd = /\s|\//;
var Parser = function() {
  function Parser2(cbs, options) {
    if (options === void 0) {
      options = {};
    }
    var _a, _b, _c, _d, _e;
    this.startIndex = 0;
    this.endIndex = null;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.foreignContext = [];
    this.options = options;
    this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
    this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
    this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
    (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
  }
  Parser2.prototype.updatePosition = function(initialOffset) {
    if (this.endIndex === null) {
      if (this.tokenizer.sectionStart <= initialOffset) {
        this.startIndex = 0;
      } else {
        this.startIndex = this.tokenizer.sectionStart - initialOffset;
      }
    } else {
      this.startIndex = this.endIndex + 1;
    }
    this.endIndex = this.tokenizer.getAbsoluteIndex();
  };
  Parser2.prototype.ontext = function(data) {
    var _a, _b;
    this.updatePosition(1);
    this.endIndex--;
    (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
  };
  Parser2.prototype.onopentagname = function(name) {
    var _a, _b;
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    this.tagname = name;
    if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
      var el2 = void 0;
      while (this.stack.length > 0 && openImpliesClose[name].has(el2 = this.stack[this.stack.length - 1])) {
        this.onclosetag(el2);
      }
    }
    if (this.options.xmlMode || !voidElements.has(name)) {
      this.stack.push(name);
      if (foreignContextElements.has(name)) {
        this.foreignContext.push(true);
      } else if (htmlIntegrationElements.has(name)) {
        this.foreignContext.push(false);
      }
    }
    (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
    if (this.cbs.onopentag)
      this.attribs = {};
  };
  Parser2.prototype.onopentagend = function() {
    var _a, _b;
    this.updatePosition(1);
    if (this.attribs) {
      (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
      this.attribs = null;
    }
    if (!this.options.xmlMode && this.cbs.onclosetag && voidElements.has(this.tagname)) {
      this.cbs.onclosetag(this.tagname);
    }
    this.tagname = "";
  };
  Parser2.prototype.onclosetag = function(name) {
    this.updatePosition(1);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
      this.foreignContext.pop();
    }
    if (this.stack.length && (this.options.xmlMode || !voidElements.has(name))) {
      var pos = this.stack.lastIndexOf(name);
      if (pos !== -1) {
        if (this.cbs.onclosetag) {
          pos = this.stack.length - pos;
          while (pos--) {
            this.cbs.onclosetag(this.stack.pop());
          }
        } else
          this.stack.length = pos;
      } else if (name === "p" && !this.options.xmlMode) {
        this.onopentagname(name);
        this.closeCurrentTag();
      }
    } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
      this.onopentagname(name);
      this.closeCurrentTag();
    }
  };
  Parser2.prototype.onselfclosingtag = function() {
    if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
      this.closeCurrentTag();
    } else {
      this.onopentagend();
    }
  };
  Parser2.prototype.closeCurrentTag = function() {
    var _a, _b;
    var name = this.tagname;
    this.onopentagend();
    if (this.stack[this.stack.length - 1] === name) {
      (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
      this.stack.pop();
    }
  };
  Parser2.prototype.onattribname = function(name) {
    if (this.lowerCaseAttributeNames) {
      name = name.toLowerCase();
    }
    this.attribname = name;
  };
  Parser2.prototype.onattribdata = function(value) {
    this.attribvalue += value;
  };
  Parser2.prototype.onattribend = function(quote) {
    var _a, _b;
    (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribname = "";
    this.attribvalue = "";
  };
  Parser2.prototype.getInstructionName = function(value) {
    var idx = value.search(reNameEnd);
    var name = idx < 0 ? value : value.substr(0, idx);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    return name;
  };
  Parser2.prototype.ondeclaration = function(value) {
    if (this.cbs.onprocessinginstruction) {
      var name_1 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
    }
  };
  Parser2.prototype.onprocessinginstruction = function(value) {
    if (this.cbs.onprocessinginstruction) {
      var name_2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
    }
  };
  Parser2.prototype.oncomment = function(value) {
    var _a, _b, _c, _d;
    this.updatePosition(4);
    (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
  };
  Parser2.prototype.oncdata = function(value) {
    var _a, _b, _c, _d, _e, _f;
    this.updatePosition(1);
    if (this.options.xmlMode || this.options.recognizeCDATA) {
      (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
      (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
    } else {
      this.oncomment("[CDATA[" + value + "]]");
    }
  };
  Parser2.prototype.onerror = function(err) {
    var _a, _b;
    (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  Parser2.prototype.onend = function() {
    var _a, _b;
    if (this.cbs.onclosetag) {
      for (var i2 = this.stack.length; i2 > 0; this.cbs.onclosetag(this.stack[--i2]))
        ;
    }
    (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  Parser2.prototype.reset = function() {
    var _a, _b, _c, _d;
    (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack = [];
    (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
  };
  Parser2.prototype.parseComplete = function(data) {
    this.reset();
    this.end(data);
  };
  Parser2.prototype.write = function(chunk) {
    this.tokenizer.write(chunk);
  };
  Parser2.prototype.end = function(chunk) {
    this.tokenizer.end(chunk);
  };
  Parser2.prototype.pause = function() {
    this.tokenizer.pause();
  };
  Parser2.prototype.resume = function() {
    this.tokenizer.resume();
  };
  Parser2.prototype.parseChunk = function(chunk) {
    this.write(chunk);
  };
  Parser2.prototype.done = function(chunk) {
    this.end(chunk);
  };
  return Parser2;
}();
Parser$1.Parser = Parser;
var lib$4 = {};
var lib$3 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
  var ElementType2;
  (function(ElementType3) {
    ElementType3["Root"] = "root";
    ElementType3["Text"] = "text";
    ElementType3["Directive"] = "directive";
    ElementType3["Comment"] = "comment";
    ElementType3["Script"] = "script";
    ElementType3["Style"] = "style";
    ElementType3["Tag"] = "tag";
    ElementType3["CDATA"] = "cdata";
    ElementType3["Doctype"] = "doctype";
  })(ElementType2 = exports.ElementType || (exports.ElementType = {}));
  function isTag2(elem) {
    return elem.type === ElementType2.Tag || elem.type === ElementType2.Script || elem.type === ElementType2.Style;
  }
  exports.isTag = isTag2;
  exports.Root = ElementType2.Root;
  exports.Text = ElementType2.Text;
  exports.Directive = ElementType2.Directive;
  exports.Comment = ElementType2.Comment;
  exports.Script = ElementType2.Script;
  exports.Style = ElementType2.Style;
  exports.Tag = ElementType2.Tag;
  exports.CDATA = ElementType2.CDATA;
  exports.Doctype = ElementType2.Doctype;
})(lib$3);
var node = {};
var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d2, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
      d3.__proto__ = b2;
    } || function(d3, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d3[p2] = b2[p2];
    };
    return extendStatics(d2, b);
  };
  return function(d2, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d2, b);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign$1 = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
Object.defineProperty(node, "__esModule", { value: true });
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1$1 = lib$3;
var nodeTypes = new Map([
  [domelementtype_1$1.ElementType.Tag, 1],
  [domelementtype_1$1.ElementType.Script, 1],
  [domelementtype_1$1.ElementType.Style, 1],
  [domelementtype_1$1.ElementType.Directive, 1],
  [domelementtype_1$1.ElementType.Text, 3],
  [domelementtype_1$1.ElementType.CDATA, 4],
  [domelementtype_1$1.ElementType.Comment, 8],
  [domelementtype_1$1.ElementType.Root, 9]
]);
var Node$1 = function() {
  function Node2(type) {
    this.type = type;
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  Object.defineProperty(Node2.prototype, "nodeType", {
    get: function() {
      var _a;
      return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "parentNode", {
    get: function() {
      return this.parent;
    },
    set: function(parent) {
      this.parent = parent;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "previousSibling", {
    get: function() {
      return this.prev;
    },
    set: function(prev) {
      this.prev = prev;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "nextSibling", {
    get: function() {
      return this.next;
    },
    set: function(next) {
      this.next = next;
    },
    enumerable: false,
    configurable: true
  });
  Node2.prototype.cloneNode = function(recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    return cloneNode(this, recursive);
  };
  return Node2;
}();
node.Node = Node$1;
var DataNode = function(_super) {
  __extends$1(DataNode2, _super);
  function DataNode2(type, data) {
    var _this = _super.call(this, type) || this;
    _this.data = data;
    return _this;
  }
  Object.defineProperty(DataNode2.prototype, "nodeValue", {
    get: function() {
      return this.data;
    },
    set: function(data) {
      this.data = data;
    },
    enumerable: false,
    configurable: true
  });
  return DataNode2;
}(Node$1);
node.DataNode = DataNode;
var Text = function(_super) {
  __extends$1(Text2, _super);
  function Text2(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Text, data) || this;
  }
  return Text2;
}(DataNode);
node.Text = Text;
var Comment = function(_super) {
  __extends$1(Comment2, _super);
  function Comment2(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Comment, data) || this;
  }
  return Comment2;
}(DataNode);
node.Comment = Comment;
var ProcessingInstruction = function(_super) {
  __extends$1(ProcessingInstruction2, _super);
  function ProcessingInstruction2(name, data) {
    var _this = _super.call(this, domelementtype_1$1.ElementType.Directive, data) || this;
    _this.name = name;
    return _this;
  }
  return ProcessingInstruction2;
}(DataNode);
node.ProcessingInstruction = ProcessingInstruction;
var NodeWithChildren = function(_super) {
  __extends$1(NodeWithChildren2, _super);
  function NodeWithChildren2(type, children) {
    var _this = _super.call(this, type) || this;
    _this.children = children;
    return _this;
  }
  Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
    get: function() {
      var _a;
      return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
    get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
    get: function() {
      return this.children;
    },
    set: function(children) {
      this.children = children;
    },
    enumerable: false,
    configurable: true
  });
  return NodeWithChildren2;
}(Node$1);
node.NodeWithChildren = NodeWithChildren;
var Document = function(_super) {
  __extends$1(Document2, _super);
  function Document2(children) {
    return _super.call(this, domelementtype_1$1.ElementType.Root, children) || this;
  }
  return Document2;
}(NodeWithChildren);
node.Document = Document;
var Element$1 = function(_super) {
  __extends$1(Element2, _super);
  function Element2(name, attribs, children, type) {
    if (children === void 0) {
      children = [];
    }
    if (type === void 0) {
      type = name === "script" ? domelementtype_1$1.ElementType.Script : name === "style" ? domelementtype_1$1.ElementType.Style : domelementtype_1$1.ElementType.Tag;
    }
    var _this = _super.call(this, type, children) || this;
    _this.name = name;
    _this.attribs = attribs;
    return _this;
  }
  Object.defineProperty(Element2.prototype, "tagName", {
    get: function() {
      return this.name;
    },
    set: function(name) {
      this.name = name;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Element2.prototype, "attributes", {
    get: function() {
      var _this = this;
      return Object.keys(this.attribs).map(function(name) {
        var _a, _b;
        return {
          name,
          value: _this.attribs[name],
          namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
          prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
        };
      });
    },
    enumerable: false,
    configurable: true
  });
  return Element2;
}(NodeWithChildren);
node.Element = Element$1;
function isTag(node2) {
  return (0, domelementtype_1$1.isTag)(node2);
}
node.isTag = isTag;
function isCDATA(node2) {
  return node2.type === domelementtype_1$1.ElementType.CDATA;
}
node.isCDATA = isCDATA;
function isText(node2) {
  return node2.type === domelementtype_1$1.ElementType.Text;
}
node.isText = isText;
function isComment(node2) {
  return node2.type === domelementtype_1$1.ElementType.Comment;
}
node.isComment = isComment;
function isDirective(node2) {
  return node2.type === domelementtype_1$1.ElementType.Directive;
}
node.isDirective = isDirective;
function isDocument(node2) {
  return node2.type === domelementtype_1$1.ElementType.Root;
}
node.isDocument = isDocument;
function hasChildren(node2) {
  return Object.prototype.hasOwnProperty.call(node2, "children");
}
node.hasChildren = hasChildren;
function cloneNode(node2, recursive) {
  if (recursive === void 0) {
    recursive = false;
  }
  var result;
  if (isText(node2)) {
    result = new Text(node2.data);
  } else if (isComment(node2)) {
    result = new Comment(node2.data);
  } else if (isTag(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_1 = new Element$1(node2.name, __assign$1({}, node2.attribs), children);
    children.forEach(function(child) {
      return child.parent = clone_1;
    });
    if (node2.namespace != null) {
      clone_1.namespace = node2.namespace;
    }
    if (node2["x-attribsNamespace"]) {
      clone_1["x-attribsNamespace"] = __assign$1({}, node2["x-attribsNamespace"]);
    }
    if (node2["x-attribsPrefix"]) {
      clone_1["x-attribsPrefix"] = __assign$1({}, node2["x-attribsPrefix"]);
    }
    result = clone_1;
  } else if (isCDATA(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_2 = new NodeWithChildren(domelementtype_1$1.ElementType.CDATA, children);
    children.forEach(function(child) {
      return child.parent = clone_2;
    });
    result = clone_2;
  } else if (isDocument(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_3 = new Document(children);
    children.forEach(function(child) {
      return child.parent = clone_3;
    });
    if (node2["x-mode"]) {
      clone_3["x-mode"] = node2["x-mode"];
    }
    result = clone_3;
  } else if (isDirective(node2)) {
    var instruction = new ProcessingInstruction(node2.name, node2.data);
    if (node2["x-name"] != null) {
      instruction["x-name"] = node2["x-name"];
      instruction["x-publicId"] = node2["x-publicId"];
      instruction["x-systemId"] = node2["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error("Not implemented yet: ".concat(node2.type));
  }
  result.startIndex = node2.startIndex;
  result.endIndex = node2.endIndex;
  if (node2.sourceCodeLocation != null) {
    result.sourceCodeLocation = node2.sourceCodeLocation;
  }
  return result;
}
node.cloneNode = cloneNode;
function cloneChildren(childs) {
  var children = childs.map(function(child) {
    return cloneNode(child, true);
  });
  for (var i2 = 1; i2 < children.length; i2++) {
    children[i2].prev = children[i2 - 1];
    children[i2 - 1].next = children[i2];
  }
  return children;
}
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o2, k22, { enumerable: true, get: function() {
      return m[k2];
    } });
  } : function(o2, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o2[k22] = m[k2];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p2 in m)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding2(exports2, m, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DomHandler = void 0;
  var domelementtype_12 = lib$3;
  var node_1 = node;
  __exportStar(node, exports);
  var reWhitespace = /\s+/g;
  var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
  };
  var DomHandler = function() {
    function DomHandler2(callback, options, elementCB) {
      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }
      if (typeof callback === "object") {
        options = callback;
        callback = void 0;
      }
      this.callback = callback !== null && callback !== void 0 ? callback : null;
      this.options = options !== null && options !== void 0 ? options : defaultOpts;
      this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler2.prototype.onparserinit = function(parser) {
      this.parser = parser;
    };
    DomHandler2.prototype.onreset = function() {
      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    };
    DomHandler2.prototype.onend = function() {
      if (this.done)
        return;
      this.done = true;
      this.parser = null;
      this.handleCallback(null);
    };
    DomHandler2.prototype.onerror = function(error) {
      this.handleCallback(error);
    };
    DomHandler2.prototype.onclosetag = function() {
      this.lastNode = null;
      var elem = this.tagStack.pop();
      if (this.options.withEndIndices) {
        elem.endIndex = this.parser.endIndex;
      }
      if (this.elementCB)
        this.elementCB(elem);
    };
    DomHandler2.prototype.onopentag = function(name, attribs) {
      var type = this.options.xmlMode ? domelementtype_12.ElementType.Tag : void 0;
      var element = new node_1.Element(name, attribs, void 0, type);
      this.addNode(element);
      this.tagStack.push(element);
    };
    DomHandler2.prototype.ontext = function(data) {
      var normalizeWhitespace = this.options.normalizeWhitespace;
      var lastNode = this.lastNode;
      if (lastNode && lastNode.type === domelementtype_12.ElementType.Text) {
        if (normalizeWhitespace) {
          lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
        } else {
          lastNode.data += data;
        }
        if (this.options.withEndIndices) {
          lastNode.endIndex = this.parser.endIndex;
        }
      } else {
        if (normalizeWhitespace) {
          data = data.replace(reWhitespace, " ");
        }
        var node2 = new node_1.Text(data);
        this.addNode(node2);
        this.lastNode = node2;
      }
    };
    DomHandler2.prototype.oncomment = function(data) {
      if (this.lastNode && this.lastNode.type === domelementtype_12.ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }
      var node2 = new node_1.Comment(data);
      this.addNode(node2);
      this.lastNode = node2;
    };
    DomHandler2.prototype.oncommentend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.oncdatastart = function() {
      var text = new node_1.Text("");
      var node2 = new node_1.NodeWithChildren(domelementtype_12.ElementType.CDATA, [text]);
      this.addNode(node2);
      text.parent = node2;
      this.lastNode = text;
    };
    DomHandler2.prototype.oncdataend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.onprocessinginstruction = function(name, data) {
      var node2 = new node_1.ProcessingInstruction(name, data);
      this.addNode(node2);
    };
    DomHandler2.prototype.handleCallback = function(error) {
      if (typeof this.callback === "function") {
        this.callback(error, this.dom);
      } else if (error) {
        throw error;
      }
    };
    DomHandler2.prototype.addNode = function(node2) {
      var parent = this.tagStack[this.tagStack.length - 1];
      var previousSibling = parent.children[parent.children.length - 1];
      if (this.options.withStartIndices) {
        node2.startIndex = this.parser.startIndex;
      }
      if (this.options.withEndIndices) {
        node2.endIndex = this.parser.endIndex;
      }
      parent.children.push(node2);
      if (previousSibling) {
        node2.prev = previousSibling;
        previousSibling.next = node2;
      }
      node2.parent = parent;
      this.lastNode = null;
    };
    return DomHandler2;
  }();
  exports.DomHandler = DomHandler;
  exports.default = DomHandler;
})(lib$4);
var FeedHandler$1 = {};
var lib$2 = {};
var stringify = {};
var lib$1 = {};
var lib = {};
var decode = {};
var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(decode, "__esModule", { value: true });
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
var entities_json_1$1 = __importDefault$3(require$$1$1);
var legacy_json_1 = __importDefault$3(require$$1);
var xml_json_1$1 = __importDefault$3(require$$0);
var decode_codepoint_1 = __importDefault$3(decode_codepoint);
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
function getStrictDecoder(map2) {
  var replace = getReplacer(map2);
  return function(str) {
    return String(str).replace(strictEntityRe, replace);
  };
}
var sorter = function(a2, b) {
  return a2 < b ? 1 : -1;
};
decode.decodeHTML = function() {
  var legacy2 = Object.keys(legacy_json_1.default).sort(sorter);
  var keys = Object.keys(entities_json_1$1.default).sort(sorter);
  for (var i2 = 0, j = 0; i2 < keys.length; i2++) {
    if (legacy2[j] === keys[i2]) {
      keys[i2] += ";?";
      j++;
    } else {
      keys[i2] += ";";
    }
  }
  var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
  var replace = getReplacer(entities_json_1$1.default);
  function replacer(str) {
    if (str.substr(-1) !== ";")
      str += ";";
    return replace(str);
  }
  return function(str) {
    return String(str).replace(re, replacer);
  };
}();
function getReplacer(map2) {
  return function replace(str) {
    if (str.charAt(1) === "#") {
      var secondChar = str.charAt(2);
      if (secondChar === "X" || secondChar === "x") {
        return decode_codepoint_1.default(parseInt(str.substr(3), 16));
      }
      return decode_codepoint_1.default(parseInt(str.substr(2), 10));
    }
    return map2[str.slice(1, -1)] || str;
  };
}
var encode = {};
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(encode, "__esModule", { value: true });
encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;
var xml_json_1 = __importDefault$2(require$$0);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
encode.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault$2(require$$1$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce(function(inverse, name) {
    inverse[obj[name]] = "&" + name + ";";
    return inverse;
  }, {});
}
function getInverseReplacer(inverse) {
  var single = [];
  var multiple = [];
  for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
    var k2 = _a[_i];
    if (k2.length === 1) {
      single.push("\\" + k2);
    } else {
      multiple.push(k2);
    }
  }
  single.sort();
  for (var start2 = 0; start2 < single.length - 1; start2++) {
    var end2 = start2;
    while (end2 < single.length - 1 && single[end2].charCodeAt(1) + 1 === single[end2 + 1].charCodeAt(1)) {
      end2 += 1;
    }
    var count = 1 + end2 - start2;
    if (count < 3)
      continue;
    single.splice(start2, count, single[start2] + "-" + single[end2]);
  }
  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = String.prototype.codePointAt != null ? function(str) {
  return str.codePointAt(0);
} : function(c2) {
  return (c2.charCodeAt(0) - 55296) * 1024 + c2.charCodeAt(1) - 56320 + 65536;
};
function singleCharReplacer(c2) {
  return "&#x" + (c2.length > 1 ? getCodePoint(c2) : c2.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
  return function(data) {
    return data.replace(re, function(name) {
      return inverse[name];
    }).replace(reNonASCII, singleCharReplacer);
  };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
function escape(data) {
  return data.replace(reEscapeChars, singleCharReplacer);
}
encode.escape = escape;
function escapeUTF8(data) {
  return data.replace(xmlReplacer, singleCharReplacer);
}
encode.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
  return function(data) {
    return data.replace(reEscapeChars, function(c2) {
      return obj[c2] || singleCharReplacer(c2);
    });
  };
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
  var decode_1 = decode;
  var encode_1 = encode;
  function decode$1(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
  }
  exports.decode = decode$1;
  function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
  }
  exports.decodeStrict = decodeStrict;
  function encode$1(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
  }
  exports.encode = encode$1;
  var encode_2 = encode;
  Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
    return encode_2.encodeXML;
  } });
  Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
    return encode_2.encodeNonAsciiHTML;
  } });
  Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
    return encode_2.escape;
  } });
  Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
    return encode_2.escapeUTF8;
  } });
  Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  var decode_2 = decode;
  Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
  Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
})(lib);
var foreignNames = {};
Object.defineProperty(foreignNames, "__esModule", { value: true });
foreignNames.attributeNames = foreignNames.elementNames = void 0;
foreignNames.elementNames = new Map([
  ["altglyph", "altGlyph"],
  ["altglyphdef", "altGlyphDef"],
  ["altglyphitem", "altGlyphItem"],
  ["animatecolor", "animateColor"],
  ["animatemotion", "animateMotion"],
  ["animatetransform", "animateTransform"],
  ["clippath", "clipPath"],
  ["feblend", "feBlend"],
  ["fecolormatrix", "feColorMatrix"],
  ["fecomponenttransfer", "feComponentTransfer"],
  ["fecomposite", "feComposite"],
  ["feconvolvematrix", "feConvolveMatrix"],
  ["fediffuselighting", "feDiffuseLighting"],
  ["fedisplacementmap", "feDisplacementMap"],
  ["fedistantlight", "feDistantLight"],
  ["fedropshadow", "feDropShadow"],
  ["feflood", "feFlood"],
  ["fefunca", "feFuncA"],
  ["fefuncb", "feFuncB"],
  ["fefuncg", "feFuncG"],
  ["fefuncr", "feFuncR"],
  ["fegaussianblur", "feGaussianBlur"],
  ["feimage", "feImage"],
  ["femerge", "feMerge"],
  ["femergenode", "feMergeNode"],
  ["femorphology", "feMorphology"],
  ["feoffset", "feOffset"],
  ["fepointlight", "fePointLight"],
  ["fespecularlighting", "feSpecularLighting"],
  ["fespotlight", "feSpotLight"],
  ["fetile", "feTile"],
  ["feturbulence", "feTurbulence"],
  ["foreignobject", "foreignObject"],
  ["glyphref", "glyphRef"],
  ["lineargradient", "linearGradient"],
  ["radialgradient", "radialGradient"],
  ["textpath", "textPath"]
]);
foreignNames.attributeNames = new Map([
  ["definitionurl", "definitionURL"],
  ["attributename", "attributeName"],
  ["attributetype", "attributeType"],
  ["basefrequency", "baseFrequency"],
  ["baseprofile", "baseProfile"],
  ["calcmode", "calcMode"],
  ["clippathunits", "clipPathUnits"],
  ["diffuseconstant", "diffuseConstant"],
  ["edgemode", "edgeMode"],
  ["filterunits", "filterUnits"],
  ["glyphref", "glyphRef"],
  ["gradienttransform", "gradientTransform"],
  ["gradientunits", "gradientUnits"],
  ["kernelmatrix", "kernelMatrix"],
  ["kernelunitlength", "kernelUnitLength"],
  ["keypoints", "keyPoints"],
  ["keysplines", "keySplines"],
  ["keytimes", "keyTimes"],
  ["lengthadjust", "lengthAdjust"],
  ["limitingconeangle", "limitingConeAngle"],
  ["markerheight", "markerHeight"],
  ["markerunits", "markerUnits"],
  ["markerwidth", "markerWidth"],
  ["maskcontentunits", "maskContentUnits"],
  ["maskunits", "maskUnits"],
  ["numoctaves", "numOctaves"],
  ["pathlength", "pathLength"],
  ["patterncontentunits", "patternContentUnits"],
  ["patterntransform", "patternTransform"],
  ["patternunits", "patternUnits"],
  ["pointsatx", "pointsAtX"],
  ["pointsaty", "pointsAtY"],
  ["pointsatz", "pointsAtZ"],
  ["preservealpha", "preserveAlpha"],
  ["preserveaspectratio", "preserveAspectRatio"],
  ["primitiveunits", "primitiveUnits"],
  ["refx", "refX"],
  ["refy", "refY"],
  ["repeatcount", "repeatCount"],
  ["repeatdur", "repeatDur"],
  ["requiredextensions", "requiredExtensions"],
  ["requiredfeatures", "requiredFeatures"],
  ["specularconstant", "specularConstant"],
  ["specularexponent", "specularExponent"],
  ["spreadmethod", "spreadMethod"],
  ["startoffset", "startOffset"],
  ["stddeviation", "stdDeviation"],
  ["stitchtiles", "stitchTiles"],
  ["surfacescale", "surfaceScale"],
  ["systemlanguage", "systemLanguage"],
  ["tablevalues", "tableValues"],
  ["targetx", "targetX"],
  ["targety", "targetY"],
  ["textlength", "textLength"],
  ["viewbox", "viewBox"],
  ["viewtarget", "viewTarget"],
  ["xchannelselector", "xChannelSelector"],
  ["ychannelselector", "yChannelSelector"],
  ["zoomandpan", "zoomAndPan"]
]);
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  Object.defineProperty(o2, k22, { enumerable: true, get: function() {
    return m[k2];
  } });
} : function(o2, m, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o2[k22] = m[k2];
});
var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o2, v2) {
  Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
} : function(o2, v2) {
  o2["default"] = v2;
});
var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding$1(result, mod, k2);
  }
  __setModuleDefault$1(result, mod);
  return result;
};
Object.defineProperty(lib$1, "__esModule", { value: true });
var ElementType = __importStar$1(lib$3);
var entities_1 = lib;
var foreignNames_1 = foreignNames;
var unencodedElements = new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function formatAttributes(attributes, opts) {
  if (!attributes)
    return;
  return Object.keys(attributes).map(function(key) {
    var _a, _b;
    var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
  }).join(" ");
}
var singleTag = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render$z(node2, options) {
  if (options === void 0) {
    options = {};
  }
  var nodes = "length" in node2 ? node2 : [node2];
  var output = "";
  for (var i2 = 0; i2 < nodes.length; i2++) {
    output += renderNode(nodes[i2], options);
  }
  return output;
}
lib$1.default = render$z;
function renderNode(node2, options) {
  switch (node2.type) {
    case ElementType.Root:
      return render$z(node2.children, options);
    case ElementType.Directive:
    case ElementType.Doctype:
      return renderDirective(node2);
    case ElementType.Comment:
      return renderComment(node2);
    case ElementType.CDATA:
      return renderCdata(node2);
    case ElementType.Script:
    case ElementType.Style:
    case ElementType.Tag:
      return renderTag(node2, options);
    case ElementType.Text:
      return renderText(node2, options);
  }
}
var foreignModeIntegrationPoints = new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = __assign(__assign({}, opts), { xmlMode: false });
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
  }
  var tag = "<" + elem.name;
  var attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += " " + attribs;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render$z(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += "</" + elem.name + ">";
    }
  }
  return tag;
}
function renderDirective(elem) {
  return "<" + elem.data + ">";
}
function renderText(elem, opts) {
  var data = elem.data || "";
  if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = entities_1.encodeXML(data);
  }
  return data;
}
function renderCdata(elem) {
  return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
  return "<!--" + elem.data + "-->";
}
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(stringify, "__esModule", { value: true });
stringify.innerText = stringify.textContent = stringify.getText = stringify.getInnerHTML = stringify.getOuterHTML = void 0;
var domhandler_1$5 = lib$4;
var dom_serializer_1 = __importDefault$1(lib$1);
var domelementtype_1 = lib$3;
function getOuterHTML(node2, options) {
  return (0, dom_serializer_1.default)(node2, options);
}
stringify.getOuterHTML = getOuterHTML;
function getInnerHTML(node2, options) {
  return (0, domhandler_1$5.hasChildren)(node2) ? node2.children.map(function(node3) {
    return getOuterHTML(node3, options);
  }).join("") : "";
}
stringify.getInnerHTML = getInnerHTML;
function getText(node2) {
  if (Array.isArray(node2))
    return node2.map(getText).join("");
  if ((0, domhandler_1$5.isTag)(node2))
    return node2.name === "br" ? "\n" : getText(node2.children);
  if ((0, domhandler_1$5.isCDATA)(node2))
    return getText(node2.children);
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify.getText = getText;
function textContent(node2) {
  if (Array.isArray(node2))
    return node2.map(textContent).join("");
  if ((0, domhandler_1$5.hasChildren)(node2) && !(0, domhandler_1$5.isComment)(node2)) {
    return textContent(node2.children);
  }
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify.textContent = textContent;
function innerText(node2) {
  if (Array.isArray(node2))
    return node2.map(innerText).join("");
  if ((0, domhandler_1$5.hasChildren)(node2) && (node2.type === domelementtype_1.ElementType.Tag || (0, domhandler_1$5.isCDATA)(node2))) {
    return innerText(node2.children);
  }
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify.innerText = innerText;
var traversal = {};
Object.defineProperty(traversal, "__esModule", { value: true });
traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
var domhandler_1$4 = lib$4;
var emptyArray = [];
function getChildren(elem) {
  var _a;
  return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
traversal.getChildren = getChildren;
function getParent(elem) {
  return elem.parent || null;
}
traversal.getParent = getParent;
function getSiblings(elem) {
  var _a, _b;
  var parent = getParent(elem);
  if (parent != null)
    return getChildren(parent);
  var siblings = [elem];
  var prev = elem.prev, next = elem.next;
  while (prev != null) {
    siblings.unshift(prev);
    _a = prev, prev = _a.prev;
  }
  while (next != null) {
    siblings.push(next);
    _b = next, next = _b.next;
  }
  return siblings;
}
traversal.getSiblings = getSiblings;
function getAttributeValue(elem, name) {
  var _a;
  return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
traversal.getAttributeValue = getAttributeValue;
function hasAttrib(elem, name) {
  return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
traversal.hasAttrib = hasAttrib;
function getName(elem) {
  return elem.name;
}
traversal.getName = getName;
function nextElementSibling(elem) {
  var _a;
  var next = elem.next;
  while (next !== null && !(0, domhandler_1$4.isTag)(next))
    _a = next, next = _a.next;
  return next;
}
traversal.nextElementSibling = nextElementSibling;
function prevElementSibling(elem) {
  var _a;
  var prev = elem.prev;
  while (prev !== null && !(0, domhandler_1$4.isTag)(prev))
    _a = prev, prev = _a.prev;
  return prev;
}
traversal.prevElementSibling = prevElementSibling;
var manipulation = {};
Object.defineProperty(manipulation, "__esModule", { value: true });
manipulation.prepend = manipulation.prependChild = manipulation.append = manipulation.appendChild = manipulation.replaceElement = manipulation.removeElement = void 0;
function removeElement(elem) {
  if (elem.prev)
    elem.prev.next = elem.next;
  if (elem.next)
    elem.next.prev = elem.prev;
  if (elem.parent) {
    var childs = elem.parent.children;
    childs.splice(childs.lastIndexOf(elem), 1);
  }
}
manipulation.removeElement = removeElement;
function replaceElement(elem, replacement) {
  var prev = replacement.prev = elem.prev;
  if (prev) {
    prev.next = replacement;
  }
  var next = replacement.next = elem.next;
  if (next) {
    next.prev = replacement;
  }
  var parent = replacement.parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs[childs.lastIndexOf(elem)] = replacement;
  }
}
manipulation.replaceElement = replaceElement;
function appendChild(elem, child) {
  removeElement(child);
  child.next = null;
  child.parent = elem;
  if (elem.children.push(child) > 1) {
    var sibling = elem.children[elem.children.length - 2];
    sibling.next = child;
    child.prev = sibling;
  } else {
    child.prev = null;
  }
}
manipulation.appendChild = appendChild;
function append(elem, next) {
  removeElement(next);
  var parent = elem.parent;
  var currNext = elem.next;
  next.next = currNext;
  next.prev = elem;
  elem.next = next;
  next.parent = parent;
  if (currNext) {
    currNext.prev = next;
    if (parent) {
      var childs = parent.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next);
    }
  } else if (parent) {
    parent.children.push(next);
  }
}
manipulation.append = append;
function prependChild(elem, child) {
  removeElement(child);
  child.parent = elem;
  child.prev = null;
  if (elem.children.unshift(child) !== 1) {
    var sibling = elem.children[1];
    sibling.prev = child;
    child.next = sibling;
  } else {
    child.next = null;
  }
}
manipulation.prependChild = prependChild;
function prepend(elem, prev) {
  removeElement(prev);
  var parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs.splice(childs.indexOf(elem), 0, prev);
  }
  if (elem.prev) {
    elem.prev.next = prev;
  }
  prev.parent = parent;
  prev.prev = elem.prev;
  prev.next = elem;
  elem.prev = prev;
}
manipulation.prepend = prepend;
var querying = {};
Object.defineProperty(querying, "__esModule", { value: true });
querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
var domhandler_1$3 = lib$4;
function filter(test, node2, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  if (!Array.isArray(node2))
    node2 = [node2];
  return find(test, node2, recurse, limit);
}
querying.filter = filter;
function find(test, nodes, recurse, limit) {
  var result = [];
  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var elem = nodes_1[_i];
    if (test(elem)) {
      result.push(elem);
      if (--limit <= 0)
        break;
    }
    if (recurse && (0, domhandler_1$3.hasChildren)(elem) && elem.children.length > 0) {
      var children = find(test, elem.children, recurse, limit);
      result.push.apply(result, children);
      limit -= children.length;
      if (limit <= 0)
        break;
    }
  }
  return result;
}
querying.find = find;
function findOneChild(test, nodes) {
  return nodes.find(test);
}
querying.findOneChild = findOneChild;
function findOne(test, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }
  var elem = null;
  for (var i2 = 0; i2 < nodes.length && !elem; i2++) {
    var checked = nodes[i2];
    if (!(0, domhandler_1$3.isTag)(checked)) {
      continue;
    } else if (test(checked)) {
      elem = checked;
    } else if (recurse && checked.children.length > 0) {
      elem = findOne(test, checked.children);
    }
  }
  return elem;
}
querying.findOne = findOne;
function existsOne(test, nodes) {
  return nodes.some(function(checked) {
    return (0, domhandler_1$3.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
  });
}
querying.existsOne = existsOne;
function findAll(test, nodes) {
  var _a;
  var result = [];
  var stack = nodes.filter(domhandler_1$3.isTag);
  var elem;
  while (elem = stack.shift()) {
    var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1$3.isTag);
    if (children && children.length > 0) {
      stack.unshift.apply(stack, children);
    }
    if (test(elem))
      result.push(elem);
  }
  return result;
}
querying.findAll = findAll;
var legacy = {};
Object.defineProperty(legacy, "__esModule", { value: true });
legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
var domhandler_1$2 = lib$4;
var querying_1 = querying;
var Checks = {
  tag_name: function(name) {
    if (typeof name === "function") {
      return function(elem) {
        return (0, domhandler_1$2.isTag)(elem) && name(elem.name);
      };
    } else if (name === "*") {
      return domhandler_1$2.isTag;
    }
    return function(elem) {
      return (0, domhandler_1$2.isTag)(elem) && elem.name === name;
    };
  },
  tag_type: function(type) {
    if (typeof type === "function") {
      return function(elem) {
        return type(elem.type);
      };
    }
    return function(elem) {
      return elem.type === type;
    };
  },
  tag_contains: function(data) {
    if (typeof data === "function") {
      return function(elem) {
        return (0, domhandler_1$2.isText)(elem) && data(elem.data);
      };
    }
    return function(elem) {
      return (0, domhandler_1$2.isText)(elem) && elem.data === data;
    };
  }
};
function getAttribCheck(attrib, value) {
  if (typeof value === "function") {
    return function(elem) {
      return (0, domhandler_1$2.isTag)(elem) && value(elem.attribs[attrib]);
    };
  }
  return function(elem) {
    return (0, domhandler_1$2.isTag)(elem) && elem.attribs[attrib] === value;
  };
}
function combineFuncs(a2, b) {
  return function(elem) {
    return a2(elem) || b(elem);
  };
}
function compileTest(options) {
  var funcs = Object.keys(options).map(function(key) {
    var value = options[key];
    return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
  });
  return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node2) {
  var test = compileTest(options);
  return test ? test(node2) : true;
}
legacy.testElement = testElement;
function getElements$1(options, nodes, recurse, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }
  var test = compileTest(options);
  return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
}
legacy.getElements = getElements$1;
function getElementById(id, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (!Array.isArray(nodes))
    nodes = [nodes];
  return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
legacy.getElementById = getElementById;
function getElementsByTagName(tagName, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
legacy.getElementsByTagName = getElementsByTagName;
function getElementsByTagType(type, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
legacy.getElementsByTagType = getElementsByTagType;
var helpers = {};
Object.defineProperty(helpers, "__esModule", { value: true });
helpers.uniqueSort = helpers.compareDocumentPosition = helpers.removeSubsets = void 0;
var domhandler_1$1 = lib$4;
function removeSubsets(nodes) {
  var idx = nodes.length;
  while (--idx >= 0) {
    var node2 = nodes[idx];
    if (idx > 0 && nodes.lastIndexOf(node2, idx - 1) >= 0) {
      nodes.splice(idx, 1);
      continue;
    }
    for (var ancestor = node2.parent; ancestor; ancestor = ancestor.parent) {
      if (nodes.includes(ancestor)) {
        nodes.splice(idx, 1);
        break;
      }
    }
  }
  return nodes;
}
helpers.removeSubsets = removeSubsets;
function compareDocumentPosition(nodeA, nodeB) {
  var aParents = [];
  var bParents = [];
  if (nodeA === nodeB) {
    return 0;
  }
  var current = (0, domhandler_1$1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }
  current = (0, domhandler_1$1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }
  var maxIdx = Math.min(aParents.length, bParents.length);
  var idx = 0;
  while (idx < maxIdx && aParents[idx] === bParents[idx]) {
    idx++;
  }
  if (idx === 0) {
    return 1;
  }
  var sharedParent = aParents[idx - 1];
  var siblings = sharedParent.children;
  var aSibling = aParents[idx];
  var bSibling = bParents[idx];
  if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return 4 | 16;
    }
    return 4;
  }
  if (sharedParent === nodeA) {
    return 2 | 8;
  }
  return 2;
}
helpers.compareDocumentPosition = compareDocumentPosition;
function uniqueSort(nodes) {
  nodes = nodes.filter(function(node2, i2, arr) {
    return !arr.includes(node2, i2 + 1);
  });
  nodes.sort(function(a2, b) {
    var relative = compareDocumentPosition(a2, b);
    if (relative & 2) {
      return -1;
    } else if (relative & 4) {
      return 1;
    }
    return 0;
  });
  return nodes;
}
helpers.uniqueSort = uniqueSort;
var feeds = {};
Object.defineProperty(feeds, "__esModule", { value: true });
feeds.getFeed = void 0;
var stringify_1 = stringify;
var legacy_1 = legacy;
function getFeed(doc) {
  var feedRoot = getOneElement$1(isValidFeed$1, doc);
  return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
feeds.getFeed = getFeed;
function getAtomFeed(feedRoot) {
  var _a;
  var childs = feedRoot.children;
  var feed = {
    type: "atom",
    items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
      var _a2;
      var children = item.children;
      var entry = { media: getMediaElements$1(children) };
      addConditionally$1(entry, "id", "id", children);
      addConditionally$1(entry, "title", "title", children);
      var href2 = (_a2 = getOneElement$1("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs.href;
      if (href2) {
        entry.link = href2;
      }
      var description = fetch$2("summary", children) || fetch$2("content", children);
      if (description) {
        entry.description = description;
      }
      var pubDate = fetch$2("updated", children);
      if (pubDate) {
        entry.pubDate = new Date(pubDate);
      }
      return entry;
    })
  };
  addConditionally$1(feed, "id", "id", childs);
  addConditionally$1(feed, "title", "title", childs);
  var href = (_a = getOneElement$1("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
  if (href) {
    feed.link = href;
  }
  addConditionally$1(feed, "description", "subtitle", childs);
  var updated = fetch$2("updated", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally$1(feed, "author", "email", childs, true);
  return feed;
}
function getRssFeed(feedRoot) {
  var _a, _b;
  var childs = (_b = (_a = getOneElement$1("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
  var feed = {
    type: feedRoot.name.substr(0, 3),
    id: "",
    items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
      var children = item.children;
      var entry = { media: getMediaElements$1(children) };
      addConditionally$1(entry, "id", "guid", children);
      addConditionally$1(entry, "title", "title", children);
      addConditionally$1(entry, "link", "link", children);
      addConditionally$1(entry, "description", "description", children);
      var pubDate = fetch$2("pubDate", children);
      if (pubDate)
        entry.pubDate = new Date(pubDate);
      return entry;
    })
  };
  addConditionally$1(feed, "title", "title", childs);
  addConditionally$1(feed, "link", "link", childs);
  addConditionally$1(feed, "description", "description", childs);
  var updated = fetch$2("lastBuildDate", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally$1(feed, "author", "managingEditor", childs, true);
  return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function getMediaElements$1(where) {
  return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
    var attribs = elem.attribs;
    var media = {
      medium: attribs.medium,
      isDefault: !!attribs.isDefault
    };
    for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
      var attrib = MEDIA_KEYS_STRING_1[_i];
      if (attribs[attrib]) {
        media[attrib] = attribs[attrib];
      }
    }
    for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
      var attrib = MEDIA_KEYS_INT_1[_a];
      if (attribs[attrib]) {
        media[attrib] = parseInt(attribs[attrib], 10);
      }
    }
    if (attribs.expression) {
      media.expression = attribs.expression;
    }
    return media;
  });
}
function getOneElement$1(tagName, node2) {
  return (0, legacy_1.getElementsByTagName)(tagName, node2, true, 1)[0];
}
function fetch$2(tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
function addConditionally$1(obj, prop2, tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  var val = fetch$2(tagName, where, recurse);
  if (val)
    obj[prop2] = val;
}
function isValidFeed$1(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o2, k22, { enumerable: true, get: function() {
      return m[k2];
    } });
  } : function(o2, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o2[k22] = m[k2];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p2 in m)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding2(exports2, m, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
  __exportStar(stringify, exports);
  __exportStar(traversal, exports);
  __exportStar(manipulation, exports);
  __exportStar(querying, exports);
  __exportStar(legacy, exports);
  __exportStar(helpers, exports);
  __exportStar(feeds, exports);
  var domhandler_12 = lib$4;
  Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
    return domhandler_12.isTag;
  } });
  Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
    return domhandler_12.isCDATA;
  } });
  Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
    return domhandler_12.isText;
  } });
  Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
    return domhandler_12.isComment;
  } });
  Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
    return domhandler_12.isDocument;
  } });
  Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
    return domhandler_12.hasChildren;
  } });
})(lib$2);
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d2, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
      d3.__proto__ = b2;
    } || function(d3, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d3[p2] = b2[p2];
    };
    return extendStatics(d2, b);
  };
  return function(d2, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d2, b);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  Object.defineProperty(o2, k22, { enumerable: true, get: function() {
    return m[k2];
  } });
} : function(o2, m, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o2[k22] = m[k2];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o2, v2) {
  Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
} : function(o2, v2) {
  o2["default"] = v2;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding(result, mod, k2);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(FeedHandler$1, "__esModule", { value: true });
FeedHandler$1.parseFeed = FeedHandler$1.FeedHandler = void 0;
var domhandler_1 = __importDefault(lib$4);
var DomUtils = __importStar(lib$2);
var Parser_1 = Parser$1;
var FeedItemMediaMedium;
(function(FeedItemMediaMedium2) {
  FeedItemMediaMedium2[FeedItemMediaMedium2["image"] = 0] = "image";
  FeedItemMediaMedium2[FeedItemMediaMedium2["audio"] = 1] = "audio";
  FeedItemMediaMedium2[FeedItemMediaMedium2["video"] = 2] = "video";
  FeedItemMediaMedium2[FeedItemMediaMedium2["document"] = 3] = "document";
  FeedItemMediaMedium2[FeedItemMediaMedium2["executable"] = 4] = "executable";
})(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
var FeedItemMediaExpression;
(function(FeedItemMediaExpression2) {
  FeedItemMediaExpression2[FeedItemMediaExpression2["sample"] = 0] = "sample";
  FeedItemMediaExpression2[FeedItemMediaExpression2["full"] = 1] = "full";
  FeedItemMediaExpression2[FeedItemMediaExpression2["nonstop"] = 2] = "nonstop";
})(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
var FeedHandler = function(_super) {
  __extends(FeedHandler2, _super);
  function FeedHandler2(callback, options) {
    var _this = this;
    if (typeof callback === "object") {
      callback = void 0;
      options = callback;
    }
    _this = _super.call(this, callback, options) || this;
    return _this;
  }
  FeedHandler2.prototype.onend = function() {
    var _a, _b;
    var feedRoot = getOneElement(isValidFeed, this.dom);
    if (!feedRoot) {
      this.handleCallback(new Error("couldn't find root of feed"));
      return;
    }
    var feed = {};
    if (feedRoot.name === "feed") {
      var childs = feedRoot.children;
      feed.type = "atom";
      addConditionally(feed, "id", "id", childs);
      addConditionally(feed, "title", "title", childs);
      var href = getAttribute("href", getOneElement("link", childs));
      if (href) {
        feed.link = href;
      }
      addConditionally(feed, "description", "subtitle", childs);
      var updated = fetch$1("updated", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "email", childs, true);
      feed.items = getElements("entry", childs).map(function(item) {
        var entry = {};
        var children = item.children;
        addConditionally(entry, "id", "id", children);
        addConditionally(entry, "title", "title", children);
        var href2 = getAttribute("href", getOneElement("link", children));
        if (href2) {
          entry.link = href2;
        }
        var description = fetch$1("summary", children) || fetch$1("content", children);
        if (description) {
          entry.description = description;
        }
        var pubDate = fetch$1("updated", children);
        if (pubDate) {
          entry.pubDate = new Date(pubDate);
        }
        entry.media = getMediaElements(children);
        return entry;
      });
    } else {
      var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
      feed.type = feedRoot.name.substr(0, 3);
      feed.id = "";
      addConditionally(feed, "title", "title", childs);
      addConditionally(feed, "link", "link", childs);
      addConditionally(feed, "description", "description", childs);
      var updated = fetch$1("lastBuildDate", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "managingEditor", childs, true);
      feed.items = getElements("item", feedRoot.children).map(function(item) {
        var entry = {};
        var children = item.children;
        addConditionally(entry, "id", "guid", children);
        addConditionally(entry, "title", "title", children);
        addConditionally(entry, "link", "link", children);
        addConditionally(entry, "description", "description", children);
        var pubDate = fetch$1("pubDate", children);
        if (pubDate)
          entry.pubDate = new Date(pubDate);
        entry.media = getMediaElements(children);
        return entry;
      });
    }
    this.feed = feed;
    this.handleCallback(null);
  };
  return FeedHandler2;
}(domhandler_1.default);
FeedHandler$1.FeedHandler = FeedHandler;
function getMediaElements(where) {
  return getElements("media:content", where).map(function(elem) {
    var media = {
      medium: elem.attribs.medium,
      isDefault: !!elem.attribs.isDefault
    };
    if (elem.attribs.url) {
      media.url = elem.attribs.url;
    }
    if (elem.attribs.fileSize) {
      media.fileSize = parseInt(elem.attribs.fileSize, 10);
    }
    if (elem.attribs.type) {
      media.type = elem.attribs.type;
    }
    if (elem.attribs.expression) {
      media.expression = elem.attribs.expression;
    }
    if (elem.attribs.bitrate) {
      media.bitrate = parseInt(elem.attribs.bitrate, 10);
    }
    if (elem.attribs.framerate) {
      media.framerate = parseInt(elem.attribs.framerate, 10);
    }
    if (elem.attribs.samplingrate) {
      media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
    }
    if (elem.attribs.channels) {
      media.channels = parseInt(elem.attribs.channels, 10);
    }
    if (elem.attribs.duration) {
      media.duration = parseInt(elem.attribs.duration, 10);
    }
    if (elem.attribs.height) {
      media.height = parseInt(elem.attribs.height, 10);
    }
    if (elem.attribs.width) {
      media.width = parseInt(elem.attribs.width, 10);
    }
    if (elem.attribs.lang) {
      media.lang = elem.attribs.lang;
    }
    return media;
  });
}
function getElements(tagName, where) {
  return DomUtils.getElementsByTagName(tagName, where, true);
}
function getOneElement(tagName, node2) {
  return DomUtils.getElementsByTagName(tagName, node2, true, 1)[0];
}
function fetch$1(tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function getAttribute(name, elem) {
  if (!elem) {
    return null;
  }
  var attribs = elem.attribs;
  return attribs[name];
}
function addConditionally(obj, prop2, what, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  var tmp = fetch$1(what, where, recurse);
  if (tmp)
    obj[prop2] = tmp;
}
function isValidFeed(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}
function parseFeed(feed, options) {
  if (options === void 0) {
    options = { xmlMode: true };
  }
  var handler = new FeedHandler(options);
  new Parser_1.Parser(handler, options).end(feed);
  return handler.feed;
}
FeedHandler$1.parseFeed = parseFeed;
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o2, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o2, k22, { enumerable: true, get: function() {
      return m[k2];
    } });
  } : function(o2, m, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o2[k22] = m[k2];
  });
  var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o2, v2) {
    Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
  } : function(o2, v2) {
    o2["default"] = v2;
  });
  var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k2 in mod)
        if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
          __createBinding2(result, mod, k2);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p2 in m)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding2(exports2, m, p2);
  };
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
  var Parser_12 = Parser$1;
  Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
    return Parser_12.Parser;
  } });
  var domhandler_12 = lib$4;
  Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
    return domhandler_12.DomHandler;
  } });
  Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
    return domhandler_12.DomHandler;
  } });
  function parseDocument(data, options) {
    var handler = new domhandler_12.DomHandler(void 0, options);
    new Parser_12.Parser(handler, options).end(data);
    return handler.root;
  }
  exports.parseDocument = parseDocument;
  function parseDOM(data, options) {
    return parseDocument(data, options).children;
  }
  exports.parseDOM = parseDOM;
  function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_12.DomHandler(cb, options, elementCb);
    return new Parser_12.Parser(handler, options);
  }
  exports.createDomStream = createDomStream;
  var Tokenizer_12 = Tokenizer$1;
  Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
    return __importDefault2(Tokenizer_12).default;
  } });
  var ElementType2 = __importStar2(lib$3);
  exports.ElementType = ElementType2;
  __exportStar(FeedHandler$1, exports);
  exports.DomUtils = __importStar2(lib$2);
  var FeedHandler_1 = FeedHandler$1;
  Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function() {
    return FeedHandler_1.FeedHandler;
  } });
})(lib$5);
const _hoisted_1$u = ["innerHTML"];
function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    class: "sui-icon",
    innerHTML: _ctx.svgContent
  }, __spreadValues({ width: 0, height: 0 }, _ctx.svgAttrs), { style: _ctx.iconStyle }), null, 16, _hoisted_1$u);
}
var Icon_vue_vue_type_style_index_0_lang = "";
const PARSER_OPTIONS = {
  xmlMode: true,
  lowerCaseTags: false,
  decodeEntities: false,
  lowerCaseAttributeNames: false
};
const ICONS_SPRITE = { sprites: [require("./icons-sprite.svg")] };
const cacheMap = new Map();
const parsedDocuments = new Map();
const symbolsMap = new Map();
const _sfc_main$y = defineComponent({
  name: "Icon",
  props: {
    spriteUrl: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: null,
      validator: (url) => /(^https?:\/\/)|(^\/)/.test(url)
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const getColorValue = (color) => color.startsWith("--") ? `var(${color})` : color;
    const iconStyle = computed(() => __spreadValues({}, props.color && { "--icon-color": getColorValue(props.color) }));
    const { svgContent, svgAttrs, updateSvgContent, loadSprites } = useSvgController();
    const sprites = ICONS_SPRITE.sprites;
    const svgUrl = computed(() => props.url || props.spriteUrl);
    const allSpriteSymbolsStored = computed(() => sprites.every((sprite) => Array.from(symbolsMap.values()).includes(sprite)));
    watch([svgUrl, () => props.name], async () => {
      if (!allSpriteSymbolsStored.value) {
        await loadSprites(sprites);
      }
      const url = svgUrl.value || symbolsMap.get(props.name) || "";
      await updateSvgContent(url, props.name);
    }, { immediate: true });
    return { iconStyle, svgContent, svgAttrs };
  }
});
function useSvgController() {
  const svgContent = ref("");
  const svgAttrs = ref({});
  const retrieveResponseFromCacheStorage = async (svgUrl) => {
    const cache = await caches.open("sui-svg");
    let cacheRequest = await cache.match(svgUrl);
    if (!cacheRequest) {
      await cache.add(svgUrl);
      cacheRequest = await cache.match(svgUrl);
    }
    return cacheRequest ? await cacheRequest.text() : Promise.reject(new Error("SVG not found in the cache storage"));
  };
  const fetchSvg = async (svgUrl) => {
    if (!cacheMap.has(svgUrl)) {
      try {
        cacheMap.set(svgUrl, "caches" in window ? retrieveResponseFromCacheStorage(svgUrl) : fetch(svgUrl).then((r2) => r2.text()));
      } catch (e2) {
        cacheMap.delete(svgUrl);
      }
    }
    return cacheMap.has(svgUrl) ? await cacheMap.get(svgUrl) : Promise.reject(new Error("Error in fetching the SVG"));
  };
  const getDocumentChildrenFrom = (document2) => {
    var _a;
    const documentChildren = parsedDocuments.get(document2) || ((_a = lib$5.parseDocument(document2, PARSER_OPTIONS)) == null ? void 0 : _a.children);
    if (documentChildren && !parsedDocuments.has(document2)) {
      parsedDocuments.set(document2, documentChildren);
    }
    return documentChildren;
  };
  const findSvgTree = (documentChildren) => lib$5.DomUtils.findOneChild((child) => lib$5.DomUtils.isTag(child) && lib$5.DomUtils.getName(child) === "svg", documentChildren);
  const getSymbolIdsFrom = (svgTree) => {
    const symbols = lib$5.DomUtils.filter((child) => lib$5.DomUtils.isTag(child) && lib$5.DomUtils.getName(child) === "symbol", svgTree) || [];
    const symbolIds = symbols.map((symbol) => symbol.attribs.id);
    return symbolIds;
  };
  const extractSvgContentAndAttrs = (svg = "", symbolId = "") => {
    let content = "";
    let attrs = {};
    const documentChildren = getDocumentChildrenFrom(svg);
    const svgTree = findSvgTree(documentChildren);
    if (svgTree && lib$5.DomUtils.isTag(svgTree)) {
      const symbol = lib$5.DomUtils.findOneChild((child) => lib$5.DomUtils.getName(child) === "symbol" && lib$5.DomUtils.getAttributeValue(child, "id") === symbolId, svgTree.children);
      if (symbol && lib$5.DomUtils.isTag(symbol)) {
        content = lib$5.DomUtils.getInnerHTML(symbol);
        attrs = symbol.attribs;
      } else {
        content = lib$5.DomUtils.getInnerHTML(svgTree);
        attrs = svgTree.attribs;
      }
      if (attrs.viewBox) {
        const [, , width, height] = attrs.viewBox.split(" ");
        attrs = __spreadValues({ width, height }, attrs);
      }
    } else {
      console.error("Icon component cannot fetch SVG by provided URL");
    }
    return { content, attrs };
  };
  const updateSvgContent = async (newUrl, symbolId = "") => {
    if (!newUrl)
      return;
    const svg = await fetchSvg(newUrl);
    const { content, attrs } = extractSvgContentAndAttrs(svg, symbolId);
    svgContent.value = content;
    svgAttrs.value = attrs;
  };
  const loadSprites = async (sprites) => {
    for (const sprite of sprites) {
      const svg = await fetchSvg(sprite);
      const documentChildren = getDocumentChildrenFrom(svg);
      const svgTree = findSvgTree(documentChildren);
      if (svgTree && lib$5.DomUtils.isTag(svgTree)) {
        const symbolIds = getSymbolIdsFrom(svgTree);
        symbolIds.forEach((symbolId) => symbolsMap.set(symbolId, sprite));
      }
    }
  };
  return {
    svgContent,
    svgAttrs,
    updateSvgContent,
    loadSprites
  };
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", render$y]]);
const _hoisted_1$t = { class: "breadcrumbs" };
function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("nav", null, [
    createElementVNode("ul", _hoisted_1$t, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.crumbs, (crumb, i2) => {
        return openBlock(), createElementBlock("li", {
          class: normalizeClass(["crumb", { "last-child": _ctx.crumbs.length === i2 + 1 }]),
          key: i2
        }, [
          createVNode(_component_Icon, {
            class: "crumb-divider",
            name: "ic24-arrow-left"
          }),
          (openBlock(), createBlock(resolveDynamicComponent(!crumb.link || _ctx.crumbs.length === i2 + 1 ? "span" : "router-link"), {
            class: "crumb-link text-14px-medium",
            to: crumb.link
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(crumb.label), 1)
            ]),
            _: 2
          }, 1032, ["to"]))
        ], 2);
      }), 128))
    ])
  ]);
}
var Breadcrumbs_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$x = defineComponent({
  name: "Breadcrumbs",
  components: { Icon },
  props: {
    crumbs: {
      type: Array,
      default: () => []
    }
  }
});
var Breadcrumbs = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", render$x], ["__scopeId", "data-v-414c9d3d"]]);
const _hoisted_1$s = ["type"];
const _hoisted_2$p = {
  key: 0,
  class: "button-content caption-14px-medium"
};
function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["button", _ctx.buttonClasses]),
    type: _ctx.$attrs.type || "button"
  }, [
    !_ctx.iconOnly ? (openBlock(), createElementBlock("span", _hoisted_2$p, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])) : createCommentVNode("", true),
    _ctx.icon ? (openBlock(), createBlock(_component_Icon, mergeProps({
      key: 1,
      class: "button-icon"
    }, __spreadValues({}, _ctx.icon)), null, 16)) : createCommentVNode("", true)
  ], 10, _hoisted_1$s);
}
var Button_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$w = defineComponent({
  name: "Button",
  components: { Icon },
  props: {
    size: {
      type: String,
      default: "s",
      validator: (value) => {
        const sizes = ["s", "m", "l"];
        return sizes.includes(value);
      }
    },
    mode: {
      type: String,
      default: "primary",
      validator: (type) => {
        const types = ["primary", "secondary", "info", "state"];
        return types.includes(type);
      }
    },
    icon: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconOnly: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const buttonClasses = computed(() => ({
      [`${props.size}`]: true,
      "with-icon": props.icon,
      [`${props.mode}`]: props.mode !== "primary",
      loading: props.loading,
      "icon-only": props.iconOnly
    }));
    return { buttonClasses };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", render$w], ["__scopeId", "data-v-3a157fa3"]]);
const _hoisted_1$r = {
  key: 0,
  class: "card-sidebar"
};
const _hoisted_2$o = { class: "step-number h-500" };
const _hoisted_3$m = { class: "card-content" };
const _hoisted_4$h = { class: "card-header" };
const _hoisted_5$e = {
  key: 0,
  class: "card-title h-500"
};
const _hoisted_6$3 = { class: "card-actions" };
const _hoisted_7$1 = { class: "card-description text-14px-regular" };
function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["card", _ctx.cardClasses])
  }, [
    _ctx.number ? (openBlock(), createElementBlock("div", _hoisted_1$r, [
      createElementVNode("span", _hoisted_2$o, toDisplayString(_ctx.number), 1)
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_3$m, [
      createElementVNode("div", _hoisted_4$h, [
        _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_5$e, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_6$3, [
          renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ]),
        createElementVNode("div", _hoisted_7$1, [
          renderSlot(_ctx.$slots, "description", {}, void 0, true)
        ])
      ]),
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ], 2);
}
var Card_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = defineComponent({
  name: "Card",
  props: {
    title: {
      type: String,
      default: ""
    },
    number: {
      type: String,
      default: ""
    },
    first: {
      type: Boolean,
      default: false
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const cardClasses = computed(() => ({
      "with-sidebar": props.number,
      "card-first": props.first,
      "card-last": props.last
    }));
    return { cardClasses };
  }
});
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", render$v], ["__scopeId", "data-v-5bba588c"]]);
const _hoisted_1$q = ["for"];
const _hoisted_2$n = ["value", "id", "disabled"];
const _hoisted_3$l = ["for"];
const _hoisted_4$g = ["src"];
const _hoisted_5$d = { class: "indeterminate-dash" };
function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["checkbox", _ctx.boxClass])
  }, [
    _ctx.label ? (openBlock(), createElementBlock("label", {
      key: 0,
      class: normalizeClass(["label", _ctx.labelClass]),
      for: _ctx.id
    }, toDisplayString(_ctx.label), 11, _hoisted_1$q)) : createCommentVNode("", true),
    createElementVNode("input", {
      class: "hidden",
      type: "checkbox",
      tabindex: "0",
      ref: "input",
      onChange: _cache[0] || (_cache[0] = ($event) => _ctx.onClick($event)),
      value: _ctx.modelValue,
      id: _ctx.id,
      disabled: _ctx.disabled
    }, null, 40, _hoisted_2$n),
    createElementVNode("label", {
      class: normalizeClass(["box", _ctx.boxClass]),
      tabindex: "-1",
      for: _ctx.id
    }, [
      withDirectives(createElementVNode("img", {
        class: "icon",
        src: _ctx.imgSrc
      }, null, 8, _hoisted_4$g), [
        [vShow, !_ctx.indeterminate && _ctx.modelValue]
      ]),
      withDirectives(createElementVNode("div", _hoisted_5$d, null, 512), [
        [vShow, _ctx.indeterminate]
      ])
    ], 10, _hoisted_3$l),
    _ctx.error || _ctx.caption ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["caption", _ctx.captionClass])
    }, toDisplayString(_ctx.error || _ctx.caption), 3)) : createCommentVNode("", true)
  ], 2);
}
var Checkbox_vue_vue_type_style_index_0_lang = "";
const _sfc_main$u = defineComponent({
  name: "Checkbox",
  inheritAttrs: false,
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    id: {
      type: String
    },
    label: {
      type: String
    },
    caption: {
      type: String
    },
    error: {
      type: String
    },
    size: {
      type: String,
      default: "m",
      validator: (value) => ["m", "l"].includes(value)
    }
  },
  setup(props, { emit }) {
    const boxClass = computed(() => {
      return {
        [`${props.size}`]: true,
        checked: props.modelValue,
        error: props.error,
        indeterminate: props.indeterminate,
        disabled: props.disabled
      };
    });
    const labelClass = computed(() => {
      return {
        checked: props.modelValue,
        indeterminate: props.indeterminate,
        disabled: props.disabled,
        "caption-16px-medium": props.size === "l",
        "text-12px-regular": props.size === "m"
      };
    });
    const captionClass = computed(() => {
      return {
        [`${props.size}`]: true,
        error: props.error,
        "text-12px-regular": props.size === "l" || props.size === "m"
      };
    });
    const imgSrc = computed(() => {
      const iconSize = props.size === "l" ? "16" : "12";
      return require(`@/assets/icons/${iconSize}/ic${iconSize}-check.svg`);
    });
    const onClick = () => {
      emit("update:modelValue", !props.modelValue);
    };
    return {
      imgSrc,
      boxClass,
      captionClass,
      labelClass,
      onClick
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", render$u]]);
const _withScopeId$3 = (n2) => (pushScopeId("data-v-7ef9b904"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$p = ["tabindex"];
const _hoisted_2$m = { class: "option-content" };
const _hoisted_3$k = { class: "option-label" };
const _hoisted_4$f = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("div", { class: "break" }, null, -1));
const _hoisted_5$c = {
  key: 1,
  class: "option-subtitle caption-10px-medium"
};
function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["dropdown-option text-14px-regular", _ctx.optionClasses]),
    tabindex: _ctx.tabindex
  }, [
    createElementVNode("div", _hoisted_2$m, [
      _ctx.icon ? (openBlock(), createBlock(_component_Icon, mergeProps({
        key: 0,
        class: "option-icon"
      }, _ctx.icon), null, 16)) : createCommentVNode("", true),
      createElementVNode("span", _hoisted_3$k, toDisplayString(_ctx.label), 1),
      _hoisted_4$f,
      _ctx.subtitle ? (openBlock(), createElementBlock("small", _hoisted_5$c, toDisplayString(_ctx.subtitle), 1)) : createCommentVNode("", true)
    ]),
    renderSlot(_ctx.$slots, "control", {}, void 0, true)
  ], 10, _hoisted_1$p);
}
var DropdownOption_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$t = defineComponent({
  name: "DropdownOption",
  components: { Icon },
  props: {
    label: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    value: {
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    const optionClasses = computed(() => ({
      active: props.active,
      disabled: props.disabled
    }));
    const tabindex = computed(() => props.disabled ? -1 : 0);
    return {
      optionClasses,
      tabindex
    };
  }
});
var DropdownOption = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", render$t], ["__scopeId", "data-v-7ef9b904"]]);
const _hoisted_1$o = {
  key: 0,
  class: "options"
};
const _hoisted_2$l = {
  key: 1,
  class: "no-results"
};
const _hoisted_3$j = { class: "no-results-title caption-16px-medium" };
const _hoisted_4$e = { class: "no-results-description text-12px-regular" };
function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DropdownOption = resolveComponent("DropdownOption");
  const _component_Icon = resolveComponent("Icon");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "dropdown",
    style: normalizeStyle(_ctx.dropdownStyles)
  }, [
    renderSlot(_ctx.$slots, "header", {}, void 0, true),
    !_ctx.noResults ? (openBlock(), createElementBlock("ul", _hoisted_1$o, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (option, index) => {
        var _a;
        return openBlock(), createBlock(_component_DropdownOption, mergeProps(option, {
          onKeypress: withKeys(($event) => _ctx.chooseItem(option), ["enter", "space"]),
          onClick: withModifiers(($event) => _ctx.chooseItem(option), ["stop", "prevent"]),
          key: option.label,
          active: JSON.stringify(option.value) === JSON.stringify((_a = _ctx.active) == null ? void 0 : _a.value)
        }), {
          control: withCtx(() => [
            renderSlot(_ctx.$slots, "optionControl", {
              option,
              index
            }, void 0, true)
          ]),
          _: 2
        }, 1040, ["onKeypress", "onClick", "active"]);
      }), 128)),
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])) : withDirectives((openBlock(), createElementBlock("div", _hoisted_2$l, [
      createVNode(_component_Icon, {
        class: "no-results-icon",
        name: "ic24-search",
        color: "--blue-500"
      }),
      createElementVNode("h4", _hoisted_3$j, toDisplayString(_ctx.dropdownDictionary.noResultsTitle), 1),
      createElementVNode("p", _hoisted_4$e, toDisplayString(_ctx.dropdownDictionary.noResultsDescription), 1)
    ], 512)), [
      [vShow, _ctx.opened]
    ])
  ], 4)), [
    [vShow, _ctx.opened]
  ]);
}
var Dropdown_vue_vue_type_style_index_0_scoped_true_lang = "";
const DEFAULT_DICTIONARY$1 = {
  noResultsTitle: "No matching search results",
  noResultsDescription: "Try again using more general search terms"
};
const _sfc_main$s = defineComponent({
  name: "Dropdown",
  components: {
    DropdownOption,
    Icon
  },
  emits: ["change", "update:opened"],
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    active: {
      type: Object,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    maxHeight: {
      type: String,
      default: "310px"
    },
    noResults: {
      type: Boolean,
      default: false
    },
    dictionary: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const dropdownDictionary = computed(() => __spreadValues(__spreadValues({}, DEFAULT_DICTIONARY$1), props.dictionary));
    const dropdownStyles = computed(() => ({
      "--dropdown-max-height": props.maxHeight
    }));
    const chooseItem = (item) => {
      emit("change", item);
    };
    const onBlur = (event) => {
      var _a;
      if (event.target instanceof Element && event.target.matches(".dropdown-option:last-child") && (!(event.relatedTarget instanceof Element) || !((_a = event.relatedTarget) == null ? void 0 : _a.matches(".dropdown-option")))) {
        emit("update:opened", false);
      }
    };
    return {
      dropdownDictionary,
      dropdownStyles,
      chooseItem,
      onBlur
    };
  }
});
var Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", render$s], ["__scopeId", "data-v-3170e559"]]);
const _hoisted_1$n = { class: "file-wrapper" };
const _hoisted_2$k = ["disabled"];
const _hoisted_3$i = {
  key: 0,
  class: "file-label text-13px-regular loaded"
};
const _hoisted_4$d = {
  key: 1,
  class: "file-label text-13px-medium"
};
const _hoisted_5$b = /* @__PURE__ */ createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C");
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("label", _hoisted_1$n, [
    createElementVNode("input", mergeProps({ class: "file-input" }, _ctx.$attrs, {
      type: "file",
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChangeFile && _ctx.onChangeFile(...args)),
      disabled: _ctx.disabled
    }), null, 16, _hoisted_2$k),
    _ctx.file || _ctx.fileName ? (openBlock(), createElementBlock("div", _hoisted_3$i, [
      createVNode(_component_Icon, { name: "ic24-file" }),
      createTextVNode(toDisplayString(_ctx.name), 1)
    ])) : (openBlock(), createElementBlock("div", _hoisted_4$d, [
      createVNode(_component_Icon, { name: "ic24-file-import" }),
      _hoisted_5$b
    ]))
  ]);
}
var FileUpload_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$r = defineComponent({
  name: "FileUpload",
  components: { Icon },
  props: {
    fileName: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const file = ref(null);
    const name = computed(() => {
      if (props.fileName) {
        return props.fileName;
      }
      if (file.value) {
        return file.value.name;
      }
      return "\u0424\u0430\u0439\u043B";
    });
    const onChangeFile = (e2) => {
      var _a;
      const files = (_a = e2 == null ? void 0 : e2.target) == null ? void 0 : _a.files;
      if (!(files == null ? void 0 : files.length)) {
        return;
      }
      file.value = files[0];
      emit("change", files[0]);
    };
    return {
      file,
      name,
      onChangeFile
    };
  }
});
var FileUpload = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", render$r], ["__scopeId", "data-v-a39a15b0"]]);
const _hoisted_1$m = { class: "sticky-wrapper" };
const _hoisted_2$j = { class: "filters" };
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$m, [
    createElementVNode("div", _hoisted_2$j, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var Filters_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$q = defineComponent({
  name: "Filters",
  setup() {
    onMounted(() => {
      const observer = new IntersectionObserver(([e2]) => {
        e2.target.toggleAttribute("stuck", e2.intersectionRatio < 1);
      }, { threshold: [1] });
      const element = document.querySelector(".sticky-wrapper");
      element && observer.observe(element);
    });
    return {};
  }
});
var Filters = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", render$q], ["__scopeId", "data-v-fd1a5c78"]]);
/*!
 * maska v1.5.0
 * (c) 2019-2021 Alexander Shabunevich
 * Released under the MIT License.
 */
function e(e2, t2) {
  if (!(e2 instanceof t2))
    throw new TypeError("Cannot call a class as a function");
}
function t(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function n$1(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function r(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function a(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var a2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? r(Object(a2), true).forEach(function(t3) {
      n$1(e2, t3, a2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(a2)) : r(Object(a2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(a2, t3));
    });
  }
  return e2;
}
var o = { "#": { pattern: /[0-9]/ }, X: { pattern: /[0-9a-zA-Z]/ }, S: { pattern: /[a-zA-Z]/ }, A: { pattern: /[a-zA-Z]/, uppercase: true }, a: { pattern: /[a-zA-Z]/, lowercase: true }, "!": { escape: true }, "*": { repeat: true } };
function s$1(e2, t2) {
  var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o, r2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
  return i(t2).length > 1 ? u(t2)(e2, t2, n2, r2) : p(e2, t2, n2, r2);
}
function i(e2) {
  try {
    return JSON.parse(e2);
  } catch (t2) {
    return [e2];
  }
}
function u(e2) {
  var t2 = i(e2).sort(function(e3, t3) {
    return e3.length - t3.length;
  });
  return function(e3, r2, a2) {
    var o2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], s2 = t2.map(function(t3) {
      return p(e3, t3, a2, false);
    }), i2 = s2.pop();
    for (var u2 in t2)
      if (n2(i2, t2[u2], a2))
        return p(e3, t2[u2], a2, o2);
    return "";
  };
  function n2(e3, t3, n3) {
    for (var r2 in n3)
      n3[r2].escape && (t3 = t3.replace(new RegExp(r2 + ".{1}", "g"), ""));
    return t3.split("").filter(function(e4) {
      return n3[e4] && n3[e4].pattern;
    }).length >= e3.length;
  }
}
function p(e2, t2, n2) {
  for (var r2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], a2 = 0, o2 = 0, s2 = "", i2 = ""; a2 < t2.length && o2 < e2.length; ) {
    var u2 = t2[a2], p2 = e2[o2], c2 = n2[u2];
    if (c2 && c2.pattern)
      c2.pattern.test(p2) && (s2 += l$1(p2, c2), a2++, r2 && t2[a2] && (n2[t2[a2]] ? n2[t2[a2]] && n2[t2[a2]].escape && (s2 += t2[a2 + 1], a2 += 2) : (s2 += t2[a2], a2++))), o2++;
    else if (c2 && c2.repeat) {
      var f2 = n2[t2[a2 - 1]];
      f2 && !f2.pattern.test(p2) ? a2++ : a2--;
    } else
      c2 && c2.escape && (u2 = t2[++a2]), r2 && (s2 += u2), p2 === u2 && o2++, a2++;
  }
  for (; r2 && a2 < t2.length; ) {
    var v2 = t2[a2];
    if (n2[v2]) {
      i2 = "";
      break;
    }
    i2 += v2, a2++;
  }
  return s2 + i2;
}
function l$1(e2, t2) {
  return t2.transform && (e2 = t2.transform(e2)), t2.uppercase ? e2.toLocaleUpperCase() : t2.lowercase ? e2.toLocaleLowerCase() : e2;
}
function c(e2) {
  return e2 instanceof HTMLInputElement ? e2 : e2.querySelector("input") || e2;
}
function f(e2) {
  return Object.prototype.toString.call(e2) === "[object String]";
}
var v = function() {
  function n2(t2) {
    var r3 = this, s2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e(this, n2), !t2)
      throw new Error("Maska: no element for mask");
    if (s2.preprocessor != null && typeof s2.preprocessor != "function")
      throw new Error("Maska: preprocessor must be a function");
    if (s2.tokens)
      for (var i3 in s2.tokens)
        s2.tokens[i3] = a({}, s2.tokens[i3]), s2.tokens[i3].pattern && f(s2.tokens[i3].pattern) && (s2.tokens[i3].pattern = new RegExp(s2.tokens[i3].pattern));
    this._opts = { mask: s2.mask, tokens: a(a({}, o), s2.tokens), preprocessor: s2.preprocessor }, this._el = f(t2) ? document.querySelectorAll(t2) : t2.length ? t2 : [t2], this.inputEvent = function(e2) {
      return r3.updateValue(e2.target, e2);
    }, this.init();
  }
  var r2, i2;
  return r2 = n2, (i2 = [{ key: "init", value: function() {
    for (var e2 = this, t2 = function(t3) {
      var n4 = c(e2._el[t3]);
      !e2._opts.mask || n4.dataset.mask && n4.dataset.mask === e2._opts.mask || (n4.dataset.mask = e2._opts.mask), setTimeout(function() {
        return e2.updateValue(n4);
      }, 0), n4.dataset.maskInited || (n4.dataset.maskInited = true, n4.addEventListener("input", e2.inputEvent), n4.addEventListener("beforeinput", e2.beforeInput));
    }, n3 = 0; n3 < this._el.length; n3++)
      t2(n3);
  } }, { key: "destroy", value: function() {
    for (var e2 = 0; e2 < this._el.length; e2++) {
      var t2 = c(this._el[e2]);
      t2.removeEventListener("input", this.inputEvent), t2.removeEventListener("beforeinput", this.beforeInput), delete t2.dataset.mask, delete t2.dataset.maskInited;
    }
  } }, { key: "updateValue", value: function(e2, t2) {
    if (e2 && e2.type) {
      var n3 = e2.type.match(/^number$/i) && e2.validity.badInput;
      if (!e2.value && !n3 || !e2.dataset.mask)
        return e2.dataset.maskRawValue = "", void this.dispatch("maska", e2, t2);
      var r3 = e2.selectionEnd, a2 = e2.value, o2 = a2[r3 - 1];
      e2.dataset.maskRawValue = s$1(e2.value, e2.dataset.mask, this._opts.tokens, false);
      var i3 = e2.value;
      this._opts.preprocessor && (i3 = this._opts.preprocessor(i3)), e2.value = s$1(i3, e2.dataset.mask, this._opts.tokens), t2 && t2.inputType === "insertText" && r3 === a2.length && (r3 = e2.value.length), function(e3, t3, n4) {
        for (; t3 && t3 < e3.value.length && e3.value.charAt(t3 - 1) !== n4; )
          t3++;
        (e3.type ? e3.type.match(/^(text|search|password|tel|url)$/i) : !e3.type) && e3 === document.activeElement && (e3.setSelectionRange(t3, t3), setTimeout(function() {
          e3.setSelectionRange(t3, t3);
        }, 0));
      }(e2, r3, o2), this.dispatch("maska", e2, t2), e2.value !== a2 && this.dispatch("input", e2, t2);
    }
  } }, { key: "beforeInput", value: function(e2) {
    e2 && e2.target && e2.target.type && e2.target.type.match(/^number$/i) && e2.data && isNaN(e2.target.value + e2.data) && e2.preventDefault();
  } }, { key: "dispatch", value: function(e2, t2, n3) {
    t2.dispatchEvent(function(e3) {
      var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n4 = document.createEvent("Event");
      return n4.initEvent(e3, true, true), t3 && (n4.inputType = t3), n4;
    }(e2, n3 && n3.inputType || null));
  } }]) && t(r2.prototype, i2), n2;
}();
var d, h = (d = new WeakMap(), function(e2, t2) {
  t2.value && (d.has(e2) && !function(e3) {
    return !(f(e3.value) && e3.value === e3.oldValue || Array.isArray(e3.value) && JSON.stringify(e3.value) === JSON.stringify(e3.oldValue) || e3.value && e3.value.mask && e3.oldValue && e3.oldValue.mask && e3.value.mask === e3.oldValue.mask);
  }(t2) || d.set(e2, new v(e2, function(e3) {
    var t3 = {};
    return e3.mask ? (t3.mask = Array.isArray(e3.mask) ? JSON.stringify(e3.mask) : e3.mask, t3.tokens = e3.tokens ? a({}, e3.tokens) : {}, t3.preprocessor = e3.preprocessor) : t3.mask = Array.isArray(e3) ? JSON.stringify(e3) : e3, t3;
  }(t2.value))));
});
function k(e2) {
  e2.directive("maska", h);
}
typeof window != "undefined" && window.Vue && window.Vue.use && window.Vue.use(k);
const _hoisted_1$l = { class: "input-wrapper" };
const _hoisted_2$i = ["for"];
const _hoisted_3$h = ["placeholder", "id", "disabled"];
const _hoisted_4$c = {
  key: 1,
  class: "input-icon"
};
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _directive_maska = resolveDirective("maska");
  return openBlock(), createElementBlock("div", _hoisted_1$l, [
    _ctx.label ? (openBlock(), createElementBlock("label", {
      key: 0,
      class: normalizeClass(["label caption-13px-medium", _ctx.labelClass]),
      for: _ctx.id
    }, toDisplayString(_ctx.label), 11, _hoisted_2$i)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass(["input-box", _ctx.boxClass])
    }, [
      renderSlot(_ctx.$slots, "prefix", {}, void 0, true),
      withDirectives(createElementVNode("input", mergeProps({
        class: "input text-14px-regular",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.message = $event)
      }, _ctx.$attrs, {
        ref: "input",
        onPaste: _cache[1] || (_cache[1] = (...args) => _ctx.handlePaste && _ctx.handlePaste(...args)),
        onMaska: _cache[2] || (_cache[2] = (...args) => _ctx.handleMask && _ctx.handleMask(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[5] || (_cache[5] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        placeholder: _ctx.placeholder,
        id: _ctx.id,
        disabled: _ctx.disabled,
        class: _ctx.inputClass
      }), null, 16, _hoisted_3$h), [
        [vModelDynamic, _ctx.message],
        [_directive_maska, _ctx.mask]
      ]),
      _ctx.badge ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["input-badge text-14px-regular", _ctx.badgeClass])
      }, toDisplayString(_ctx.badge), 3)) : createCommentVNode("", true),
      _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_4$c, [
        createVNode(_component_Icon, mergeProps(__spreadProps(__spreadValues({}, _ctx.icon), { color: _ctx.isFocused ? "--blue-500" : "--gray-500" }), { onClick: _ctx.handleIconClick }), null, 16, ["onClick"])
      ])) : createCommentVNode("", true)
    ], 2),
    _ctx.caption ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["caption text-12px-regular", _ctx.captionClass])
    }, toDisplayString(_ctx.caption), 3)) : createCommentVNode("", true)
  ]);
}
var Input_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$p = defineComponent({
  name: "Input",
  components: { Icon },
  directives: { maska: h },
  props: {
    modelValue: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    state: {
      type: String,
      default: "default",
      validator: (state) => {
        const states = ["default", "error"];
        return states.includes(state);
      }
    },
    id: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "m",
      validator: (value) => ["s", "m", "l"].includes(value)
    },
    icon: {
      type: Object,
      default: null
    },
    badge: {
      type: String,
      default: ""
    },
    mask: {
      type: Object,
      default: null
    }
  },
  emits: ["update:modelValue", "input", "paste", "focus", "blur", "mask"],
  setup(props, { emit }) {
    const input = ref(null);
    const isFocused = ref(false);
    const message = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const boxClass = computed(() => {
      return {
        focus: isFocused.value,
        [`${props.state}`]: true,
        [`${props.size}`]: true,
        disabled: props.disabled
      };
    });
    const labelClass = computed(() => {
      return {
        [`${props.size}`]: true
      };
    });
    const inputClass = computed(() => {
      return {
        [`${props.size}`]: true,
        [`${props.state}`]: true
      };
    });
    const captionClass = computed(() => {
      return {
        [`${props.state}`]: true
      };
    });
    const badgeClass = computed(() => {
      return {
        focus: isFocused.value,
        [`${props.size}`]: true,
        disabled: props.disabled
      };
    });
    const focus = () => {
      var _a;
      (_a = input.value) == null ? void 0 : _a.focus();
    };
    const handleInput = (event) => {
      emit("input", event.target.value);
    };
    const handlePaste = (event) => {
      emit("paste", event);
    };
    const handleFocus = () => {
      isFocused.value = true;
      emit("focus");
    };
    const handleBlur = () => {
      isFocused.value = false;
      emit("blur");
    };
    const handleIconClick = () => {
      console.log("icon click");
    };
    const handleMask = (event) => {
      emit("mask", event.target.value);
    };
    return {
      message,
      boxClass,
      labelClass,
      inputClass,
      captionClass,
      badgeClass,
      input,
      isFocused,
      focus,
      handleInput,
      handlePaste,
      handleIconClick,
      handleFocus,
      handleBlur,
      handleMask
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", render$p], ["__scopeId", "data-v-ee702acc"]]);
const _hoisted_1$k = { class: "page" };
const _hoisted_2$h = { class: "page-body" };
const _hoisted_3$g = { class: "page-main" };
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$k, [
    createElementVNode("div", _hoisted_2$h, [
      renderSlot(_ctx.$slots, "sidebar", { class: "page-sidebar" }, void 0, true),
      createElementVNode("main", _hoisted_3$g, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ])
  ]);
}
var PageShell_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$o = defineComponent({
  name: "PageShell"
});
var PageShell = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", render$o], ["__scopeId", "data-v-a8685f58"]]);
const _withScopeId$2 = (n2) => (pushScopeId("data-v-a91ed458"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$j = { class: "page-sidebar" };
const _hoisted_2$g = { class: "sidebar-header" };
const _hoisted_3$f = { class: "sidebar-body" };
const _hoisted_4$b = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", { class: "flexspace" }, null, -1));
const _hoisted_5$a = { class: "sidebar-footer" };
function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    createElementVNode("div", _hoisted_2$g, [
      renderSlot(_ctx.$slots, "header", {}, void 0, true)
    ]),
    createElementVNode("div", _hoisted_3$f, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _hoisted_4$b,
    createElementVNode("div", _hoisted_5$a, [
      renderSlot(_ctx.$slots, "footer", {}, void 0, true)
    ])
  ]);
}
var PageSidebar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$n = defineComponent({
  name: "PageSidebar"
});
var PageSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", render$n], ["__scopeId", "data-v-a91ed458"]]);
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "expand",
    onLeave: _ctx.leave,
    onEnter: _ctx.enter,
    onAfterEnter: _ctx.afterEnter
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
  }, 8, ["onLeave", "onEnter", "onAfterEnter"]);
}
var TransitionExpand_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$m = defineComponent({
  name: "TransitionExpand",
  methods: {
    enter(element) {
      const width = getComputedStyle(element).width;
      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";
      const height = getComputedStyle(element).height;
      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = "0";
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    leave(element) {
      const height = getComputedStyle(element).height;
      element.style.height = height;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = "0";
      });
    }
  }
});
var TransitionExpand = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", render$m], ["__scopeId", "data-v-2980aab9"]]);
const _hoisted_1$i = { class: "list" };
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", _hoisted_1$i, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item, index) => {
      return openBlock(), createElementBlock("li", {
        class: "list-item text-14px-regular",
        key: index
      }, [
        renderSlot(_ctx.$slots, "listItem", {
          index,
          element: item
        }, void 0, true)
      ]);
    }), 128))
  ]);
}
var List_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$l = defineComponent({
  name: "List",
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    }
  }
});
var List = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", render$l], ["__scopeId", "data-v-3941fc9e"]]);
const _hoisted_1$h = { class: "grid grid_gap_16" };
const _hoisted_2$f = { class: "grid-12-12" };
const _hoisted_3$e = {
  key: 0,
  class: "label caption-13px-medium"
};
const _hoisted_4$a = {
  key: 2,
  class: "options-more-wrap"
};
const _hoisted_5$9 = { class: "options-more__label caption-13px-medium" };
const _hoisted_6$2 = {
  key: 3,
  class: "options-more-holder"
};
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_List = resolveComponent("List");
  const _component_TransitionExpand = resolveComponent("TransitionExpand");
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("div", _hoisted_1$h, [
    createElementVNode("div", _hoisted_2$f, [
      _ctx.label ? (openBlock(), createElementBlock("label", _hoisted_3$e, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
      createVNode(_component_List, {
        data: _ctx.list.initial,
        class: normalizeClass({ "list-expanded": _ctx.isShowAll })
      }, {
        listItem: withCtx(({ element, index }) => [
          renderSlot(_ctx.$slots, "listItem", {
            index,
            element
          }, void 0, true)
        ]),
        _: 3
      }, 8, ["data", "class"]),
      _ctx.list.rest.length ? (openBlock(), createBlock(_component_TransitionExpand, { key: 1 }, {
        default: withCtx(() => [
          withDirectives(createVNode(_component_List, {
            class: "list-expand",
            data: _ctx.list.rest
          }, {
            listItem: withCtx(({ element, index }) => [
              renderSlot(_ctx.$slots, "listItem", {
                index: _ctx.list.initial.length + index,
                element
              }, void 0, true)
            ]),
            _: 3
          }, 8, ["data"]), [
            [vShow, _ctx.isShowAll]
          ])
        ]),
        _: 3
      })) : createCommentVNode("", true),
      _ctx.list.rest.length ? (openBlock(), createElementBlock("div", _hoisted_4$a, [
        createElementVNode("div", {
          class: "options-more",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onShowAll && _ctx.onShowAll(...args))
        }, [
          createElementVNode("div", _hoisted_5$9, toDisplayString(_ctx.showAllLabel), 1),
          createElementVNode("div", {
            class: normalizeClass(["options-more__icon", { "options-more__icon_opened": _ctx.isShowAll }])
          }, [
            createVNode(_component_Icon, {
              name: "ic24-chevron-left",
              color: "--gray-900"
            })
          ], 2)
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_6$2))
    ])
  ]);
}
var ExpansibleList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$k = defineComponent({
  name: "ExpansibleList",
  components: { Input, Icon, TransitionExpand, List },
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    entityName: {
      type: String,
      default: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B"
    },
    showCount: {
      type: [String, Number],
      default: 2,
      validator: (value) => {
        const types = typeof value;
        return ["string", "number"].includes(types);
      }
    }
  },
  setup(props) {
    const isShowAll = ref(false);
    const showAllLabel = computed(() => {
      if (!isShowAll.value) {
        return `\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 ${props.entityName} (${list.value.len})`;
      }
      return "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435";
    });
    const onShowAll = () => {
      isShowAll.value = !isShowAll.value;
    };
    const list = computed(() => {
      const data = props.data;
      const count = props.showCount ? +props.showCount : 2;
      if (!Array.isArray(data) || !data.length) {
        return {
          initial: [],
          rest: [],
          len: 0
        };
      }
      return {
        initial: data.slice(0, count),
        rest: data.slice(count),
        len: data.length
      };
    });
    return {
      isShowAll,
      showAllLabel,
      onShowAll,
      list
    };
  }
});
var ExpansibleList = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", render$k], ["__scopeId", "data-v-121176b2"]]);
const _hoisted_1$g = {
  key: 0,
  class: "label caption-13px-medium"
};
const _hoisted_2$e = {
  key: 1,
  class: "wrap-rest"
};
const _hoisted_3$d = {
  key: 2,
  class: "options-more-wrap"
};
const _hoisted_4$9 = { class: "options-more__label caption-13px-medium" };
const _hoisted_5$8 = {
  key: 3,
  class: "options-more-holder"
};
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TransitionExpand = resolveComponent("TransitionExpand");
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.label ? (openBlock(), createElementBlock("label", _hoisted_1$g, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass(["wrap-initial", { expanded: _ctx.isShowAll }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list.initial, (element, index) => {
        return renderSlot(_ctx.$slots, "listItem", {
          key: `wrap-item-${index}`,
          index,
          element
        }, void 0, true);
      }), 128))
    ], 2),
    _ctx.list.rest.length ? (openBlock(), createElementBlock("div", _hoisted_2$e, [
      createVNode(_component_TransitionExpand, null, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list.rest, (element, index) => {
              return renderSlot(_ctx.$slots, "listItem", {
                key: `wrap-item-${_ctx.list.initial.length + index}`,
                index: _ctx.list.initial.length + index,
                element
              }, void 0, true);
            }), 128))
          ], 512), [
            [vShow, _ctx.isShowAll]
          ])
        ]),
        _: 3
      })
    ])) : createCommentVNode("", true),
    _ctx.list.rest.length ? (openBlock(), createElementBlock("div", _hoisted_3$d, [
      createElementVNode("div", {
        class: "options-more",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onShowAll && _ctx.onShowAll(...args))
      }, [
        createElementVNode("div", _hoisted_4$9, toDisplayString(_ctx.showAllLabel), 1),
        createElementVNode("div", {
          class: normalizeClass(["options-more__icon", { "options-more__icon_opened": _ctx.isShowAll }])
        }, [
          createVNode(_component_Icon, {
            name: "ic24-chevron-left",
            color: "--gray-900"
          })
        ], 2)
      ])
    ])) : (openBlock(), createElementBlock("div", _hoisted_5$8))
  ], 64);
}
var ExpansibleWrap_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$j = defineComponent({
  name: "ExpansibleWrap",
  components: { Icon, TransitionExpand },
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    entityName: {
      type: String,
      default: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B"
    },
    showCount: {
      type: [String, Number],
      default: 2,
      validator: (value) => {
        const types = typeof value;
        return ["string", "number"].includes(types);
      }
    }
  },
  setup(props) {
    const isShowAll = ref(false);
    const showAllLabel = computed(() => {
      if (!isShowAll.value) {
        return `\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 ${props.entityName} (${list.value.len})`;
      }
      return "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435";
    });
    const onShowAll = () => {
      isShowAll.value = !isShowAll.value;
    };
    const list = computed(() => {
      const data = props.data;
      const count = props.showCount ? +props.showCount : 2;
      if (!Array.isArray(data) || !data.length) {
        return {
          initial: [],
          rest: [],
          len: 0
        };
      }
      return {
        initial: data.slice(0, count),
        rest: data.slice(count),
        len: data.length
      };
    });
    return {
      isShowAll,
      showAllLabel,
      onShowAll,
      list
    };
  }
});
var ExpansibleWrap = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", render$j], ["__scopeId", "data-v-6e8e8f4c"]]);
const _withScopeId$1 = (n2) => (pushScopeId("data-v-4911b2fb"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$f = ["data-index"];
const _hoisted_2$d = { class: "dnd-list__drag-icon" };
const _hoisted_3$c = { class: "dnd-list_order-prefix text-14px-regular" };
const _hoisted_4$8 = { class: "dnd-list__label text-14px-regular" };
const _hoisted_5$7 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("div", { class: "flexspace" }, null, -1));
const _hoisted_6$1 = { class: "row-control" };
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Draggable = resolveComponent("Draggable");
  return openBlock(), createBlock(_component_Draggable, mergeProps({
    class: "dnd-list",
    modelValue: _ctx.items,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.items = $event)
  }, _ctx.dragOptions, { itemKey: "value" }), {
    item: withCtx(({ element, index }) => [
      createElementVNode("div", {
        class: "dnd-list__row dnd-list__draggable",
        "data-index": index
      }, [
        createElementVNode("div", _hoisted_2$d, [
          createVNode(_component_Icon, { name: "ic24-drop" })
        ]),
        createElementVNode("span", _hoisted_3$c, toDisplayString(index + 1) + ".", 1),
        createElementVNode("span", _hoisted_4$8, toDisplayString(element.label), 1),
        _hoisted_5$7,
        createElementVNode("div", _hoisted_6$1, [
          renderSlot(_ctx.$slots, "control", {
            row: element,
            index
          }, void 0, true)
        ])
      ], 8, _hoisted_1$f)
    ]),
    _: 3
  }, 16, ["modelValue"]);
}
var SortedList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$i = defineComponent({
  name: "SortedList",
  components: { Icon, Draggable },
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const dragOptions = {
      animation: 200,
      fallbackTolerance: 1,
      touchStartThreshold: 1,
      easing: "cubic-bezier(0,0,1,1)",
      forceFallback: true,
      fallbackOnBody: true,
      dragClass: "drag",
      ghostClass: "ghost",
      group: "description",
      disabled: false
    };
    const items = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    return { dragOptions, items };
  }
});
var SortedList = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", render$i], ["__scopeId", "data-v-4911b2fb"]]);
const _withScopeId = (n2) => (pushScopeId("data-v-5d8c1aaa"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$e = { class: "bubbles" };
const _hoisted_2$c = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_3$b = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { id: "bubble2" }, null, -1));
const _hoisted_4$7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { id: "bubble3" }, null, -1));
const _hoisted_5$6 = [
  _hoisted_2$c,
  _hoisted_3$b,
  _hoisted_4$7
];
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$e, _hoisted_5$6);
}
var Bubbles_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$h = defineComponent({ name: "Bubbles" });
var Bubbles = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", render$h], ["__scopeId", "data-v-5d8c1aaa"]]);
const _hoisted_1$d = { class: "shine-target" };
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$d);
}
var Shine_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$g = defineComponent({ name: "Shine" });
var Shine = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", render$g], ["__scopeId", "data-v-fa8b1b68"]]);
const _hoisted_1$c = { class: "content" };
const _hoisted_2$b = {
  key: 0,
  class: "content-svg"
};
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.href ? "router-link" : "div"), {
    class: normalizeClass(["menu-list-item", { "item-active": _ctx.active, [_ctx.color]: true, [`${_ctx.mode}-mode`]: _ctx.mode !== "desktop", disabled: _ctx.disabled }]),
    tabindex: "0",
    to: _ctx.href
  }, {
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1$c, [
        _ctx.icon ? (openBlock(), createElementBlock("span", _hoisted_2$b, [
          createVNode(_component_Icon, mergeProps({ class: "menu-list-item-icon" }, _ctx.icon), null, 16)
        ])) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["content-text caption-13px-medium", { "icon-included": _ctx.icon }])
        }, toDisplayString(_ctx.label), 3),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]),
    _: 3
  }, 8, ["to", "class"]);
}
var ListOption_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = defineComponent({
  name: "ListOption",
  components: { Icon },
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: Object,
      default: null
    },
    href: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "black"
    },
    mode: {
      type: String,
      default: "desktop",
      validator: (type) => {
        const types = ["desktop", "tablet"];
        return types.includes(type);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
var ListOption = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", render$f], ["__scopeId", "data-v-1f8027e0"]]);
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_ListOption = resolveComponent("ListOption");
  const _component_MenuList = resolveComponent("MenuList", true);
  const _component_TransitionExpand = resolveComponent("TransitionExpand");
  return openBlock(), createElementBlock("ul", {
    class: normalizeClass(["menu-list", _ctx.menuListClasses])
  }, [
    _ctx.color === "black" && _ctx.mode === "tablet" ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "marker",
      style: normalizeStyle({ transform: `translateY(${_ctx.markerTranslate + 4}px)` })
    }, null, 4)) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, ({ label, icon, href, active, children, disabled }, index) => {
      return openBlock(), createElementBlock("li", {
        class: "menu-list__li",
        onKeydown: [
          _cache[0] || (_cache[0] = withKeys(withModifiers((...args) => _ctx.onPageUp && _ctx.onPageUp(...args), ["prevent"]), ["up"])),
          _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.onPageDown && _ctx.onPageDown(...args), ["prevent"]), ["down"]))
        ],
        ref: active ? "activeLi" : null,
        key: index
      }, [
        children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_component_ListOption, mergeProps({ class: "children-includes" }, { label, icon, href, active, color: _ctx.color, mode: _ctx.mode, disabled }, {
            onKeydown: withKeys(($event) => _ctx.expandSubmenu(index), ["enter"]),
            onClick: withModifiers(($event) => _ctx.expandSubmenu(index), ["prevent"]),
            class: `item-${index + 1}`
          }), {
            default: withCtx(() => [
              children && _ctx.mode === "desktop" ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                class: normalizeClass(["chevron", { "chevron-open": index === _ctx.activeOptionIndex }]),
                name: "ic24-chevron-less-small",
                color: disabled ? "--gray-300" : _ctx.color
              }, null, 8, ["color", "class"])) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1040, ["onKeydown", "onClick", "class"]),
          createVNode(_component_TransitionExpand, null, {
            default: withCtx(() => [
              !disabled ? withDirectives((openBlock(), createBlock(_component_MenuList, {
                key: 0,
                class: "submenu",
                options: children
              }, null, 8, ["options"])), [
                [vShow, index === _ctx.activeOptionIndex || _ctx.mode === "tablet"]
              ]) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1024)
        ], 64)) : (openBlock(), createBlock(_component_ListOption, normalizeProps(mergeProps({ key: 1 }, { label, icon, href, active, color: _ctx.color, mode: _ctx.mode, disabled })), null, 16))
      ], 544);
    }), 128))
  ], 2);
}
var MenuList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = defineComponent({
  name: "MenuList",
  components: { Icon, ListOption, TransitionExpand },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: "desktop",
      validator: (type) => {
        const types = ["desktop", "tablet"];
        return types.includes(type);
      }
    },
    color: {
      type: String,
      default: "black",
      validator: (value) => {
        const colors = ["black", "gray"];
        return colors.includes(value);
      }
    }
  },
  setup(props) {
    const activeOptionIndex = ref(-1);
    const activeLi = ref(null);
    const markerTranslate = ref(0);
    const menuListClasses = computed(() => ({
      [props.mode]: props.mode !== "desktop"
    }));
    onMounted(() => {
      props.options.forEach((el2, index) => {
        if (el2.active) {
          activeOptionIndex.value = index;
        }
      });
    });
    watch([activeLi, () => props.mode], ([value, mode]) => {
      nextTick(() => markerTranslate.value = value && mode === "tablet" ? value == null ? void 0 : value.offsetTop : 0);
    });
    const expandSubmenu = (index) => {
      activeOptionIndex.value = activeOptionIndex.value === index ? -1 : index;
    };
    const onPageUp = (e2) => {
      var _a;
      const parent = e2.target.parentElement;
      if (!parent) {
        return;
      }
      const prev = parent.previousElementSibling;
      if (prev) {
        const submenu = prev.querySelector(".submenu");
        if (submenu && submenu.clientHeight) {
          const nextInnerItem = submenu.lastElementChild;
          if (nextInnerItem) {
            const link = nextInnerItem == null ? void 0 : nextInnerItem.querySelector(".menu-list-item");
            if (link) {
              link.focus();
            }
          }
        } else {
          const link = prev == null ? void 0 : prev.querySelector(".menu-list-item");
          if (link) {
            link.focus();
          }
        }
      } else {
        const externalCurrentItem = (_a = parent.parentElement) == null ? void 0 : _a.parentElement;
        if (externalCurrentItem) {
          const link = externalCurrentItem == null ? void 0 : externalCurrentItem.querySelector(".menu-list-item");
          if (link) {
            link.focus();
          }
        }
      }
    };
    const onPageDown = (e2) => {
      var _a;
      const parent = e2.target.parentElement;
      if (!parent) {
        return;
      }
      const submenu = parent.querySelector(".submenu");
      if (submenu && submenu.clientHeight) {
        const nextInnerItem = submenu.querySelector(".menu-list__li .menu-list-item");
        if (nextInnerItem) {
          nextInnerItem.focus();
        }
      } else {
        const nextItem = parent.nextElementSibling;
        if (nextItem) {
          const link = nextItem == null ? void 0 : nextItem.querySelector(".menu-list-item");
          if (link) {
            link.focus();
          }
        } else {
          const externalCurrentItem = (_a = parent.parentElement) == null ? void 0 : _a.parentElement;
          if (externalCurrentItem) {
            const nextExternalItem = externalCurrentItem.nextElementSibling;
            if (nextExternalItem) {
              const link = nextExternalItem == null ? void 0 : nextExternalItem.querySelector(".menu-list-item");
              if (link) {
                link.focus();
              }
            }
          }
        }
      }
    };
    return { activeOptionIndex, menuListClasses, markerTranslate, activeLi, expandSubmenu, onPageUp, onPageDown };
  }
});
var MenuList = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", render$e], ["__scopeId", "data-v-2542ae17"]]);
class Timeout {
  constructor(callback, timeout) {
    __publicField(this, "timer", 0);
    __publicField(this, "startedAt", 0);
    __publicField(this, "callback", () => {
    });
    __publicField(this, "delay", 0);
    this.callback = callback;
    this.delay = timeout;
    this.start();
  }
  start(timeout = this.delay) {
    this.startedAt = new Date().valueOf();
    this.timer = window.setTimeout(this.callback, timeout);
  }
  pause() {
    this.delay = this.delay - (new Date().valueOf() - this.startedAt);
    window.clearTimeout(this.timer);
  }
  resume() {
    this.start();
  }
  stop() {
    window.clearTimeout(this.timer);
  }
}
var MessageType;
(function(MessageType2) {
  MessageType2["Info"] = "info";
  MessageType2["Success"] = "success";
  MessageType2["Warning"] = "warning";
  MessageType2["Error"] = "error";
})(MessageType || (MessageType = {}));
const messages = ref([]);
const messageId = ref(0);
const delay = ref(4e3);
function useMessenger() {
  const addMessage = (message, type = MessageType.Info) => {
    const _id = messageId.value++;
    const newMessage = {
      _id,
      message,
      type,
      visible: true
    };
    const timer2 = new Timeout(() => {
      deleteMessage(__spreadProps(__spreadValues({}, newMessage), { timer: timer2 }));
    }, delay.value);
    newMessage.timer = timer2;
    messages.value.unshift(newMessage);
  };
  const deleteMessage = ({ _id, timer: timer2 }) => {
    if (timer2) {
      timer2.stop();
    }
    messages.value = messages.value.filter(({ _id: messageId2 }) => _id !== messageId2);
  };
  const error = ({ message }) => {
    addMessage(message, MessageType.Error);
  };
  const warn = ({ message }) => {
    addMessage(message, MessageType.Warning);
  };
  const success = ({ message }) => {
    addMessage(message, MessageType.Success);
  };
  const info = ({ message }) => {
    addMessage(message, MessageType.Info);
  };
  return {
    messages: computed(() => messages.value),
    addMessage,
    deleteMessage,
    error,
    warn,
    success,
    info
  };
}
const _hoisted_1$b = { class: "messenger__wrapper" };
const _hoisted_2$a = ["innerHTML"];
const _hoisted_3$a = ["onClick"];
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    createVNode(TransitionGroup, {
      class: "messenger__container",
      tag: "div",
      name: "messenger",
      onMouseleave: _ctx.resumeHold,
      onMouseenter: _ctx.pauseHold
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.messages, (message) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["messenger", [message ? "visible" : "", _ctx.getColor(message)]]),
            onMouseleave: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"])),
            key: message._id
          }, [
            createVNode(_component_Icon, mergeProps({ class: "messenger__icon" }, _ctx.getIconProps(message)), null, 16),
            createElementVNode("p", {
              class: "messenger__message",
              innerHTML: message.message
            }, null, 8, _hoisted_2$a),
            createElementVNode("span", {
              class: "messenger__close",
              onClick: withModifiers(($event) => _ctx.deleteMessage(message), ["stop"])
            }, [
              createVNode(_component_Icon, {
                name: "ic24-close-delete",
                color: "--gray-500"
              })
            ], 8, _hoisted_3$a)
          ], 34);
        }), 128))
      ]),
      _: 1
    }, 8, ["onMouseleave", "onMouseenter"])
  ]);
}
var Messenger_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = defineComponent({
  name: "Messenger",
  components: { Icon },
  setup() {
    const { messages: messages2, deleteMessage } = useMessenger();
    const getColor = ({ type }) => {
      switch (type) {
        case MessageType.Error:
          return "red";
        case MessageType.Warning:
          return "yellow";
        case MessageType.Info:
          return "blue";
        case MessageType.Success:
          return "green";
        default:
          return "blue";
      }
    };
    const getIconProps = ({ type }) => {
      switch (type) {
        case MessageType.Error:
          return {
            name: "ic24-warning",
            color: "--red-500"
          };
        case MessageType.Warning:
          return {
            name: "ic24-warning",
            color: "--yellow-100"
          };
        case MessageType.Info:
          return {
            name: "ic24-info",
            color: "--blue-500"
          };
        case MessageType.Success:
          return {
            name: "ic24-success",
            color: "--green-100"
          };
      }
    };
    const pauseHold = () => {
      messages2.value.forEach(({ timer: timer2 }) => {
        if (timer2) {
          timer2.pause();
        }
      });
    };
    const resumeHold = () => {
      messages2.value.forEach(({ timer: timer2 }) => {
        if (timer2) {
          timer2.resume();
        }
      });
    };
    return { messages: messages2, getColor, getIconProps, deleteMessage, pauseHold, resumeHold };
  }
});
var Messenger = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", render$d], ["__scopeId", "data-v-7a14cced"]]);
const _hoisted_1$a = { class: "popup-header" };
const _hoisted_2$9 = {
  key: 0,
  class: "popup-title h-500"
};
const _hoisted_3$9 = { class: "popup-body scroll" };
const _hoisted_4$6 = { class: "popup-content" };
const _hoisted_5$5 = { class: "popup-footer" };
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: "modal-wrapper",
    onMousedown: _cache[1] || (_cache[1] = withModifiers(($event) => !_ctx.strict && _ctx.closePopup, ["self"]))
  }, [
    createElementVNode("div", {
      class: normalizeClass(["popup", _ctx.popupClasses])
    }, [
      createElementVNode("div", _hoisted_1$a, [
        _ctx.title ? (openBlock(), createElementBlock("h4", _hoisted_2$9, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
        !_ctx.strict ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "popup-close",
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.closePopup && _ctx.closePopup(...args), ["prevent", "stop"]))
        }, [
          createVNode(_component_Icon, { name: "ic24-close-delete" })
        ])) : createCommentVNode("", true)
      ]),
      createElementVNode("div", _hoisted_3$9, [
        createElementVNode("div", _hoisted_4$6, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createElementVNode("div", _hoisted_5$5, [
          renderSlot(_ctx.$slots, "footer")
        ])
      ])
    ], 2)
  ], 544)), [
    [vShow, _ctx.opened]
  ]);
}
var Popup_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = defineComponent({
  name: "Popup",
  components: {
    Icon
  },
  emits: ["update:opened", "close"],
  props: {
    title: {
      type: String,
      default: ""
    },
    opened: {
      type: Boolean,
      default: false
    },
    strict: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "m",
      validator: (value) => {
        const sizes = ["s", "m", "l"];
        return sizes.includes(value);
      }
    }
  },
  setup(props, { emit }) {
    const popupClasses = computed(() => ({
      [`${props.size}`]: true
    }));
    const closePopup = () => {
      emit("update:opened", false);
      emit("close");
    };
    return { popupClasses, closePopup };
  }
});
var Popup = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", render$c]]);
const _hoisted_1$9 = {
  key: 0,
  class: "label caption-13px-medium"
};
const _hoisted_2$8 = ["tabindex"];
const _hoisted_3$8 = {
  key: 0,
  class: "label text-14px-medium"
};
const _hoisted_4$5 = ["value", "placeholder", "disabled"];
const _hoisted_5$4 = {
  key: 1,
  class: "caption text-12px-regular"
};
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_Icon = resolveComponent("Icon");
  const _component_Input = resolveComponent("Input");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_Dropdown = resolveComponent("Dropdown");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["select", _ctx.selectClasses]),
    ref: "selectRef"
  }, [
    _ctx.label && _ctx.mode !== "sort" ? (openBlock(), createElementBlock("label", _hoisted_1$9, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass(["select-head text-14px-regular", _ctx.headClasses]),
      onKeyup: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.openDropdown && _ctx.openDropdown(...args), ["tab"])),
      onKeypress: _cache[2] || (_cache[2] = withKeys((...args) => _ctx.toggleDropdown && _ctx.toggleDropdown(...args), ["enter", "space"])),
      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.toggleDropdown && _ctx.toggleDropdown(...args)),
      onBlur: _cache[4] || (_cache[4] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
      tabindex: _ctx.disabled ? -1 : 0
    }, [
      _ctx.label && _ctx.mode === "sort" ? (openBlock(), createElementBlock("label", _hoisted_3$8, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
      createElementVNode("input", {
        class: "select-input text-14px-regular",
        onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
        value: (_a = _ctx.active) == null ? void 0 : _a.map((item) => item.label).join("/"),
        tabindex: -1,
        readonly: true,
        placeholder: _ctx.placeholder,
        disabled: _ctx.disabled
      }, null, 40, _hoisted_4$5),
      createVNode(_component_Icon, {
        class: "arrow-icon",
        name: _ctx.mode === "sort" ? "ic24-sort" : "ic24-chevron-less-small"
      }, null, 8, ["name"])
    ], 42, _hoisted_2$8),
    createVNode(_component_Dropdown, {
      opened: _ctx.opened,
      "onUpdate:opened": _cache[6] || (_cache[6] = ($event) => _ctx.opened = $event),
      onKeydown: [
        withKeys(withModifiers(_ctx.focusUp, ["prevent"]), ["up"]),
        withKeys(withModifiers(_ctx.focusDown, ["prevent"]), ["down"])
      ],
      onChange: _ctx.onChange,
      options: _ctx.filteredOptions,
      "no-results": !_ctx.filteredOptions.length,
      "max-height": _ctx.maxHeight
    }, {
      header: withCtx(() => [
        _ctx.searchable ? (openBlock(), createBlock(_component_Input, {
          key: 0,
          class: "search-input text-14px-regular",
          modelValue: _ctx.searchInputValue,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.searchInputValue = $event),
          size: "s",
          ref: "searchInputRef",
          disabled: _ctx.disabled
        }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("", true)
      ]),
      optionControl: withCtx(({ option, index }) => [
        createVNode(_component_Checkbox, {
          size: "m",
          modelValue: !!_ctx.selected.find((item) => option.label === item.label && option.value === item.value),
          id: `${option.label}-${index}`,
          disabled: option.disabled
        }, null, 8, ["modelValue", "id", "disabled"])
      ]),
      _: 1
    }, 8, ["opened", "onKeydown", "onChange", "options", "no-results", "max-height"]),
    _ctx.caption ? (openBlock(), createElementBlock("p", _hoisted_5$4, toDisplayString(_ctx.caption), 1)) : createCommentVNode("", true)
  ], 2);
}
var Multiselect_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = defineComponent({
  name: "Multiselect",
  components: { Checkbox, Input, Dropdown, Icon },
  props: {
    size: {
      type: String,
      default: "m"
    },
    mode: {
      type: String,
      default: "default",
      validator: (type) => {
        const types = ["default", "sort"];
        return types.includes(type);
      }
    },
    active: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: String,
      default: "310px"
    },
    openOnTop: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:active", "select"],
  setup(props, { emit }) {
    const opened = ref(false);
    const selectRef = ref(null);
    const searchInputRef = ref(null);
    const searchInputValue = ref("");
    const selected = toRef(props, "active");
    const selectClasses = computed(() => {
      var _a;
      return {
        [`${props.size}`]: true,
        [`${props.mode}`]: props.mode !== "default",
        opened: opened.value,
        filled: (_a = props.active) == null ? void 0 : _a.length,
        disabled: props.disabled,
        invalid: props.invalid,
        "open-on-top": props.openOnTop
      };
    });
    const headClasses = computed(() => ({
      [`${props.size}`]: true
    }));
    const filteredOptions = computed(() => {
      return props.searchable ? props.options.filter((opt) => opt.label.toLowerCase().includes(searchInputValue.value.toLowerCase())) : props.options;
    });
    const onChange = (item) => {
      const index = selected.value.findIndex((el2) => el2.label === item.label && el2.value === item.value);
      if (index < 0) {
        selected.value.push(item);
      } else {
        selected.value.splice(index, 1);
      }
      emit("update:active", selected.value);
      emit("select", selected.value);
    };
    const openDropdown = () => {
      if (!props.disabled && !opened.value)
        opened.value = true;
    };
    const toggleDropdown = () => {
      if (!props.disabled)
        opened.value = !opened.value;
    };
    const onClickOutside = (e2) => {
      if (selectRef.value && opened.value && e2.target instanceof Node && e2.target !== selectRef.value && !selectRef.value.contains(e2.target)) {
        opened.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("click", onClickOutside, { capture: true });
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", onClickOutside);
    });
    const onBlur = (event) => {
      var _a;
      searchInputValue.value = "";
      if (!(event.relatedTarget instanceof Element) || !((_a = selectRef.value) == null ? void 0 : _a.contains(event.relatedTarget))) {
        opened.value = false;
      }
    };
    const focusUp = (event) => {
      const option = event.target;
      const previousOption = option.previousElementSibling;
      previousOption == null ? void 0 : previousOption.focus();
    };
    const focusDown = (event) => {
      const option = event.target;
      const nextOption = option.nextElementSibling;
      nextOption == null ? void 0 : nextOption.focus();
    };
    return {
      opened,
      selectRef,
      searchInputRef,
      searchInputValue,
      selected,
      selectClasses,
      headClasses,
      filteredOptions,
      openDropdown,
      toggleDropdown,
      onChange,
      onBlur,
      focusUp,
      focusDown
    };
  }
});
var Multiselect = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", render$b], ["__scopeId", "data-v-6f59c0a5"]]);
class TableDataSource {
  constructor(data, mapper) {
    __publicField(this, "perPage", 0);
    __publicField(this, "offset", 0);
    __publicField(this, "_data");
    this._data = data.map((row, idx) => __spreadProps(__spreadValues({}, row), {
      checked: false,
      _id: idx + 1
    }));
    if (mapper) {
      this._data = this._data.map(mapper);
    }
  }
  get total() {
    return this.tableData.length;
  }
  get tableData() {
    return this._data;
  }
  get pageData() {
    return this.perPage ? this.tableData.slice(this.offset, this.offset + this.perPage) : this.tableData;
  }
  get totalPages() {
    return Math.ceil(this.total / this.perPage);
  }
  get selectedItems() {
    return this._data.filter((row) => row.checked);
  }
  get areAllSelected() {
    return this.tableData.every(({ checked }) => checked);
  }
  selectAll() {
    this._data.forEach((row) => {
      row.checked = true;
    });
  }
  unSelectAll() {
    this._data.forEach((row) => {
      row.checked = false;
    });
  }
  removeRow(id) {
    this._data = this.tableData.filter((row) => row._id !== id);
  }
}
const _hoisted_1$8 = ["disabled"];
const _hoisted_2$7 = ["disabled"];
const _hoisted_3$7 = ["disabled"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return _ctx.type === "control" ? (openBlock(), createElementBlock("button", {
    key: 0,
    class: "pagination-item pagination-control",
    disabled: _ctx.disabled
  }, [
    createVNode(_component_Icon, {
      class: "control-icon",
      name: "ic24-chevron-left"
    })
  ], 8, _hoisted_1$8)) : _ctx.type === "go-to-input" ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(["go-to-input-wrapper", { "invalid-page": _ctx.invalid }]),
    style: normalizeStyle(_ctx.goToInputStyles)
  }, [
    withDirectives(createElementVNode("input", {
      class: "pagination-item go-to-input text-14px-medium",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.goToInputValue = $event),
      onKeypress: [
        _cache[1] || (_cache[1] = withKeys((...args) => _ctx.emitGoTo && _ctx.emitGoTo(...args), ["enter"])),
        _cache[2] || (_cache[2] = (...args) => _ctx.allowOnlyNumberInput && _ctx.allowOnlyNumberInput(...args))
      ]
    }, null, 544), [
      [
        vModelText,
        _ctx.goToInputValue,
        void 0,
        { number: true }
      ]
    ]),
    createElementVNode("button", {
      class: "pagination-item go-to-button text-14px-medium",
      type: "button",
      onClick: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.emitGoTo && _ctx.emitGoTo(...args), ["stop"]))
    }, "Go")
  ], 6)) : _ctx.type === "shifter" ? (openBlock(), createElementBlock("button", {
    key: 2,
    class: normalizeClass(["pagination-item shifter page-number text-14px-medium", _ctx.paginationItemClasses]),
    disabled: _ctx.disabled
  }, [
    createVNode(_component_Icon, {
      class: "shifter-icon",
      name: "ic24-double-chevron-left",
      color: "--gray-900"
    })
  ], 10, _hoisted_2$7)) : (openBlock(), createElementBlock("button", {
    key: 3,
    class: normalizeClass(["pagination-item page-number text-14px-medium", _ctx.paginationItemClasses]),
    disabled: _ctx.current
  }, toDisplayString(_ctx.page), 11, _hoisted_3$7));
}
var PaginationItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = defineComponent({
  name: "PaginationItem",
  components: { Icon },
  emits: ["goto"],
  props: {
    current: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "number"
    },
    page: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const goToInputValue = ref(props.page);
    const paginationItemClasses = computed(() => ({
      current: props.current,
      disabled: props.disabled
    }));
    const goToInputStyles = computed(() => ({
      "--go-to-input-width": `${String(goToInputValue.value).length}ch`
    }));
    const resetGoToInputValue = () => {
      goToInputValue.value = props.page;
    };
    watch(() => props.page, resetGoToInputValue);
    const allowOnlyNumberInput = (event) => {
      if (event.key !== "Enter" && Number.isNaN(Number(event.key)) || event.code === "Space")
        event.preventDefault();
    };
    const emitGoTo = () => {
      emit("goto", Number(goToInputValue.value));
    };
    return {
      paginationItemClasses,
      goToInputValue,
      goToInputStyles,
      allowOnlyNumberInput,
      resetGoToInputValue,
      emitGoTo
    };
  }
});
var PaginationItem = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", render$a], ["__scopeId", "data-v-79d4d8d2"]]);
const _hoisted_1$7 = { class: "pagination" };
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PaginationItem = resolveComponent("PaginationItem");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    createVNode(_component_PaginationItem, {
      type: "control",
      onClick: _ctx.decrementPage,
      disabled: !_ctx.canDecrementPage
    }, null, 8, ["onClick", "disabled"]),
    _ctx.total > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      _ctx.currentPage === 1 ? (openBlock(), createBlock(_component_PaginationItem, {
        key: 0,
        type: "number",
        current: "",
        onGoto: _ctx.onGoTo,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.setPage(1)),
        page: 1,
        invalid: _ctx.invalidPage
      }, null, 8, ["onGoto", "invalid"])) : (openBlock(), createBlock(_component_PaginationItem, {
        key: 1,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setPage(1)),
        page: 1
      }))
    ], 64)) : createCommentVNode("", true),
    _ctx.hasMoreItemsLeft && _ctx.total > _ctx.maxVisibleItems ? (openBlock(), createBlock(_component_PaginationItem, {
      key: 1,
      type: "shifter",
      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.shiftBy(-_ctx.shift)),
      disabled: !_ctx.canShiftToLeft || _ctx.shift < 1
    }, null, 8, ["disabled"])) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.visiblePageNumbers, (page) => {
      return openBlock(), createElementBlock(Fragment, { key: page }, [
        page === _ctx.currentPage ? (openBlock(), createBlock(_component_PaginationItem, {
          key: 0,
          type: "number",
          current: "",
          onGoto: _ctx.onGoTo,
          onClick: ($event) => _ctx.setPage(page),
          page,
          invalid: _ctx.invalidPage
        }, null, 8, ["onGoto", "onClick", "page", "invalid"])) : (openBlock(), createBlock(_component_PaginationItem, {
          key: 1,
          onClick: ($event) => _ctx.setPage(page),
          page
        }, null, 8, ["onClick", "page"]))
      ], 64);
    }), 128)),
    _ctx.hasMoreItemsRight && _ctx.total > _ctx.maxVisibleItems ? (openBlock(), createBlock(_component_PaginationItem, {
      key: 2,
      class: "right-icon",
      type: "shifter",
      "right-icon": "",
      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.shiftBy(_ctx.shift)),
      disabled: !_ctx.canShiftToRight || _ctx.shift < 1
    }, null, 8, ["disabled"])) : createCommentVNode("", true),
    _ctx.total > 1 ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      _ctx.currentPage === _ctx.total ? (openBlock(), createBlock(_component_PaginationItem, {
        key: 0,
        type: "number",
        current: "",
        onGoto: _ctx.onGoTo,
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.setPage(_ctx.total)),
        page: _ctx.total,
        invalid: _ctx.invalidPage
      }, null, 8, ["onGoto", "page", "invalid"])) : (openBlock(), createBlock(_component_PaginationItem, {
        key: 1,
        onClick: _cache[5] || (_cache[5] = ($event) => _ctx.setPage(_ctx.total)),
        page: _ctx.total
      }, null, 8, ["page"]))
    ], 64)) : createCommentVNode("", true),
    createVNode(_component_PaginationItem, {
      class: "right-icon",
      type: "control",
      "right-icon": "",
      onClick: _ctx.incrementPage,
      disabled: !_ctx.canIncrementPage
    }, null, 8, ["onClick", "disabled"])
  ]);
}
var Pagination_vue_vue_type_style_index_0_scoped_true_lang = "";
const validatorOnNaN = (value) => {
  const valueIsNaN = Number.isNaN(value);
  if (valueIsNaN)
    console.error(`Prop value is NaN`);
  return !valueIsNaN;
};
const DEFAULT_DICTIONARY = {
  shiftLeft: "Previous 10 pages",
  shiftRight: "Next 10 pages",
  nextPage: "Next page",
  previousPage: "Previous page",
  goToFirstPage: "First page",
  goToLastPage: "Last page",
  invalidPage: "Invalid page"
};
const _sfc_main$9 = defineComponent({
  name: "Pagination",
  components: { PaginationItem },
  emits: ["update:currentPage"],
  props: {
    currentPage: {
      type: Number,
      default: 1,
      validator: validatorOnNaN
    },
    total: {
      type: Number,
      default: 1,
      validator: validatorOnNaN
    },
    maxVisible: {
      type: Number,
      default: 5,
      validator: validatorOnNaN
    },
    shift: {
      type: Number,
      default: 10,
      validator: validatorOnNaN
    },
    dict: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const ACTIVE_ITEM_OFFSET = 2;
    const invalidPage = ref(false);
    const dictionary = computed(() => __spreadValues(__spreadValues({}, DEFAULT_DICTIONARY), props.dict));
    const maxVisibleItems = computed(() => props.maxVisible >= 5 ? props.maxVisible : 5);
    const canDecrementPage = computed(() => props.currentPage - 1 > 0);
    const canIncrementPage = computed(() => props.currentPage + 1 <= props.total);
    const canShiftToLeft = computed(() => props.currentPage - props.shift > 0);
    const canShiftToRight = computed(() => props.currentPage + props.shift <= props.total);
    const allItemsFit = computed(() => props.total <= maxVisibleItems.value);
    const hasMoreItemsLeft = computed(() => !allItemsFit.value && pageNumberBoundaries.value.lowest > 2);
    const hasMoreItemsRight = computed(() => !allItemsFit.value && pageNumberBoundaries.value.highest !== props.total - 1);
    const visibleInMiddle = computed(() => maxVisibleItems.value - 2);
    watch(() => props.total, () => {
      if (props.currentPage > props.total) {
        setPage(props.total);
      } else if (props.currentPage === 0 && props.total > 0) {
        setPage(1);
      }
    });
    const range2 = (from, count) => Array.from(Array(count), (empty2, index) => index + from);
    const pageNumberBoundaries = computed(() => {
      const isTail = props.total - props.currentPage < Math.floor(maxVisibleItems.value / 2);
      const firstMiddlePage = 2;
      const lastMiddlePage = props.total - 1;
      const lowest = props.currentPage + ACTIVE_ITEM_OFFSET - Math.ceil(visibleInMiddle.value / 2);
      const highest = lowest + Math.floor(visibleInMiddle.value / 2);
      if (allItemsFit.value) {
        return {
          lowest: firstMiddlePage,
          highest: lastMiddlePage
        };
      }
      if (isTail) {
        return {
          lowest: props.total - visibleInMiddle.value + 1,
          highest: lastMiddlePage
        };
      }
      return {
        lowest: lowest > 1 ? lowest : firstMiddlePage,
        highest: highest < props.total ? highest : lastMiddlePage
      };
    });
    const visiblePageNumbers = computed(() => {
      const pageNumbersInMiddle = visibleInMiddle.value - Number(hasMoreItemsLeft.value) - Number(hasMoreItemsRight.value);
      const defaultValue = props.total - 2 > 0 ? props.total - 2 : 0;
      const count = allItemsFit.value ? defaultValue : pageNumbersInMiddle;
      return range2(pageNumberBoundaries.value.lowest, count);
    });
    const decrementPage = () => {
      if (canDecrementPage.value) {
        setPage(props.currentPage - 1);
      }
    };
    const incrementPage = () => {
      if (canIncrementPage.value) {
        setPage(props.currentPage + 1);
      }
    };
    const setPage = (page) => {
      if (invalidPage.value)
        invalidPage.value = false;
      emit("update:currentPage", page);
    };
    const onGoTo = (page) => {
      const isValidPage = page !== 0 && page <= props.total;
      if (isValidPage)
        setPage(page);
      else
        invalidPage.value = true;
    };
    const shiftBy = (shift) => {
      setPage(props.currentPage + shift);
    };
    return {
      dictionary,
      invalidPage,
      canDecrementPage,
      canIncrementPage,
      canShiftToLeft,
      canShiftToRight,
      hasMoreItemsRight,
      hasMoreItemsLeft,
      visiblePageNumbers,
      pageNumberBoundaries,
      maxVisibleItems,
      visibleInMiddle,
      allItemsFit,
      decrementPage,
      incrementPage,
      setPage,
      onGoTo,
      shiftBy
    };
  }
});
var Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", render$9], ["__scopeId", "data-v-139a5039"]]);
const _hoisted_1$6 = {
  key: 0,
  class: "label caption-13px-medium"
};
const _hoisted_2$6 = ["tabindex"];
const _hoisted_3$6 = {
  key: 0,
  class: "label text-14px-medium"
};
const _hoisted_4$4 = ["value", "tabindex", "readonly", "placeholder", "disabled"];
const _hoisted_5$3 = {
  key: 1,
  class: "caption text-12px-regular"
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_Icon = resolveComponent("Icon");
  const _component_Shine = resolveComponent("Shine");
  const _component_Dropdown = resolveComponent("Dropdown");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["select", _ctx.selectClasses]),
    ref: "select"
  }, [
    _ctx.label && _ctx.mode !== "sort" ? (openBlock(), createElementBlock("label", _hoisted_1$6, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass(["select-head text-14px-regular", _ctx.headClasses]),
      onKeyup: _cache[4] || (_cache[4] = withKeys((...args) => _ctx.openDropdown && _ctx.openDropdown(...args), ["tab"])),
      onKeypress: _cache[5] || (_cache[5] = withKeys((...args) => _ctx.toggleDropdown && _ctx.toggleDropdown(...args), ["enter", "space"])),
      onClick: _cache[6] || (_cache[6] = (...args) => _ctx.toggleDropdown && _ctx.toggleDropdown(...args)),
      tabindex: _ctx.disabled ? -1 : 0
    }, [
      !_ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.label && _ctx.mode === "sort" ? (openBlock(), createElementBlock("label", _hoisted_3$6, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
        createElementVNode("input", {
          class: normalizeClass(["select-input text-14px-regular", { searchable: _ctx.searchable }]),
          ref: "searchInputRef",
          onKeypress: _cache[0] || (_cache[0] = withKeys(withModifiers((...args) => _ctx.onEnter && _ctx.onEnter(...args), ["stop", "prevent"]), ["enter"])),
          onInput: _cache[1] || (_cache[1] = (...args) => _ctx.onSearch && _ctx.onSearch(...args)),
          onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
          onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
          value: _ctx.searchable ? _ctx.searchInputValue : (_a = _ctx.active) == null ? void 0 : _a.label,
          tabindex: _ctx.searchable ? 0 : -1,
          readonly: !_ctx.searchable,
          placeholder: _ctx.placeholder,
          disabled: _ctx.disabled
        }, null, 42, _hoisted_4$4),
        createVNode(_component_Icon, {
          class: "arrow-icon",
          name: _ctx.mode === "sort" ? "ic24-sort" : "ic24-chevron-less-small"
        }, null, 8, ["name"])
      ], 64)) : (openBlock(), createBlock(_component_Shine, { key: 1 }))
    ], 42, _hoisted_2$6),
    createVNode(_component_Dropdown, {
      opened: _ctx.opened,
      "onUpdate:opened": _cache[7] || (_cache[7] = ($event) => _ctx.opened = $event),
      onKeydown: [
        withKeys(withModifiers(_ctx.focusUp, ["prevent"]), ["up"]),
        withKeys(withModifiers(_ctx.focusDown, ["prevent"]), ["down"])
      ],
      onChange: _ctx.onChange,
      options: _ctx.filteredOptions,
      "no-results": !_ctx.filteredOptions.length,
      "max-height": _ctx.maxHeight,
      active: _ctx.active
    }, null, 8, ["opened", "onKeydown", "onChange", "options", "no-results", "max-height", "active"]),
    _ctx.caption ? (openBlock(), createElementBlock("p", _hoisted_5$3, toDisplayString(_ctx.caption), 1)) : createCommentVNode("", true)
  ], 2);
}
var Select_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = defineComponent({
  name: "Select",
  components: {
    Input,
    Dropdown,
    Icon,
    Shine
  },
  props: {
    size: {
      type: String,
      default: "m"
    },
    mode: {
      type: String,
      default: "default",
      validator: (type) => {
        const types = ["default", "sort"];
        return types.includes(type);
      }
    },
    active: {
      type: Object,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: String,
      default: "310px"
    },
    openOnTop: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:active", "select"],
  setup(props, { emit }) {
    var _a;
    const searchInputRef = ref(null);
    const searchInputValue = ref(((_a = props.active) == null ? void 0 : _a.label) || "");
    const opened = ref(false);
    const select = ref(null);
    const selectClasses = computed(() => {
      var _a2;
      return {
        [`${props.size}`]: true,
        [`${props.mode}`]: props.mode !== "default",
        searchable: props.searchable,
        opened: opened.value,
        filled: ((_a2 = props.active) == null ? void 0 : _a2.value) !== null,
        disabled: props.disabled,
        invalid: props.invalid,
        "open-on-top": props.openOnTop
      };
    });
    const headClasses = computed(() => ({
      [`${props.size}`]: true
    }));
    const filteredOptions = computed(() => {
      var _a2;
      const isInputChanged = ((_a2 = props.active) == null ? void 0 : _a2.label) !== searchInputValue.value;
      return props.searchable && isInputChanged ? props.options.filter((opt) => opt.label.toLowerCase().includes(searchInputValue.value.toLowerCase())) : props.options;
    });
    const onChange = (item) => {
      searchInputValue.value = item == null ? void 0 : item.label;
      emit("update:active", item);
      emit("select", item);
      closeDropdown();
    };
    const openDropdown = () => {
      if (!props.disabled && !opened.value)
        opened.value = true;
    };
    const toggleDropdown = () => {
      if (!props.disabled)
        opened.value = !opened.value;
    };
    const closeDropdown = () => {
      opened.value = false;
    };
    const resetState = () => {
      var _a2;
      closeDropdown();
      searchInputValue.value = ((_a2 = props.active) == null ? void 0 : _a2.label) || "";
    };
    const onClickOutside = (e2) => {
      if (select.value && opened.value && e2.target instanceof Node && e2.target !== select.value && !select.value.contains(e2.target))
        resetState();
    };
    onMounted(() => {
      document.addEventListener("click", onClickOutside, { capture: true });
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", onClickOutside);
    });
    watch(() => props.active, () => {
      if (props.searchable) {
        nextTick(resetState);
      }
    });
    const onBlur = (event) => {
      var _a2;
      if (!(event.relatedTarget instanceof Element) || !((_a2 = select.value) == null ? void 0 : _a2.contains(event.relatedTarget)))
        resetState();
    };
    const onSearch = (event) => {
      if (!opened.value)
        opened.value = true;
      searchInputValue.value = event.target.value;
    };
    const onFocus = () => {
      var _a2;
      if (props.searchable) {
        (_a2 = searchInputRef.value) == null ? void 0 : _a2.select();
      }
    };
    const onEnter = () => {
      if (filteredOptions.value.length === props.options.length)
        return;
      emit("update:active", filteredOptions.value[0]);
      emit("select", filteredOptions.value[0]);
    };
    const focusUp = (event) => {
      const option = event.target;
      const previousOption = option.previousElementSibling;
      previousOption == null ? void 0 : previousOption.focus();
    };
    const focusDown = (event) => {
      const option = event.target;
      const nextOption = option.nextElementSibling;
      nextOption == null ? void 0 : nextOption.focus();
    };
    return {
      selectClasses,
      headClasses,
      searchInputRef,
      searchInputValue,
      opened,
      select,
      filteredOptions,
      openDropdown,
      toggleDropdown,
      onChange,
      onBlur,
      onSearch,
      onFocus,
      onEnter,
      focusUp,
      focusDown,
      resetState
    };
  }
});
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", render$8], ["__scopeId", "data-v-0edfb38c"]]);
const _hoisted_1$5 = { class: "client-pagination" };
const _hoisted_2$5 = { class: "grid grid_gap_16" };
const _hoisted_3$5 = { class: "grid-6-12 grid-sm-12-12 left-block" };
const _hoisted_4$3 = { class: "grid-6-12 grid-sm-12-12 right-block" };
const _hoisted_5$2 = { class: "pagination-info caption-13px-medium" };
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Select = resolveComponent("Select");
  const _component_Pagination = resolveComponent("Pagination");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createElementVNode("div", _hoisted_2$5, [
      createElementVNode("div", _hoisted_3$5, [
        _ctx.dataSource.totalPages > _ctx.dataSource.perPage ? (openBlock(), createBlock(_component_Select, {
          key: 0,
          active: _ctx.perPageCount,
          "onUpdate:active": _cache[0] || (_cache[0] = ($event) => _ctx.perPageCount = $event),
          mode: "sort",
          label: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C:",
          onSelect: _ctx.handlePerPageSelect,
          options: _ctx.perPageOptions,
          openOnTop: true
        }, null, 8, ["active", "onSelect", "options"])) : createCommentVNode("", true)
      ]),
      createElementVNode("div", _hoisted_4$3, [
        createVNode(Transition, {
          name: "fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            createElementVNode("span", _hoisted_5$2, toDisplayString(_ctx.tableData.offset + 1) + "-" + toDisplayString(_ctx.tableData.offset + _ctx.tableData.pageData.length) + " \u0438\u0437 " + toDisplayString(_ctx.tableData.total), 1)
          ]),
          _: 1
        }),
        _ctx.dataSource.total > _ctx.dataSource.perPage ? (openBlock(), createBlock(_component_Pagination, {
          key: 0,
          currentPage: _ctx.currentPage,
          "onUpdate:currentPage": _cache[1] || (_cache[1] = ($event) => _ctx.currentPage = $event),
          total: _ctx.dataSource.totalPages
        }, null, 8, ["currentPage", "total"])) : createCommentVNode("", true)
      ])
    ])
  ]);
}
var ClientPagination_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = defineComponent({
  name: "ClientPagination",
  components: { Select, Pagination },
  props: {
    perPage: {
      type: Number,
      default: 20
    },
    offset: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    dataSource: {
      type: Object,
      default: new TableDataSource([])
    }
  },
  setup(props, { emit }) {
    const currentPage = ref(1);
    const tableData = reactive(props.dataSource);
    tableData.perPage = toRef(props, "perPage").value;
    const perPageOptions = [
      { label: `\u043F\u043E ${tableData.perPage}`, value: tableData.perPage },
      { label: "\u0412\u0441\u0435", value: tableData.total }
    ];
    const perPageCount = ref(perPageOptions[0]);
    watch(() => currentPage.value, (page) => {
      const offset2 = (page - 1) * tableData.perPage;
      tableData.offset = offset2;
      emit("changePage");
    });
    const handlePerPageSelect = (event) => {
      currentPage.value = 1;
      tableData.perPage = event.value;
      emit("changePage");
    };
    return { perPageCount, perPageOptions, currentPage, tableData, handlePerPageSelect };
  }
});
var ClientPagination = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", render$7], ["__scopeId", "data-v-7d6fb0f1"]]);
const _hoisted_1$4 = { class: "server-pagination" };
const _hoisted_2$4 = { class: "grid grid_gap_16" };
const _hoisted_3$4 = { class: "grid-6-12 grid-sm-12-12 left-block" };
const _hoisted_4$2 = { class: "grid-6-12 grid-sm-12-12 right-block" };
const _hoisted_5$1 = { class: "pagination-info caption-13px-medium" };
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Select = resolveComponent("Select");
  const _component_Pagination = resolveComponent("Pagination");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$4, [
      createElementVNode("div", _hoisted_3$4, [
        createVNode(_component_Select, {
          active: _ctx.activePerPage,
          "onUpdate:active": _cache[0] || (_cache[0] = ($event) => _ctx.activePerPage = $event),
          mode: "sort",
          label: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C:",
          onSelect: _ctx.handlePerPageSelect,
          options: _ctx.perPageOptions,
          openOnTop: true
        }, null, 8, ["active", "onSelect", "options"])
      ]),
      createElementVNode("div", _hoisted_4$2, [
        createVNode(Transition, {
          name: "fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            createElementVNode("span", _hoisted_5$1, toDisplayString(_ctx.offset + 1) + "-" + toDisplayString(_ctx.offset + _ctx.list.length) + " \u0438\u0437 " + toDisplayString(_ctx.total), 1)
          ]),
          _: 1
        }),
        _ctx.total > _ctx.perPage ? (openBlock(), createBlock(_component_Pagination, {
          key: 0,
          currentPage: _ctx.currentPage,
          "onUpdate:currentPage": _cache[1] || (_cache[1] = ($event) => _ctx.currentPage = $event),
          total: _ctx.totalPage
        }, null, 8, ["currentPage", "total"])) : createCommentVNode("", true)
      ])
    ])
  ]);
}
var ServerPagination_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = defineComponent({
  name: "ServerPagination",
  components: { Select, Pagination },
  props: {
    perPage: {
      type: Number,
      default: 20
    },
    offset: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    },
    isPossibleSelectAll: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const currentPage = ref(1);
    const totalPage = computed(() => {
      return Math.ceil(props.total / props.perPage);
    });
    const perPage = props.perPage;
    const perPageOptions = computed(() => {
      const options = [
        { label: `\u043F\u043E ${perPage * 5}`, value: perPage * 5 },
        { label: `\u043F\u043E ${perPage}`, value: perPage }
      ];
      props.isPossibleSelectAll && options.push({ label: "\u0412\u0441\u0435", value: props.total });
      return options;
    });
    const activePerPage = computed(() => {
      return perPageOptions.value[perPageOptions.value.findIndex((el2) => el2.value === props.perPage)];
    });
    watch(() => currentPage.value, (page) => {
      emit("changePage", {
        offset: (page - 1) * props.perPage,
        perPage: props.perPage
      });
    });
    const handlePerPageSelect = (event) => {
      emit("changePage", {
        offset: 0,
        perPage: event.value
      });
    };
    return { totalPage, activePerPage, perPageOptions, currentPage, handlePerPageSelect };
  }
});
var ServerPagination = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", render$6], ["__scopeId", "data-v-3a5cc407"]]);
const timer = ref(0);
const progressState = reactive({
  percent: 0,
  show: false,
  canSuccess: true
});
function useProgressBar(duration = 3e3) {
  const cut = computed(() => 1e4 / Math.floor(duration));
  const start2 = () => {
    progressState.show = true;
    progressState.canSuccess = true;
    if (timer.value) {
      clearInterval(timer.value);
      progressState.percent = 0;
    }
    timer.value = setInterval(() => {
      increase(cut.value * Math.random());
      if (progressState.percent > 95) {
        finish();
      }
    }, 100);
  };
  const increase = (num2) => {
    progressState.percent = progressState.percent + Math.floor(num2);
  };
  const finish = () => {
    progressState.percent = 100;
    hide2();
  };
  const hide2 = () => {
    clearInterval(timer.value);
    timer.value = 0;
    setTimeout(() => {
      progressState.show = false;
      setTimeout(() => progressState.percent = 0, 200);
    }, 500);
  };
  const fail = () => {
    progressState.canSuccess = false;
    progressState.percent = 100;
    hide2();
  };
  return {
    percent: computed(() => progressState.percent),
    show: computed(() => progressState.show),
    canSuccess: computed(() => progressState.canSuccess),
    start: start2,
    finish,
    fail
  };
}
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "progress",
    style: normalizeStyle({ width: _ctx.percent + "%", height: _ctx.height, "background-color": _ctx.canSuccess ? _ctx.color : _ctx.failedColor, opacity: _ctx.show ? 1 : 0 })
  }, null, 4);
}
var ProgressBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = defineComponent({
  name: "ProgressBar",
  props: {
    height: {
      type: String,
      default: "2px"
    },
    color: {
      type: String,
      default: "#393d43"
    },
    failedColor: {
      type: String,
      default: "#ff0000"
    }
  },
  setup() {
    const { percent, canSuccess, show, start: start2, finish, fail } = useProgressBar();
    return { percent, canSuccess, show, start: start2, finish, fail };
  }
});
var ProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", render$5], ["__scopeId", "data-v-5071d4bc"]]);
const _hoisted_1$3 = {
  key: 0,
  class: "sui-tooltip",
  role: "tooltip"
};
const _hoisted_2$3 = { class: "sui-tooltip-message text-12px-regular" };
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("div", {
  class: "sui-tooltip-arrow",
  "data-popper-arrow": ""
}, null, -1);
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.show ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$3, toDisplayString(_ctx.message), 1),
    _hoisted_3$3
  ])) : createCommentVNode("", true);
}
var Tooltip_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = defineComponent({
  name: "Tooltip",
  inheritAttrs: false,
  props: {
    message: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", render$4]]);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node2) {
  if (node2 == null) {
    return window;
  }
  if (node2.toString() !== "[object Window]") {
    var ownerDocument = node2.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node2;
}
function isElement(node2) {
  var OwnElement = getWindow(node2).Element;
  return node2 instanceof OwnElement || node2 instanceof Element;
}
function isHTMLElement(node2) {
  var OwnElement = getWindow(node2).HTMLElement;
  return node2 instanceof OwnElement || node2 instanceof HTMLElement;
}
function isShadowRoot(node2) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node2).ShadowRoot;
  return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect2 = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect2.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect2.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect2.width / scaleX,
    height: rect2.height / scaleY,
    top: rect2.top / scaleY,
    right: rect2.right / scaleX,
    bottom: rect2.bottom / scaleY,
    left: rect2.left / scaleX,
    x: rect2.left / scaleX,
    y: rect2.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node2) {
  var win = getWindow(node2);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node2) {
  if (["html", "body", "#document"].indexOf(getNodeName(node2)) >= 0) {
    return node2.ownerDocument.body;
  }
  if (isHTMLElement(node2) && isScrollParent(node2)) {
    return node2;
  }
  return getScrollParent(getParentNode(node2));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target2 = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target2);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target2)));
}
function rectToClientRect(rect2) {
  return Object.assign({}, rect2, {
    left: rect2.x,
    top: rect2.y,
    right: rect2.x + rect2.width,
    bottom: rect2.y + rect2.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect2 = getBoundingClientRect(element);
  rect2.top = rect2.top + element.clientTop;
  rect2.left = rect2.left + element.clientLeft;
  rect2.bottom = rect2.top + element.clientHeight;
  rect2.right = rect2.left + element.clientWidth;
  rect2.width = element.clientWidth;
  rect2.height = element.clientHeight;
  rect2.x = rect2.left;
  rect2.y = rect2.top;
  return rect2;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle$1(clippingParent).position !== "static" : true);
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect2 = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect2.top, accRect.top);
    accRect.right = min(rect2.right, accRect.right);
    accRect.bottom = min(rect2.bottom, accRect.bottom);
    accRect.left = max(rect2.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b) {
    return overflows[a2] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check2) {
      return check2;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check2) {
            return check2;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect2, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect2.height - preventedOffsets.y,
    right: overflow.right - rect2.width + preventedOffsets.x,
    bottom: overflow.bottom - rect2.height + preventedOffsets.y,
    left: overflow.left - rect2.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset$1(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$2 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset$1
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node2) {
  if (node2 === getWindow(node2) || !isHTMLElement(node2)) {
    return getWindowScroll(node2);
  } else {
    return getHTMLElementScroll(node2);
  }
}
function isElementScaled(element) {
  var rect2 = element.getBoundingClientRect();
  var scaleX = round(rect2.width) / element.offsetWidth || 1;
  var scaleY = round(rect2.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect2 = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect2.left + scroll.scrollLeft - offsets.x,
    y: rect2.top + scroll.scrollTop - offsets.y,
    width: rect2.width,
    height: rect2.height
  };
}
function order(modifiers) {
  var map2 = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map2.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$2, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
const tooltipDataMap = new WeakMap();
const showTooltip = (tooltipOwner) => {
  const tooltipData = tooltipDataMap.get(tooltipOwner);
  if (!tooltipData || !tooltipData.message)
    return;
  const tooltip = Tooltip.render({ show: true, message: tooltipData.message });
  requestAnimationFrame(() => {
    render$C(tooltip, tooltipOwner.parentNode);
    tooltipData.popper = initPopper(tooltip.el, tooltipOwner);
  });
};
const hideTooltip = (tooltipOwner) => {
  const tooltipData = tooltipDataMap.get(tooltipOwner);
  if (!tooltipData)
    return;
  const tooltip = Tooltip.render({ show: false });
  requestAnimationFrame(() => {
    var _a;
    render$C(tooltip, tooltipOwner.parentNode);
    (_a = tooltipData.popper) == null ? void 0 : _a.destroy();
  });
};
const initPopper = (tooltip, tooltipOwner) => {
  return createPopper(tooltipOwner, tooltip, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10]
        }
      }
    ]
  });
};
const observeDisabledAttribute = (tooltipOwner) => {
  const disabledAttributeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.oldValue === null)
        hideTooltip(tooltipOwner);
    });
  });
  disabledAttributeObserver.observe(tooltipOwner, {
    attributes: true,
    attributeFilter: ["disabled"],
    attributeOldValue: true
  });
  return disabledAttributeObserver;
};
const tooltipDirective = {
  mounted(tooltipOwner, binding) {
    const tooltip = Tooltip.render({ show: false });
    render$C(tooltip, tooltipOwner.parentNode);
    tooltipDataMap.set(tooltipOwner, {
      mutationObserver: observeDisabledAttribute(tooltipOwner),
      popper: null,
      message: binding.value
    });
    tooltipOwner.addEventListener("mouseover", showTooltip.bind(null, tooltipOwner));
    tooltipOwner.addEventListener("mouseleave", hideTooltip.bind(null, tooltipOwner));
  },
  beforeUpdate(tooltipOwner, binding) {
    var _a;
    const tooltipObject = tooltipDataMap.get(tooltipOwner);
    if (!tooltipObject)
      return;
    if (tooltipObject.message !== binding.value) {
      tooltipObject.message = binding.value;
      (_a = tooltipObject.popper) == null ? void 0 : _a.update();
    }
  },
  beforeUnmount(tooltipOwner) {
    var _a;
    const tooltipObject = tooltipDataMap.get(tooltipOwner);
    if (!tooltipObject)
      return;
    tooltipObject.mutationObserver.disconnect();
    (_a = tooltipObject.popper) == null ? void 0 : _a.destroy();
    tooltipOwner.removeEventListener("mouseover", showTooltip);
    tooltipOwner.removeEventListener("mouseleave", hideTooltip);
  }
};
const _hoisted_1$2 = { class: "table-wrapper" };
const _hoisted_2$2 = { class: "table" };
const _hoisted_3$2 = { key: 0 };
const _hoisted_4$1 = { class: "table__row-header" };
const _hoisted_5 = {
  key: 0,
  class: "table__head table__head--checkbox fit"
};
const _hoisted_6 = { class: "table__head-data" };
const _hoisted_7 = { class: "table__head-data head-data" };
const _hoisted_8 = { class: "head-data__content" };
const _hoisted_9 = { class: "text-14px-medium" };
const _hoisted_10 = {
  key: 0,
  class: "text-12px-medium"
};
const _hoisted_11 = {
  key: 0,
  class: "head-data__info"
};
const _hoisted_12 = { class: "table-body" };
const _hoisted_13 = ["onClick"];
const _hoisted_14 = {
  key: 0,
  class: "table__data table__data--checkbox fit"
};
const _hoisted_15 = { class: "table__data-content" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = { class: "table__data-content" };
const _hoisted_18 = {
  key: 1,
  class: "table__value text-14px-regular"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_Icon = resolveComponent("Icon");
  const _directive_tooltip = resolveDirective("tooltip");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("table", _hoisted_2$2, [
      _ctx.withHead ? (openBlock(), createElementBlock("thead", _hoisted_3$2, [
        createElementVNode("tr", _hoisted_4$1, [
          _ctx.withSelect ? (openBlock(), createElementBlock("th", _hoisted_5, [
            createElementVNode("div", _hoisted_6, [
              createElementVNode("div", {
                class: "table-control-button",
                onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.toggleAllOnPage && _ctx.toggleAllOnPage(...args), ["stop", "prevent"]))
              }, [
                createVNode(_component_Checkbox, {
                  id: "selection-checkbox-head",
                  modelValue: _ctx.dataSource.areAllSelected,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.dataSource.areAllSelected = $event)
                }, null, 8, ["modelValue"])
              ])
            ])
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
            return openBlock(), createElementBlock("th", {
              class: "table__head text-14px-medium",
              style: normalizeStyle(_ctx.getColumnStyle(column)),
              key: column.name
            }, [
              createElementVNode("div", _hoisted_7, [
                createElementVNode("div", _hoisted_8, [
                  createElementVNode("h4", _hoisted_9, toDisplayString(column.label), 1),
                  column.subLabel ? (openBlock(), createElementBlock("small", _hoisted_10, toDisplayString(column.subLabel), 1)) : createCommentVNode("", true)
                ]),
                column.info ? withDirectives((openBlock(), createElementBlock("div", _hoisted_11, [
                  createVNode(_component_Icon, { name: "ic24-info" })
                ], 512)), [
                  [_directive_tooltip, column.info]
                ]) : createCommentVNode("", true)
              ])
            ], 4);
          }), 128))
        ])
      ])) : createCommentVNode("", true),
      createElementVNode("tbody", _hoisted_12, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (row, rowIdx) => {
          return openBlock(), createElementBlock("tr", {
            class: normalizeClass(["table__row", { "row-as-link": _ctx.rowsAsLinks }]),
            onClick: withModifiers(($event) => _ctx.$emit("rowClick", row), ["stop"]),
            key: _ctx.keyField ? row[_ctx.keyField] : rowIdx
          }, [
            _ctx.withSelect ? (openBlock(), createElementBlock("td", _hoisted_14, [
              createElementVNode("div", _hoisted_15, [
                createElementVNode("div", {
                  class: "table-control-button",
                  onClick: withModifiers(($event) => row.checked = !row.checked, ["stop", "prevent"])
                }, [
                  createVNode(_component_Checkbox, {
                    modelValue: row.checked,
                    "onUpdate:modelValue": ($event) => row.checked = $event,
                    id: `selection-checkbox-${rowIdx}`
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "id"])
                ], 8, _hoisted_16)
              ])
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (cell) => {
              return openBlock(), createElementBlock("td", {
                class: "table__data",
                style: normalizeStyle(_ctx.getColumnStyle(cell)),
                key: cell.name
              }, [
                createElementVNode("div", _hoisted_17, [
                  cell.slot ? renderSlot(_ctx.$slots, cell.name, {
                    key: 0,
                    row,
                    index: rowIdx
                  }, void 0, true) : (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(row[cell.name]), 1))
                ])
              ], 4);
            }), 128))
          ], 10, _hoisted_13);
        }), 128))
      ])
    ])
  ]);
}
var Table_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = defineComponent({
  name: "Table",
  components: { Icon, Checkbox },
  directives: { Tooltip: tooltipDirective },
  emits: ["rowClick"],
  props: {
    keyField: {
      type: String
    },
    dataSource: {
      type: Object,
      default: new TableDataSource([])
    },
    columns: {
      type: Array,
      default: () => []
    },
    withHead: {
      type: Boolean,
      default: true
    },
    withSelect: {
      type: Boolean,
      default: false
    },
    rowsAsLinks: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const rows = computed(() => {
      return props.dataSource.pageData;
    });
    const toggleAllOnPage = () => {
      if (props.dataSource.areAllSelected) {
        props.dataSource.unSelectAll();
      } else {
        props.dataSource.selectAll();
      }
    };
    const getColumnStyle = (column) => {
      const fillingColumns = props.columns.filter(({ columnBehavior }) => columnBehavior === "fill").length;
      switch (column.columnBehavior) {
        case "fill":
          return `width: ${Math.round((100 - (props.columns.length - fillingColumns)) / fillingColumns)}%;`;
        case "fit":
          return "width: 1%;";
        default:
          return "";
      }
    };
    return { rows, toggleAllOnPage, getColumnStyle };
  }
});
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3], ["__scopeId", "data-v-57f1a4fc"]]);
const _hoisted_1$1 = { class: "tabs-wrapper" };
const _hoisted_2$1 = {
  class: "tabs",
  role: "tablist"
};
const _hoisted_3$1 = ["onClick", "disabled"];
const _hoisted_4 = { class: "tab-content" };
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", _hoisted_2$1, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, i2) => {
        return openBlock(), createElementBlock("button", {
          class: normalizeClass(["tab", { active: i2 === _ctx.activeItem, [`${_ctx.size}`]: true }]),
          onClick: ($event) => _ctx.onItemClick(i2, item),
          ref: i2 === _ctx.activeItem ? "activeTabRef" : null,
          key: item.title,
          disabled: item.disabled
        }, [
          i2 === 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "marker",
            style: normalizeStyle({ transform: `translateX(${_ctx.tabTranslate}px)`, width: `${_ctx.activeTabWidth}px` })
          }, null, 4)) : createCommentVNode("", true),
          createElementVNode("span", _hoisted_4, [
            item.icon ? (openBlock(), createBlock(_component_Icon, mergeProps({
              key: 0,
              class: "tab-icon"
            }, __spreadValues({}, item.icon)), null, 16)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: normalizeClass(["tab-title", _ctx.size === "l" ? "caption-16px-medium" : "caption-14px-medium"])
            }, toDisplayString(item.title), 3)
          ])
        ], 10, _hoisted_3$1);
      }), 128))
    ]),
    renderSlot(_ctx.$slots, "actions", {}, void 0, true)
  ]);
}
var Tabs_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = defineComponent({
  name: "Tabs",
  emits: ["update:activeItem", "change"],
  props: {
    activeItem: {
      type: Number,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "m"
    }
  },
  components: { Icon },
  setup(props, { emit }) {
    const activeTabRef = ref(null);
    const tabTranslate = ref(0);
    const activeTabWidth = computed(() => {
      var _a;
      return (_a = activeTabRef.value) == null ? void 0 : _a.offsetWidth;
    });
    watch(activeTabRef, (value) => {
      nextTick(() => tabTranslate.value = (value == null ? void 0 : value.offsetLeft) || 0);
    });
    const onItemClick = (index, item) => {
      if (props.activeItem === index) {
        return;
      }
      emit("update:activeItem", index);
      emit("change", item, index);
    };
    return {
      activeTabRef,
      activeTabWidth,
      tabTranslate,
      onItemClick
    };
  }
});
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2], ["__scopeId", "data-v-2a7c844c"]]);
const _hoisted_1 = { class: "textarea-wrapper" };
const _hoisted_2 = ["for"];
const _hoisted_3 = ["placeholder", "id", "disabled"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.label ? (openBlock(), createElementBlock("label", {
      key: 0,
      class: "label caption-13px-medium",
      for: _ctx.id
    }, toDisplayString(_ctx.label), 9, _hoisted_2)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass(["textarea-box", _ctx.boxClass])
    }, [
      renderSlot(_ctx.$slots, "prefix", {}, void 0, true),
      withDirectives(createElementVNode("textarea", mergeProps({
        class: "text-14px-regular",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.message = $event)
      }, _ctx.$attrs, {
        ref: "textarea",
        onPaste: _cache[1] || (_cache[1] = (...args) => _ctx.handlePaste && _ctx.handlePaste(...args)),
        onInput: _cache[2] || (_cache[2] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[3] || (_cache[3] = ($event) => _ctx.isFocused = true),
        onBlur: _cache[4] || (_cache[4] = ($event) => _ctx.isFocused = false),
        placeholder: _ctx.placeholder,
        id: _ctx.id,
        disabled: _ctx.disabled
      }), null, 16, _hoisted_3), [
        [vModelText, _ctx.message]
      ])
    ], 2),
    _ctx.caption ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["caption text-12px-regular", _ctx.captionClass])
    }, toDisplayString(_ctx.caption), 3)) : createCommentVNode("", true)
  ]);
}
var Textarea_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  name: "Textarea",
  props: {
    modelValue: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    state: {
      type: String,
      default: "default",
      validator: (state) => {
        const states = ["default", "error"];
        return states.includes(state);
      }
    },
    id: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "input", "paste"],
  setup(props, { emit }) {
    const textarea = ref(null);
    const isFocused = ref(false);
    const message = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const boxClass = computed(() => {
      return {
        focus: isFocused.value,
        [`${props.state}`]: true,
        disabled: props.disabled
      };
    });
    const textareaClass = computed(() => {
      return {
        [`${props.state}`]: true
      };
    });
    const captionClass = computed(() => {
      return {
        [`${props.state}`]: true
      };
    });
    onMounted(() => {
      if (!textarea.value)
        return;
      adjustHeight(textarea.value);
    });
    const focus = () => {
      var _a;
      (_a = textarea.value) == null ? void 0 : _a.focus();
    };
    const handleInput = (event) => {
      adjustHeight(event.target);
      emit("input", event.target.value);
    };
    const handlePaste = (event) => {
      emit("paste", event);
    };
    const adjustHeight = (textarea2) => {
      if (textarea2.scrollHeight > textarea2.clientHeight) {
        textarea2.style.height = textarea2.scrollHeight + "px";
      }
    };
    return {
      message,
      boxClass,
      textareaClass,
      captionClass,
      textarea,
      isFocused,
      focus,
      handleInput,
      handlePaste
    };
  }
});
var Textarea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__scopeId", "data-v-4637cd7c"]]);
class LuxonError extends Error {
}
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}
class ConflictingSpecificationError extends LuxonError {
}
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}
class InvalidArgumentError extends LuxonError {
}
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}
const n = "numeric", s = "short", l = "long";
const DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
const DATE_MED = {
  year: n,
  month: s,
  day: n
};
const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
const DATE_FULL = {
  year: n,
  month: l,
  day: n
};
const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
const TIME_SIMPLE = {
  hour: n,
  minute: n
};
const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
function isUndefined(o2) {
  return typeof o2 === "undefined";
}
function isNumber(o2) {
  return typeof o2 === "number";
}
function isInteger(o2) {
  return typeof o2 === "number" && o2 % 1 === 0;
}
function isString(o2) {
  return typeof o2 === "string";
}
function isDate(o2) {
  return Object.prototype.toString.call(o2) === "[object Date]";
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e2) {
    return false;
  }
}
function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return void 0;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce((a2, k2) => {
    a2[k2] = obj[k2];
    return a2;
  }, {});
}
function hasOwnProperty(obj, prop2) {
  return Object.prototype.hasOwnProperty.call(obj, prop2);
}
function integerBetween(thing, bottom2, top2) {
  return isInteger(thing) && thing >= bottom2 && thing <= top2;
}
function floorMod(x, n2) {
  return x - n2 * Math.floor(x / n2);
}
function padStart(input, n2 = 2) {
  const minus2 = input < 0 ? "-" : "";
  const target2 = minus2 ? input * -1 : input;
  let result;
  if (target2.toString().length < n2) {
    result = ("0".repeat(n2) + target2).slice(-n2);
  } else {
    result = target2.toString();
  }
  return `${minus2}${result}`;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return void 0;
  } else {
    const f2 = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f2);
  }
}
function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function objToLocalTS(obj) {
  let d2 = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
  if (obj.year < 100 && obj.year >= 0) {
    d2 = new Date(d2);
    d2.setUTCFullYear(d2.getUTCFullYear() - 1900);
  }
  return +d2;
}
function weeksInWeekYear(weekYear) {
  const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else
    return year > 60 ? 1900 + year : 2e3 + year;
}
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts), intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  const modified = __spreadValues({ timeZoneName: offsetFormat }, intlOpts);
  const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}
function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u2 in obj) {
    if (hasOwnProperty(obj, u2)) {
      const v2 = obj[u2];
      if (v2 === void 0 || v2 === null)
        continue;
      normalized[normalizer(u2)] = asNumber(v2);
    }
  }
  return normalized;
}
function formatOffset(offset2, format) {
  const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
const ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;
const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const meridiems = ["AM", "PM"];
const erasLong = ["Before Christ", "Anno Domini"];
const erasShort = ["BC", "AD"];
const erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
    }
  }
  const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}
function stringifyTokens(splits, tokenToString) {
  let s2 = "";
  for (const token of splits) {
    if (token.literal) {
      s2 += token.val;
    } else {
      s2 += tokenToString(token.val);
    }
  }
  return s2;
}
const macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }
  static parseFormat(fmt) {
    let current = null, currentFull = "", bracketed = false;
    const splits = [];
    for (let i2 = 0; i2 < fmt.length; i2++) {
      const c2 = fmt.charAt(i2);
      if (c2 === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c2;
      } else if (c2 === current) {
        currentFull += c2;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c2;
        current = c2;
      }
    }
    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }
    return splits;
  }
  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }
  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.format();
  }
  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.format();
  }
  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.formatToParts();
  }
  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.resolvedOptions();
  }
  num(n2, p2 = 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p2);
    }
    const opts = __spreadValues({}, this.opts);
    if (p2 > 0) {
      opts.padTo = p2;
    }
    return this.loc.numberFormatter(opts).format(n2);
  }
  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }
      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" }, "weekday"), maybeMacro = (token) => {
      const formatOpts = Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
      switch (token) {
        case "S":
          return this.num(dt.millisecond);
        case "u":
        case "SSS":
          return this.num(dt.millisecond, 3);
        case "s":
          return this.num(dt.second);
        case "ss":
          return this.num(dt.second, 2);
        case "uu":
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(dt.millisecond / 100));
        case "m":
          return this.num(dt.minute);
        case "mm":
          return this.num(dt.minute, 2);
        case "h":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case "hh":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case "H":
          return this.num(dt.hour);
        case "HH":
          return this.num(dt.hour, 2);
        case "Z":
          return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return dt.zoneName;
        case "a":
          return meridiem();
        case "d":
          return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
        case "dd":
          return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
        case "c":
          return this.num(dt.weekday);
        case "ccc":
          return weekday("short", true);
        case "cccc":
          return weekday("long", true);
        case "ccccc":
          return weekday("narrow", true);
        case "E":
          return this.num(dt.weekday);
        case "EEE":
          return weekday("short", false);
        case "EEEE":
          return weekday("long", false);
        case "EEEEE":
          return weekday("narrow", false);
        case "L":
          return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
        case "LL":
          return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
        case "LLL":
          return month("short", true);
        case "LLLL":
          return month("long", true);
        case "LLLLL":
          return month("narrow", true);
        case "M":
          return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
        case "MM":
          return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
        case "MMM":
          return month("short", false);
        case "MMMM":
          return month("long", false);
        case "MMMMM":
          return month("narrow", false);
        case "y":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
        case "yy":
          return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
        case "yyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
        case "yyyyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
        case "G":
          return era("short");
        case "GG":
          return era("long");
        case "GGGGG":
          return era("narrow");
        case "kk":
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(dt.weekYear, 4);
        case "W":
          return this.num(dt.weekNumber);
        case "WW":
          return this.num(dt.weekNumber, 2);
        case "o":
          return this.num(dt.ordinal);
        case "ooo":
          return this.num(dt.ordinal, 3);
        case "q":
          return this.num(dt.quarter);
        case "qq":
          return this.num(dt.quarter, 2);
        case "X":
          return this.num(Math.floor(dt.ts / 1e3));
        case "x":
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };
    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }
  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
      switch (token[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, tokenToString = (lildur) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        return this.num(lildur.get(mapped), token.length);
      } else {
        return token;
      }
    }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, { literal, val }) => literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t2) => t2));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}
class Zone {
  get type() {
    throw new ZoneIsAbstractError();
  }
  get name() {
    throw new ZoneIsAbstractError();
  }
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  offset(ts) {
    throw new ZoneIsAbstractError();
  }
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}
let singleton$1 = null;
class SystemZone extends Zone {
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  equals(otherZone) {
    return otherZone.type === "system";
  }
  get isValid() {
    return true;
  }
}
const matchingRegex = RegExp(`^${ianaRegex.source}$`);
let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[zone];
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date), filled = [];
  for (let i2 = 0; i2 < formatted.length; i2++) {
    const { type, value } = formatted[i2], pos = typeToPos[type];
    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
let ianaZoneCache = {};
class IANAZone extends Zone {
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  static isValidSpecifier(s2) {
    return !!(s2 && s2.match(matchingRegex));
  }
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e2) {
      return false;
    }
  }
  constructor(name) {
    super();
    this.zoneName = name;
    this.valid = IANAZone.isValidZone(name);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    const date = new Date(ts);
    if (isNaN(date))
      return NaN;
    const dtf = makeDTF(this.name), [year, month, day, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    const adjustedHour = hour === 24 ? 0 : hour;
    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0
    });
    let asTS = +date;
    const over = asTS % 1e3;
    asTS -= over >= 0 ? over : 1e3 + over;
    return (asUTC - asTS) / (60 * 1e3);
  }
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let singleton = null;
class FixedOffsetZone extends Zone {
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }
  static instance(offset2) {
    return offset2 === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset2);
  }
  static parseSpecifier(s2) {
    if (s2) {
      const r2 = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r2) {
        return new FixedOffsetZone(signedOffset(r2[1], r2[2]));
      }
    }
    return null;
  }
  constructor(offset2) {
    super();
    this.fixed = offset2;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }
  get isUniversal() {
    return true;
  }
  offset() {
    return this.fixed;
  }
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  get isValid() {
    return true;
  }
}
class InvalidZone extends Zone {
  constructor(zoneName) {
    super();
    this.zoneName = zoneName;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return false;
  }
  get isValid() {
    return false;
  }
}
function normalizeZone(input, defaultZone2) {
  if (isUndefined(input) || input === null) {
    return defaultZone2;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "local" || lowered === "system")
      return defaultZone2;
    else if (lowered === "utc" || lowered === "gmt")
      return FixedOffsetZone.utcInstance;
    else if (IANAZone.isValidSpecifier(lowered))
      return IANAZone.create(input);
    else
      return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    return input;
  } else {
    return new InvalidZone(input);
  }
}
let now = () => Date.now(), defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid;
class Settings {
  static get now() {
    return now;
  }
  static set now(n2) {
    now = n2;
  }
  static set defaultZone(zone) {
    defaultZone = zone;
  }
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }
  static get defaultLocale() {
    return defaultLocale;
  }
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }
  static get throwOnInvalid() {
    return throwOnInvalid;
  }
  static set throwOnInvalid(t2) {
    throwOnInvalid = t2;
  }
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
}
let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const _a = opts, { base } = _a, cacheKeyOpts = __objRest(_a, ["base"]);
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e2) {
      options = getCachedDTF(smaller).resolvedOptions();
    }
    const { numberingSystem, calendar } = options;
    return [smaller, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";
    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }
    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f2) {
  const ms = [];
  for (let i2 = 1; i2 <= 12; i2++) {
    const dt = DateTime.utc(2016, i2, 1);
    ms.push(f2(dt));
  }
  return ms;
}
function mapWeekdays(f2) {
  const ms = [];
  for (let i2 = 1; i2 <= 7; i2++) {
    const dt = DateTime.utc(2016, 11, 13 + i2);
    ms.push(f2(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    if (!forceSimple) {
      const intlOpts = { useGrouping: false };
      if (opts.padTo > 0)
        intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i2) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i2) : i2;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i2) : roundTo(i2, 3);
      return padStart(fixed, this.padTo);
    }
  }
}
class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    let z;
    if (dt.zone.isUniversal) {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }
    const intlOpts = __spreadValues({}, this.opts);
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = __spreadValues({ style: "long" }, opts);
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }
  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}
class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }
  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }
  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }
  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }
  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }
    return this.fastNumbersCached;
  }
  listingMode(defaultOK = true) {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }
  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  }
  redefaultToEN(alts = {}) {
    return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: true }));
  }
  redefaultToSystem(alts = {}) {
    return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: false }));
  }
  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }
  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) => this.extract(dt, intl, "weekday"));
      }
      return this.weekdaysCache[formatStr][length];
    });
  }
  meridiems(defaultOK = true) {
    return listStuff(this, void 0, defaultOK, () => meridiems, () => {
      if (!this.meridiemCache) {
        const intl = { hour: "numeric", hourCycle: "h12" };
        this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map((dt) => this.extract(dt, intl, "dayperiod"));
      }
      return this.meridiemCache;
    });
  }
  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, "era"));
      }
      return this.eraCache[length];
    });
  }
  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }
  numberFormatter(opts = {}) {
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }
  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }
  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  }
}
function combineRegexes(...regexes) {
  const full = regexes.reduce((f2, r2) => f2 + r2.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m) => extractors.reduce(([mergedVals, mergedZone, cursor], ex) => {
    const [val, zone, next] = ex(m, cursor);
    return [__spreadValues(__spreadValues({}, mergedVals), val), mergedZone || zone, next];
  }, [{}, null, 1]).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s2);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i2;
    for (i2 = 0; i2 < keys.length; i2++) {
      ret[keys[i2]] = parseInteger(match2[cursor + i2]);
    }
    return [ret, null, cursor + i2];
  };
}
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${offsetRegex.source}?`), isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`), isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/, isoOrdinalRegex = /(\d{4})-?(\d{3})/, extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"), extractISOOrdinalData = simpleParse("year", "ordinal"), sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/, sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`), sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m = match2[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match2, cursor) {
  const item = {
    year: int(match2, cursor),
    month: int(match2, cursor + 1, 1),
    day: int(match2, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match2, cursor) {
  const item = {
    hours: int(match2, cursor, 0),
    minutes: int(match2, cursor + 1, 0),
    seconds: int(match2, cursor + 2, 0),
    milliseconds: parseMillis(match2[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match2, cursor) {
  const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match2, cursor) {
  const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
  return [{}, zone, cursor + 1];
}
const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
const isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function extractISODuration(match2) {
  const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
  const hasNegativePrefix = s2[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";
  const maybeNegate = (num2, force = false) => num2 !== void 0 && (force || num2 && hasNegativePrefix) ? -num2 : num2;
  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    }
  ];
}
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr)
    result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match2) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr
  ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  let offset2;
  if (obsOffset) {
    offset2 = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset2 = 0;
  } else {
    offset2 = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset2)];
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match2) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match2) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
const extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
const extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
const extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
const extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
function parseISODate(s2) {
  return parse(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s2) {
  return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s2) {
  return parse(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s2) {
  return parse(s2, [isoDuration, extractISODuration]);
}
const extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s2) {
  return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
}
const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
const extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s2) {
  return parse(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}
const INVALID$2 = "Invalid Duration";
const lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, casualMatrix = __spreadValues({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  }
}, lowOrderMatrix), daysInYearAccurate = 146097 / 400, daysInMonthAccurate = 146097 / 4800, accurateMatrix = __spreadValues({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
  }
}, lowOrderMatrix);
const orderedUnits$1 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
];
const reverseUnits = orderedUnits$1.slice(0).reverse();
function clone$1(dur, alts, clear = false) {
  const conf = {
    values: clear ? alts.values : __spreadValues(__spreadValues({}, dur.values), alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}
function antiTrunc(n2) {
  return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
}
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}
class Duration {
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    this.values = config.values;
    this.loc = config.loc || Locale.create();
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    this.invalid = config.invalid || null;
    this.matrix = accurate ? accurateMatrix : casualMatrix;
    this.isLuxonDuration = true;
  }
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
    }
    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy
    });
  }
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
    }
  }
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized)
      throw new InvalidUnitError(unit);
    return normalized;
  }
  static isDuration(o2) {
    return o2 && o2.isLuxonDuration || false;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(fmt, opts = {}) {
    const fmtOpts = __spreadProps(__spreadValues({}, opts), {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }
  toObject() {
    if (!this.isValid)
      return {};
    return __spreadValues({}, this.values);
  }
  toISO() {
    if (!this.isValid)
      return null;
    let s2 = "P";
    if (this.years !== 0)
      s2 += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0)
      s2 += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0)
      s2 += this.weeks + "W";
    if (this.days !== 0)
      s2 += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s2 += "T";
    if (this.hours !== 0)
      s2 += this.hours + "H";
    if (this.minutes !== 0)
      s2 += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
    if (s2 === "P")
      s2 += "T0S";
    return s2;
  }
  toISOTime(opts = {}) {
    if (!this.isValid)
      return null;
    const millis = this.toMillis();
    if (millis < 0 || millis >= 864e5)
      return null;
    opts = __spreadValues({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }
    let str = value.toFormat(fmt);
    if (opts.includePrefix) {
      str = "T" + str;
    }
    return str;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration), result = {};
    for (const k2 of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k2) || hasOwnProperty(this.values, k2)) {
        result[k2] = dur.get(k2) + this.get(k2);
      }
    }
    return clone$1(this, { values: result }, true);
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  mapUnits(fn2) {
    if (!this.isValid)
      return this;
    const result = {};
    for (const k2 of Object.keys(this.values)) {
      result[k2] = asNumber(fn2(this.values[k2], k2));
    }
    return clone$1(this, { values: result }, true);
  }
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  set(values) {
    if (!this.isValid)
      return this;
    const mixed = __spreadValues(__spreadValues({}, this.values), normalizeObject(values, Duration.normalizeUnit));
    return clone$1(this, { values: mixed });
  }
  reconfigure({ locale, numberingSystem, conversionAccuracy } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem }), opts = { loc };
    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }
    return clone$1(this, opts);
  }
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }
  shiftTo(...units) {
    if (!this.isValid)
      return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map((u2) => Duration.normalizeUnit(u2));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k2 of orderedUnits$1) {
      if (units.indexOf(k2) >= 0) {
        lastUnit = k2;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k2] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k2])) {
          own += vals[k2];
        }
        const i2 = Math.trunc(own);
        built[k2] = i2;
        accumulated[k2] = own - i2;
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k2)) {
            convert(this.matrix, vals, down, built, k2);
          }
        }
      } else if (isNumber(vals[k2])) {
        accumulated[k2] = vals[k2];
      }
    }
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    return clone$1(this, { values: built }, true).normalize();
  }
  negate() {
    if (!this.isValid)
      return this;
    const negated = {};
    for (const k2 of Object.keys(this.values)) {
      negated[k2] = -this.values[k2];
    }
    return clone$1(this, { values: negated }, true);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq(v1, v2) {
      if (v1 === void 0 || v1 === 0)
        return v2 === void 0 || v2 === 0;
      return v1 === v2;
    }
    for (const u2 of orderedUnits$1) {
      if (!eq(this.values[u2], other.values[u2])) {
        return false;
      }
    }
    return true;
  }
}
const INVALID$1 = "Invalid Interval";
function validateStartEnd(start2, end2) {
  if (!start2 || !start2.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end2 || !end2.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end2 < start2) {
    return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start2.toISO()} and end=${end2.toISO()}`);
  } else {
    return null;
  }
}
class Interval {
  constructor(config) {
    this.s = config.start;
    this.e = config.end;
    this.invalid = config.invalid || null;
    this.isLuxonInterval = true;
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }
  static fromDateTimes(start2, end2) {
    const builtStart = friendlyDateTime(start2), builtEnd = friendlyDateTime(end2);
    const validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  static after(start2, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start2);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  static before(end2, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end2);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  static fromISO(text, opts) {
    const [s2, e2] = (text || "").split("/", 2);
    if (s2 && e2) {
      let start2, startIsValid;
      try {
        start2 = DateTime.fromISO(s2, opts);
        startIsValid = start2.isValid;
      } catch (e3) {
        startIsValid = false;
      }
      let end2, endIsValid;
      try {
        end2 = DateTime.fromISO(e2, opts);
        endIsValid = end2.isValid;
      } catch (e3) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start2, end2);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e2, opts);
        if (dur.isValid) {
          return Interval.after(start2, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s2, opts);
        if (dur.isValid) {
          return Interval.before(end2, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }
  static isInterval(o2) {
    return o2 && o2.isLuxonInterval || false;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }
  count(unit = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const start2 = this.start.startOf(unit), end2 = this.end.startOf(unit);
    return Math.floor(end2.diff(start2, unit).get(unit)) + 1;
  }
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(dateTime) {
    if (!this.isValid)
      return false;
    return this.s > dateTime;
  }
  isBefore(dateTime) {
    if (!this.isValid)
      return false;
    return this.e <= dateTime;
  }
  contains(dateTime) {
    if (!this.isValid)
      return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  set({ start: start2, end: end2 } = {}) {
    if (!this.isValid)
      return this;
    return Interval.fromDateTimes(start2 || this.s, end2 || this.e);
  }
  splitAt(...dateTimes) {
    if (!this.isValid)
      return [];
    const sorted = dateTimes.map(friendlyDateTime).filter((d2) => this.contains(d2)).sort(), results = [];
    let { s: s2 } = this, i2 = 0;
    while (s2 < this.e) {
      const added = sorted[i2] || this.e, next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      i2 += 1;
    }
    return results;
  }
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    let { s: s2 } = this, idx = 1, next;
    const results = [];
    while (s2 < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      idx += 1;
    }
    return results;
  }
  divideEqually(numberOfParts) {
    if (!this.isValid)
      return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  abutsStart(other) {
    if (!this.isValid)
      return false;
    return +this.e === +other.s;
  }
  abutsEnd(other) {
    if (!this.isValid)
      return false;
    return +other.e === +this.s;
  }
  engulfs(other) {
    if (!this.isValid)
      return false;
    return this.s <= other.s && this.e >= other.e;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  intersection(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s > other.s ? this.s : other.s, e2 = this.e < other.e ? this.e : other.e;
    if (s2 >= e2) {
      return null;
    } else {
      return Interval.fromDateTimes(s2, e2);
    }
  }
  union(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s < other.s ? this.s : other.s, e2 = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s2, e2);
  }
  static merge(intervals) {
    const [found, final] = intervals.sort((a2, b) => a2.s - b.s).reduce(([sofar, current], item) => {
      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]);
    if (final) {
      found.push(final);
    }
    return found;
  }
  static xor(intervals) {
    let start2 = null, currentCount = 0;
    const results = [], ends = intervals.map((i2) => [
      { time: i2.s, type: "s" },
      { time: i2.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a2, b) => a2.time - b.time);
    for (const i2 of arr) {
      currentCount += i2.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start2 = i2.time;
      } else {
        if (start2 && +start2 !== +i2.time) {
          results.push(Interval.fromDateTimes(start2, i2.time));
        }
        start2 = null;
      }
    }
    return Interval.merge(results);
  }
  difference(...intervals) {
    return Interval.xor([this].concat(intervals)).map((i2) => this.intersection(i2)).filter((i2) => i2 && !i2.isEmpty());
  }
  toString() {
    if (!this.isValid)
      return INVALID$1;
    return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
  }
  toISO(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }
  toISODate() {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }
  toISOTime(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }
  toFormat(dateFormat, { separator = " \u2013 " } = {}) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}
class Info {
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });
    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }
  static isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }
  static eras(length = "short", { locale = null } = {}) {
    return Locale.create(locale, null, "gregory").eras(length);
  }
  static features() {
    return { relative: hasRelative() };
  }
}
function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a2, b) => b.year - a2.year],
    ["quarters", (a2, b) => b.quarter - a2.quarter],
    ["months", (a2, b) => b.month - a2.month + (b.year - a2.year) * 12],
    [
      "weeks",
      (a2, b) => {
        const days = dayDiff(a2, b);
        return (days - days % 7) / 7;
      }
    ],
    ["days", dayDiff]
  ];
  const results = {};
  let lowestOrder, highWater;
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      let delta2 = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta2 });
      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta2 - 1 });
        delta2 -= 1;
      } else {
        cursor = highWater;
      }
      results[unit] = delta2;
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function diff(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
  const remainingMillis = later - cursor;
  const lowerOrderUnits = units.filter((u2) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u2) >= 0);
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  const duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i2 = 0; i2 < str.length; i2++) {
      const code = str.charCodeAt(i2);
      if (str[i2].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i2]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min2, max2] = numberingSystemsUTF16[key];
          if (code >= min2 && code <= max2) {
            value += code - min2;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex({ numberingSystem }, append2 = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append2}`);
}
const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i2) => i2) {
  return { regex, deser: ([s2]) => post(parseDigits(s2)) };
}
const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `( |${NBSP})`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s2) {
  return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s2) {
  return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s2]) => strings.findIndex((i2) => stripInsensitivities(s2) === stripInsensitivities(i2)) + startIndex
    };
  }
}
function offset(regex, groups) {
  return { regex, deser: ([, h2, m]) => signedOffset(h2, m), groups };
}
function simple(regex) {
  return { regex, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t2) => ({ regex: RegExp(escapeToken(t2.val)), deser: ([s2]) => s2, literal: true }), unitate = (t2) => {
    if (token.literal) {
      return literal(t2);
    }
    switch (t2.val) {
      case "G":
        return oneOf(loc.eras("short", false), 0);
      case "GG":
        return oneOf(loc.eras("long", false), 0);
      case "y":
        return intUnit(oneToSix);
      case "yy":
        return intUnit(twoToFour, untruncateYear);
      case "yyyy":
        return intUnit(four);
      case "yyyyy":
        return intUnit(fourToSix);
      case "yyyyyy":
        return intUnit(six);
      case "M":
        return intUnit(oneOrTwo);
      case "MM":
        return intUnit(two);
      case "MMM":
        return oneOf(loc.months("short", true, false), 1);
      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);
      case "L":
        return intUnit(oneOrTwo);
      case "LL":
        return intUnit(two);
      case "LLL":
        return oneOf(loc.months("short", false, false), 1);
      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      case "d":
        return intUnit(oneOrTwo);
      case "dd":
        return intUnit(two);
      case "o":
        return intUnit(oneToThree);
      case "ooo":
        return intUnit(three);
      case "HH":
        return intUnit(two);
      case "H":
        return intUnit(oneOrTwo);
      case "hh":
        return intUnit(two);
      case "h":
        return intUnit(oneOrTwo);
      case "mm":
        return intUnit(two);
      case "m":
        return intUnit(oneOrTwo);
      case "q":
        return intUnit(oneOrTwo);
      case "qq":
        return intUnit(two);
      case "s":
        return intUnit(oneOrTwo);
      case "ss":
        return intUnit(two);
      case "S":
        return intUnit(oneToThree);
      case "SSS":
        return intUnit(three);
      case "u":
        return simple(oneToNine);
      case "uu":
        return simple(oneOrTwo);
      case "uuu":
        return intUnit(one);
      case "a":
        return oneOf(loc.meridiems(), 0);
      case "kkkk":
        return intUnit(four);
      case "kk":
        return intUnit(twoToFour, untruncateYear);
      case "W":
        return intUnit(oneOrTwo);
      case "WW":
        return intUnit(two);
      case "E":
      case "c":
        return intUnit(one);
      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);
      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);
      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);
      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      case "Z":
      case "ZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case "ZZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t2);
    }
  };
  const unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function tokenForPart(part2, locale, formatOpts) {
  const { type, value } = part2;
  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }
  const style = formatOpts[type];
  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val
    };
  }
  return void 0;
}
function buildRegex(units) {
  const re = units.map((u2) => u2.regex).reduce((f2, r2) => `${f2}(${r2.source})`, "");
  return [`^${re}$`, units];
}
function match(input, regex, handlers) {
  const matches = input.match(regex);
  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i2 in handlers) {
      if (hasOwnProperty(handlers, i2)) {
        const h2 = handlers[i2], groups = h2.groups ? h2.groups + 1 : 1;
        if (!h2.literal && h2.token) {
          all[h2.token.val[0]] = h2.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let zone;
  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  const vals = Object.keys(matches).reduce((r2, k2) => {
    const f2 = toField(k2);
    if (f2) {
      r2[f2] = matches[k2];
    }
    return r2;
  }, {});
  return [vals, zone];
}
let dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  if (!formatOpts) {
    return token;
  }
  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  const tokens = parts.map((p2) => tokenForPart(p2, locale, formatOpts));
  if (tokens.includes(void 0)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t2) => maybeExpandMacroToken(t2, locale)));
}
function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((t2) => unitForToken(t2, locale)), disqualifyingUnit = units.find((t2) => t2.invalidReason);
  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone] = matches ? dateTimeFromMatches(matches) : [null, null];
    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }
    return { input, tokens, regex, rawMatches, matches, result, zone };
  }
}
function parseFromTokens(locale, input, format) {
  const { result, zone, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, invalidReason];
}
const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
}
function dayOfWeek(year, month, day) {
  const js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i2) => i2 < ordinal), day = ordinal - table[month0];
  return { month: month0 + 1, day };
}
function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
  let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return __spreadValues({ weekYear, weekNumber, weekday }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return __spreadValues({ year, month, day }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return __spreadValues({ year, ordinal }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return __spreadValues({ year, month, day }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else
    return false;
}
function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else
    return false;
}
function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else
    return false;
}
function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else
    return false;
}
const INVALID = "Invalid DateTime";
const MAX_DATE = 864e13;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(__spreadProps(__spreadValues(__spreadValues({}, current), alts), { old: current }));
}
function fixOffset(localTS, o2, tz) {
  let utcGuess = localTS - o2 * 60 * 1e3;
  const o22 = tz.offset(utcGuess);
  if (o2 === o22) {
    return [utcGuess, o2];
  }
  utcGuess -= (o22 - o2) * 60 * 1e3;
  const o3 = tz.offset(utcGuess);
  if (o22 === o3) {
    return [utcGuess, o22];
  }
  return [localTS - Math.min(o22, o3) * 60 * 1e3, Math.max(o22, o3)];
}
function tsToObj(ts, offset2) {
  ts += offset2 * 60 * 1e3;
  const d2 = new Date(ts);
  return {
    year: d2.getUTCFullYear(),
    month: d2.getUTCMonth() + 1,
    day: d2.getUTCDate(),
    hour: d2.getUTCHours(),
    minute: d2.getUTCMinutes(),
    second: d2.getUTCSeconds(),
    millisecond: d2.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c2 = __spreadProps(__spreadValues({}, inst.c), {
    year,
    month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }), millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"), localTS = objToLocalTS(c2);
  let [ts, o2] = fixOffset(localTS, oPre, inst.zone);
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    o2 = inst.zone.offset(ts);
  }
  return { ts, o: o2 };
}
function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, __spreadProps(__spreadValues({}, opts), {
      zone: interpretationZone
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`));
  }
}
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function toTechTimeFormat(dt, {
  suppressSeconds = false,
  suppressMilliseconds = false,
  includeOffset,
  includePrefix = false,
  includeZone = false,
  spaceZone = false,
  format = "extended"
}) {
  let fmt = format === "basic" ? "HHmm" : "HH:mm";
  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";
    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }
  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }
  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }
  let str = toTechFormat(dt, fmt);
  if (includePrefix) {
    str = "T" + str;
  }
  return str;
}
const defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"], orderedWeekUnits = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized)
    throw new InvalidUnitError(unit);
  return normalized;
}
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
  let ts, o2;
  if (!isUndefined(obj.year)) {
    for (const u2 of orderedUnits) {
      if (isUndefined(obj[u2])) {
        obj[u2] = defaultUnitValues[u2];
      }
    }
    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const offsetProvis = zone.offset(tsNow);
    [ts, o2] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }
  return new DateTime({ ts, zone, loc, o: o2 });
}
function diffRelative(start2, end2, opts) {
  const round2 = isUndefined(opts.round) ? true : opts.round, format = (c2, unit) => {
    c2 = roundTo(c2, round2 || opts.calendary ? 0 : 2, true);
    const formatter = end2.loc.clone(opts).relFormatter(opts);
    return formatter.format(c2, unit);
  }, differ = (unit) => {
    if (opts.calendary) {
      if (!end2.hasSame(start2, unit)) {
        return end2.startOf(unit).diff(start2.startOf(unit), unit).get(unit);
      } else
        return 0;
    } else {
      return end2.diff(start2, unit).get(unit);
    }
  };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start2 > end2 ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  let opts = {}, args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}
class DateTime {
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;
    let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    let c2 = null, o2 = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c2, o2] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c2 = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c2.year) ? new Invalid("invalid input") : null;
        c2 = invalid ? null : c2;
        o2 = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.c = c2;
    this.o = o2;
    this.isLuxonDateTime = true;
  }
  static now() {
    return new DateTime({});
  }
  static local() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static utc() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }
    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1e3,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    const tsNow = Settings.now(), offsetProvis = zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
    let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }
    let foundFirst = false;
    for (const u2 of units) {
      const v2 = normalized[u2];
      if (!isUndefined(v2)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u2] = defaultValues[u2];
      } else {
        normalized[u2] = objNow[u2];
      }
    }
    const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc
    });
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
    }
    return inst;
  }
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    }), [vals, parsedZone, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text);
    }
  }
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }
  static isDateTime(o2) {
    return o2 && o2.isLuxonDateTime || false;
  }
  get(unit) {
    return this[unit];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
  }
  get isInLeapYear() {
    return isLeapYear(this.year);
  }
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }
  toUTC(offset2 = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset2), opts);
  }
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }
  setLocale(locale) {
    return this.reconfigure({ locale });
  }
  set(values) {
    if (!this.isValid)
      return this;
    const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian(__spreadValues(__spreadValues({}, gregorianToWeek(this.c)), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(__spreadValues(__spreadValues({}, gregorianToOrdinal(this.c)), normalized));
    } else {
      mixed = __spreadValues(__spreadValues({}, this.toObject()), normalized);
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    const [ts, o2] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o: o2 });
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }
  startOf(unit) {
    if (!this.isValid)
      return this;
    const o2 = {}, normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o2.month = 1;
      case "quarters":
      case "months":
        o2.day = 1;
      case "weeks":
      case "days":
        o2.hour = 0;
      case "hours":
        o2.minute = 0;
      case "minutes":
        o2.second = 0;
      case "seconds":
        o2.millisecond = 0;
        break;
    }
    if (normalizedUnit === "weeks") {
      o2.weekday = 1;
    }
    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o2.month = (q - 1) * 3 + 1;
    }
    return this.set(o2);
  }
  endOf(unit) {
    return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
  }
  toFormat(fmt, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }
  toLocaleParts(opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  toISO(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toISODate(opts)}T${this.toISOTime(opts)}`;
  }
  toISODate({ format = "extended" } = {}) {
    let fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
    if (this.year > 9999) {
      fmt = "+" + fmt;
    }
    return toTechFormat(this, fmt);
  }
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    format = "extended"
  } = {}) {
    return toTechTimeFormat(this, {
      suppressSeconds,
      suppressMilliseconds,
      includeOffset,
      includePrefix,
      format
    });
  }
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  toSQLTime({ includeOffset = true, includeZone = false } = {}) {
    return toTechTimeFormat(this, {
      includeOffset,
      includeZone,
      spaceZone: true
    });
  }
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(opts = {}) {
    if (!this.isValid)
      return {};
    const base = __spreadValues({}, this.c);
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    const durOpts = __spreadValues({ locale: this.locale, numberingSystem: this.numberingSystem }, opts);
    const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  hasSame(otherDateTime, unit) {
    if (!this.isValid)
      return false;
    const inputMs = otherDateTime.valueOf();
    const otherZoneDateTime = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
  }
  equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  toRelative(options = {}) {
    if (!this.isValid)
      return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = void 0;
    }
    return diffRelative(base, this.plus(padding), __spreadProps(__spreadValues({}, options), {
      numeric: "always",
      units,
      unit
    }));
  }
  toRelativeCalendar(options = {}) {
    if (!this.isValid)
      return null;
    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, __spreadProps(__spreadValues({}, options), {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i2) => i2.valueOf(), Math.min);
  }
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i2) => i2.valueOf(), Math.max);
  }
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }
  static get DATE_SHORT() {
    return DATE_SHORT;
  }
  static get DATE_MED() {
    return DATE_MED;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }
  static get DATE_FULL() {
    return DATE_FULL;
  }
  static get DATE_HUGE() {
    return DATE_HUGE;
  }
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }
  static get DATETIME_MED() {
    return DATETIME_MED;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
}
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
  }
}
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("time", null, toDisplayString(_ctx.display), 1);
}
const _sfc_main = defineComponent({
  name: "Timer",
  emits: ["finish"],
  setup(props, { emit }) {
    const now2 = ref(DateTime.local());
    const end2 = ref(DateTime.local());
    const tick = ref(0);
    const finished = computed(() => now2.value >= end2.value);
    const display = computed(() => end2.value.diff(now2.value).toFormat("mm:ss"));
    watch(now2, () => {
      if (finished.value) {
        end2.value = now2.value;
        clearInterval(tick.value);
        emit("finish");
      }
    });
    const start2 = (deadline) => {
      end2.value = DateTime.fromMillis(deadline);
      now2.value = DateTime.local();
      tick.value = setInterval(() => {
        now2.value = DateTime.local();
      }, 1e3);
    };
    return { display, start: start2 };
  }
});
var Timer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render]]);
export { BottomBar, Breadcrumbs, Bubbles, Button, Card, Checkbox, ClientPagination, Dropdown, DropdownOption, ExpansibleList, ExpansibleWrap, FileUpload, Filters, FixedBottomBar, Icon, Input, List, ListOption, MenuList, Messenger, Multiselect, PageShell, PageSidebar, Pagination, PaginationItem, Popup, ProgressBar, Select, ServerPagination, Shine, SortedList, Table, TableDataSource, Tabs, Textarea, Timer, tooltipDirective as Tooltip, TransitionExpand, useMessenger, useProgressBar };
