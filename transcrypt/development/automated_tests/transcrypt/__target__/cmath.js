// Transcrypt'ed from Python, 2018-08-28 20:47:42
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __conj__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, complex, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'cmath';
export var pi = Math.PI;
export var e = Math.E;
export var phase = function (x) {
	return (typeof x === 'number' ? 0 : Math.atan2 (x.imag, x.real));
};
export var polar = function (x) {
	return (typeof x === 'number' ? tuple ([Math.abs (x), 0]) : tuple ([abs (x), phase (x)]));
};
export var rect = function (r, phi) {
	return __mul__ (r, __add__ (__call__ (Math.cos, Math, phi), __mul__ (complex (0, 1.0), __call__ (Math.sin, Math, phi))));
};
export var exp = function (x) {
	return (typeof x === 'number' ? complex (x, 0).__exp__ () : x.__exp__ ());
};
export var log = function (x, base) {
	return (base === undefined ? (typeof x === 'number' ? complex (x, 0).__log__ () : x.__log__ ()) : __truediv__ (log (x), log (base)));
};
export var log10 = function (x) {
	return log (x, 10);
};
export var sqrt = function (x) {
	return exp (__mul__ (log (x), 0.5));
};
export var sin = function (x) {
	return __mul__ (__neg__ (complex (0, 0.5)), __sub__ (__call__ (exp, null, __mul__ (complex (0, 1.0), x)), __call__ (exp, null, __mul__ (__neg__ (complex (0, 1.0)), x))));
};
export var cos = function (x) {
	return __mul__ (0.5, __add__ (__call__ (exp, null, __mul__ (complex (0, 1.0), x)), __call__ (exp, null, __mul__ (__neg__ (complex (0, 1.0)), x))));
};
export var tan = function (x) {
	return __truediv__ (__mul__ (__neg__ (complex (0, 1.0)), __sub__ (__call__ (exp, null, __mul__ (complex (0, 1.0), x)), __call__ (exp, null, __mul__ (__neg__ (complex (0, 1.0)), x)))), __add__ (__call__ (exp, null, __mul__ (complex (0, 1.0), x)), __call__ (exp, null, __mul__ (__neg__ (complex (0, 1.0)), x))));
};
export var asin = function (x) {
	return __mul__ (__neg__ (complex (0, 1.0)), __call__ (log, null, __add__ (__mul__ (complex (0, 1.0), x), __call__ (sqrt, null, __sub__ (1, __mul__ (x, x))))));
};
export var acos = function (x) {
	return __mul__ (__neg__ (complex (0, 1.0)), __call__ (log, null, __add__ (x, __mul__ (complex (0, 1.0), __call__ (sqrt, null, __sub__ (1, __mul__ (x, x)))))));
};
export var atan = function (x) {
	return __mul__ (complex (0, 0.5), __call__ (log, null, __truediv__ (__add__ (complex (0, 1.0), x), __sub__ (complex (0, 1.0), x))));
};
export var sinh = function (x) {
	return __mul__ (0.5, __sub__ (__call__ (exp, null, x), __call__ (exp, null, __neg__ (x))));
};
export var cosh = function (x) {
	return __mul__ (0.5, __add__ (__call__ (exp, null, x), __call__ (exp, null, __neg__ (x))));
};
export var tanh = function (x) {
	return __truediv__ (__sub__ (__call__ (exp, null, x), __call__ (exp, null, __neg__ (x))), __add__ (__call__ (exp, null, x), __call__ (exp, null, __neg__ (x))));
};
export var asinh = function (x) {
	return __call__ (log, null, __add__ (x, __call__ (sqrt, null, __add__ (1, __mul__ (x, x)))));
};
export var acosh = function (x) {
	return __call__ (log, null, __add__ (x, __call__ (sqrt, null, __add__ (__neg__ (1), __mul__ (x, x)))));
};
export var atanh = function (x) {
	return __mul__ (0.5, __call__ (log, null, __truediv__ (__add__ (1, x), __sub__ (1, x))));
};
export var isinf = function (x) {
	return x.real == js_Infinite || x.imag == js.Infinite;
};
export var isfinite = function (x) {
	return !(isinf (x));
};
export var isnan = function (x) {
	return isNaN (x.real) || isNaN (x.imag);
};
export {};

//# sourceMappingURL=cmath.map