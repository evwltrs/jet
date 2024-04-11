<script>
	export let href
</script>

<a
	{href}
	class="group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-bold text-white shadow-2xl"
>
	<span
		class="absolute inset-0 h-full w-full bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100"
	></span>
	<!-- Top glass gradient -->
	<span
		class="absolute left-0 top-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent opacity-5"
	></span>
	<!-- Bottom gradient -->
	<span
		class="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent opacity-5"
	></span>
	<!-- Left gradient -->
	<span
		class="absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white to-transparent opacity-5"
	></span>
	<!-- Right gradient -->
	<span
		class="absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white to-transparent opacity-5"
	></span>
	<span class="absolute inset-0 h-full w-full rounded-md border border-white opacity-10"></span>
	<span
		class="absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"
	></span>
	<span class="relative"><slot /></span>
</a>
