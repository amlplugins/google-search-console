/**
 * @amlplugins/google-search-console
 *
 * Thin namespaced re-export of the native @googleapis/searchconsole SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Search Console (searchconsole_v1).
 */

import * as _sdk from "@googleapis/searchconsole";
export * from "@googleapis/searchconsole";
export { _sdk as sdk };
export default _sdk;
