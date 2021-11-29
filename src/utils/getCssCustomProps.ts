/* eslint-disable */
const isSameDomain = (styleSheet: CSSStyleSheet) => {
  if (!styleSheet.href) {
    return true;
  }

  return styleSheet.href.includes(window.location.origin);
};

const isStyleRule = (rule: CSSRule) => rule.type === 1;

export default () =>
  [...document.styleSheets].filter(isSameDomain).reduce((finalArr: [string, string][], sheet) => {
    return finalArr.concat(
      [...sheet.cssRules].filter(isStyleRule).reduce((propValArr: any, rule: any) => {
        const props = [...rule.style]
          .map((propName) => [propName.trim(), rule.style.getPropertyValue(propName).trim()])
          .filter(([propName]) => propName.includes('--'));

        return [...propValArr, ...props];
      }, [])
    );
  }, []);
