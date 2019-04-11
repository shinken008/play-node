
const path = require("path")
const ts = require("typescript")

function runTypeScriptBuild(outDir, target, declarations) {
  console.log(`Running typescript build (target: ${ts.ScriptTarget[target]}) in ${outDir}/`)

  const tsConfig = path.resolve("tsconfig.json")
  const json = ts.parseConfigFileTextToJson(tsConfig, ts.sys.readFile(tsConfig), true)

  const { options } = ts.parseJsonConfigFileContent(json.config, ts.sys, path.dirname(tsConfig))

  options.target = target
  options.outDir = outDir
  options.declaration = declarations

  options.module = ts.ModuleKind.ES2015
  options.importHelpers = true
  options.noEmitHelpers = true
  if (declarations) options.declarationDir = path.resolve(".", ".build.es6")

  const rootFile = path.resolve(".src/", "store.ts")
  const host = ts.createCompilerHost(options, true)
  const prog = ts.createProgram([rootFile], options, host)
  const result = prog.emit()
  if (result.emitSkipped) {
    const message = result.diagnostics
      .map(
        d =>
          `${ts.DiagnosticCategory[d.category]} ${d.code} (${d.file}:${d.start}): ${
          d.messageText
          }`
      )
      .join("\n")

    throw new Error(`Failed to compile typescript:\n\n${message}`)
  }
}

runTypeScriptBuild(".build.es6", ts.ScriptTarget.ES2015, true)