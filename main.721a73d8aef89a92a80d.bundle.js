(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"c",(function(){return Heading})),__webpack_require__.d(__webpack_exports__,"d",(function(){return Subheading})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Body})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Code}));__webpack_require__(2),__webpack_require__(25),__webpack_require__(67),__webpack_require__(32),__webpack_require__(10),__webpack_require__(4),__webpack_require__(61),__webpack_require__(34),__webpack_require__(373),__webpack_require__(374),__webpack_require__(6),__webpack_require__(33);var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__),prop_types__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(13),prop_types__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__),_Text_assets_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(43);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Text=function(props){var typeModifier,type=props.type,className=props.className,children=props.children,others=_objectWithoutProperties(props,["type","className","children"]);switch(type){case _Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.c:typeModifier="heading";break;case _Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.d:typeModifier="subheading";break;default:case _Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.a:typeModifier="body";break;case _Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.b:typeModifier="code"}var classesToApply="Text Text--".concat(typeModifier).concat(className?" ".concat(className):"");return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span",_extends({},others,{className:classesToApply}),children)};Text.displayName="Text";var commonProps={className:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.node},commonDefaultProps={className:""};Text.propTypes=_objectSpread({type:prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string.isRequired},commonProps),Text.defaultProps=_objectSpread({type:_Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.a},commonDefaultProps);var withTypeStyle=function(style,name){var component=function(_ref){_ref.type;var others=_objectWithoutProperties(_ref,["type"]);return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Text,_extends({},others,{type:style}))};return component.displayName=name,component.propTypes=_objectSpread({},commonProps),component.defaultProps=_objectSpread({},commonDefaultProps),component},Heading=withTypeStyle(_Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.c,"Heading"),Subheading=withTypeStyle(_Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.d,"Subheading"),Body=withTypeStyle(_Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.a,"Body"),Code=withTypeStyle(_Text_assets_js__WEBPACK_IMPORTED_MODULE_14__.b,"Code");Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{type:{defaultValue:{value:"BODY",computed:!0},type:{name:"string"},required:!1,description:"required - the typography style applied to this component"},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"optional - add any specific styling classes to this component"},children:{type:{name:"node"},required:!1,description:"optional - child content, expected to be text"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/Text/Text.view.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"src/Elements/Text/Text.view.js"})},411:function(module,exports,__webpack_require__){},413:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_ref=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__).a.createElement("div",{className:"App"},"UI coming soonish!"),App=function(){return _ref};App.displayName="App",App.__docgenInfo={description:"",methods:[],displayName:"App"},__webpack_exports__.a=App,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Bootstrap/App/App.js"]={name:"App",docgenInfo:App.__docgenInfo,path:"src/Bootstrap/App/App.js"})},424:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# Text\n\nThis component acts as a styling component - ie it applies one of 4 styles to\na given string of text. The component is exported directly with the below\nproperties, or as a named, pre styled component. For a full set of components\nprovided, see the [example usage](#example-usage) section.\n\n## Properties\n\nAssuming use of the `Text` component directly, the named properties which are\nexpected are as follows:\n\n- `className` - optional - add any specific styling classes to this component.\nThis will be appended after the class which sets the type style, allowing\nmodification of the styling if needed.\n- `type` - required - the typography style applied to this component. One of\nthe following values, defaulting to `body` if not provided:\n    - `body` - for general body text\n    - `heading` - for heading text\n    - `subheading` - for sub headings\n    - `code` - for code snippets\n\n_Note_: All `type` values are exported alongside the component for ease of use.\n\nAny property which is not matched will be passed onto the parent element\nrendered as a part of this component. Do also note if using one of the named\nstyled components, the `type` property is provided for you.\n\n## Example usage\n\nExample usage of the `Text` component, passing both a `type` and custom \n`className` property. This would result in the string 'Hello world' being\nrendered, using a body typography styling, as well as the styling defined in\nthe `myclass` css class.\n\n```\n<Text type={'body'} className={'myclass'}> Hello World </Text>\n```\n\nFor ease, a number of named/higher order components are also exposed for use.\nThese in effect abstract the `type` property away. For example:\n\n```\n<Subheading>Foobar buzz</Subheading>\n```\n\nwould render the string 'Foobar buzz' as a subheading.\n\nThe full set of exposed components and constants are as follows:\n\n- `Text` - main Text component\n- `Heading` - Text component with type heading\n- `Subheading` - Text component with type subheading\n- `Body` - Text component with type body\n- `Code` - Text component with type code\n- `HEADING` - heading type constant\n- `SUBHEADING` - subheading type constant\n- `BODY` - body type constant\n- `CODE` - code type constant"},425:function(module,exports,__webpack_require__){__webpack_require__(426),__webpack_require__(568),__webpack_require__(569),module.exports=__webpack_require__(411)},43:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return HEADING})),__webpack_require__.d(__webpack_exports__,"d",(function(){return SUBHEADING})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BODY})),__webpack_require__.d(__webpack_exports__,"b",(function(){return CODE}));var HEADING="HEADING",SUBHEADING="SUBHEADING",BODY="BODY",CODE="CODE"},488:function(module,exports){},569:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(32),__webpack_require__(16),__webpack_require__(12),__webpack_require__(33),__webpack_require__(17);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(88),storybook_readme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(412);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{theme:{brandTitle:"ibm-messaging/kafka-java-vertx-starter UI storybook",brandUrl:"https://github.com/ibm-messaging/kafka-java-vertx-starter"}}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(storybook_readme__WEBPACK_IMPORTED_MODULE_6__.addReadme),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){var req=__webpack_require__(798);req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(212)(module))},798:function(module,exports,__webpack_require__){var map={"./Bootstrap/App/App.stories.js":799,"./Elements/Text/Text.stories.js":802};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=798},799:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(88),_App_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(413),withSourceLoader=__webpack_require__(171).withSource,__STORY__=(__webpack_require__(171).addSource,"import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport App from './App.js';\n\nstoriesOf('App', module).add('default', () => <App />);\n"),__ADDS_MAP__={"app--default":{startLoc:{col:29,line:5},endLoc:{col:53,line:5},startBody:{col:40,line:5},endBody:{col:53,line:5}}},_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("App",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/App.stories.js",[],{},"/home/runner/work/kafka-java-vertx-starter/kafka-java-vertx-starter/ui/src/Bootstrap/App",{})).add("default",(function(){return _ref}))}.call(this,__webpack_require__(212)(module))},802:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(2),__webpack_require__(67),__webpack_require__(32),__webpack_require__(61),__webpack_require__(34),__webpack_require__(373),__webpack_require__(374),__webpack_require__(6),__webpack_require__(33);var react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),_storybook_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(88),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(136),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(414),_index_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(43),_index_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(110),_README_md__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(424);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var withSourceLoader=__webpack_require__(171).withSource,__STORY__=(__webpack_require__(171).addSource,"import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, select, text } from '@storybook/addon-knobs';\nimport { withInfo } from '@storybook/addon-info';\nimport {\n  Text,\n  Heading,\n  Subheading,\n  Body,\n  Code,\n  HEADING,\n  SUBHEADING,\n  BODY,\n  CODE,\n} from './index.js';\nimport TextReadme from './README.md';\n\nconst renderHelper = (\n  Component,\n  defaultText = 'Hello World',\n  showTypePropAndKnob = false\n) => () => {\n  let props = {};\n  if (showTypePropAndKnob) {\n    const typeStyle = select(\n      'Type style',\n      {\n        'Heading text': HEADING,\n        'Subheading text': SUBHEADING,\n        'Body text': BODY,\n        'Code text': CODE,\n      },\n      BODY\n    );\n    props = {\n      ...props,\n      type: typeStyle,\n    };\n  }\n\n  const textToRender = text('Sample text to display', defaultText);\n  const customCssClassname = text('Custom CSS classname', undefined);\n  props = {\n    ...props,\n    className: customCssClassname,\n  };\n  return <Component {...props}>{textToRender}</Component>;\n};\n\nstoriesOf('Elements/Text', module)\n  .addDecorator(withKnobs)\n  .addDecorator(withInfo)\n  .addParameters({\n    readme: {\n      sidebar: TextReadme,\n    },\n  })\n  .add(\n    'Text component (default props)',\n    renderHelper(Text, 'Text component with no properties provided', true)\n  )\n  .add(\n    'Text component',\n    renderHelper(Text, 'Text component with properties', true)\n  )\n  .add('Heading component', renderHelper(Heading, 'Heading component'))\n  .add('Subheading component', renderHelper(Subheading, 'Subheading component'))\n  .add('Body component', renderHelper(Body, 'Body component'))\n  .add('Code component', renderHelper(Code, 'Code component'));\n"),__ADDS_MAP__={"elements-text--code-component":{startLoc:{col:7,line:69},endLoc:{col:61,line:69},startBody:{col:25,line:69},endBody:{col:61,line:69}},"elements-text--body-component":{startLoc:{col:7,line:68},endLoc:{col:61,line:68},startBody:{col:25,line:68},endBody:{col:61,line:68}},"elements-text--subheading-component":{startLoc:{col:7,line:67},endLoc:{col:79,line:67},startBody:{col:31,line:67},endBody:{col:79,line:67}},"elements-text--heading-component":{startLoc:{col:7,line:66},endLoc:{col:70,line:66},startBody:{col:28,line:66},endBody:{col:70,line:66}},"elements-text--text-component":{startLoc:{col:4,line:63},endLoc:{col:62,line:64},startBody:{col:4,line:64},endBody:{col:62,line:64}},"elements-text--text-component-default-props":{startLoc:{col:4,line:59},endLoc:{col:74,line:60},startBody:{col:4,line:60},endBody:{col:74,line:60}}},renderHelper=function(Component){var defaultText=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"Hello World",showTypePropAndKnob=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return function(){var props={};if(showTypePropAndKnob){var typeStyle=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_11__.select)("Type style",{"Heading text":_index_js__WEBPACK_IMPORTED_MODULE_13__.c,"Subheading text":_index_js__WEBPACK_IMPORTED_MODULE_13__.d,"Body text":_index_js__WEBPACK_IMPORTED_MODULE_13__.a,"Code text":_index_js__WEBPACK_IMPORTED_MODULE_13__.b},_index_js__WEBPACK_IMPORTED_MODULE_13__.a);props=_objectSpread(_objectSpread({},props),{},{type:typeStyle})}var textToRender=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_11__.text)("Sample text to display",defaultText),customCssClassname=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_11__.text)("Custom CSS classname",void 0);return props=_objectSpread(_objectSpread({},props),{},{className:customCssClassname}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component,props,textToRender)}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_10__.storiesOf)("Elements/Text",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Text.stories.js",[],{},"/home/runner/work/kafka-java-vertx-starter/kafka-java-vertx-starter/ui/src/Elements/Text",{})).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_11__.withKnobs).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_12__.withInfo).addParameters({readme:{sidebar:_README_md__WEBPACK_IMPORTED_MODULE_15__.a}}).add("Text component (default props)",renderHelper(_index_js__WEBPACK_IMPORTED_MODULE_14__.e,"Text component with no properties provided",!0)).add("Text component",renderHelper(_index_js__WEBPACK_IMPORTED_MODULE_14__.e,"Text component with properties",!0)).add("Heading component",renderHelper(_index_js__WEBPACK_IMPORTED_MODULE_14__.c,"Heading component")).add("Subheading component",renderHelper(_index_js__WEBPACK_IMPORTED_MODULE_14__.d,"Subheading component")).add("Body component",renderHelper(_index_js__WEBPACK_IMPORTED_MODULE_14__.a,"Body component")).add("Code component",renderHelper(_index_js__WEBPACK_IMPORTED_MODULE_14__.b,"Code component"))}.call(this,__webpack_require__(212)(module))},813:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":375,"./nestedObjectAssign.js":375};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=813}},[[425,1,2]]]);
//# sourceMappingURL=main.721a73d8aef89a92a80d.bundle.js.map