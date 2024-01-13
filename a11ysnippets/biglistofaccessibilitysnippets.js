//based on the https://ffoodd.github.io/a11y.css/ repo! 

// Deprecated elements:

const deprecatedElements = document.querySelectorAll('applet, basefont, center, dir, font, isindex, listing, menu, s, strike, u, xmp');
console.log(`Deprecated Elements: ${deprecatedElements.length}`);

// Deprecated and/ or presentational attributes:

const deprecatedAttrs = document.querySelectorAll('[align], [alink], [background], [bgcolor], [border], [color], [height], [link], [marginheight], [marginwidth], [nowrap], [scrolling], [text], [valign], [vlink], [width]');
console.log(`Deprecated and/or Presentational Attributes: ${deprecatedAttrs.length}`);

// Inline frames without title attributes:
const iframesWithoutTitles = document.querySelectorAll('iframe:not([title])');
console.log(`IFrames Without Titles: ${iframesWithoutTitles.length}`);

// Server-side image maps:
const serverSideMaps = document.querySelectorAll('map[name]:not([id])');
console.log(`Server-side Image Maps: ${serverSideMaps.length}`);

// Images without alt attributes:
const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
console.log(`Images Without Alt Attributes: ${imagesWithoutAlt.length}`);

// immage buttons without alt attributes:
const imageButtonsWithoutAlt = document.querySelectorAll('input[type=image]:not([alt])');
console.log(`Image Buttons Without Alt Attributes: ${imageButtonsWithoutAlt.length}`);

// image Map area elements without alt attributes:
const mapAreasWithoutAlt = document.querySelectorAll('area:not([alt])');
console.log(`Image Map Areas Without Alt Attributes: ${mapAreasWithoutAlt.length}`);


// items with an img role without aria labels:
const imgRoleWithoutAriaLabel = document.querySelectorAll('[role=img]:not([aria-label])');
console.log(`Items With Img Role Without Aria Labels: ${imgRoleWithoutAriaLabel.length}`);


// images without a valid src attribute:
const imagesWithoutSrc = document.querySelectorAll('img:not([src])');
console.log(`Images Without Valid Src Attributes: ${imagesWithoutSrc.length}`);

// Links without a valid hypertext reference:
const linksWithoutHref = document.querySelectorAll('a:not([href]):not([role=button])');
console.log(`Links Without Valid Href Attributes: ${linksWithoutHref.length}`);

// Fieldsets without legends:
const fieldsetsWithoutLegend = document.querySelectorAll('fieldset:not(:has(legend))');
console.log(`Fieldsets Without Legends: ${fieldsetsWithoutLegend.length}`);

// Label elements without for attributes:
const labelsWithoutFor = document.querySelectorAll('label:not([for])');
console.log(`Labels Without For Attributes: ${labelsWithoutFor.length}`);

// Invalid dir attribute values:
const invalidDirAttrs = document.querySelectorAll('[dir]:not([dir=ltr]):not([dir=rtl]):not([dir=auto])');
console.log(`Elements With Invalid Dir Attribute Values: ${invalidDirAttrs.length}`);

//   Empty TITLE elements:
const emptyTitleTags = document.querySelectorAll('title:empty');
console.log(`Empty TITLE Elements: ${emptyTitleTags.length}`);

// Implicit headings:
const implicitHeadings = document.querySelectorAll('b, strong, i, em, u, small, h1, h2, h3, h4, h5, h6, [role=heading]');
console.log(`Implicit Headings: ${implicitHeadings.length}`);


// semantic elements in layout table 
const semanticInLayoutTable = document.querySelectorAll('table[role=presentation] [axis]:after, table[role=presentation] [headers]:after, table[role=presentation] [scope]:after, table[role=presentation] caption:after, table[role=presentation] colgroup:after, table[role=presentation] tfoot:after, table[role=presentation] th:after, table[role=presentation] thead:after');
console.log('Semantic elements or attributes found in layout table:', semanticInLayoutTable);


// missing lang in html 
const missingLangHtml = document.querySelectorAll('html:not([lang]):after, html[lang*=" "]:after, html[lang=""]:after');
console.log('HTML element missing [lang] attribute:', missingLangHtml);


//missing action in form 
const missingActionForms = document.querySelectorAll('form:not([action]):after, form[action=" "]:after, form[action=""]:after');
console.log('Forms missing [action] attribute:', missingActionForms);


// missing title in iframes
const missingTitleIframes = document.querySelectorAll('iframe:not([title])+:before, iframe[title=" "]+:before, iframe[title=""]+:before');
console.log('Missing [title] attribute on <iframe> elements:', missingTitleIframes);


//<optgroup> without label 
const optgroupWithoutLabel = document.querySelectorAll('optgroup:not([label])+:before');
console.log('<optgroup> elements without [label]:', optgroupWithoutLabel);


// missing type attribute on input 
const missingTypeInputs = document.querySelectorAll('input:not([type])+:before, input[type=" "]+:before, input[type=""]+:before');
console.log('Inputs missing [type] attribute:', missingTypeInputs);

//find all buttons with the disabled or readonly attribute missing, but with a disabled-related class
const disabledClassButtons = document.querySelectorAll('button[class*=disabled]:not([disabled],[readonly]):after');
console.log('Buttons with [class*=disabled] but missing [disabled] and [readonly]:', disabledClassButtons);


// other BUTTON issues 
const emptyAriaLabelButtons = document.querySelectorAll('button[aria-label=""]:after');
console.log('Buttons with empty [aria-label] attributes:', emptyAriaLabelButtons);

const emptyAriaLabelledByButtons = document.querySelectorAll('button[aria-labelledby=""]:after');
console.log('Buttons with empty [aria-labelledby] attributes:', emptyAriaLabelledByButtons);

const missingTypeButtons = document.querySelectorAll('button:not([type],[form],[formaction],[formtarget]):after');
console.log('Buttons missing [type] attributes:', missingTypeButtons);

const invalidTypeAttributesButtons = document.querySelectorAll('button[type=button][formaction]:after,button[type=button][formenctype]:after,button[type=button][formmethod]:after,button[type=button][formnovalidate]:after,button[type=button][formtarget]:after,button[type=reset][formaction]:after,button[type=reset][formenctype]:after,button[type=reset][formmethod]:after,button[type=reset][formnovalidate]:after,button[type=reset][formtarget]:after');
console.log('Buttons with invalid [type] attributes:', invalidTypeAttributesButtons);

const emptyAttributesButtons = document.querySelectorAll('button[aria-label=""]:after, button[title=""]:after');
console.log('Buttons with empty [aria-label] or [title] attributes:', emptyAttributesButtons);

//buttons with empty title attributes 
const emptyTitleButtons = document.querySelectorAll('button[title=""]:after');
console.log('Buttons with empty [title] attributes:', emptyTitleButtons);

const emptyUntitledButtons = document.querySelectorAll('button:empty:not([aria-label],[aria-labelledby],[title]):after');
console.log('Empty and untitled buttons:', emptyUntitledButtons);


// JS snippet to find all input, select, and textarea fields that are missing both the id and labeling attributes (i.e., aria-label, title, or aria-labelledby
const unlabelledFields = document.querySelectorAll('input:not([type=button],[type=submit],[type=hidden],[type=reset],[type=image],[id],[aria-label],[title],[aria-labelledby])+:before,select:not([id],[aria-label],[aria-labelledby])+:before,textarea:not([id],[aria-label],[aria-labelledby])+:before');
console.log('Unlabelled fields:', unlabelledFields);

// labels with empty for attributes 
const emptyForAttributes = document.querySelectorAll('label[for=" "]:after,label[for=""]:after');
console.log('Labels with empty [for] attributes:', emptyForAttributes);


// images and image inputs that are missing both the src and srcset attributes
const missingSources = document.querySelectorAll('img:not([src],[srcset]):after,input[type=image]:not([src],[srcset]):after');
console.log('Images and image inputs missing sources:', missingSources);

// elements with the role of "img" that are missing both the aria-label and aria-labelledby
const missingAriaAttributes = document.querySelectorAll('[role=img]:not([aria-label],[aria-labelledby]):after,svg[role=img]:not([aria-label],[aria-labelledby])+:before');
console.log('Elements with missing [aria-label] and [aria-labelledby] attributes:', missingAriaAttributes);


// empty links 
const emptyLinks = document.querySelectorAll('a:empty:not([title],[aria-label],[aria-labelledby]):after,a:empty[aria-label=""]:after,a:empty[aria-labelledby=""]:after,a:empty[title=""]:after');
console.log('Empty links:', emptyLinks);


// empty href attributes
const emptyHrefAttributes = document.querySelectorAll('a[href=" "]:after, a[href=""]:after');
console.log('Elements with empty href attributes:', emptyHrefAttributes);

//  tabindex attributes that disrupt the tab order
const disruptTabOrder = document.querySelectorAll('[tabindex]:not([tabindex="0"],[tabindex^="-"]),area[tabindex]:not([tabindex="0"],[tabindex^="-"])+,audio[tabindex]:not([tabindex="0"],[tabindex^="-"])+,base[tabindex]:not([tabindex="0"],[tabindex^="-"])+,br[tabindex]:not([tabindex="0"],[tabindex^="-"])+,col[tabindex]:not([tabindex="0"],[tabindex^="-"])+,command[tabindex]:not([tabindex="0"],[tabindex^="-"])+,embed[tabindex]:not([tabindex="0"],[tabindex^="-"])+,hr[tabindex]:not([tabindex="0"],[tabindex^="-"])+,iframe[tabindex]:not([tabindex="0"],[tabindex^="-"])+,img[tabindex]:not([tabindex="0"],[tabindex^="-"])+,input[tabindex]:not([tabindex="0"],[tabindex^="-"])+,keygen[tabindex]:not([tabindex="0"],[tabindex^="-"])+,link[tabindex]:not([tabindex="0"],[tabindex^="-"])+,meta[tabindex]:not([tabindex="0"],[tabindex^="-"])+,param[tabindex]:not([tabindex="0"],[tabindex^="-"])+,select[tabindex]:not([tabindex="0"],[tabindex^="-"])+,source[tabindex]:not([tabindex="0"],[tabindex^="-"])+,svg[tabindex]:not([tabindex="0"],[tabindex^="-"])+,textarea[tabindex]:not([tabindex="0"],[tabindex^="-"])+,track[tabindex]:not([tabindex="0"],[tabindex^="-"])+,video[tabindex]:not([tabindex="0"],[tabindex^="-"])+,wbr[tabindex]:not([tabindex="0"],[tabindex^="-"])+');
console.log('Elements with tabindex attributes that disrupt the tab order:', disruptTabOrder);


// elements with attributes that contain whitespace
const whitespaceAttributes = document.querySelectorAll('[id*=" "],[lang*=" "],area[id*=" "]+,area[lang*=" "]+,audio[id*=" "]+,audio[lang*=" "]+,base[id*=" "]+,base[lang*=" "]+,br[id*=" "]+,br[lang*=" "]+,col[id*=" "]+,col[lang*=" "]+,command[id*=" "]+,command[lang*=" "]+,embed[id*=" "]+,embed[lang*=" "]+,hr[id*=" "]+,hr[lang*=" "]+,iframe[id*=" "]+,iframe[lang*=" "]+,img[id*=" "]+,img[lang*=" "]+,input[id*=" "]+,input[lang*=" "]+,keygen[id*=" "]+,keygen[lang*=" "]+,link[id*=" "]+,link[lang*=" "]+,map[name*=" "]+,meta[id*=" "]+,meta[lang*=" "]+,param[id*=" "]+,param[lang*=" "]+,select[id*=" "]+,select[lang*=" "]+,source[id*=" "]+,source[lang*=" "]+,svg[id*=" "]+,svg[lang*=" "]+,textarea[id*=" "]+,textarea[lang*=" "]+,track[id*=" "]+,track[lang*=" "]+,video[id*=" "]+,video[lang*=" "]+,wbr[id*=" "]+,wbr[lang*=" "]+');
console.log('Elements with attributes that contain whitespace:', whitespaceAttributes);


// missing lang attribute 
const missingLangAttribute = document.querySelector('html:not([lang])');
console.log('Missing lang attribute on the HTML element

//meta refresh 
const metaRefresh = document.querySelector('meta[http-equiv="refresh"]');
console.log('Meta refresh:', metaRefresh);

// Nested Interactive Elements
// Find all nested interactive elements
const nestedElements = document.querySelectorAll('a a[href], audio[controls] a, button button, details details, embed embed, iframe iframe, img[usemap] img[usemap], input[type]:not([hidden]) input[type]:not([hidden]), label label, select select, textarea textarea, video[controls] video[controls], button a[href], button audio[controls], button button, button details, button embed, button iframe, button img[usemap], button input[type]:not([hidden]), button label, button select, button textarea, button video[controls], form form, label label, meter meter, progress progress')
nestedElements.forEach(element => {
    // Create warning message for each nested element
    console.log('Nested interactive element:', element);
});


// Inaccessible meta name viewport
const viewportMeta = document.querySelector('meta[name=viewport][content*="user-scalable=no"], meta[name=viewport][content*=maximum-scale], meta[name=viewport][content*=minimum-scale]');
if (viewportMeta) {
  const lastLink = document.querySelector('link:last-of-type');
  if (lastLink) {
    console.log('Inaccessible [meta name=viewport]:', viewportMeta);
  }
}

// Charset isn't UTF-8
const charsetMeta = document.querySelector('meta[charset]:not([charset=utf-8],[charset=UTF-8])');
if (charsetMeta) {
  const lastLink = document.querySelector('link:last-of-type');
  if (lastLink) {
    console.log('[charset] is not utf-8:', charsetMeta);
  }
}


// Invalid Class Name
const invalidClasses = document.querySelectorAll('[class^="--"],[class^="-0"],[class^="-1"],[class^="-2"],[class^="-3"],[class^="-4"],[class^="-5"],[class^="-6"],[class^="-7"],[class^="-8"],[class^="-9"],[class^="0"],[class^="1"],[class^="2"],[class^="3"],[class^="4"],[class^="5"],[class^="6"],[class^="7"],[class^="8"],[class^="9"]');
invalidClasses.forEach(classList => {
  console.log('Invalid [class]:', classList);
});


// Invalid id name
const invalidIds = document.querySelectorAll('[id^="--"],[id^="-0"],[id^="-1"],[id^="-2"],[id^="-3"],[id^="-4"],[id^="-5"],[id^="-6"],[id^="-7"],[id^="-8"],[id^="-9"],[id^="0"],[id^="1"],[id^="2"],[id^="3"],[id^="4"],[id^="5"],[id^="6"],[id^="7"],[id^="8"],[id^="9"]');
invalidIds.forEach(id => {
  console.log('Invalid [id]:', id);
});


// elements with JavaScript event attributes
const elementsWithEvents = document.querySelectorAll('[onabort], [onafterprint], [onbeforeprint], [onbeforeunload], [onblur], [oncanplay], [oncanplaythrough], [onchage], [onclick], [oncontextmenu], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onemptied], [onended], [onerror], [onfocus], [onformchange], [onforminput], [onhaschange], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmessage], [onmousedown], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpagehide], [onpageshow], [onpause], [onplay], [onplaying], [onpopstate], [onprogress], [onratechange], [onreadystatechange], [onredo], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onstalled], [onstorage], [onsubmit], [onsuspend], [ontimeupdate], [onundo], [onunload], [onvolumechange], [onwaiting]');

// Log each element with a JavaScript event attribute
elementsWithEvents.forEach((element) => {
  console.log(element);
});


