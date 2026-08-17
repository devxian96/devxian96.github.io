import { noBarrelFiles } from './no-barrel-files.mjs';
import { noUnnecessaryUseClient } from './no-unnecessary-use-client.mjs';
import { propsNaming } from './props-naming.mjs';
import { dddHookRestriction } from './ddd-hook-restriction.mjs';
import { dddImportHierarchy } from './ddd-import-hierarchy.mjs';
import { noReactNamespace } from './no-react-namespace.mjs';
import { noChildrenProp } from './no-children-prop.mjs';
import { noBoxComponent } from './no-box-component.mjs';
import { noExcessiveSx } from './no-excessive-sx.mjs';
import { noHooksInPage } from './no-hooks-in-page.mjs';
import { styledObjectNaming } from './styled-object-naming.mjs';
import { idMinLength } from './id-min-length.mjs';
import { noInlineHandler } from './no-inline-handler.mjs';
import { noNextPageType } from './no-next-page-type.mjs';
import { tsPatternJsxOnly } from './ts-pattern-jsx-only.mjs';
import { noNestedTernaryJsx } from './no-nested-ternary-jsx.mjs';
import { enforceReactHookForm } from './enforce-react-hook-form.mjs';
import { noStaticArrayMap } from './no-static-array-map.mjs';
import { enforcePropsInterface } from './enforce-props-interface.mjs';
import { oneComponentPerFile } from './one-component-per-file.mjs';
import { maxProps } from './max-props.mjs';
import { maxHookParams } from './max-hook-params.mjs';
import { noSuperHook } from './no-super-hook.mjs';
import { noEslintDisable } from './no-eslint-disable.mjs';

export const localPlugin = {
	rules: {
		'no-barrel-files': noBarrelFiles,
		'no-unnecessary-use-client': noUnnecessaryUseClient,
		'props-naming': propsNaming,
		'ddd-hook-restriction': dddHookRestriction,
		'ddd-import-hierarchy': dddImportHierarchy,
		'no-react-namespace': noReactNamespace,
		'no-children-prop': noChildrenProp,
		'no-box-component': noBoxComponent,
		'no-excessive-sx': noExcessiveSx,
		'no-hooks-in-page': noHooksInPage,
		'styled-object-naming': styledObjectNaming,
		'id-min-length': idMinLength,
		'no-inline-handler': noInlineHandler,
		'no-next-page-type': noNextPageType,
		'ts-pattern-jsx-only': tsPatternJsxOnly,
		'no-nested-ternary-jsx': noNestedTernaryJsx,
		'enforce-react-hook-form': enforceReactHookForm,
		'no-static-array-map': noStaticArrayMap,
		'enforce-props-interface': enforcePropsInterface,
		'one-component-per-file': oneComponentPerFile,
		'max-props': maxProps,
		'max-hook-params': maxHookParams,
		'no-super-hook': noSuperHook,
		'no-eslint-disable': noEslintDisable,
	},
};
