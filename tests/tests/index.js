QUnit.module('ES');
import './es.array.copy-within';
import './es.array.every';
import './es.array.fill';
import './es.array.filter';
import './es.array.find-index';
import './es.array.find';
import './es.array.for-each';
import './es.array.from';
import './es.array.includes';
import './es.array.index-of';
import './es.array.is-array';
import './es.array.iterator';
import './es.array.join';
import './es.array.last-index-of';
import './es.array.map';
import './es.array.of';
import './es.array.reduce-right';
import './es.array.reduce';
import './es.array.slice';
import './es.array.some';
import './es.array.sort';
import './es.date.now';
import './es.date.to-iso-string';
import './es.date.to-json';
import './es.date.to-primitive';
import './es.date.to-string';
import './es.function.bind';
import './es.function.has-instance';
import './es.function.name';
import './es.map';
import './es.math.acosh';
import './es.math.asinh';
import './es.math.atanh';
import './es.math.cbrt';
import './es.math.clz32';
import './es.math.cosh';
import './es.math.expm1';
import './es.math.fround';
import './es.math.hypot';
import './es.math.imul';
import './es.math.log10';
import './es.math.log1p';
import './es.math.log2';
import './es.math.sign';
import './es.math.sinh';
import './es.math.tanh';
import './es.math.trunc';
import './es.number.constructor';
import './es.number.epsilon';
import './es.number.is-finite';
import './es.number.is-integer';
import './es.number.is-nan';
import './es.number.is-safe-integer';
import './es.number.max-safe-integer';
import './es.number.min-safe-integer';
import './es.number.parse-float';
import './es.number.parse-int';
import './es.number.to-fixed';
import './es.number.to-precision';
import './es.object.assign';
import './es.object.create';
import './es.object.define-getter';
import './es.object.define-properties';
import './es.object.define-property';
import './es.object.define-setter';
import './es.object.entries';
import './es.object.freeze';
import './es.object.get-own-property-descriptor';
import './es.object.get-own-property-descriptors';
import './es.object.get-own-property-names';
import './es.object.get-prototype-of';
import './es.object.is-extensible';
import './es.object.is-frozen';
import './es.object.is-sealed';
import './es.object.is';
import './es.object.keys';
import './es.object.lookup-getter';
import './es.object.lookup-setter';
import './es.object.prevent-extensions';
import './es.object.seal';
import './es.object.set-prototype-of';
import './es.object.to-string';
import './es.object.values';
import './es.parse-float';
import './es.parse-int';
import './es.promise';
import './es.reflect.apply';
import './es.reflect.construct';
import './es.reflect.define-property';
import './es.reflect.delete-property';
import './es.reflect.get-own-property-descriptor';
import './es.reflect.get-prototype-of';
import './es.reflect.get';
import './es.reflect.has';
import './es.reflect.is-extensible';
import './es.reflect.own-keys';
import './es.reflect.prevent-extensions';
import './es.reflect.set-prototype-of';
import './es.reflect.set';
import './es.regexp.constructor';
import './es.regexp.flags';
import './es.regexp.match';
import './es.regexp.replace';
import './es.regexp.search';
import './es.regexp.split';
import './es.regexp.to-string';
import './es.set';
import './es.string.anchor';
import './es.string.big';
import './es.string.blink';
import './es.string.bold';
import './es.string.code-point-at';
import './es.string.ends-with';
import './es.string.fixed';
import './es.string.fontcolor';
import './es.string.fontsize';
import './es.string.from-code-point';
import './es.string.includes';
import './es.string.italics';
import './es.string.iterator';
import './es.string.link';
import './es.string.pad-end';
import './es.string.pad-start';
import './es.string.raw';
import './es.string.repeat';
import './es.string.small';
import './es.string.starts-with';
import './es.string.strike';
import './es.string.sub';
import './es.string.sup';
import './es.string.trim';
import './es.symbol';
import './es.typed.array-buffer.constructor';
import './es.typed.array-buffer.is-view';
import './es.typed.array-buffer.slice';
import './es.typed.constructors';
import './es.typed.conversions.float32';
import './es.typed.conversions.float64';
import './es.typed.conversions.int16';
import './es.typed.conversions.int32';
import './es.typed.conversions.int8';
import './es.typed.conversions.uint16';
import './es.typed.conversions.uint32';
import './es.typed.conversions.uint8-clamped';
import './es.typed.conversions.uint8';
import './es.typed.data-view';
import './es.typed.methods.copy-within';
import './es.typed.methods.every';
import './es.typed.methods.fill';
import './es.typed.methods.filter';
import './es.typed.methods.find-index';
import './es.typed.methods.find';
import './es.typed.methods.for-each';
import './es.typed.methods.from';
import './es.typed.methods.includes';
import './es.typed.methods.index-of';
import './es.typed.methods.iterator';
import './es.typed.methods.join';
import './es.typed.methods.last-index-of';
import './es.typed.methods.map';
import './es.typed.methods.of';
import './es.typed.methods.reduce-right';
import './es.typed.methods.reduce';
import './es.typed.methods.reverse';
import './es.typed.methods.set';
import './es.typed.methods.slice';
import './es.typed.methods.some';
import './es.typed.methods.subarray';
import './es.typed.methods.to-locale-string';
import './es.typed.methods.to-string';
import './es.weak-map';
import './es.weak-set';

QUnit.module('ESNext');
import './esnext.array.end';
import './esnext.array.flat-map';
import './esnext.array.flatten';
import './esnext.asap';
import './esnext.global';
import './esnext.map.from';
import './esnext.map.of';
import './esnext.math.clamp';
import './esnext.math.deg-per-rad';
import './esnext.math.degrees';
import './esnext.math.fscale';
import './esnext.math.iaddh';
import './esnext.math.imulh';
import './esnext.math.isubh';
import './esnext.math.rad-per-deg';
import './esnext.math.radians';
import './esnext.math.scale';
import './esnext.math.signbit';
import './esnext.math.umulh';
import './esnext.observable';
import './esnext.promise.finally';
import './esnext.promise.try';
import './esnext.reflect.define-metadata';
import './esnext.reflect.delete-metadata';
import './esnext.reflect.get-metadata-keys';
import './esnext.reflect.get-metadata';
import './esnext.reflect.get-own-matadata';
import './esnext.reflect.get-own-metadata-keys';
import './esnext.reflect.has-metadata';
import './esnext.reflect.has-own-metadata';
import './esnext.reflect.metadata';
import './esnext.set.every';
import './esnext.set.filter';
import './esnext.set.find';
import './esnext.set.from';
import './esnext.set.join';
import './esnext.set.map';
import './esnext.set.of';
import './esnext.set.some';
import './esnext.string.at';
import './esnext.string.code-points';
import './esnext.string.match-all';
import './esnext.string.trim-left';
import './esnext.string.trim-right';
import './esnext.string.replace-all';
import './esnext.symbol.async-iterator';
import './esnext.symbol.description';
import './esnext.symbol.observable';
import './esnext.weak-map.from';
import './esnext.weak-map.of';
import './esnext.weak-set.from';
import './esnext.weak-set.of';

QUnit.module('Web');
import './web.dom-collections.for-each';
import './web.dom-collections.iterator';
import './web.immediate';
import './web.timers';
