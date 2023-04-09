/* generated by Svelte v3.58.0 */
import { add_classes, create_ssr_component } from "svelte/internal";

const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { section } = $$props;
	if ($$props.section === void 0 && $$bindings.section && section !== void 0) $$bindings.section(section);

	return `<nav><img alt="Svelte Hacker News logo" class="icon" src="/favicon.png">

	<ul><li><a href="/top/1"${add_classes((section === 'top' ? "selected" : "").trim())}>top</a></li>
		<li><a href="/new/1"${add_classes((section === 'new' ? "selected" : "").trim())}>new</a></li>
		<li><a href="/show/1"${add_classes((section === 'show' ? "selected" : "").trim())}>show</a></li>
		<li><a href="/ask/1"${add_classes((section === 'ask' ? "selected" : "").trim())}>ask</a></li>
		<li><a href="/jobs/1"${add_classes((section === 'jobs' ? "selected" : "").trim())}>jobs</a></li>

		<li class="about"><a href="/about"${add_classes((section === 'about' ? "selected" : "").trim())}>about</a></li></ul>
</nav>`;
});

export default Component;