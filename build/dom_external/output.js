/* generated by Svelte v3.58.0 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	src_url_equal,
	toggle_class
} from "svelte/internal";

function create_fragment(ctx) {
	let nav;
	let img;
	let img_src_value;
	let t0;
	let ul;
	let li0;
	let a0;
	let t2;
	let li1;
	let a1;
	let t4;
	let li2;
	let a2;
	let t6;
	let li3;
	let a3;
	let t8;
	let li4;
	let a4;
	let t10;
	let li5;
	let a5;

	return {
		c() {
			nav = element("nav");
			img = element("img");
			t0 = space();
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			a0.textContent = "top";
			t2 = space();
			li1 = element("li");
			a1 = element("a");
			a1.textContent = "new";
			t4 = space();
			li2 = element("li");
			a2 = element("a");
			a2.textContent = "show";
			t6 = space();
			li3 = element("li");
			a3 = element("a");
			a3.textContent = "ask";
			t8 = space();
			li4 = element("li");
			a4 = element("a");
			a4.textContent = "jobs";
			t10 = space();
			li5 = element("li");
			a5 = element("a");
			a5.textContent = "about";
			attr(img, "alt", "Svelte Hacker News logo");
			attr(img, "class", "icon svelte-7jmz2r");
			if (!src_url_equal(img.src, img_src_value = "/favicon.png")) attr(img, "src", img_src_value);
			attr(a0, "href", "/top/1");
			attr(a0, "class", "svelte-7jmz2r");
			toggle_class(a0, "selected", /*section*/ ctx[0] === 'top');
			attr(li0, "class", "svelte-7jmz2r");
			attr(a1, "href", "/new/1");
			attr(a1, "class", "svelte-7jmz2r");
			toggle_class(a1, "selected", /*section*/ ctx[0] === 'new');
			attr(li1, "class", "svelte-7jmz2r");
			attr(a2, "href", "/show/1");
			attr(a2, "class", "svelte-7jmz2r");
			toggle_class(a2, "selected", /*section*/ ctx[0] === 'show');
			attr(li2, "class", "svelte-7jmz2r");
			attr(a3, "href", "/ask/1");
			attr(a3, "class", "svelte-7jmz2r");
			toggle_class(a3, "selected", /*section*/ ctx[0] === 'ask');
			attr(li3, "class", "svelte-7jmz2r");
			attr(a4, "href", "/jobs/1");
			attr(a4, "class", "svelte-7jmz2r");
			toggle_class(a4, "selected", /*section*/ ctx[0] === 'jobs');
			attr(li4, "class", "svelte-7jmz2r");
			attr(a5, "href", "/about");
			attr(a5, "class", "svelte-7jmz2r");
			toggle_class(a5, "selected", /*section*/ ctx[0] === 'about');
			attr(li5, "class", "about svelte-7jmz2r");
			attr(ul, "class", "svelte-7jmz2r");
			attr(nav, "class", "svelte-7jmz2r");
		},
		m(target, anchor) {
			insert(target, nav, anchor);
			append(nav, img);
			append(nav, t0);
			append(nav, ul);
			append(ul, li0);
			append(li0, a0);
			append(ul, t2);
			append(ul, li1);
			append(li1, a1);
			append(ul, t4);
			append(ul, li2);
			append(li2, a2);
			append(ul, t6);
			append(ul, li3);
			append(li3, a3);
			append(ul, t8);
			append(ul, li4);
			append(li4, a4);
			append(ul, t10);
			append(ul, li5);
			append(li5, a5);
		},
		p(ctx, [dirty]) {
			if (dirty & /*section*/ 1) {
				toggle_class(a0, "selected", /*section*/ ctx[0] === 'top');
			}

			if (dirty & /*section*/ 1) {
				toggle_class(a1, "selected", /*section*/ ctx[0] === 'new');
			}

			if (dirty & /*section*/ 1) {
				toggle_class(a2, "selected", /*section*/ ctx[0] === 'show');
			}

			if (dirty & /*section*/ 1) {
				toggle_class(a3, "selected", /*section*/ ctx[0] === 'ask');
			}

			if (dirty & /*section*/ 1) {
				toggle_class(a4, "selected", /*section*/ ctx[0] === 'jobs');
			}

			if (dirty & /*section*/ 1) {
				toggle_class(a5, "selected", /*section*/ ctx[0] === 'about');
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(nav);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { section } = $$props;

	$$self.$$set = $$props => {
		if ('section' in $$props) $$invalidate(0, section = $$props.section);
	};

	return [section];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { section: 0 });
	}
}

export default Component;