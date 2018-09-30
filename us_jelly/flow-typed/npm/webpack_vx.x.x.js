/* flow-include

declare module 'webpack' {
    declare module .exports: any
;
}
declare module 'webpack/bin/config-optimist' {
    declare module .exports: any
;
}
declare module 'webpack/bin/config-yargs' {
    declare module .exports: any
;
}
declare module 'webpack/bin/convert-argv' {
    declare module .exports: any
;
}
declare module 'webpack/bin/webpack' {
    declare module .exports: any
;
}
declare module 'webpack/buildin/amd-define' {
    declare module .exports: any
;
}
declare module 'webpack/buildin/amd-options' {
    declare module .exports: any
;
}
declare module 'webpack/buildin/global' {
    declare module .exports: any
;
}
declare module 'webpack/buildin/harmony-module' {
    declare module .exports: any
;
}
declare module 'webpack/buildin/module' {
    declare module .exports: any
;
}
declare module 'webpack/buildin/system' {
    declare module .exports: any
;
}
declare module 'webpack/hot/dev-server' {
    declare module .exports: any
;
}
declare module 'webpack/hot/emitter' {
    declare module .exports: any
;
}
declare module 'webpack/hot/log-apply-result' {
    declare module .exports: any
;
}
declare module 'webpack/hot/log' {
    declare module .exports: any
;
}
declare module 'webpack/hot/only-dev-server' {
    declare module .exports: any
;
}
declare module 'webpack/hot/poll' {
    declare module .exports: any
;
}
declare module 'webpack/hot/signal' {
    declare module .exports: any
;
}
declare module 'webpack/lib/AmdMainTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/APIPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/AsyncDependenciesBlock' {
    declare module .exports: any
;
}
declare module 'webpack/lib/AsyncDependencyToInitialChunkWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/AutomaticPrefetchPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/BannerPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/BasicEvaluatedExpression' {
    declare module .exports: any
;
}
declare module 'webpack/lib/CachePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/CaseSensitiveModulesWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Chunk' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ChunkRenderError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ChunkTemplate' {
    declare module .exports: any
;
}
declare module 'webpack/lib/compareLocations' {
    declare module .exports: any
;
}
declare module 'webpack/lib/CompatibilityPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Compilation' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Compiler' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ConstPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ContextExclusionPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ContextModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ContextModuleFactory' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ContextReplacementPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DefinePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DelegatedModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DelegatedModuleFactoryPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DelegatedPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDDefineDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDDefineDependencyParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDRequireArrayDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDRequireContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDRequireDependenciesBlock' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDRequireDependenciesBlockParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDRequireDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/AMDRequireItemDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/CommonJsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/CommonJsRequireContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/CommonJsRequireDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/CommonJsRequireDependencyParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ConstDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ContextDependencyHelpers' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ContextDependencyTemplateAsId' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ContextDependencyTemplateAsRequireCall' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ContextElementDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/CriticalDependencyWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/DelegatedExportsDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/DelegatedSourceDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/DepBlockHelpers' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/DllEntryDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/getFunctionExpression' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyAcceptDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyAcceptImportDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyCompatibilityDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyDetectionParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyExportDependencyParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyExportExpressionDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyExportHeaderDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyExportImportedSpecifierDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyExportSpecifierDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyImportDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyImportDependencyParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyImportSpecifierDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyModulesHelpers' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/HarmonyModulesPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportDependenciesBlock' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportEagerContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportEagerDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportLazyContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportLazyOnceContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportWeakContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ImportWeakDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/LoaderDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/LoaderPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/LocalModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/LocalModuleDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/LocalModulesHelpers' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ModuleDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ModuleDependencyTemplateAsId' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ModuleDependencyTemplateAsRequireId' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ModuleHotAcceptDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/ModuleHotDeclineDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/MultiEntryDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/NullDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/PrefetchDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireContextDependencyParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireContextPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireEnsureDependenciesBlock' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireEnsureDependenciesBlockParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireEnsureDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireEnsureItemDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireEnsurePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireHeaderDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireIncludeDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireIncludeDependencyParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireIncludePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireResolveContextDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireResolveDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireResolveDependencyParserPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/RequireResolveHeaderDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/SingleEntryDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/SystemPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/UnsupportedDependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/dependencies/WebpackMissingModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DependenciesBlock' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DependenciesBlockVariable' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Dependency' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DllEntryPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DllModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DllModuleFactory' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DllPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DllReferencePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/DynamicEntryPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/EntryModuleNotFoundError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/EntryOptionPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Entrypoint' {
    declare module .exports: any
;
}
declare module 'webpack/lib/EnvironmentPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ErrorHelpers' {
    declare module .exports: any
;
}
declare module 'webpack/lib/EvalDevToolModulePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/EvalDevToolModuleTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/EvalSourceMapDevToolModuleTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/EvalSourceMapDevToolPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ExportPropertyMainTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ExtendedAPIPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ExternalModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ExternalModuleFactoryPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ExternalsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/FlagDependencyExportsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/FlagDependencyUsagePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/FlagInitialModulesAsUsedPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/formatLocation' {
    declare module .exports: any
;
}
declare module 'webpack/lib/FunctionModulePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/FunctionModuleTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/HashedModuleIdsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/HotModuleReplacement.runtime' {
    declare module .exports: any
;
}
declare module 'webpack/lib/HotModuleReplacementPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/HotUpdateChunkTemplate' {
    declare module .exports: any
;
}
declare module 'webpack/lib/IgnorePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/JsonpChunkTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/JsonpExportMainTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/JsonpHotUpdateChunkTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/JsonpMainTemplate.runtime' {
    declare module .exports: any
;
}
declare module 'webpack/lib/JsonpMainTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/JsonpTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/LibManifestPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/LibraryTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/LoaderOptionsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/LoaderTargetPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MainTemplate' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MemoryOutputFileSystem' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Module' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleBuildError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleDependencyError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleDependencyWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleFilenameHelpers' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleNotFoundError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleParseError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleReason' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleTemplate' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ModuleWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MovedToPluginWarningPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MultiCompiler' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MultiEntryPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MultiModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MultiModuleFactory' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MultiStats' {
    declare module .exports: any
;
}
declare module 'webpack/lib/MultiWatching' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NamedChunksPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NamedModulesPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NewWatchingPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeChunkTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeEnvironmentPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeHotUpdateChunkTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeMainTemplate.runtime' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeMainTemplateAsync.runtime' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeMainTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeOutputFileSystem' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeSourcePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeTargetPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/node/NodeWatchFileSystem' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NodeStuffPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NoEmitOnErrorsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NoErrorsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NormalModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NormalModuleFactory' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NormalModuleReplacementPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/NullFactory' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/AggressiveMergingPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/AggressiveSplittingPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/ChunkModuleIdRangePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/CommonsChunkPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/ConcatenatedModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/DedupePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/EnsureChunkConditionsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/FlagIncludedChunksPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/LimitChunkCountPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/MergeDuplicateChunksPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/MinChunkSizePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/ModuleConcatenationPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/OccurrenceOrderPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/RemoveEmptyChunksPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/RemoveParentModulesPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/optimize/UglifyJsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/OptionsApply' {
    declare module .exports: any
;
}
declare module 'webpack/lib/OptionsDefaulter' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Parser' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ParserHelpers' {
    declare module .exports: any
;
}
declare module 'webpack/lib/performance/AssetsOverSizeLimitWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/performance/EntrypointsOverSizeLimitWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/performance/NoAsyncChunksWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/performance/SizeLimitsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/PrefetchPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/prepareOptions' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ProgressPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/ProvidePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/RawModule' {
    declare module .exports: any
;
}
declare module 'webpack/lib/RecordIdsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/removeAndDo' {
    declare module .exports: any
;
}
declare module 'webpack/lib/RequestShortener' {
    declare module .exports: any
;
}
declare module 'webpack/lib/RequireJsStuffPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/RuleSet' {
    declare module .exports: any
;
}
declare module 'webpack/lib/SetVarMainTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/SingleEntryPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/SizeFormatHelpers' {
    declare module .exports: any
;
}
declare module 'webpack/lib/SourceMapDevToolModuleOptionsPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/SourceMapDevToolPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Stats' {
    declare module .exports: any
;
}
declare module 'webpack/lib/Template' {
    declare module .exports: any
;
}
declare module 'webpack/lib/TemplatedPathPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/UmdMainTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/UnsupportedFeatureWarning' {
    declare module .exports: any
;
}
declare module 'webpack/lib/UseStrictPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/util/identifier' {
    declare module .exports: any
;
}
declare module 'webpack/lib/util/Queue' {
    declare module .exports: any
;
}
declare module 'webpack/lib/util/Semaphore' {
    declare module .exports: any
;
}
declare module 'webpack/lib/util/SortableSet' {
    declare module .exports: any
;
}
declare module 'webpack/lib/validateSchema' {
    declare module .exports: any
;
}
declare module 'webpack/lib/WarnCaseSensitiveModulesPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/WatchIgnorePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/web/WebEnvironmentPlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/webpack' {
    declare module .exports: any
;
}
declare module 'webpack/lib/webpack.web' {
    declare module .exports: any
;
}
declare module 'webpack/lib/WebpackError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/WebpackOptionsApply' {
    declare module .exports: any
;
}
declare module 'webpack/lib/WebpackOptionsDefaulter' {
    declare module .exports: any
;
}
declare module 'webpack/lib/WebpackOptionsValidationError' {
    declare module .exports: any
;
}
declare module 'webpack/lib/webworker/WebWorkerChunkTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/webworker/WebWorkerHotUpdateChunkTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/webworker/WebWorkerMainTemplate.runtime' {
    declare module .exports: any
;
}
declare module 'webpack/lib/webworker/WebWorkerMainTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/lib/webworker/WebWorkerTemplatePlugin' {
    declare module .exports: any
;
}
declare module 'webpack/schemas/ajv.absolutePath' {
    declare module .exports: any
;
}
declare module 'webpack/web_modules/node-libs-browser' {
    declare module .exports: any
;
}
declare module 'webpack/bin/config-optimist.js' {
    declare module .exports: $Exports<'webpack/bin/config-optimist'>
;
}
declare module 'webpack/bin/config-yargs.js' {
    declare module .exports: $Exports<'webpack/bin/config-yargs'>
;
}
declare module 'webpack/bin/convert-argv.js' {
    declare module .exports: $Exports<'webpack/bin/convert-argv'>
;
}
declare module 'webpack/bin/webpack.js' {
    declare module .exports: $Exports<'webpack/bin/webpack'>
;
}
declare module 'webpack/buildin/amd-define.js' {
    declare module .exports: $Exports<'webpack/buildin/amd-define'>
;
}
declare module 'webpack/buildin/amd-options.js' {
    declare module .exports: $Exports<'webpack/buildin/amd-options'>
;
}
declare module 'webpack/buildin/global.js' {
    declare module .exports: $Exports<'webpack/buildin/global'>
;
}
declare module 'webpack/buildin/harmony-module.js' {
    declare module .exports: $Exports<'webpack/buildin/harmony-module'>
;
}
declare module 'webpack/buildin/module.js' {
    declare module .exports: $Exports<'webpack/buildin/module'>
;
}
declare module 'webpack/buildin/system.js' {
    declare module .exports: $Exports<'webpack/buildin/system'>
;
}
declare module 'webpack/hot/dev-server.js' {
    declare module .exports: $Exports<'webpack/hot/dev-server'>
;
}
declare module 'webpack/hot/emitter.js' {
    declare module .exports: $Exports<'webpack/hot/emitter'>
;
}
declare module 'webpack/hot/log-apply-result.js' {
    declare module .exports: $Exports<'webpack/hot/log-apply-result'>
;
}
declare module 'webpack/hot/log.js' {
    declare module .exports: $Exports<'webpack/hot/log'>
;
}
declare module 'webpack/hot/only-dev-server.js' {
    declare module .exports: $Exports<'webpack/hot/only-dev-server'>
;
}
declare module 'webpack/hot/poll.js' {
    declare module .exports: $Exports<'webpack/hot/poll'>
;
}
declare module 'webpack/hot/signal.js' {
    declare module .exports: $Exports<'webpack/hot/signal'>
;
}
declare module 'webpack/lib/AmdMainTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/AmdMainTemplatePlugin'>
;
}
declare module 'webpack/lib/APIPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/APIPlugin'>
;
}
declare module 'webpack/lib/AsyncDependenciesBlock.js' {
    declare module .exports: $Exports<'webpack/lib/AsyncDependenciesBlock'>
;
}
declare module 'webpack/lib/AsyncDependencyToInitialChunkWarning.js' {
    declare module .exports: $Exports<'webpack/lib/AsyncDependencyToInitialChunkWarning'>
;
}
declare module 'webpack/lib/AutomaticPrefetchPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/AutomaticPrefetchPlugin'>
;
}
declare module 'webpack/lib/BannerPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/BannerPlugin'>
;
}
declare module 'webpack/lib/BasicEvaluatedExpression.js' {
    declare module .exports: $Exports<'webpack/lib/BasicEvaluatedExpression'>
;
}
declare module 'webpack/lib/CachePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/CachePlugin'>
;
}
declare module 'webpack/lib/CaseSensitiveModulesWarning.js' {
    declare module .exports: $Exports<'webpack/lib/CaseSensitiveModulesWarning'>
;
}
declare module 'webpack/lib/Chunk.js' {
    declare module .exports: $Exports<'webpack/lib/Chunk'>
;
}
declare module 'webpack/lib/ChunkRenderError.js' {
    declare module .exports: $Exports<'webpack/lib/ChunkRenderError'>
;
}
declare module 'webpack/lib/ChunkTemplate.js' {
    declare module .exports: $Exports<'webpack/lib/ChunkTemplate'>
;
}
declare module 'webpack/lib/compareLocations.js' {
    declare module .exports: $Exports<'webpack/lib/compareLocations'>
;
}
declare module 'webpack/lib/CompatibilityPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/CompatibilityPlugin'>
;
}
declare module 'webpack/lib/Compilation.js' {
    declare module .exports: $Exports<'webpack/lib/Compilation'>
;
}
declare module 'webpack/lib/Compiler.js' {
    declare module .exports: $Exports<'webpack/lib/Compiler'>
;
}
declare module 'webpack/lib/ConstPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ConstPlugin'>
;
}
declare module 'webpack/lib/ContextExclusionPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ContextExclusionPlugin'>
;
}
declare module 'webpack/lib/ContextModule.js' {
    declare module .exports: $Exports<'webpack/lib/ContextModule'>
;
}
declare module 'webpack/lib/ContextModuleFactory.js' {
    declare module .exports: $Exports<'webpack/lib/ContextModuleFactory'>
;
}
declare module 'webpack/lib/ContextReplacementPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ContextReplacementPlugin'>
;
}
declare module 'webpack/lib/DefinePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/DefinePlugin'>
;
}
declare module 'webpack/lib/DelegatedModule.js' {
    declare module .exports: $Exports<'webpack/lib/DelegatedModule'>
;
}
declare module 'webpack/lib/DelegatedModuleFactoryPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/DelegatedModuleFactoryPlugin'>
;
}
declare module 'webpack/lib/DelegatedPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/DelegatedPlugin'>
;
}
declare module 'webpack/lib/dependencies/AMDDefineDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDDefineDependency'>
;
}
declare module 'webpack/lib/dependencies/AMDDefineDependencyParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDDefineDependencyParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/AMDPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDPlugin'>
;
}
declare module 'webpack/lib/dependencies/AMDRequireArrayDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDRequireArrayDependency'>
;
}
declare module 'webpack/lib/dependencies/AMDRequireContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDRequireContextDependency'>
;
}
declare module 'webpack/lib/dependencies/AMDRequireDependenciesBlock.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDRequireDependenciesBlock'>
;
}
declare module 'webpack/lib/dependencies/AMDRequireDependenciesBlockParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDRequireDependenciesBlockParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/AMDRequireDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDRequireDependency'>
;
}
declare module 'webpack/lib/dependencies/AMDRequireItemDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/AMDRequireItemDependency'>
;
}
declare module 'webpack/lib/dependencies/CommonJsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/CommonJsPlugin'>
;
}
declare module 'webpack/lib/dependencies/CommonJsRequireContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/CommonJsRequireContextDependency'>
;
}
declare module 'webpack/lib/dependencies/CommonJsRequireDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/CommonJsRequireDependency'>
;
}
declare module 'webpack/lib/dependencies/CommonJsRequireDependencyParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/CommonJsRequireDependencyParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/ConstDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ConstDependency'>
;
}
declare module 'webpack/lib/dependencies/ContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ContextDependency'>
;
}
declare module 'webpack/lib/dependencies/ContextDependencyHelpers.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ContextDependencyHelpers'>
;
}
declare module 'webpack/lib/dependencies/ContextDependencyTemplateAsId.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ContextDependencyTemplateAsId'>
;
}
declare module 'webpack/lib/dependencies/ContextDependencyTemplateAsRequireCall.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ContextDependencyTemplateAsRequireCall'>
;
}
declare module 'webpack/lib/dependencies/ContextElementDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ContextElementDependency'>
;
}
declare module 'webpack/lib/dependencies/CriticalDependencyWarning.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/CriticalDependencyWarning'>
;
}
declare module 'webpack/lib/dependencies/DelegatedExportsDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/DelegatedExportsDependency'>
;
}
declare module 'webpack/lib/dependencies/DelegatedSourceDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/DelegatedSourceDependency'>
;
}
declare module 'webpack/lib/dependencies/DepBlockHelpers.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/DepBlockHelpers'>
;
}
declare module 'webpack/lib/dependencies/DllEntryDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/DllEntryDependency'>
;
}
declare module 'webpack/lib/dependencies/getFunctionExpression.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/getFunctionExpression'>
;
}
declare module 'webpack/lib/dependencies/HarmonyAcceptDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyAcceptDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyAcceptImportDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyAcceptImportDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyCompatibilityDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyCompatibilityDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyDetectionParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyDetectionParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/HarmonyExportDependencyParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyExportDependencyParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/HarmonyExportExpressionDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyExportExpressionDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyExportHeaderDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyExportHeaderDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyExportImportedSpecifierDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyExportImportedSpecifierDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyExportSpecifierDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyExportSpecifierDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyImportDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyImportDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyImportDependencyParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyImportDependencyParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/HarmonyImportSpecifierDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyImportSpecifierDependency'>
;
}
declare module 'webpack/lib/dependencies/HarmonyModulesHelpers.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyModulesHelpers'>
;
}
declare module 'webpack/lib/dependencies/HarmonyModulesPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/HarmonyModulesPlugin'>
;
}
declare module 'webpack/lib/dependencies/ImportContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportContextDependency'>
;
}
declare module 'webpack/lib/dependencies/ImportDependenciesBlock.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportDependenciesBlock'>
;
}
declare module 'webpack/lib/dependencies/ImportDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportDependency'>
;
}
declare module 'webpack/lib/dependencies/ImportEagerContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportEagerContextDependency'>
;
}
declare module 'webpack/lib/dependencies/ImportEagerDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportEagerDependency'>
;
}
declare module 'webpack/lib/dependencies/ImportLazyContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportLazyContextDependency'>
;
}
declare module 'webpack/lib/dependencies/ImportLazyOnceContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportLazyOnceContextDependency'>
;
}
declare module 'webpack/lib/dependencies/ImportParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/ImportPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportPlugin'>
;
}
declare module 'webpack/lib/dependencies/ImportWeakContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportWeakContextDependency'>
;
}
declare module 'webpack/lib/dependencies/ImportWeakDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ImportWeakDependency'>
;
}
declare module 'webpack/lib/dependencies/LoaderDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/LoaderDependency'>
;
}
declare module 'webpack/lib/dependencies/LoaderPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/LoaderPlugin'>
;
}
declare module 'webpack/lib/dependencies/LocalModule.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/LocalModule'>
;
}
declare module 'webpack/lib/dependencies/LocalModuleDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/LocalModuleDependency'>
;
}
declare module 'webpack/lib/dependencies/LocalModulesHelpers.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/LocalModulesHelpers'>
;
}
declare module 'webpack/lib/dependencies/ModuleDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ModuleDependency'>
;
}
declare module 'webpack/lib/dependencies/ModuleDependencyTemplateAsId.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ModuleDependencyTemplateAsId'>
;
}
declare module 'webpack/lib/dependencies/ModuleDependencyTemplateAsRequireId.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ModuleDependencyTemplateAsRequireId'>
;
}
declare module 'webpack/lib/dependencies/ModuleHotAcceptDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ModuleHotAcceptDependency'>
;
}
declare module 'webpack/lib/dependencies/ModuleHotDeclineDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/ModuleHotDeclineDependency'>
;
}
declare module 'webpack/lib/dependencies/MultiEntryDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/MultiEntryDependency'>
;
}
declare module 'webpack/lib/dependencies/NullDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/NullDependency'>
;
}
declare module 'webpack/lib/dependencies/PrefetchDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/PrefetchDependency'>
;
}
declare module 'webpack/lib/dependencies/RequireContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireContextDependency'>
;
}
declare module 'webpack/lib/dependencies/RequireContextDependencyParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireContextDependencyParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/RequireContextPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireContextPlugin'>
;
}
declare module 'webpack/lib/dependencies/RequireEnsureDependenciesBlock.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireEnsureDependenciesBlock'>
;
}
declare module 'webpack/lib/dependencies/RequireEnsureDependenciesBlockParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireEnsureDependenciesBlockParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/RequireEnsureDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireEnsureDependency'>
;
}
declare module 'webpack/lib/dependencies/RequireEnsureItemDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireEnsureItemDependency'>
;
}
declare module 'webpack/lib/dependencies/RequireEnsurePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireEnsurePlugin'>
;
}
declare module 'webpack/lib/dependencies/RequireHeaderDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireHeaderDependency'>
;
}
declare module 'webpack/lib/dependencies/RequireIncludeDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireIncludeDependency'>
;
}
declare module 'webpack/lib/dependencies/RequireIncludeDependencyParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireIncludeDependencyParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/RequireIncludePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireIncludePlugin'>
;
}
declare module 'webpack/lib/dependencies/RequireResolveContextDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireResolveContextDependency'>
;
}
declare module 'webpack/lib/dependencies/RequireResolveDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireResolveDependency'>
;
}
declare module 'webpack/lib/dependencies/RequireResolveDependencyParserPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireResolveDependencyParserPlugin'>
;
}
declare module 'webpack/lib/dependencies/RequireResolveHeaderDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/RequireResolveHeaderDependency'>
;
}
declare module 'webpack/lib/dependencies/SingleEntryDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/SingleEntryDependency'>
;
}
declare module 'webpack/lib/dependencies/SystemPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/SystemPlugin'>
;
}
declare module 'webpack/lib/dependencies/UnsupportedDependency.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/UnsupportedDependency'>
;
}
declare module 'webpack/lib/dependencies/WebpackMissingModule.js' {
    declare module .exports: $Exports<'webpack/lib/dependencies/WebpackMissingModule'>
;
}
declare module 'webpack/lib/DependenciesBlock.js' {
    declare module .exports: $Exports<'webpack/lib/DependenciesBlock'>
;
}
declare module 'webpack/lib/DependenciesBlockVariable.js' {
    declare module .exports: $Exports<'webpack/lib/DependenciesBlockVariable'>
;
}
declare module 'webpack/lib/Dependency.js' {
    declare module .exports: $Exports<'webpack/lib/Dependency'>
;
}
declare module 'webpack/lib/DllEntryPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/DllEntryPlugin'>
;
}
declare module 'webpack/lib/DllModule.js' {
    declare module .exports: $Exports<'webpack/lib/DllModule'>
;
}
declare module 'webpack/lib/DllModuleFactory.js' {
    declare module .exports: $Exports<'webpack/lib/DllModuleFactory'>
;
}
declare module 'webpack/lib/DllPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/DllPlugin'>
;
}
declare module 'webpack/lib/DllReferencePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/DllReferencePlugin'>
;
}
declare module 'webpack/lib/DynamicEntryPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/DynamicEntryPlugin'>
;
}
declare module 'webpack/lib/EntryModuleNotFoundError.js' {
    declare module .exports: $Exports<'webpack/lib/EntryModuleNotFoundError'>
;
}
declare module 'webpack/lib/EntryOptionPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/EntryOptionPlugin'>
;
}
declare module 'webpack/lib/Entrypoint.js' {
    declare module .exports: $Exports<'webpack/lib/Entrypoint'>
;
}
declare module 'webpack/lib/EnvironmentPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/EnvironmentPlugin'>
;
}
declare module 'webpack/lib/ErrorHelpers.js' {
    declare module .exports: $Exports<'webpack/lib/ErrorHelpers'>
;
}
declare module 'webpack/lib/EvalDevToolModulePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/EvalDevToolModulePlugin'>
;
}
declare module 'webpack/lib/EvalDevToolModuleTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/EvalDevToolModuleTemplatePlugin'>
;
}
declare module 'webpack/lib/EvalSourceMapDevToolModuleTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/EvalSourceMapDevToolModuleTemplatePlugin'>
;
}
declare module 'webpack/lib/EvalSourceMapDevToolPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/EvalSourceMapDevToolPlugin'>
;
}
declare module 'webpack/lib/ExportPropertyMainTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ExportPropertyMainTemplatePlugin'>
;
}
declare module 'webpack/lib/ExtendedAPIPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ExtendedAPIPlugin'>
;
}
declare module 'webpack/lib/ExternalModule.js' {
    declare module .exports: $Exports<'webpack/lib/ExternalModule'>
;
}
declare module 'webpack/lib/ExternalModuleFactoryPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ExternalModuleFactoryPlugin'>
;
}
declare module 'webpack/lib/ExternalsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ExternalsPlugin'>
;
}
declare module 'webpack/lib/FlagDependencyExportsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/FlagDependencyExportsPlugin'>
;
}
declare module 'webpack/lib/FlagDependencyUsagePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/FlagDependencyUsagePlugin'>
;
}
declare module 'webpack/lib/FlagInitialModulesAsUsedPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/FlagInitialModulesAsUsedPlugin'>
;
}
declare module 'webpack/lib/formatLocation.js' {
    declare module .exports: $Exports<'webpack/lib/formatLocation'>
;
}
declare module 'webpack/lib/FunctionModulePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/FunctionModulePlugin'>
;
}
declare module 'webpack/lib/FunctionModuleTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/FunctionModuleTemplatePlugin'>
;
}
declare module 'webpack/lib/HashedModuleIdsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/HashedModuleIdsPlugin'>
;
}
declare module 'webpack/lib/HotModuleReplacement.runtime.js' {
    declare module .exports: $Exports<'webpack/lib/HotModuleReplacement.runtime'>
;
}
declare module 'webpack/lib/HotModuleReplacementPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/HotModuleReplacementPlugin'>
;
}
declare module 'webpack/lib/HotUpdateChunkTemplate.js' {
    declare module .exports: $Exports<'webpack/lib/HotUpdateChunkTemplate'>
;
}
declare module 'webpack/lib/IgnorePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/IgnorePlugin'>
;
}
declare module 'webpack/lib/JsonpChunkTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/JsonpChunkTemplatePlugin'>
;
}
declare module 'webpack/lib/JsonpExportMainTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/JsonpExportMainTemplatePlugin'>
;
}
declare module 'webpack/lib/JsonpHotUpdateChunkTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/JsonpHotUpdateChunkTemplatePlugin'>
;
}
declare module 'webpack/lib/JsonpMainTemplate.runtime.js' {
    declare module .exports: $Exports<'webpack/lib/JsonpMainTemplate.runtime'>
;
}
declare module 'webpack/lib/JsonpMainTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/JsonpMainTemplatePlugin'>
;
}
declare module 'webpack/lib/JsonpTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/JsonpTemplatePlugin'>
;
}
declare module 'webpack/lib/LibManifestPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/LibManifestPlugin'>
;
}
declare module 'webpack/lib/LibraryTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/LibraryTemplatePlugin'>
;
}
declare module 'webpack/lib/LoaderOptionsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/LoaderOptionsPlugin'>
;
}
declare module 'webpack/lib/LoaderTargetPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/LoaderTargetPlugin'>
;
}
declare module 'webpack/lib/MainTemplate.js' {
    declare module .exports: $Exports<'webpack/lib/MainTemplate'>
;
}
declare module 'webpack/lib/MemoryOutputFileSystem.js' {
    declare module .exports: $Exports<'webpack/lib/MemoryOutputFileSystem'>
;
}
declare module 'webpack/lib/Module.js' {
    declare module .exports: $Exports<'webpack/lib/Module'>
;
}
declare module 'webpack/lib/ModuleBuildError.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleBuildError'>
;
}
declare module 'webpack/lib/ModuleDependencyError.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleDependencyError'>
;
}
declare module 'webpack/lib/ModuleDependencyWarning.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleDependencyWarning'>
;
}
declare module 'webpack/lib/ModuleError.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleError'>
;
}
declare module 'webpack/lib/ModuleFilenameHelpers.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleFilenameHelpers'>
;
}
declare module 'webpack/lib/ModuleNotFoundError.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleNotFoundError'>
;
}
declare module 'webpack/lib/ModuleParseError.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleParseError'>
;
}
declare module 'webpack/lib/ModuleReason.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleReason'>
;
}
declare module 'webpack/lib/ModuleTemplate.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleTemplate'>
;
}
declare module 'webpack/lib/ModuleWarning.js' {
    declare module .exports: $Exports<'webpack/lib/ModuleWarning'>
;
}
declare module 'webpack/lib/MovedToPluginWarningPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/MovedToPluginWarningPlugin'>
;
}
declare module 'webpack/lib/MultiCompiler.js' {
    declare module .exports: $Exports<'webpack/lib/MultiCompiler'>
;
}
declare module 'webpack/lib/MultiEntryPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/MultiEntryPlugin'>
;
}
declare module 'webpack/lib/MultiModule.js' {
    declare module .exports: $Exports<'webpack/lib/MultiModule'>
;
}
declare module 'webpack/lib/MultiModuleFactory.js' {
    declare module .exports: $Exports<'webpack/lib/MultiModuleFactory'>
;
}
declare module 'webpack/lib/MultiStats.js' {
    declare module .exports: $Exports<'webpack/lib/MultiStats'>
;
}
declare module 'webpack/lib/MultiWatching.js' {
    declare module .exports: $Exports<'webpack/lib/MultiWatching'>
;
}
declare module 'webpack/lib/NamedChunksPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/NamedChunksPlugin'>
;
}
declare module 'webpack/lib/NamedModulesPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/NamedModulesPlugin'>
;
}
declare module 'webpack/lib/NewWatchingPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/NewWatchingPlugin'>
;
}
declare module 'webpack/lib/node/NodeChunkTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeChunkTemplatePlugin'>
;
}
declare module 'webpack/lib/node/NodeEnvironmentPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeEnvironmentPlugin'>
;
}
declare module 'webpack/lib/node/NodeHotUpdateChunkTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeHotUpdateChunkTemplatePlugin'>
;
}
declare module 'webpack/lib/node/NodeMainTemplate.runtime.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeMainTemplate.runtime'>
;
}
declare module 'webpack/lib/node/NodeMainTemplateAsync.runtime.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeMainTemplateAsync.runtime'>
;
}
declare module 'webpack/lib/node/NodeMainTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeMainTemplatePlugin'>
;
}
declare module 'webpack/lib/node/NodeOutputFileSystem.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeOutputFileSystem'>
;
}
declare module 'webpack/lib/node/NodeSourcePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeSourcePlugin'>
;
}
declare module 'webpack/lib/node/NodeTargetPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeTargetPlugin'>
;
}
declare module 'webpack/lib/node/NodeTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeTemplatePlugin'>
;
}
declare module 'webpack/lib/node/NodeWatchFileSystem.js' {
    declare module .exports: $Exports<'webpack/lib/node/NodeWatchFileSystem'>
;
}
declare module 'webpack/lib/NodeStuffPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/NodeStuffPlugin'>
;
}
declare module 'webpack/lib/NoEmitOnErrorsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/NoEmitOnErrorsPlugin'>
;
}
declare module 'webpack/lib/NoErrorsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/NoErrorsPlugin'>
;
}
declare module 'webpack/lib/NormalModule.js' {
    declare module .exports: $Exports<'webpack/lib/NormalModule'>
;
}
declare module 'webpack/lib/NormalModuleFactory.js' {
    declare module .exports: $Exports<'webpack/lib/NormalModuleFactory'>
;
}
declare module 'webpack/lib/NormalModuleReplacementPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/NormalModuleReplacementPlugin'>
;
}
declare module 'webpack/lib/NullFactory.js' {
    declare module .exports: $Exports<'webpack/lib/NullFactory'>
;
}
declare module 'webpack/lib/optimize/AggressiveMergingPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/AggressiveMergingPlugin'>
;
}
declare module 'webpack/lib/optimize/AggressiveSplittingPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/AggressiveSplittingPlugin'>
;
}
declare module 'webpack/lib/optimize/ChunkModuleIdRangePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/ChunkModuleIdRangePlugin'>
;
}
declare module 'webpack/lib/optimize/CommonsChunkPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/CommonsChunkPlugin'>
;
}
declare module 'webpack/lib/optimize/ConcatenatedModule.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/ConcatenatedModule'>
;
}
declare module 'webpack/lib/optimize/DedupePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/DedupePlugin'>
;
}
declare module 'webpack/lib/optimize/EnsureChunkConditionsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/EnsureChunkConditionsPlugin'>
;
}
declare module 'webpack/lib/optimize/FlagIncludedChunksPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/FlagIncludedChunksPlugin'>
;
}
declare module 'webpack/lib/optimize/LimitChunkCountPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/LimitChunkCountPlugin'>
;
}
declare module 'webpack/lib/optimize/MergeDuplicateChunksPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/MergeDuplicateChunksPlugin'>
;
}
declare module 'webpack/lib/optimize/MinChunkSizePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/MinChunkSizePlugin'>
;
}
declare module 'webpack/lib/optimize/ModuleConcatenationPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/ModuleConcatenationPlugin'>
;
}
declare module 'webpack/lib/optimize/OccurrenceOrderPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/OccurrenceOrderPlugin'>
;
}
declare module 'webpack/lib/optimize/RemoveEmptyChunksPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/RemoveEmptyChunksPlugin'>
;
}
declare module 'webpack/lib/optimize/RemoveParentModulesPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/RemoveParentModulesPlugin'>
;
}
declare module 'webpack/lib/optimize/UglifyJsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/optimize/UglifyJsPlugin'>
;
}
declare module 'webpack/lib/OptionsApply.js' {
    declare module .exports: $Exports<'webpack/lib/OptionsApply'>
;
}
declare module 'webpack/lib/OptionsDefaulter.js' {
    declare module .exports: $Exports<'webpack/lib/OptionsDefaulter'>
;
}
declare module 'webpack/lib/Parser.js' {
    declare module .exports: $Exports<'webpack/lib/Parser'>
;
}
declare module 'webpack/lib/ParserHelpers.js' {
    declare module .exports: $Exports<'webpack/lib/ParserHelpers'>
;
}
declare module 'webpack/lib/performance/AssetsOverSizeLimitWarning.js' {
    declare module .exports: $Exports<'webpack/lib/performance/AssetsOverSizeLimitWarning'>
;
}
declare module 'webpack/lib/performance/EntrypointsOverSizeLimitWarning.js' {
    declare module .exports: $Exports<'webpack/lib/performance/EntrypointsOverSizeLimitWarning'>
;
}
declare module 'webpack/lib/performance/NoAsyncChunksWarning.js' {
    declare module .exports: $Exports<'webpack/lib/performance/NoAsyncChunksWarning'>
;
}
declare module 'webpack/lib/performance/SizeLimitsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/performance/SizeLimitsPlugin'>
;
}
declare module 'webpack/lib/PrefetchPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/PrefetchPlugin'>
;
}
declare module 'webpack/lib/prepareOptions.js' {
    declare module .exports: $Exports<'webpack/lib/prepareOptions'>
;
}
declare module 'webpack/lib/ProgressPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ProgressPlugin'>
;
}
declare module 'webpack/lib/ProvidePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/ProvidePlugin'>
;
}
declare module 'webpack/lib/RawModule.js' {
    declare module .exports: $Exports<'webpack/lib/RawModule'>
;
}
declare module 'webpack/lib/RecordIdsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/RecordIdsPlugin'>
;
}
declare module 'webpack/lib/removeAndDo.js' {
    declare module .exports: $Exports<'webpack/lib/removeAndDo'>
;
}
declare module 'webpack/lib/RequestShortener.js' {
    declare module .exports: $Exports<'webpack/lib/RequestShortener'>
;
}
declare module 'webpack/lib/RequireJsStuffPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/RequireJsStuffPlugin'>
;
}
declare module 'webpack/lib/RuleSet.js' {
    declare module .exports: $Exports<'webpack/lib/RuleSet'>
;
}
declare module 'webpack/lib/SetVarMainTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/SetVarMainTemplatePlugin'>
;
}
declare module 'webpack/lib/SingleEntryPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/SingleEntryPlugin'>
;
}
declare module 'webpack/lib/SizeFormatHelpers.js' {
    declare module .exports: $Exports<'webpack/lib/SizeFormatHelpers'>
;
}
declare module 'webpack/lib/SourceMapDevToolModuleOptionsPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/SourceMapDevToolModuleOptionsPlugin'>
;
}
declare module 'webpack/lib/SourceMapDevToolPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/SourceMapDevToolPlugin'>
;
}
declare module 'webpack/lib/Stats.js' {
    declare module .exports: $Exports<'webpack/lib/Stats'>
;
}
declare module 'webpack/lib/Template.js' {
    declare module .exports: $Exports<'webpack/lib/Template'>
;
}
declare module 'webpack/lib/TemplatedPathPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/TemplatedPathPlugin'>
;
}
declare module 'webpack/lib/UmdMainTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/UmdMainTemplatePlugin'>
;
}
declare module 'webpack/lib/UnsupportedFeatureWarning.js' {
    declare module .exports: $Exports<'webpack/lib/UnsupportedFeatureWarning'>
;
}
declare module 'webpack/lib/UseStrictPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/UseStrictPlugin'>
;
}
declare module 'webpack/lib/util/identifier.js' {
    declare module .exports: $Exports<'webpack/lib/util/identifier'>
;
}
declare module 'webpack/lib/util/Queue.js' {
    declare module .exports: $Exports<'webpack/lib/util/Queue'>
;
}
declare module 'webpack/lib/util/Semaphore.js' {
    declare module .exports: $Exports<'webpack/lib/util/Semaphore'>
;
}
declare module 'webpack/lib/util/SortableSet.js' {
    declare module .exports: $Exports<'webpack/lib/util/SortableSet'>
;
}
declare module 'webpack/lib/validateSchema.js' {
    declare module .exports: $Exports<'webpack/lib/validateSchema'>
;
}
declare module 'webpack/lib/WarnCaseSensitiveModulesPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/WarnCaseSensitiveModulesPlugin'>
;
}
declare module 'webpack/lib/WatchIgnorePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/WatchIgnorePlugin'>
;
}
declare module 'webpack/lib/web/WebEnvironmentPlugin.js' {
    declare module .exports: $Exports<'webpack/lib/web/WebEnvironmentPlugin'>
;
}
declare module 'webpack/lib/webpack.js' {
    declare module .exports: $Exports<'webpack/lib/webpack'>
;
}
declare module 'webpack/lib/webpack.web.js' {
    declare module .exports: $Exports<'webpack/lib/webpack.web'>
;
}
declare module 'webpack/lib/WebpackError.js' {
    declare module .exports: $Exports<'webpack/lib/WebpackError'>
;
}
declare module 'webpack/lib/WebpackOptionsApply.js' {
    declare module .exports: $Exports<'webpack/lib/WebpackOptionsApply'>
;
}
declare module 'webpack/lib/WebpackOptionsDefaulter.js' {
    declare module .exports: $Exports<'webpack/lib/WebpackOptionsDefaulter'>
;
}
declare module 'webpack/lib/WebpackOptionsValidationError.js' {
    declare module .exports: $Exports<'webpack/lib/WebpackOptionsValidationError'>
;
}
declare module 'webpack/lib/webworker/WebWorkerChunkTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/webworker/WebWorkerChunkTemplatePlugin'>
;
}
declare module 'webpack/lib/webworker/WebWorkerHotUpdateChunkTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/webworker/WebWorkerHotUpdateChunkTemplatePlugin'>
;
}
declare module 'webpack/lib/webworker/WebWorkerMainTemplate.runtime.js' {
    declare module .exports: $Exports<'webpack/lib/webworker/WebWorkerMainTemplate.runtime'>
;
}
declare module 'webpack/lib/webworker/WebWorkerMainTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/webworker/WebWorkerMainTemplatePlugin'>
;
}
declare module 'webpack/lib/webworker/WebWorkerTemplatePlugin.js' {
    declare module .exports: $Exports<'webpack/lib/webworker/WebWorkerTemplatePlugin'>
;
}
declare module 'webpack/schemas/ajv.absolutePath.js' {
    declare module .exports: $Exports<'webpack/schemas/ajv.absolutePath'>
;
}
declare module 'webpack/web_modules/node-libs-browser.js' {
    declare module .exports: $Exports<'webpack/web_modules/node-libs-browser'>
;
}

*/
