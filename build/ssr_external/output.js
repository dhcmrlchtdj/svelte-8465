/* generated by Svelte v3.58.0 */
import { create_ssr_component } from "svelte/internal";

const css = {
	code: "nav.svelte-7jmz2r{border-bottom:1px solid #ff6600;color:var(--fg-light);font-weight:300;padding:0 1em}.icon.svelte-7jmz2r{display:block;width:1em;height:1em;float:left;font-size:2em;position:relative;top:0.4em;box-sizing:border-box;margin:0 0.5em 0 0}ul.svelte-7jmz2r{margin:0;padding:0}ul.svelte-7jmz2r::after{content:'';display:block;clear:both}li.svelte-7jmz2r{display:block;float:left}.about.svelte-7jmz2r{float:right}.selected.svelte-7jmz2r{position:relative;display:inline-block;color:var(--fg)}.selected.svelte-7jmz2r::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:#ff6600;display:block;bottom:0}a.svelte-7jmz2r{color:inherit;text-decoration:none;padding:1em 0.5em;display:block;font-weight:500}@media(min-width: 400px){.icon.svelte-7jmz2r{margin:0 0.5em 0 0}li.svelte-7jmz2r{display:inline-block}}",
	map: "{\"version\":3,\"sources\":[\"\"],\"sourcesContent\":[\"<script>\\n\\t// copy from https://github.com/sveltejs/sites/blob/master/sites/hn.svelte.dev/src/lib/Nav.svelte\\n\\texport let section;\\n</script>\\n\\n<nav>\\n\\t<img alt=\\\"Svelte Hacker News logo\\\" class=\\\"icon\\\" src=\\\"/favicon.png\\\" />\\n\\n\\t<ul>\\n\\t\\t<li><a href=\\\"/top/1\\\" class:selected={section === 'top'}>top</a></li>\\n\\t\\t<li><a href=\\\"/new/1\\\" class:selected={section === 'new'}>new</a></li>\\n\\t\\t<li><a href=\\\"/show/1\\\" class:selected={section === 'show'}>show</a></li>\\n\\t\\t<li><a href=\\\"/ask/1\\\" class:selected={section === 'ask'}>ask</a></li>\\n\\t\\t<li><a href=\\\"/jobs/1\\\" class:selected={section === 'jobs'}>jobs</a></li>\\n\\n\\t\\t<li class=\\\"about\\\">\\n\\t\\t\\t<a href=\\\"/about\\\" class:selected={section === 'about'}>about</a>\\n\\t\\t</li>\\n\\t</ul>\\n</nav>\\n\\n<style>\\n\\tnav {\\n\\t\\t/* background-color: rgba(255, 102, 0, 0.05); */\\n\\t\\tborder-bottom: 1px solid #ff6600;\\n\\t\\tcolor: var(--fg-light);\\n\\t\\tfont-weight: 300;\\n\\t\\tpadding: 0 1em;\\n\\t}\\n\\n\\t.icon {\\n\\t\\tdisplay: block;\\n\\t\\twidth: 1em;\\n\\t\\theight: 1em;\\n\\t\\tfloat: left;\\n\\t\\tfont-size: 2em;\\n\\t\\tposition: relative;\\n\\t\\ttop: 0.4em;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tmargin: 0 0.5em 0 0;\\n\\t}\\n\\n\\tul {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\tul::after {\\n\\t\\tcontent: '';\\n\\t\\tdisplay: block;\\n\\t\\tclear: both;\\n\\t}\\n\\n\\tli {\\n\\t\\tdisplay: block;\\n\\t\\tfloat: left;\\n\\t}\\n\\n\\t.about {\\n\\t\\tfloat: right;\\n\\t}\\n\\n\\t.selected {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t\\tcolor: var(--fg);\\n\\t}\\n\\n\\t.selected::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color: #ff6600;\\n\\t\\tdisplay: block;\\n\\t\\tbottom: 0;\\n\\t}\\n\\n\\ta {\\n\\t\\tcolor: inherit;\\n\\t\\ttext-decoration: none;\\n\\t\\tpadding: 1em 0.5em;\\n\\t\\tdisplay: block;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t@media (min-width: 400px) {\\n\\t\\t.icon {\\n\\t\\t\\tmargin: 0 0.5em 0 0;\\n\\t\\t}\\n\\n\\t\\tli {\\n\\t\\t\\tdisplay: inline-block;\\n\\t\\t}\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAsBC,iBAAI,CAEH,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAChC,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,GACZ,CAEA,mBAAM,CACL,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,GAAG,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,CACV,UAAU,CAAE,UAAU,CACtB,MAAM,CAAE,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CACnB,CAEA,gBAAG,CACF,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACV,CAEA,gBAAE,OAAQ,CACT,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IACR,CAEA,gBAAG,CACF,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IACR,CAEA,oBAAO,CACN,KAAK,CAAE,KACR,CAEA,uBAAU,CACT,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,IAAI,IAAI,CAChB,CAEA,uBAAS,OAAQ,CAChB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,CACT,CAEA,eAAE,CACD,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,GACd,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,mBAAM,CACL,MAAM,CAAE,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CACnB,CAEA,gBAAG,CACF,OAAO,CAAE,YACV,CACD\"}"
};

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { section } = $$props;
	if ($$props.section === void 0 && $$bindings.section && section !== void 0) $$bindings.section(section);
	$$result.css.add(css);

	return `<nav class="svelte-7jmz2r"><img alt="Svelte Hacker News logo" class="icon svelte-7jmz2r" src="/favicon.png">

	<ul class="svelte-7jmz2r"><li class="svelte-7jmz2r"><a href="/top/1" class="${["svelte-7jmz2r", section === 'top' ? "selected" : ""].join(' ').trim()}">top</a></li>
		<li class="svelte-7jmz2r"><a href="/new/1" class="${["svelte-7jmz2r", section === 'new' ? "selected" : ""].join(' ').trim()}">new</a></li>
		<li class="svelte-7jmz2r"><a href="/show/1" class="${["svelte-7jmz2r", section === 'show' ? "selected" : ""].join(' ').trim()}">show</a></li>
		<li class="svelte-7jmz2r"><a href="/ask/1" class="${["svelte-7jmz2r", section === 'ask' ? "selected" : ""].join(' ').trim()}">ask</a></li>
		<li class="svelte-7jmz2r"><a href="/jobs/1" class="${["svelte-7jmz2r", section === 'jobs' ? "selected" : ""].join(' ').trim()}">jobs</a></li>

		<li class="about svelte-7jmz2r"><a href="/about" class="${["svelte-7jmz2r", section === 'about' ? "selected" : ""].join(' ').trim()}">about</a></li></ul>
</nav>`;
});

export default Component;