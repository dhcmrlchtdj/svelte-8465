import * as svelte from "svelte/compiler"
import * as fs from "node:fs/promises"

main()

function main() {
	compile("./build/dom_external/", { generate: "dom", css: "external" })
	compile("./build/ssr_external/", { generate: "ssr", css: "external" })
	compile("./build/ssr_none/", { generate: "ssr", css: "none" })
}

async function compile(outputDir, svelteOpt) {
	// step1, compile .svelte
	const input = await fs.readFile("./src/index.svelte", "utf8")
	const { js, css } = svelte.compile(input, {
		...svelteOpt,
	})
	await fs.mkdir(outputDir, { recursive: true })
	await fs.writeFile(outputDir + "output.js", js?.code ?? "")
	await fs.writeFile(outputDir + "output.css", css?.code ?? "")

	// step2, generate HTML
	if (svelteOpt.generate === "ssr") {
		const comp = await import(outputDir + "output.js")
		const { html, css } = comp.default.render({})
		await fs.writeFile(outputDir + "step2.html", html ?? "")
		await fs.writeFile(outputDir + "step2.css", css?.code ?? "")
	}
}
